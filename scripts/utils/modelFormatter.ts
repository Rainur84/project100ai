import { v4 as uuidv4 } from 'uuid';

type RawModel = {
  title: string;
  link: string;
  contentSnippet?: string;
  pubDate?: string;
  isoDate?: string;
  accessType?: string;
};

export function formatModel(model: RawModel): string {
  const id = uuidv4();
  const name = sanitize(model.title);
  const description = sanitize(model.contentSnippet || 'AI tool');
  const releaseDate = model.isoDate?.split('T')[0] || '';
  const demoUrl = model.link;

  const accessTypeRaw = model.accessType || 'free';
  const accessType = normalizeAccessType(accessTypeRaw);

  const category = detectCategory(name, description);

  return `  {
    id: "${id}",
    name: "${name}",
    category: "${category}",
    description: "${description}",
    capabilities: [],
    releaseDate: "${releaseDate}",
    company: "Unknown",
    imageUrl: "", // Добавь позже
    featured: false,
    demoUrl: "${demoUrl}",
    usage: "",
    accessType: "${accessType}",
    examples: []
  }`;
}

function sanitize(text: string): string {
  return text.replace(/["`]/g, "'").replace(/\s+/g, ' ').trim();
}

function normalizeAccessType(raw: string): string {
  const normalized = raw.trim().toLowerCase();
  switch (normalized) {
    case 'free':
      return 'Free';
    case 'paid':
      return 'Paid';
    case 'partially free':
    case 'partial':
    case 'freemium':
      return 'Partially Free';
    case 'not yet public':
    case 'not public':
    case 'unavailable':
      return 'Not Yet Public';
    default:
      return 'Free'; // значение по умолчанию
  }
}

function detectCategory(name: string, description: string): string {
  const text = `${name} ${description}`.toLowerCase();

  if (text.includes('image') || text.includes('photo') || text.includes('picture') || text.includes('art')) {
    return 'Pictures';
  }
  if (text.includes('video') || text.includes('motion') || text.includes('animation')) {
    return 'Video';
  }
  if (text.includes('text') || text.includes('writer') || text.includes('content')) {
    return 'Texts';
  }
  if (text.includes('speech') || text.includes('audio') || text.includes('voice to text')) {
    return 'Speech to Text';
  }
  if (text.includes('chatbot') || text.includes('assistant') || text.includes('gpt')) {
    return 'Chatbots';
  }
  if (text.includes('ux') || text.includes('ui') || text.includes('interface')) {
    return 'UI/UX';
  }
  if (text.includes('marketing') || text.includes('ads') || text.includes('seo')) {
    return 'Marketing';
  }
  if (text.includes('social') || text.includes('instagram') || text.includes('twitter') || text.includes('tiktok')) {
    return 'Social Networks';
  }
  if (text.includes('code') || text.includes('developer') || text.includes('programming')) {
    return 'Coding';
  }
  if (text.includes('automation') || text.includes('bot') || text.includes('task')) {
    return 'Automation';
  }
  if (text.includes('prompt') || text.includes('engineer')) {
    return 'Prompt Engineering';
  }
  if (text.includes('design')) {
    return 'Design';
  }
  if (text.includes('education') || text.includes('learn') || text.includes('student')) {
    return 'Education';
  }
  if (text.includes('blog') || text.includes('article') || text.includes('write')) {
    return 'Blogging';
  }
  if (text.includes('call') || text.includes('phone')) {
    return 'For calls';
  }
  if (text.includes('data') || text.includes('analysis') || text.includes('analytics')) {
    return 'Data Analysis';
  }
  if (text.includes('customer') || text.includes('support') || text.includes('helpdesk')) {
    return 'Customer Support';
  }
  if (text.includes('map') || text.includes('mind') || text.includes('brainstorm')) {
    return 'Mind Mapping';
  }
  if (text.includes('web') || text.includes('site') || text.includes('landing')) {
    return 'Websites';
  }
  if (text.includes('idea') || text.includes('brainstorm') || text.includes('inspiration')) {
    return 'Ideas';
  }

  return 'New';
}
