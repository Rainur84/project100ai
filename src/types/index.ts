export interface AIModel {
  id: string;
  name: string;
  category: string;
  description: string;
  capabilities: string[];
  releaseDate: string;
  company: string;
  imageUrl: string;
  featured: boolean;
  githubUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  usage?: string;
  howToUse?: string; // ✅ Добавлено поле с описанием пошагового использования
  accessType?: 'Free' | 'Paid' | 'Partially Free' | 'Not Yet Public'; // ✅ Тип доступа
  examples?: string[]; // ✅ Примеры использования
}

export interface DonationMethod {
  id: string;
  name: string;
  icon: string;
  instructions: string;
  url: string;
}

export type ThemeMode = 'light' | 'dark';