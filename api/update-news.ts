import type { VercelRequest, VercelResponse } from '@vercel/node';
import Parser from 'rss-parser';
import fs from 'fs/promises';
import path from 'path';

const parser = new Parser();

const sources = [
  { name: 'VentureBeat AI', url: 'https://venturebeat.com/category/ai/feed/' },
  { name: 'MIT Technology Review AI', url: 'https://www.technologyreview.com/feed/' },
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
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

    const filePath = path.join(process.cwd(), 'public', 'news.json');
    await fs.writeFile(filePath, JSON.stringify(sorted, null, 2), 'utf-8');

    res.status(200).json({ message: 'News updated successfully', count: sorted.length });
  } catch (error) {
    console.error('Error updating news:', error);
    res.status(500).json({ error: 'Failed to update news' });
  }
}