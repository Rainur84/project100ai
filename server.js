import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';

const app = express();
const port = 3001;

app.use(cors());

const parser = new Parser({
  customFields: {
    item: ['enclosure', ['media:content', 'url']],
  },
});

const sources = [
  {
    url: 'https://news.mit.edu/rss/topic/artificial-intelligence2',
    name: 'MIT',
  },
  {
    url: 'https://spectrum.ieee.org/rss/fulltext',
    name: 'IEEE',
  },
  {
    url: 'https://www.technologyreview.com/feed/',
    name: 'MIT Tech Review',
  },
  {
    url: 'https://techcrunch.com/tag/artificial-intelligence/feed/',
    name: 'TechCrunch',
  },
  {
    url: 'https://openai.com/blog/rss.xml',
    name: 'OpenAI',
  },
];

let cachedNews = [];
let lastFetchTime = 0;
const CACHE_DURATION = 15 * 60 * 1000; // 15 минут

const fetchAllFeeds = async () => {
  const allItems = [];

  for (const source of sources) {
    try {
      const feed = await parser.parseURL(source.url);
      const items = feed.items.map((item) => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate || item.isoDate || '',
        source: source.name,
        image:
          item.enclosure?.url ||
          item['media:content']?.url ||
          null,
      }));
      allItems.push(...items);
    } catch (error) {
      console.error(`Error fetching ${source.name}:`, error.message);
    }
  }

  // Сортировка по дате (от новых к старым)
  return allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
};

app.get('/api/news', async (req, res) => {
  const now = Date.now();

  if (now - lastFetchTime > CACHE_DURATION || cachedNews.length === 0) {
    console.log('Fetching fresh RSS feeds...');
    cachedNews = await fetchAllFeeds();
    lastFetchTime = now;
  } else {
    console.log('Serving cached news.');
  }

  res.json(cachedNews);
});

app.listen(port, () => {
  console.log(`RSS server listening at http://localhost:${port}`);
});