export default function Home() {
    return (
      <div className="max-w-2xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to News Summarizer 🧠</h2>
        <p className="text-gray-700">
          This is a lightweight AI-powered tool that summarizes Korean news articles and analyzes their sentiment.
          <br />
          Paste a link or full article text to get started.
        </p>
  
        <ul className="text-left mt-6 list-disc list-inside text-gray-600">
          <li>🔗 Summarize from a news article URL</li>
          <li>📝 Summarize pasted full text</li>
          <li>🧠 Get sentiment analysis along with the summary</li>
        </ul>
  
        <div className="mt-8">
          <a
            href="/summarize"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Try it now →
          </a>
        </div>
      </div>
    );
  }
  