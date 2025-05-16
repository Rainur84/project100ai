import Parser from 'rss-parser';

type RawModel = {
  title: string;
  link: string;
  contentSnippet?: string;
  pubDate?: string;
  isoDate?: string;
};

const parser = new Parser();

const RSS_FEEDS = [
  'https://www.wired.com/feed/category/artificial-intelligence/latest/rss',
  'http://news.mit.edu/topic/artificial-intelligence2.rss',
  'https://www.aitrends.com/feed/',
  'https://www.artificial-intelligence.blog/feed',
  'https://www.unite.ai/feed/',
];

export async function fetchNewModels(): Promise<RawModel[]> {
  const models: RawModel[] = [];

  for (const url of RSS_FEEDS) {
    try {
      const feed = await parser.parseURL(url);
      for (const item of feed.items || []) {
        const isNew = isRecent(item.isoDate);
        const hasAIModel = /ai|tool|generator|assistant/i.test(item.title || '');

        if (isNew && hasAIModel) {
          models.push({
            title: item.title || '',
            link: item.link || '',
            contentSnippet: item.contentSnippet,
            pubDate: item.pubDate,
            isoDate: item.isoDate,
          });
        }
      }
    } catch (error) {
      console.error(`❌ Ошибка при загрузке ${url}:`, error.message || error);
    }
  }

  return models;
}

function isRecent(isoDate?: string) {
  if (!isoDate) return false;
  const daysAgo = 7;
  const published = new Date(isoDate);
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - daysAgo);
  return published > cutoff;
}