import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';

const app = express();
const port = 3001;
const parser = new Parser();

app.use(cors());

const feeds = [
  { title: 'OpenAI', url: 'https://openai.com/blog/rss.xml' },
  { title: 'DeepMind', url: 'https://www.deepmind.com/blog/rss.xml' },
  { title: 'Hugging Face', url: 'https://huggingface.co/blog/rss.xml' }
];

app.get('/api/news', async (req, res) => {
  try {
    const allItems = [];

    for (const feed of feeds) {
      const parsed = await parser.parseURL(feed.url);
      const items = parsed.items.map(item => ({
        source: feed.title,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        contentSnippet: item.contentSnippet || item.content || ''
      }));
      allItems.push(...items);
    }

    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
    res.json(allItems);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});

app.listen(port, () => {
  console.log(`✅ News API server running at http://localhost:${port}`);
});