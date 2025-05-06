import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Summarize from "./pages/Summarize";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* 공통 네비게이션 */}
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold text-blue-700">🧠 News Summarizer</h1>
        <div className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/summarize" className="text-blue-600 hover:underline">Summarize</Link>
        </div>
      </nav>

      {/* 라우터에 따라 페이지 바뀜 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summarize" element={<Summarize />} />
      </Routes>
    </div>
  );
}
