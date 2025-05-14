// scripts/update-news.ts
import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ESM workaround
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parser = new Parser();

const sources = [
  { name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/' },
  { name: 'MIT Technology Review AI', url: 'https://www.technologyreview.com/feed/' },
];

async function fetchAndSaveNews() {
  try {
    const allNews = [];

    for (const source of sources) {
      const feed = await parser.parseURL(source.url);
      const items = feed.items?.slice(0, 5).map((item) => ({
        source: source.name,
        title: item.title || '',
        link: item.link || '',
        date: item.pubDate || '',
        content: item.contentSnippet || '',
      })) || [];

      allNews.push(...items);
    }

    const sorted = allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const filePath = path.join(__dirname, '../public/news.json');
    await fs.writeFile(filePath, JSON.stringify(sorted, null, 2), 'utf-8');

    console.log(`✅ News updated. Total items: ${sorted.length}`);
  } catch (error) {
    console.error('❌ Failed to update news:', error);
  }
}

fetchAndSaveNews();