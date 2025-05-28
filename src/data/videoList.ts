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
    title: 'Top 3 AI Tools You Must Try',
    url: 'https://www.youtube.com/embed/WbTxnIUS7tw',
    description: 'Top 3 AI Tools for Business Owners.',
  },
  {
    id: '2',
    title: 'AI Tools for Designers',
    url: 'https://www.youtube.com/embed/OYH2RpmUQgs',
    description: 'Top 3 AI Tools for Designers.',
  },
  {
    id: '3',
    title: 'AI in 2025: What’s Coming Next',
    url: 'https://www.youtube.com/embed/MJjGCfR1omE',
    description: 'Top 3 AI Tools in 2025 You Must Try (part 2).',
  },
  {
    id: '4',
    title: 'You Need in 2025',
    url: 'https://www.youtube.com/embed/I30mkhn0EYs',
    description: 'Top 3 Free AI Tools You Need in 2025.',
  },
];