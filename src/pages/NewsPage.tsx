// src/pages/NewsPage.tsx
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface NewsItem {
  title: string;
  link: string;
  date: string;
  content: string;
  source: string;
}

const NewsPage: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/news.json')
      .then((res) => res.json())
      .then((data: NewsItem[]) => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🧠 AI News</h1>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
        </div>
      ) : (
        <div className="grid gap-6">
          {news.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-md shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-1">{item.content}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
                <span>{new Date(item.date).toLocaleDateString()}</span>
                <span className="italic">{item.source}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsPage;