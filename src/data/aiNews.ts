export interface AINewsItem {
  id: string;
  title: string;
  date: string;
  type: 'release' | 'trend' | 'update';
  content: string;
  link?: string;
}

export const aiNews: AINewsItem[] = [
  {
    id: '1',
    title: 'GPT-5 expected release',
    date: '2025-06-20',
    type: 'release',
    content: 'OpenAI is rumored to release GPT-5 in June 2025, focusing on long-context and multimodal understanding.',
    link: 'https://openai.com/blog/gpt-5-announcement'
  },
  {
    id: '2',
    title: '🔥 Trend: Multimodal models booming',
    date: '2025-05-01',
    type: 'trend',
    content: 'This month, multimodal models that handle both text and images (like Gemini and GPT-4o) are gaining massive popularity.'
  },
  {
    id: '3',
    title: 'Claude 3.5 early testing',
    date: '2025-05-08',
    type: 'update',
    content: 'Anthropic begins early testing of Claude 3.5 with improvements in reasoning and safety.'
  }
];