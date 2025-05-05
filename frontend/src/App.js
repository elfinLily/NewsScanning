import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // 결과 color
  const sentimentColor = {
    positive: "text-green-600",
    '긍정적': "text-green-600",
    neutral: "text-gray-600",
    '중립적': "text-gray-600",
    negative: "text-red-600",
    '부정적': "text-red-600",
  };

  // 결과 이모지
  const sentimentEmoji = {
    positive: "😊",
    neutral: "😐",
    negative: "😡",
    '긍정적': "😊",
    '중립적': "😐",
    '부정적': "😡",
  };

  const handleAnalyze = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResult(null);

    try {
      // open api 호출
      const response = await axios.post("http://localhost:8000/analyze", {
        text: input,
      });

      setResult(response.data);

    } catch (err) {
      console.error("분석 실패:", err);

      alert("분석 중 오류가 발생했어요 😢");
      
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center px-4 py-10">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">🧠 뉴스 요약 & 감정 분석</h1>

        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none mb-4 bg-white"
          placeholder="분석할 뉴스 내용을 입력하세요..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-200 shadow"
        >
          {loading ? "분석 중..." : "분석하기"}
        </button>

        {result && (
          <div className="mt-8 space-y-6 animate-fadeIn">
            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-2">📄 요약</h2>
              <p className="text-gray-700 leading-relaxed">{result.summary}</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">💬 감정 분석</h2>
                <p className={`text-lg font-semibold ${sentimentColor[result.sentiment]}`}>
                  {result.sentiment.toUpperCase()}
                </p>
              </div>
              <div className="text-3xl">
              {sentimentEmoji[result.sentiment] ?? "❓"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;