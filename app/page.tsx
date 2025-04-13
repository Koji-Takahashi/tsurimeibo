"use client";

import { Amplify } from "aws-amplify";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import outputs from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createUser } from "./mutations";

Amplify.configure(outputs);

function UserCard() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [name, setName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const fetchUserAttributes = async () => {
      try {
        const user = await getCurrentUser();
        const session = await fetchAuthSession();

        console.log("✅ current user from Auth:", user);

        const nameAttr =
          (session as any)?.tokens?.idToken?.payload?.name ||
          (session as any)?.tokens?.idToken?.payload?.email ||
          (user as any)?.signInDetails?.loginId ||
          "";
        const userId = user.username;
        const email = (session as any)?.tokens?.idToken?.payload?.email ?? "";

        setName(nameAttr);
        setUserId(userId);

        console.log("✅ setName:", nameAttr);
        console.log("✅ setUserId:", userId);

        const client = generateClient();

        try {
          await client.graphql({
            query: createUser,
            variables: {
              input: {
                id: userId,
                userName: nameAttr,
                email: email,
              },
            },
          });
          console.log("✅ User モデルに保存完了");
        } catch (err) {
          console.warn("⚠️ Userモデルの保存に失敗しました（重複の可能性あり）", err);
        }
      } catch (err) {
        console.error("❌ ユーザー属性の取得に失敗しました", err);
      }
    };

    fetchUserAttributes();
  }, []);

  return (
    <main style={{ padding: 30, textAlign: "center" }}>
      <h2>{name} さんのデジタル会員証</h2>
      <div style={{ display: "flex", justifyContent: "center", margin: "1rem auto" }}>
        <QRCodeCanvas value={userId} size={200} />
      </div>
      <p>※船長にこのQRコードを提示してください</p>
      <button onClick={signOut}>ログアウト</button>
    </main>
  );
}

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <UserCard />
      </Authenticator>
    </Authenticator.Provider>
  );
}