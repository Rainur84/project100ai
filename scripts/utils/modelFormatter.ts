import { v4 as uuidv4 } from 'uuid';

type RawModel = {
  title: string;
  link: string;
  contentSnippet?: string;
  pubDate?: string;
  isoDate?: string;
};

export function formatModel(model: RawModel): string {
  const id = uuidv4();
  const name = sanitize(model.title);
  const description = sanitize(model.contentSnippet || 'AI tool');
  const releaseDate = model.isoDate?.split('T')[0] || '';
  const demoUrl = model.link;

  return `  {
    id: "${id}",
    name: "${name}",
    category: "New", // Обнови позже вручную
    description: "${description}",
    capabilities: [],
    releaseDate: "${releaseDate}",
    company: "Unknown",
    imageUrl: "", // Добавь позже
    featured: false,
    demoUrl: "${demoUrl}",
    usage: "",
    accessType: "free",
    examples: []
  }`;
}

function sanitize(text: string): string {
  return text.replace(/["`]/g, "'").replace(/\s+/g, ' ').trim();
}