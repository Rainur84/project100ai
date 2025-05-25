import { writeFileSync } from 'fs';
import path from 'path';
import RSS from 'rss';
import { aiNews } from '../src/data/aiNews';

const siteUrl = 'https://neurobox.site';

const feed = new RSS({
  title: 'AI News — NeuroBox',
  description: 'Latest AI news from OpenAI, Google, and more.',
  feed_url: `${siteUrl}/ai-news.xml`,
  site_url: siteUrl,
  language: 'en',
  pubDate: new Date().toUTCString(),
  ttl: 60
});

aiNews.forEach((item) => {
  feed.item({
    title: item.title,
    url: item.link,
    guid: item.link,
    date: item.pubDate,
    description: `${item.source} • ${item.pubDate}`
  });
});

const rssOutputPath = path.join('public', 'ai-news.xml');
writeFileSync(rssOutputPath, feed.xml({ indent: true }), 'utf8');

console.log(`✅ RSS feed generated at ${rssOutputPath}`);