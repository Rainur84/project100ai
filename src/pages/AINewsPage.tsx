import React from 'react';
import { aiNews } from '../data/aiNews';
import AINewsCard from '../components/AINewsCard';

const AINewsPage: React.FC = () => {
  const sortedNews = [...aiNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="py-24 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">📅 AI News & Releases</h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto mb-12">
          Stay up to date with the latest AI trends, model releases, and technology updates.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedNews.map(item => (
            <AINewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AINewsPage;