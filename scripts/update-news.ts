import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';

// Тип новости
interface NewsItem {
  source: string;
  title: string;
  link: string;
  date: string;
  content: string;
}

const parser = new Parser();

const sources = [
  { name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/' },
  { name: 'MIT Technology Review AI', url: 'https://www.technologyreview.com/feed/' },
];

async function updateNews(): Promise<NewsItem[]> {
  const allNews: NewsItem[] = [];

  for (const source of sources) {
    const feed = await parser.parseURL(source.url);
    const items: NewsItem[] = feed.items?.slice(0, 5).map((item) => ({
      source: source.name,
      title: item.title || '',
      link: item.link || '',
      date: item.pubDate || '',
      content: item.contentSnippet || '',
    })) || [];

    allNews.push(...items);
  }

  const sorted = allNews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return sorted;
}

(async () => {
  try {
    const sorted = await updateNews();
    const filePath = path.join(process.cwd(), 'public', 'news.json');
    await fs.writeFile(filePath, JSON.stringify(sorted, null, 2), 'utf-8');
    console.log('✅ News updated. Total items:', sorted.length);
  } catch (error) {
    console.error('❌ Error updating news:', error);
  }
})();