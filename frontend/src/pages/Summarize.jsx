import { useState } from "react";
import axios from "axios";

export default function Summarize() {
  const [activeTab, setActiveTab] = useState("link");
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const summarize = async () => {
    if (!input) return;
    setLoading(true);
    setError("");
    setResult(null);
    const endpoint =
      activeTab === "link"
        ? "http://localhost:8000/summarize_url"
        : "http://localhost:8000/analyze";

    try {
      const res = await axios.post(endpoint, { text: input });
      setResult(res.data);
    } catch (err) {
      setError(err?.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const sentimentEmoji = {
    '긍정적': "😊",
    '부정적': "😡",
    '중립적': "😐",
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* Tabs */}
      <div className="flex mb-6 border-b">
        <button
          onClick={() => setActiveTab("link")}
          className={`px-4 py-2 font-medium border-b-2 ${
            activeTab === "link"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-blue-600"
          }`}
        >
          🔗 Summarize by Link
        </button>
        <button
          onClick={() => setActiveTab("text")}
          className={`px-4 py-2 font-medium border-b-2 ${
            activeTab === "text"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-blue-600"
          }`}
        >
          📝 Summarize by Pasted Text
        </button>
      </div>

      {/* Input */}
      <textarea
        className="w-full p-3 border rounded resize-none h-32"
        placeholder={
          activeTab === "link"
            ? "Paste a news article URL..."
            : "Paste full news article text here..."
        }
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={summarize}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {/* Error */}
      {error && <div className="mt-4 text-red-500">{error}</div>}

      {/* Result */}
      {result && (
        <div className="mt-6 p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold mb-2">🧠 Summary</h2>
          <p className="text-gray-800 whitespace-pre-wrap mb-4">
            {result.summary}
          </p>
          <div>
            <strong>Sentiment:</strong>{" "}
            {result.sentiment} {sentimentEmoji[result.sentiment] || ""}
          </div>
        </div>
      )}
    </div>
  );
}
