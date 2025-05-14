// server.js
import express from 'express';
import cors from 'cors';
import Parser from 'rss-parser';

const app = express();
const port = 3001;
const parser = new Parser();

app.use(cors());

const feeds = [
  {
    url: 'https://spectrum.ieee.org/rss/ai/fulltext',
    source: 'IEEE Spectrum'
  },
  {
    url: 'https://www.technologyreview.com/feed/',
    source: 'MIT Technology Review'
  },
  {
    url: 'https://www.artificialintelligence-news.com/feed/',
    source: 'AI News'
  },
  {
    url: 'https://venturebeat.com/category/ai/feed/',
    source: 'VentureBeat'
  },
  {
    url: 'https://feeds.feedburner.com/thenextweb/Insider',
    source: 'The Next Web'
  }
];

app.get('/api/news', async (req, res) => {
  try {
    const allItems = [];

    for (const feed of feeds) {
      try {
        const parsedFeed = await parser.parseURL(feed.url);
        const items = parsedFeed.items.map(item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          source: feed.source,
          contentSnippet: item.contentSnippet || '',
        }));
        allItems.push(...items);
      } catch (err) {
        console.error(`Error fetching ${feed.url}:`, err.message);
      }
    }

    allItems.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

    res.json(allItems);
  } catch (error) {
    console.error('Error fetching RSS feeds:', error);
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});