"use client";

import { useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import awsExports from "../../aws-exports";
import { createScanRecord } from "../mutations";

Amplify.configure(awsExports);

const client = generateClient();

export default function ScanPage() {
  const [result, setResult] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const [scanning, setScanning] = useState<boolean>(false);
  const readerId = "reader";
  const qrCodeScannerRef = useRef<Html5Qrcode | null>(null);

  const startScanner = () => {
    setScanning(true);
    const scanner = new Html5Qrcode(readerId);
    qrCodeScannerRef.current = scanner;

    scanner
      .start(
        { facingMode: "environment" },
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        async (decodedText) => {
          setResult(decodedText);
          setStatus("読み取り成功！保存中...");

          let userName = "";
          let email = "";

          try {
            const userResult = await client.graphql({
              query: /* GraphQL */ `
                query GetUser($id: ID!) {
                  getUser(id: $id) {
                    userName
                    email
                  }
                }
              `,
              variables: { id: decodedText },
            });

            if ("data" in userResult && userResult.data?.getUser) {
              userName = userResult.data.getUser.userName || "";
              email = userResult.data.getUser.email || "";
            }
          } catch (err) {
            console.warn("ユーザー情報の取得に失敗しました", err);
          }

          const record = {
            userId: decodedText,
            userName,
            email,
            timestamp: new Date().toISOString(),
            memo: "QR読み取り記録",
          };

          try {
            const response = await client.graphql({
              query: createScanRecord,
              variables: {
                input: record,
              },
            });
            console.log("保存成功:", response);
            setStatus("✅ データ保存が完了しました");
          } catch (err) {
            console.error("保存失敗:", err);
            setStatus("❌ データ保存に失敗しました");
          }

          scanner.stop().then(() => {
            setScanning(false);
          });
        },
        (errorMessage) => {
          console.warn("QRコード読み取りエラー:", errorMessage);
        }
      )
      .catch((err) => {
        console.error("カメラの起動に失敗しました:", err);
        setScanning(false);
      });
  };

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
        
      <h2>【船長用】QRコード読み取り</h2>
      <p>お客様のデジタル会員証を読み取ってください</p>

      {!scanning && !result && (
        <button onClick={startScanner}>スキャンを開始する</button>
      )}

      <div id={readerId} style={{ margin: "1rem auto", width: "100%", maxWidth: 400 }} />

      {result && (
        <div style={{ marginTop: "1rem" }}>
          <h3>読み取り結果：</h3>
          <p>{result}</p>
          <p>{status}</p>
        </div>
      )}
    </main>
  );
}
