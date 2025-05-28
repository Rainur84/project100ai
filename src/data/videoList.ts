// src/data/videoList.ts

export interface VideoItem {
  id: string;
  title: string;
  url: string;
  description: string;
}

export const videoList: VideoItem[] = [
  {
    id: '1',
    title: 'Top 5 AI Tools You Must Try',
    url: 'https://www.youtube.com/embed/WbTxnIUS7tw',
    description: 'Top 3 AI Tools for Business Owners.',
  },
  {
    id: '2',
    title: 'How to Use ChatGPT Like a Pro',
    url: 'https://www.youtube.com/embed/OYH2RpmUQgs',
    description: 'Top 3 AI Tools for Designers.',
  },
  {
    id: '3',
    title: 'AI in 2025: What’s Coming Next',
    url: 'https://www.youtube.com/embed/VIDEO_ID_3',
    description: 'A look at the future of AI and upcoming innovations.',
  },
];