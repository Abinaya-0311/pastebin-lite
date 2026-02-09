"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function PastePage() {
  const params = useParams();
  const id = params.id as string;

  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    if (!id) return;

    fetch(`/api/paste/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.content) {
          setContent(data.content);
        } else {
          setContent("Paste not found or expired.");
        }
      })
      .catch(() => setContent("Error loading paste"));
  }, [id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white w-full max-w-2xl rounded shadow p-6">
        <h1 className="text-xl font-bold mb-4">
          Paste ID: {id}
        </h1>

        <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded border">
          {content}
        </pre>
      </div>
    </div>
  );
}
