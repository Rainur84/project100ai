// src/pages/NewsFeedPage.tsx
import React from 'react';
import { aiNews } from '../data/aiNews';
import AINewsCard from '../components/AINewsCard';

const NewsFeedPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🧠 AI News</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aiNews.map((item, idx) => (
          <AINewsCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeedPage;