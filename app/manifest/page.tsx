"use client";

import { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import { generateClient } from "aws-amplify/api";
import { listScanRecords } from "../queries";

Amplify.configure(awsExports);
const client = generateClient();

export default function ManifestPage() {
  const [records, setRecords] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const result = await client.graphql({
          query: listScanRecords,
        });
        if ("data" in result && result.data?.listScanRecords?.items) {
          setRecords(result.data.listScanRecords.items);
        }
      } catch (error) {
        console.error("🚨 乗船名簿の取得に失敗:", error);
      }
    };

    fetchRecords();
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h2>🚢 乗船名簿一覧</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={thStyle}>ユーザーID</th>
            <th style={thStyle}>ユーザー名</th>
            <th style={thStyle}>メールアドレス</th>
            <th style={thStyle}>日時</th>
            <th style={thStyle}>メモ</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td style={tdStyle}>{record.userId}</td>
              <td style={tdStyle}>{record.userName || ""}</td>
              <td style={tdStyle}>{record.email || ""}</td>
              <td style={tdStyle}>{new Date(record.timestamp).toLocaleString()}</td>
              <td style={tdStyle}>{record.memo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "0.5rem",
  backgroundColor: "#f0f0f0",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "0.5rem",
};
