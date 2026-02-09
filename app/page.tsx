"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();

  async function createPaste() {
    const res = await fetch("/api/paste", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: text }),
    });

    const data = await res.json();
    router.push(`/paste/${data.id}`);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Pastebin Lite</h1>
      <p>My take-home assignment</p>

      <textarea
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        cols={50}
      />

      <br />

      <button onClick={createPaste} style={{ marginTop: 10 }}>
        Create Paste
      </button>
    </div>
  );
}
