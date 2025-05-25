import React from 'react';
import { Loader2 } from 'lucide-react';
import { aiNews } from '../data/aiNews';

const NewsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🧠 AI News</h1>
      {aiNews.length === 0 ? (
        <div className="flex justify-center items-center h-40">
          <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
        </div>
      ) : (
        <div className="grid gap-6">
          {aiNews.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-md shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-1">{item.source}</p>
              <div className="text-sm text-gray-500 dark:text-gray-400 flex justify-between items-center">
                <span>{new Date(item.pubDate).toLocaleDateString()}</span>
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