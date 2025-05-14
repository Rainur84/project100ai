import { useEffect, useState } from 'react';

type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  image?: string | null;
};

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/api/news')
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">AI News</h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden border border-gray-100"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <div className="text-sm text-gray-500 flex justify-between">
                  <span>{item.source}</span>
                  <span>{new Date(item.pubDate).toLocaleDateString()}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}