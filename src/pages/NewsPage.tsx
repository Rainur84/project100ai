import React from 'react';

const NewsPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">AI News</h1>
      <p className="text-gray-700 dark:text-gray-300 text-lg text-center">
        Here you'll find the latest updates, trends, and breakthroughs in the world of Artificial Intelligence. Stay tuned!
      </p>

      {/* Демо-блок новостей — можно позже подключить CMS или API */}
      <div className="mt-10 space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">💡 OpenAI releases GPT-5 teaser</h2>
          <p className="text-gray-600 dark:text-gray-300">OpenAI has announced preliminary details of GPT-5, expected to launch in late 2025 with enhanced multimodal capabilities and long-context understanding.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">🎨 Midjourney V7 rumored to support video generation</h2>
          <p className="text-gray-600 dark:text-gray-300">Speculations suggest Midjourney will introduce video generation in its upcoming release, bringing it closer to Sora and Runway.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;