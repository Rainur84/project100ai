import React from 'react';
import { CalendarDays, Flame, Rocket } from 'lucide-react';
import { aiNews } from '../data/aiNews';

type AINewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
};

const getIcon = (item: AINewsItem) => {
  if (item.source.includes('OpenAI')) {
    return <Rocket className="text-blue-600" size={20} />;
  }
  if (item.source.includes('Keyword')) {
    return <Flame className="text-red-500" size={20} />;
  }
  return <CalendarDays className="text-yellow-500" size={20} />;
};

const AINewsCard: React.FC<{ item: AINewsItem }> = ({ item }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-2">
        {getIcon(item)}
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(item.pubDate).toLocaleDateString()}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{item.source}</p>
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
        >
          Read more
        </a>
      )}
    </div>
  );
};

export default AINewsCard;