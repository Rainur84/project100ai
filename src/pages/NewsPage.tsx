import React, { useEffect, useState } from 'react';

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  source: string;
}

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/news')
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching news:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">📰 AI News</h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg text-center mb-10">
        Discover the latest breakthroughs and updates from the world of Artificial Intelligence.
      </p>

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400">Loading news...</p>
      ) : news.length === 0 ? (
        <p className="text-center text-red-500">No news available.</p>
      ) : (
        <div className="space-y-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <h2 className="text-xl font-semibold mb-1 hover:underline">{item.title}</h2>
              </a>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{item.contentSnippet}</p>
              <div className="text-sm text-gray-400">
                🕒 {new Date(item.pubDate).toLocaleString()} | 📌 {item.source}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;