import { AIModel } from '../types'; // или './types', в зависимости от уровня вложенности

export const aiModels: AIModel[] = [
  
// __AUTO_INSERT_MODELS__
  {
    id: '1',
    name: 'GPT-4',
    slug: 'gpt-4',
    category: 'Large Language Model',
    description: "GPT-4 is OpenAI's most advanced system, producing safer and more useful responses.",
    capabilities: ['Text generation', 'Content summarization', 'Code generation', 'Creative writing'],
    releaseDate: '2023-03-14',
    company: 'OpenAI',
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    featured: true,
    paperUrl: 'https://arxiv.org/abs/2303.08774',
    usage: `Use through ChatGPT (chat.openai.com) or OpenAI API (platform.openai.com).
1. Visit chat.openai.com and log in or sign up.
2. Choose GPT-4 from the model selector (Pro plan required).
3. Type your prompt or question and press Enter.
4. Use follow-up questions to refine the conversation.`,
    accessType: 'Partially Free',
    examples: [
      'Write a professional email response to a job offer.',
      'Summarize a 10-page article in bullet points.',
      'Explain quantum computing in simple terms.'
    ]
  },
  {
     id: '2',
    name: 'Claude 3',
    slug: 'claude-3',
    category: 'Large Language Model',
    description: 'Claude is a family of AI assistants created by Anthropic, known for safety and reasoning.',
    capabilities: ['Conversational AI', 'Content generation', 'Data analysis', 'Complex reasoning'],
    releaseDate: '2024-03-04',
    company: 'Anthropic',
    imageUrl: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
    featured: true,
    usage: `Available via Claude web app (claude.ai) or Anthropic API.
1. Go to claude.ai and sign in.
2. Choose Claude 3 Opus, Sonnet, or Haiku depending on your needs.
3. Type a prompt or upload data files for analysis.
4. Interact in natural language.`,
    accessType: 'Partially Free',
    examples: [
      'Analyze this CSV file and summarize the sales trends.',
      'Draft a blog post about sustainable energy.',
      'Help me debug this JavaScript function.'
    ]
  },
  {
    id: '3',
    name: 'DALL-E 3',
    slug: 'dall-e-3',
    category: 'Image Generation',
    description: 'DALL-E 3 generates images from natural language prompts with high accuracy and detail.',
    capabilities: ['Image generation', 'Style transfer', 'Concept visualization', 'Creative design'],
    releaseDate: '2023-10-11',
    company: 'OpenAI',
    imageUrl: 'https://images.pexels.com/photos/8386442/pexels-photo-8386442.jpeg',
    featured: true,
    usage: `Use through ChatGPT (Pro plan) or OpenAI API with image generation endpoint.
1. Open ChatGPT and select GPT-4 (Pro required).
2. Write a prompt describing the image you want (e.g., “A futuristic city at night in cyberpunk style”).
3. Wait for the AI to generate images.
4. Click to upscale or regenerate if needed.`,
    accessType: 'Partially Free',
    examples: [
      'A cozy cabin in the woods during snowfall.',
      'A robotic dog playing in a park.',
      'A surreal painting in Van Gogh style.'
    ]
  },
  {
    id: '4',
    name: 'Gemini',
    slug: 'gemini',
    category: 'Multimodal Model',
    description: "Gemini by Google handles text, images, audio, and video with advanced reasoning.",
    capabilities: ['Multimodal reasoning', 'Code generation', 'Planning', 'Summarization'],
    releaseDate: '2023-12-06',
    company: 'Google DeepMind',
    imageUrl: 'https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg',
    featured: true,
    usage: `Accessible via Google AI Studio (makersuite.google.com) and Pixel devices for Gemini Nano.
1. Visit makersuite.google.com and log in with your Google account.
2. Choose the Gemini model from the list of tools.
3. Upload files or type your prompt.
4. Review the output and export if needed.`,
    accessType: 'Partially Free',
    examples: [
      'Summarize a YouTube video by pasting the transcript.',
      'Generate code snippets for a Python automation script.',
      'Explain a photo using multimodal input.'
    ]
  },
  {
    id: '5',
    name: 'Stable Diffusion XL',
    slug: 'stable-diffusion-xl',
    category: 'Image Generation',
    description: 'Stable Diffusion XL produces photorealistic images from text prompts using open-source models.',
    capabilities: ['Text-to-image generation', 'Image editing', 'Concept visualization', 'Art creation'],
    releaseDate: '2023-07-26',
    company: 'Stability AI',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    featured: false,
    githubUrl: 'https://github.com/Stability-AI/stablediffusion',
    usage: `Run locally or via DreamStudio (dreamstudio.ai) or Hugging Face Spaces.
1. Go to dreamstudio.ai and create an account.
2. Type a prompt describing the image.
3. Adjust parameters like resolution or style.
4. Click Generate and download the result.`,
    accessType: 'Partially Free',
    examples: [
      'A dragon flying over a medieval city at sunset.',
      'A portrait in Renaissance oil painting style.',
      'A futuristic robot bartender in neon-lit bar.'
    ]
  },
  {
    id: '6',
    name: 'Llama 3',
    slug: 'llama-3',
    category: 'Large Language Model',
    description: "Llama 3 is Meta's open-source LLM with multilingual capabilities and strong reasoning.",
    capabilities: ['Conversational AI', 'Content generation', 'Reasoning', 'Multilingual support'],
    releaseDate: '2024-04-18',
    company: 'Meta AI',
    imageUrl: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg',
    featured: false,
    githubUrl: 'https://github.com/meta-llama/llama',
    usage: `Download weights from Meta (via Hugging Face) and run using frameworks like Transformers or Ollama.
1. Download model weights from Hugging Face or Meta's official release.
2. Install Ollama or use Transformers in Python.
3. Load the model and run it locally on your device.
4. Interact via CLI or integrate into your app.`,
    accessType: 'Free',
    examples: [
      'Translate text from English to Spanish.',
      'Summarize a news article using a local notebook.',
      'Create a chatbot with multilingual support.'
    ]
  },
  {
     id: '7',
    name: 'Midjourney V6',
    slug: 'midjourney-v6',
    category: 'Image Generation',
    description: 'Midjourney is known for artistic AI images. Version 6 offers improved realism and detail.',
    capabilities: ['Artistic image generation', 'Style consistency', 'Detailed rendering', 'Creative visualization'],
    releaseDate: '2023-12-21',
    company: 'Midjourney',
    imageUrl: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg',
    featured: false,
    usage: `Accessible via Discord bot (midjourney.com). Join the server, use /imagine to generate images.
1. Join the Midjourney Discord server via midjourney.com.
2. In a newbie channel, type /imagine followed by your prompt.
3. Wait for the AI to render 4 image options.
4. Click buttons to upscale, vary, or reroll results.`,
    accessType: 'Paid',
    examples: [
      'A futuristic car design concept in 3D style.',
      'An anime-style fantasy warrior on a mountain.',
      'A surreal dreamlike cityscape.'
    ]
  },
  {
    id: '8',
    name: 'Sora',
    slug: 'sora',
    category: 'Video Generation',
    description: 'Sora is OpenAI’s model that creates short videos from textual descriptions.',
    capabilities: ['Text-to-video generation', 'Scene composition', 'Character animation', 'Dynamic environments'],
    releaseDate: '2024-02-15',
    company: 'OpenAI',
    imageUrl: 'https://images.pexels.com/photos/7691705/pexels-photo-7691705.jpeg',
    featured: true,
    usage: `Currently in limited preview; will be accessible via OpenAI platform once released publicly.
1. Currently available only to select users via private beta.
2. Once available, input detailed text instructions.
3. The model generates 60-second realistic video scenes.
4. Download or edit generated clips.`,
    accessType: 'Not Yet Public',
    examples: [
      'A fox running through a snowy forest in slow motion.',
      'A child playing with a kite on a sunny beach.',
      'A sci-fi spaceship landing on Mars.'
    ]
  },
  {
    id: '9',
    name: 'DeepSeek AI',
    slug: 'deepseek-ai',
    category: 'Ideas',
    description: 'DeepSeek AI is a search and reasoning engine that combines web data with LLM capabilities.',
    capabilities: ['Search', 'Web data integration', 'Reasoning'],
    releaseDate: '2024-01-10',
    company: 'DeepSeek',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    featured: false,
    demoUrl: 'https://deepseek.com',
    usage: `1. Go to deepseek.com.
2. Enter your query into the search bar.
3. Review structured results powered by LLM.
4. Ask follow-up questions to refine or redirect results.`,
    accessType: 'Free',
    examples: [
      'Search for recent advancements in quantum mechanics.',
      'Compare multiple viewpoints on economic inflation.',
      'Find code snippets for machine learning pipelines.'
    ]
  },
  {
    id: '10',
    name: 'YOU.com',
    slug: 'you-com',
    category: 'Ideas',
    description: 'YOU.com is a privacy-focused AI-powered search engine that generates real-time summarized results.',
    capabilities: ['AI summarization', 'Code generation', 'Real-time web search'],
    releaseDate: '2022-11-01',
    company: 'YOU.com',
    imageUrl: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
    featured: false,
    demoUrl: 'https://you.com',
    usage: `1. Visit you.com.
2. Type your question or search phrase.
3. Explore AI-generated summaries from across the web.
4. Use sidebar tools like code generator or image AI.`,
    accessType: 'Free',
    examples: [
      'Summarize today’s tech news.',
      'Generate Python code for a to-do app.',
      'Compare laptops under $1000.'
    ]
  },
  {
    id: '11',
    name: 'Perplexity',
    slug: 'perplexity',
    category: 'Ideas',
    description: 'Perplexity is an AI-powered answer engine that provides cited, concise responses to complex questions.',
    capabilities: ['Web search', 'Cited answers', 'AI summarization'],
    releaseDate: '2023-02-15',
    company: 'Perplexity AI',
    imageUrl: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg',
    featured: false,
    demoUrl: 'https://perplexity.ai',
    usage: `1. Navigate to perplexity.ai.
2. Ask a question using natural language.
3. Review cited sources in the response.
4. Follow links for deeper reading.`,
    accessType: 'Free',
    examples: [
      'What are the health benefits of a Mediterranean diet?',
      'How does GPT-4 differ from GPT-3.5?',
      'List top 5 programming languages in 2025.'
    ]
  },
  {
  id: '12',
  name: 'Claude',
  slug: 'claude',
  category: 'Ideas',
  description: 'Claude is an advanced conversational model by Anthropic with a focus on helpful, honest, harmless AI.',
  capabilities: ['Conversational AI', 'Summarization', 'Creative writing'],
  releaseDate: '2023-07-11',
  company: 'Anthropic',
  imageUrl: 'https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg',
  featured: false,
  demoUrl: 'https://claude.ai',
  usage: `1. Go to claude.ai and log in.
2. Type your query in the message box.
3. Interact with Claude in a conversational manner.
4. Use context continuation for longer threads.`,
  accessType: 'Partially Free',
  examples: [
    'Write a short story about space exploration.',
    'Summarize a PDF report in natural language.',
    'Explain recursion to a 10-year-old.'
  ]
},
{
  id: '13',
  name: 'Decktopus',
  slug: 'decktopus',
  category: 'Presentations',
  description: 'Decktopus is an AI-powered presentation builder that creates professional slides in seconds.',
  capabilities: ['AI slide generation', 'Design automation', 'Content suggestion'],
  releaseDate: '2021-06-20',
  company: 'Decktopus Inc.',
  imageUrl: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
  featured: false,
  demoUrl: 'https://www.decktopus.com',
  usage: `1. Visit decktopus.com and sign up.
2. Choose a presentation type or template.
3. Enter your topic or brief.
4. Let the AI generate a structured slide deck.
5. Customize slides with content, images, and themes.`,
  accessType: 'Partially Free',
  examples: [
    'Create a sales pitch deck for a tech startup.',
    'Generate an educational presentation on climate change.',
    'Design a portfolio showcase for a designer.'
  ]
},
{
  id: '14',
  name: 'Pitch',
  slug: 'pitch',
  category: 'Presentations',
  description: 'Pitch is a collaborative presentation software that supports real-time editing and smart design tools.',
  capabilities: ['Collaboration', 'Templates', 'Live editing'],
  releaseDate: '2020-10-12',
  company: 'Pitch',
  imageUrl: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg',
  featured: false,
  demoUrl: 'https://pitch.com',
  usage: `1. Go to pitch.com and create an account.
2. Start a new presentation from scratch or a template.
3. Invite team members to collaborate.
4. Add AI-assisted visuals and smart layouts.`,
  accessType: 'Free',
  examples: [
    'Collaborate on a Q2 business review presentation.',
    'Use design templates for a marketing pitch.',
    'Track changes made by different team members.'
  ]
},
{
  id: '15',
  name: 'Popai.pro',
  slug: 'popai-pro',
  category: 'Presentations',
  description: 'Popai.pro is an AI assistant for making modern, stylish presentations quickly and intuitively.',
  capabilities: ['Quick deck creation', 'Stylish themes', 'Content generation'],
  releaseDate: '2023-01-08',
  company: 'Popai',
  imageUrl: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg',
  featured: false,
  demoUrl: 'https://popai.pro',
  usage: `1. Visit popai.pro and log in.
2. Select a topic or presentation goal.
3. Let the AI build your slide deck.
4. Customize text, visuals, and flow.`,
  accessType: 'Free',
  examples: [
    'Generate a pitch for a mobile app.',
    'Design a report on social media trends.',
    'Make a sleek presentation for investors.'
  ]
},
{
  id: '16',
  name: 'Slides AI',
  slug: 'slides-ai',
  category: 'Presentations',
  description: 'Slides AI turns plain text into professional slides using AI-powered design and layout logic.',
  capabilities: ['Text to slides', 'Design enhancement', 'Export to Google Slides'],
  releaseDate: '2022-06-15',
  company: 'SlidesAI.io',
  imageUrl: 'https://images.pexels.com/photos/6476597/pexels-photo-6476597.jpeg',
  featured: false,
  demoUrl: 'https://www.slidesai.io',
  usage: `1. Open slidesai.io.
2. Paste your content or ideas into the editor.
3. Select a design theme.
4. Export to Google Slides or download as PDF.`,
  accessType: 'Partially Free',
  examples: [
    'Turn a blog article into a visual presentation.',
    'Create an investor pitch from bullet points.',
    'Design slides for a team meeting summary.'
  ]
},
{
  id: '17',
  name: 'Slidebean',
  slug: 'slidebean',
  category: 'Presentations',
  description: 'Slidebean helps startups and businesses create investor-ready presentations with AI layout assistance.',
  capabilities: ['AI layout', 'Financial slides', 'Pitch deck templates'],
  releaseDate: '2016-11-04',
  company: 'Slidebean',
  imageUrl: 'https://images.pexels.com/photos/6476598/pexels-photo-6476598.jpeg',
  featured: false,
  demoUrl: 'https://slidebean.com',
  usage: `1. Go to slidebean.com and sign up.
2. Choose from a variety of pitch deck templates.
3. Enter your company data and goals.
4. Use the AI to auto-arrange content visually.`,
  accessType: 'Partially Free',
  examples: [
    'Build a seed funding pitch deck.',
    'Create slides for a business plan.',
    'Design slides for a startup competition.'
  ]
},
{
  id: '18',
  name: 'Dora',
  slug: 'dora',
  category: 'Websites',
  description: 'Dora is a no-code website builder powered by AI, enabling users to design responsive 3D and animated websites.',
  capabilities: ['No-code website builder', '3D design', 'Responsive layout'],
  releaseDate: '2023-02-12',
  company: 'Dora',
  imageUrl: 'https://images.pexels.com/photos/11035396/pexels-photo-11035396.jpeg',
  featured: false,
  demoUrl: 'https://www.dora.run',
  usage: `1. Visit dora.run and sign up for an account.
2. Start a new project from the dashboard.
3. Use drag-and-drop tools to create your layout.
4. Add animations and 3D elements using the built-in editor.
5. Publish or export your site.`,
  accessType: 'Partially Free',
  examples: [
    'Build a 3D portfolio website.',
    'Design a landing page with animations.',
    'Create a product showcase site without code.'
  ]
},
  {
  id: '19',
  name: 'Durable',
  slug: 'durable',
  category: 'Websites',
  description: 'Durable is an AI-powered website builder that generates a complete website in under a minute.',
  capabilities: ['Instant website generation', 'AI content', 'Business tools'],
  releaseDate: '2022-11-01',
  company: 'Durable.co',
  imageUrl: 'https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg',
  featured: false,
  demoUrl: 'https://durable.co',
  usage: `1. Go to durable.co and click "Get Started".
  2. Answer a few questions about your business.
  3. Durable generates a full website instantly.
  4. Edit text, images, and layout if needed.
  5. Publish your site with one click.`,
  accessType: 'Free',
  examples: [
    'Generate a portfolio site for a freelancer.',
    'Create a business page for a new café.',
    'Launch a simple e-commerce storefront.'
  ]
},
{
  id: '20',
  name: 'Wegic',
  slug: 'wegic',
  category: 'Websites',
  description: 'Wegic helps users build modern websites by describing what they want in plain language.',
  capabilities: ['Natural language input', 'Website generation', 'AI layout'],
  releaseDate: '2023-04-10',
  company: 'Wegic',
  imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
  featured: false,
  demoUrl: 'https://wegic.ai',
  usage: `1. Visit wegic.ai and create an account.
  2. Describe your desired website in natural language.
  3. Let the AI interpret and build the layout.
  4. Customize the design and content using the editor.
  5. Publish your website.`,
  accessType: 'Free',
  examples: [
    'Say "I want a personal blog with 3 sections" to generate structure.',
    'Describe an online portfolio and watch it build instantly.',
    'Use plain English to adjust style and theme.'
  ]
},
{
  id: '21',
  name: 'Framer',
  slug: 'framer',
  category: 'Websites',
  description: 'Framer is a high-performance website builder combining design and development into one powerful platform.',
  capabilities: ['Design-to-site', 'Interactive elements', 'SEO tools'],
  releaseDate: '2019-06-15',
  company: 'Framer B.V.',
  imageUrl: 'https://images.pexels.com/photos/11035546/pexels-photo-11035546.jpeg',
  featured: false,
  demoUrl: 'https://www.framer.com',
  usage: `1. Go to framer.com and sign in.
  2. Start with a template or a blank canvas.
  3. Design your website visually with drag-and-drop.
  4. Use built-in animations and responsive controls.
  5. Publish directly from Framer to the web.`,
  accessType: 'Partially Free',
  examples: [
    'Create a product marketing site.',
    'Design an interactive homepage for a brand.',
    'Export fully responsive code from your design.'
  ]
},
{
  id: '22',
  name: '10Web',
  slug: '10web',
  category: 'Websites',
  description: '10Web is an AI-driven WordPress website builder that automates hosting, design, and optimization.',
  capabilities: ['AI WordPress builder', 'PageSpeed optimization', 'Auto content creation'],
  releaseDate: '2021-05-27',
  company: '10Web Inc.',
  imageUrl: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg',
  featured: false,
  demoUrl: 'https://10web.io',
  usage: `1. Go to 10web.io and sign up.
  2. Choose to create a new website or recreate an existing one.
  3. Use the AI builder to generate content and structure.
  4. Customize with Elementor or block editor.
  5. Host and optimize your site automatically.`,
  accessType: 'Partially Free',
  examples: [
    'Rebuild an existing website using AI.',
    'Generate a WordPress site for a local business.',
    'Optimize a blog with PageSpeed boost and security.'
  ]
},
{
  id: '23',
  name: 'Fastread.io',
  slug: 'fastread-io',
  category: 'Texts',
  description: 'Fastread.io is an AI tool that summarizes long articles, documents, or web pages into concise summaries in seconds.',
  capabilities: ['Text summarization', 'Reading speed boost', 'URL-based processing'],
  releaseDate: '2023-06-10',
  company: 'Fastread',
  imageUrl: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg',
  featured: false,
  demoUrl: 'https://fastread.io',
  usage: `1. Go to fastread.io.
  2. Paste a URL or upload a document.
  3. Click "Summarize" to get an AI-generated summary.
  4. Adjust the summary length if needed.
  5. Copy or download the summary.`,
  accessType: 'Free',
  examples: [
    'Summarize a news article in 3 bullet points.',
    'Get a quick overview of a research paper.',
    'Speed-read lengthy blog posts with concise extracts.'
  ]
},
{
  id: '24',
  name: 'Jasper',
  slug: 'jasper',
  category: 'Texts',
  description: 'Jasper is a powerful AI content generation tool for marketers, bloggers, and businesses to create high-quality written content.',
  capabilities: ['Blog writing', 'Ad copy', 'SEO content'],
  releaseDate: '2021-02-01',
  company: 'Jasper.ai',
  imageUrl: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg',
  featured: false,
  demoUrl: 'https://www.jasper.ai',
  usage: `1. Visit jasper.ai and create an account.
  2. Choose a content type: blog, email, social post, etc.
  3. Input your topic, keywords, and tone of voice.
  4. Let Jasper generate your content in seconds.
  5. Edit and export your text.`,
  accessType: 'Paid',
  examples: [
    'Write a blog post about AI in education.',
    'Generate Facebook ad copy for a clothing brand.',
    'Create SEO-optimized content for a tech website.'
  ]
},
{
  id: '25',
  name: 'Copy AI',
  slug: 'copy-ai',
  category: 'Texts',
  description: 'Copy AI is a writing assistant that helps create marketing copy, emails, social media content, and more using artificial intelligence.',
  capabilities: ['Email generation', 'Social media posts', 'Sales copy'],
  releaseDate: '2020-09-15',
  company: 'Copy AI Inc.',
  imageUrl: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg',
  featured: false,
  demoUrl: 'https://www.copy.ai',
  usage: `1. Go to copy.ai and sign up.
  2. Select the type of content you need.
  3. Enter a few details about your product or topic.
  4. Generate copy suggestions with one click.
  5. Copy, refine, and use the results.`,
  accessType: 'Partially Free',
  examples: [
    'Write an engaging tweet for a product launch.',
    'Create a cold outreach email to clients.',
    'Generate landing page content for a startup.'
  ]
},
  {
    id: '26',
    name: 'TextBlaze',
    slug: 'textBlaze',
    category: 'Texts',
    description: 'TextBlaze is a productivity tool that allows you to insert text snippets and templates using shortcuts, powered by smart AI.',
    capabilities: ['Text expansion', 'Templates', 'AI writing'],
    releaseDate: '2019-07-23',
    company: 'Blaze.today',
    imageUrl: 'https://images.pexels.com/photos/7092675/pexels-photo-7092675.jpeg',
    featured: false,
    demoUrl: 'https://blaze.today',
    usage: `1. Install the TextBlaze Chrome extension.
  2. Create snippets with shortcuts and dynamic content.
  3. Use the AI Assistant to write or enhance content.
  4. Insert snippets anywhere using your keyboard.
  5. Organize your snippets into folders for reuse.`,
    accessType: 'Free',
    examples: [
      'Create email templates for customer support.',
      'Use shortcuts for repetitive medical or legal text.',
      'Automatically personalize messages using variables.'
    ]
  },
  {
    id: '27',
    name: 'Writesonic',
    slug: 'writesonic',
    category: 'Texts',
    description: 'Writesonic is an AI writing tool that helps users create SEO-optimized content, blog posts, and ads at scale.',
    capabilities: ['SEO content', 'Product descriptions', 'AI article writing'],
    releaseDate: '2021-03-30',
    company: 'Writesonic Inc.',
    imageUrl: 'https://images.pexels.com/photos/6476782/pexels-photo-6476782.jpeg',
    featured: false,
    demoUrl: 'https://writesonic.com',
    usage: `1. Visit writesonic.com and create an account.
  2. Choose a content type: article, ad, email, etc.
  3. Enter your topic, keywords, and preferred tone.
  4. Generate content using the AI engine.
  5. Edit or export the final result.`,
    accessType: 'Partially Free',
    examples: [
      'Generate a long-form blog post about AI trends.',
      'Write SEO-optimized product descriptions.',
      'Create marketing emails for a new launch.'
    ]
  },
  {
    id: '28',
    name: 'Rendernet.ai',
    slug: 'rendernet.ai',
    category: 'AI Models',
    description: 'Rendernet.ai is a generative AI platform focused on 3D content generation, including avatars, environments, and props.',
    capabilities: ['3D asset generation', 'Virtual environments', 'Avatar creation'],
    releaseDate: '2023-07-12',
    company: 'Rendernet',
    imageUrl: 'https://images.pexels.com/photos/1566435/pexels-photo-1566435.jpeg',
    featured: false,
    demoUrl: 'https://rendernet.ai',
    usage: `1. Go to rendernet.ai and sign in.
  2. Choose the type of 3D asset to create (e.g., avatar, prop).
  3. Input your prompts or select a preset style.
  4. Generate and preview the result.
  5. Download or export your 3D model for use.`,
    accessType: 'Partially Free',
    examples: [
      'Create a stylized 3D avatar from a photo.',
      'Generate a fantasy forest environment for a game.',
      'Render sci-fi props for virtual worlds.'
    ]
  },
  {
    id: '29',
    name: 'Glambase AppAI',
    slug: 'glambase AppAI',
    category: 'AI Models',
    description: 'Glambase AppAI is an AI-driven tool for generating high-quality portraits and stylized glam photos.',
    capabilities: ['Portrait generation', 'Glamour style editing', 'Facial enhancement'],
    releaseDate: '2023-08-25',
    company: 'Glambase',
    imageUrl: 'https://images.pexels.com/photos/6311396/pexels-photo-6311396.jpeg',
    featured: false,
    demoUrl: 'https://glambase.app',
    usage: `1. Visit glambase.app and upload a selfie or photo.
  2. Select a style such as glamour, fashion, or cinematic.
  3. Click “Generate” to let the AI enhance and transform the image.
  4. Review and download the result.`,
    accessType: 'Paid',
    examples: [
      'Turn a casual selfie into a professional glam portrait.',
      'Apply cinematic lighting and retouching to headshots.',
      'Generate AI-stylized profile pictures.'
    ]
  },
  {
    id: '30',
    name: 'APOB',
    slug: 'APOB',
    category: 'AI Models',
    description: 'APOB (AI Power of Beauty) is a model designed for fashion and beauty applications including virtual try-ons and look generation.',
    capabilities: ['Virtual try-on', 'Beauty filter generation', 'Style suggestions'],
    releaseDate: '2024-01-11',
    company: 'APOB AI',
    imageUrl: 'https://images.pexels.com/photos/4064690/pexels-photo-4064690.jpeg',
    featured: false,
    demoUrl: 'https://apob.ai',
    usage: `1. Visit apob.ai and upload a photo.
  2. Choose a style category or fashion accessory to try on.
  3. The AI applies selected styles to your photo.
  4. Save or share your new look.`,
    accessType: 'Free',
    examples: [
      'Try on virtual makeup and hairstyles.',
      'Get fashion combinations based on your face and body type.',
      'Preview how accessories like glasses or hats will look.'
    ]
  },
  {
    id: '31',
    name: 'Deepmade',
    slug: 'deepmade',
    category: 'AI Models',
    description: 'Deepmade is a generative AI tool for creating deepfake-style videos and face swaps for entertainment or production use.',
    capabilities: ['Face swapping', 'AI video generation', 'Voice matching'],
    releaseDate: '2023-04-02',
    company: 'Deepmade Inc.',
    imageUrl: 'https://images.pexels.com/photos/8386452/pexels-photo-8386452.jpeg',
    featured: false,
    demoUrl: 'https://deepmade.ai',
    usage: `1. Go to deepmade.ai and register.
  2. Upload a source video and target face/photo.
  3. The AI processes and renders a new video with a realistic face swap.
  4. Download the final video for use in media or fun.`,
    accessType: 'Paid',
    examples: [
      'Swap your face into a movie scene.',
      'Create parody clips with celebrity face replacements.',
      'Use AI voice-matching for realistic dubbing.'
    ]
  },
  {
    id: '32',
    name: 'AI Hentai',
    slug: 'AI Hentai',
    category: 'AI Models',
    description: 'AI Hentai is a niche generative AI tool for creating stylized adult anime images using deep learning.',
    capabilities: ['Anime character generation', 'NSFW art creation', 'Style customization'],
    releaseDate: '2022-10-31',
    company: 'HentaiAI',
    imageUrl: 'https://images.pexels.com/photos/5428831/pexels-photo-5428831.jpeg',
    featured: false,
    demoUrl: 'https://aihentai.art',
    usage: `1. Visit aihentai.art (NSFW) and select a style model.
  2. Input prompts to describe the scene or character.
  3. Configure tags or settings (e.g., clothing, background).
  4. Generate and download the result (account required).`,
    accessType: 'Free',
    examples: [
      'Generate a fantasy anime character in NSFW style.',
      'Customize hair, clothing, and setting in anime artwork.',
      'Create stylized manga panels with adult themes.'
    ]
  },
  {
    id: '33',
    name: 'Tidv',
    slug: 'tidv',
    category: 'For calls',
    description: 'Tidv is an AI-powered meeting assistant that records, transcribes, and summarizes your voice or video calls.',
    capabilities: ['Call recording', 'Live transcription', 'Meeting summarization'],
    releaseDate: '2023-09-10',
    company: 'Tidv AI',
    imageUrl: 'https://images.pexels.com/photos/8867439/pexels-photo-8867439.jpeg',
    featured: false,
    demoUrl: 'https://tidv.ai',
    usage: `1. Visit tidv.ai and create an account.
  2. Connect your calendar or meeting tools like Zoom or Google Meet.
  3. Tidv will automatically join meetings to record and transcribe.
  4. Access transcripts and summaries in your dashboard.`,
    accessType: 'Partially Free',
    examples: [
      'Automatically summarize daily stand-up meetings.',
      'Generate call notes for a sales conversation.',
      'Review searchable transcriptions of past calls.'
    ]
  },
  {
    id: '34',
    name: 'Krisp',
    slug: 'krisp',
    category: 'For calls',
    description: 'Krisp uses AI to remove background noise, echo, and voice interruptions in real-time calls.',
    capabilities: ['Noise cancellation', 'Echo removal', 'Voice enhancement'],
    releaseDate: '2019-02-15',
    company: 'Krisp Technologies',
    imageUrl: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
    featured: false,
    demoUrl: 'https://krisp.ai',
    usage: `1. Download the Krisp app or browser extension from krisp.ai.
  2. Set Krisp as your input/output device in Zoom, Teams, or other tools.
  3. Krisp filters noise in real time during your meetings.
  4. Adjust settings for voice clarity and recording if needed.`,
    accessType: 'Partially Free',
    examples: [
      'Remove barking dogs or traffic noise in work calls.',
      'Improve audio quality in podcasts or interviews.',
      'Mute background conversations during team meetings.'
    ]
  },
  {
    id: '35',
    name: 'Otter',
    slug: 'otter',
    category: 'For calls',
    description: 'Otter is a popular transcription tool that captures and syncs meeting notes with audio from Zoom, Teams, and Google Meet.',
    capabilities: ['Real-time transcription', 'Meeting highlights', 'Speaker identification'],
    releaseDate: '2018-10-30',
    company: 'Otter.ai',
    imageUrl: 'https://images.pexels.com/photos/4050427/pexels-photo-4050427.jpeg',
    featured: true,
    demoUrl: 'https://otter.ai',
    usage: `1. Create an account at otter.ai.
  2. Connect Otter to your calendar and meeting services.
  3. Otter will auto-join and transcribe your meetings.
  4. Review, edit, and share transcripts and highlights.`,
    accessType: 'Free',
    examples: [
      'Get searchable transcripts of all Zoom meetings.',
      'Identify and tag speakers in calls.',
      'Highlight action items and decisions during calls.'
    ]
  },
  {
    id: '36',
    name: 'Avoma',
    slug: 'avoma',
    category: 'For calls',
    description: 'Avoma is an AI meeting assistant that automates note-taking, call analysis, and follow-ups for sales and customer success teams.',
    capabilities: ['AI note-taking', 'CRM integration', 'Call analytics'],
    releaseDate: '2020-07-12',
    company: 'Avoma Inc.',
    imageUrl: 'https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg',
    featured: false,
    demoUrl: 'https://www.avoma.com',
    usage: `1. Sign up at avoma.com and connect your meeting platforms.
  2. Avoma records and analyzes calls automatically.
  3. View smart summaries, key questions, and topics.
  4. Sync notes with your CRM tools for follow-up.`,
    accessType: 'Partially Free',
    examples: [
      'Automatically generate follow-up tasks from client calls.',
      'Analyze talk-to-listen ratio in sales pitches.',
      'Review smart summaries of key meeting points.'
    ]
  },
  {
    id: '37',
    name: 'Fireflies',
    slug: 'fireflies',
    category: 'For calls',
    description: 'Fireflies is an AI assistant that captures voice conversations, transcribes, and analyzes meetings across platforms.',
    capabilities: ['Call recording', 'Transcription', 'Meeting insights'],
    releaseDate: '2019-05-05',
    company: 'Fireflies.ai',
    imageUrl: 'https://images.pexels.com/photos/8441813/pexels-photo-8441813.jpeg',
    featured: false,
    demoUrl: 'https://fireflies.ai',
    usage: `1. Create a Fireflies account at fireflies.ai.
  2. Integrate with Zoom, Google Meet, Teams, or Webex.
  3. Fireflies will automatically record and transcribe your meetings.
  4. Explore notes, action items, and searchable history.`,
    accessType: 'Free',
    examples: [
      'Record and transcribe internal team meetings.',
      'Track follow-ups and next steps automatically.',
      'Search past calls by keyword or topic.'
    ]
  },
  {
    id: '38',
    name: 'Poe',
    slug: 'poe',
    category: 'Chatbots',
    description: 'Poe is a multi-AI chatbot platform developed by Quora, offering access to various language models in a single interface.',
    capabilities: ['Multi-model chatting', 'Fast responses', 'Cross-AI comparison'],
    releaseDate: '2023-02-01',
    company: 'Quora',
    imageUrl: 'https://images.pexels.com/photos/4069288/pexels-photo-4069288.jpeg',
    featured: false,
    demoUrl: 'https://poe.com',
    usage: `1. Visit poe.com and sign in with your email or Google account.
  2. Choose from available bots like Claude, ChatGPT, GPT-4, etc.
  3. Start chatting with any model, switch bots anytime.
  4. Use Poe mobile app for on-the-go chatting.`,
    accessType: 'Free',
    examples: [
      'Ask GPT-4 and Claude the same question to compare answers.',
      'Chat with bots in different languages.',
      'Test AI creativity with storytelling prompts.'
    ]
  },
  {
    id: '39',
    name: 'Claude',
    slug: 'claude',
    category: 'Chatbots',
    description: 'Claude is an AI chatbot developed by Anthropic, designed to be helpful, honest, and harmless.',
    capabilities: ['Conversational AI', 'Helpful Q&A', 'Code assistance'],
    releaseDate: '2023-03-14',
    company: 'Anthropic',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    featured: true,
    demoUrl: 'https://claude.ai',
    usage: `1. Go to claude.ai and create an account.
  2. Choose Claude 3 model for advanced capabilities.
  3. Enter your question, code, or prompt.
  4. Use follow-up questions to refine your conversation.`,
    accessType: 'Partially Free',
    examples: [
      'Summarize articles in simple language.',
      'Write secure Python scripts.',
      'Get ethical insights on complex topics.'
    ]
  },
  {
    id: '40',
    name: 'Gemini',
    slug: 'gemini',
    category: 'Chatbots',
    description: 'Gemini is Google’s conversational AI, integrated with search, code, and image tools for enhanced interactions.',
    capabilities: ['Code generation', 'Search-integrated answers', 'Image analysis'],
    releaseDate: '2023-12-06',
    company: 'Google DeepMind',
    imageUrl: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg',
    featured: true,
    demoUrl: 'https://gemini.google.com',
    usage: `1. Visit gemini.google.com and log in with your Google account.
  2. Start a new conversation or ask a question.
  3. Use image or document uploads for visual input.
  4. Try Gemini Advanced for coding and research tools.`,
    accessType: 'Partially Free',
    examples: [
      'Ask for a summary of a long PDF document.',
      'Use Gemini to debug JavaScript code.',
      'Upload a graph and ask for analysis.'
    ]
  },
  {
    id: '41',
    name: 'ChatGPT',
    slug: 'ChatGPT',
    category: 'Chatbots',
    description: 'ChatGPT is OpenAI’s chatbot based on GPT models, capable of natural conversations, writing, and coding.',
    capabilities: ['Natural conversation', 'Creative writing', 'Code generation'],
    releaseDate: '2022-11-30',
    company: 'OpenAI',
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    featured: true,
    demoUrl: 'https://chat.openai.com',
    usage: `1. Visit chat.openai.com and sign up or log in.
  2. Choose GPT-3.5 or GPT-4 depending on your plan.
  3. Start chatting with the bot in natural language.
  4. Use memory, custom instructions, and plugins if enabled.`,
    accessType: 'Partially Free',
    examples: [
      'Draft a business plan in bullet points.',
      'Create a bedtime story about space travel.',
      'Explain how neural networks work.'
    ]
  },
  {
    id: '42',
    name: 'HuggingChat',
    slug: 'huggingChat',
    category: 'Chatbots',
    description: 'HuggingChat is an open-source chatbot by Hugging Face using open-access large language models.',
    capabilities: ['Open-source chatbot', 'Model customization', 'Conversational AI'],
    releaseDate: '2023-04-25',
    company: 'Hugging Face',
    imageUrl: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
    featured: false,
    demoUrl: 'https://huggingface.co/chat',
    usage: `1. Go to huggingface.co/chat in your browser.
  2. Start chatting with the default open-source model.
  3. Test different hosted models or use your own.
  4. Review source code or fine-tune your own chatbot.`,
    accessType: 'Free',
    examples: [
      'Deploy your own chatbot on Hugging Face.',
      'Compare model responses using public LLMs.',
      'Build a chatbot with open weights.'
    ]
  },
  {
    id: '43',
    name: 'Katteb',
    slug: 'katteb',
    category: 'Blogging',
    description: 'Katteb is an AI-powered writing tool for creating fact-checked, SEO-friendly blog content.',
    capabilities: ['Article writing', 'SEO optimization', 'Fact-checking'],
    releaseDate: '2022-08-12',
    company: 'Katteb Inc.',
    imageUrl: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg',
    featured: false,
    demoUrl: 'https://katteb.com',
    usage: `1. Go to katteb.com and sign up for an account.
  2. Choose the type of content you want to generate (blog, paragraph, etc.).
  3. Enter your topic or keywords and adjust the settings.
  4. Generate, review, and edit your article using the editor.`,
    accessType: 'Partially Free',
    examples: [
      'Write a 1000-word article on digital marketing.',
      'Generate a listicle about travel destinations.',
      'Create SEO meta descriptions for a product page.'
    ]
  },
  {
    id: '44',
    name: 'Reword',
    slug: 'reword',
    category: 'Blogging',
    description: 'Reword helps bloggers write better content using AI-assisted drafts, suggestions, and team collaboration.',
    capabilities: ['Draft assistance', 'Content improvement', 'Collaboration tools'],
    releaseDate: '2023-01-10',
    company: 'Reword Inc.',
    imageUrl: 'https://images.pexels.com/photos/1484808/pexels-photo-1484808.jpeg',
    featured: false,
    demoUrl: 'https://reword.com',
    usage: `1. Sign up on reword.com and create your workspace.
  2. Start a new blog post or import existing drafts.
  3. Use AI suggestions to improve structure, grammar, and clarity.
  4. Collaborate with teammates and publish from the platform.`,
    accessType: 'Partially Free',
    examples: [
      'Improve an existing blog post with AI feedback.',
      'Collaborate with editors on article revisions.',
      'Fix tone and readability issues in a travel blog.'
    ]
  },
  {
    id: '45',
    name: 'Elephas',
    slug: 'elephas',
    category: 'Blogging',
    description: 'Elephas is an AI writing assistant designed for Mac users, with smart templates and context-aware suggestions.',
    capabilities: ['Smart templates', 'Contextual writing', 'Blog creation'],
    releaseDate: '2021-11-05',
    company: 'Elephas AI',
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    featured: false,
    demoUrl: 'https://elephas.app',
    usage: `1. Download Elephas from elephas.app and install it on your Mac.
  2. Choose from various writing templates or start from scratch.
  3. Highlight text anywhere and activate Elephas with a shortcut.
  4. Use AI suggestions to expand, summarize, or refine content.`,
    accessType: 'Paid',
    examples: [
      'Use a blog intro template for a tech topic.',
      'Expand a summary into a full-length article.',
      'Quickly rewrite a paragraph with a new tone.'
    ]
  },
  {
    id: '46',
    name: 'Junia AI',
    slug: 'junia AI',
    category: 'Blogging',
    description: 'Junia AI is a blog automation platform that uses AI to plan, write, and optimize content at scale.',
    capabilities: ['AI writing', 'Content scheduling', 'SEO optimization'],
    releaseDate: '2023-03-02',
    company: 'Junia AI',
    imageUrl: 'https://images.pexels.com/photos/7112/woman-typing-writing-windows.jpg',
    featured: false,
    demoUrl: 'https://junia.ai',
    usage: `1. Create an account at junia.ai and log in.
  2. Enter your blog topic and choose content length.
  3. Use AI to generate full blog posts with SEO enhancements.
  4. Review and export or publish directly to your CMS.`,
    accessType: 'Partially Free',
    examples: [
      'Write a blog post on productivity tips.',
      'Generate an SEO-optimized article on remote work.',
      'Create a blog calendar with weekly posts.'
    ]
  },
  {
    id: '47',
    name: 'Journalist AI',
    slug: 'journalist AI',
    category: 'Blogging',
    description: 'Journalist AI is an AI-powered tool that generates ready-to-publish blog content, tailored to your audience.',
    capabilities: ['Audience targeting', 'Content generation', 'Style adaptation'],
    releaseDate: '2023-04-18',
    company: 'Journalist AI',
    imageUrl: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg',
    featured: false,
    demoUrl: 'https://journalistai.com',
    usage: `1. Visit journalistai.com and sign up for an account.
  2. Choose a target audience and content type.
  3. Provide your topic or keywords and generate content.
  4. Review, edit, and download your blog post.`,
    accessType: 'Partially Free',
    examples: [
      'Write a parenting blog for millennial moms.',
      'Generate a post with a humorous tone about freelancing.',
      'Create tech articles for Gen Z readers.'
    ]
  },
  {
    id: '48',
    name: 'Galileo AI',
    slug: 'galileo AI',
    category: 'UI/UX',
    description: 'Galileo AI generates delightful UI designs from simple text prompts.',
    capabilities: ['UI generation', 'Text-to-design', 'Rapid prototyping'],
    releaseDate: '2023-02-15',
    company: 'Galileo',
    imageUrl: 'https://images.pexels.com/photos/9653454/pexels-photo-9653454.jpeg',
    featured: false,
    demoUrl: 'https://www.usegalileo.ai/',
    usage: `1. Go to https://www.usegalileo.ai/
  2. Sign up or log in.
  3. Enter a design idea using a text prompt (e.g., "Finance dashboard").
  4. Customize the result or export the design to Figma.`,
    accessType: 'Partially Free',
    examples: [
      'Generate a login page UI from a short prompt.',
      'Create a user dashboard layout for a SaaS app.',
      'Design an onboarding screen for a mobile app.'
    ]
  },
  {
    id: '49',
    name: 'Khroma',
    slug: 'khroma',
    category: 'UI/UX',
    description: 'Khroma uses AI to help you discover and save unique color palettes.',
    capabilities: ['Color palette generation', 'Design inspiration', 'Color learning AI'],
    releaseDate: '2022-11-10',
    company: 'Khroma',
    imageUrl: 'https://images.pexels.com/photos/7076760/pexels-photo-7076760.jpeg',
    featured: false,
    demoUrl: 'http://khroma.co/',
    usage: `1. Visit http://khroma.co/
  2. Choose your favorite colors to train the AI.
  3. Browse and save generated color palettes.
  4. Use the palettes in your design projects.`,
    accessType: 'Free',
    examples: [
      'Find trendy color combinations for a new brand.',
      'Generate contrast-friendly UI themes.',
      'Inspire creative direction for a landing page.'
    ]
  },
  {
    id: '50',
    name: 'Uizard',
    slug: 'uizard',
    category: 'UI/UX',
    description: 'Uizard turns hand-drawn sketches and text prompts into real UI prototypes.',
    capabilities: ['Wireframing', 'Text-to-design', 'Sketch-to-design'],
    releaseDate: '2021-06-30',
    company: 'Uizard Technologies',
    imageUrl: 'https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg',
    featured: false,
    demoUrl: 'https://uizard.io/',
    usage: `1. Go to https://uizard.io/ and sign up.
  2. Choose a template or create a new project.
  3. Upload a sketch or enter a description (e.g., "To-do list app").
  4. Edit, collaborate, and export your prototype.`,
    accessType: 'Partially Free',
    examples: [
      'Convert paper sketch into a UI prototype.',
      'Design a homepage from a text prompt.',
      'Collaborate with teammates on app UI.'
    ]
  },
  {
    id: '51',
    name: 'Visily',
    slug: 'visily',
    category: 'UI/UX',
    description: 'Visily enables teams to design wireframes and mockups using AI-assisted tools.',
    capabilities: ['Wireframing', 'Collaboration', 'AI design suggestion'],
    releaseDate: '2022-03-12',
    company: 'Visily',
    imageUrl: 'https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg',
    featured: false,
    demoUrl: 'https://www.visily.ai/',
    usage: `1. Go to https://www.visily.ai/
  2. Create a project and choose a template.
  3. Use AI features to generate or modify wireframes.
  4. Share with team or export designs.`,
    accessType: 'Free',
    examples: [
      'Build mobile app mockups as a team.',
      'Convert website screenshots into editable wireframes.',
      'Use templates for quick MVP layout drafts.'
    ]
  },
  {
    id: '52',
    name: 'VisualEyes',
    slug: 'visualEyes',
    category: 'UI/UX',
    description: 'VisualEyes predicts user attention and engagement with your UI designs using AI.',
    capabilities: ['Attention prediction', 'UX testing', 'Design analytics'],
    releaseDate: '2021-09-22',
    company: 'VisualEyes',
    imageUrl: 'https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg',
    featured: false,
    demoUrl: 'https://www.visualeyes.design/',
    usage: `1. Go to https://www.visualeyes.design/
  2. Upload your design or enter a URL.
  3. Receive AI-based predictions on user gaze and attention.
  4. Improve UX based on data insights.`,
    accessType: 'Free',
    examples: [
      'Test which areas of your landing page users will focus on.',
      'Analyze attention heatmaps for CTAs.',
      'Improve conversion rate using UX analytics.'
    ]
  },
  {
    id: '53',
    name: 'Dzine',
    slug: 'dzine',
    category: 'Pictures',
    description: 'Dzine is an AI design assistant that helps generate visuals for branding, social media, and more.',
    capabilities: ['Graphic generation', 'Social media visuals', 'Design automation'],
    releaseDate: '2023-04-01',
    company: 'Dzine AI',
    imageUrl: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg',
    featured: false,
    demoUrl: 'https://dzine.ai/',
    usage: `1. Visit https://dzine.ai/
  2. Sign up for an account.
  3. Choose a design type (e.g., Instagram post, flyer).
  4. Enter your content and preferences.
  5. Download or customize the design.`,
    accessType: 'Partially Free',
    examples: [
      'Create a branded Instagram post in 2 minutes.',
      'Generate visuals for a product launch campaign.',
      'Design a banner for your website.'
    ]
  },
  {
    id: '54',
    name: 'Freepik',
    slug: 'freepik',
    category: 'Pictures',
    description: 'Freepik offers AI-generated graphics, photos, and templates for creative projects.',
    capabilities: ['Stock images', 'AI illustrations', 'Template access'],
    releaseDate: '2022-08-10',
    company: 'Freepik Company',
    imageUrl: 'https://images.pexels.com/photos/6476592/pexels-photo-6476592.jpeg',
    featured: false,
    demoUrl: 'https://www.freepik.com/ai/',
    usage: `1. Go to https://www.freepik.com/ai/
  2. Search for illustrations or enter a prompt.
  3. Browse AI-generated content and download as needed.
  4. Use files in your design or presentation tools.`,
    accessType: 'Partially Free',
    examples: [
      'Search and download AI-created avatars.',
      'Find modern vector backgrounds for presentations.',
      'Generate illustrations for blog articles.'
    ]
  },
  {
    id: '55',
    name: 'Phygital+',
    slug: 'phygital+',
    category: 'Pictures',
    description: 'Phygital+ blends AI art generation with physical world aesthetics for unique visuals.',
    capabilities: ['AI-generated art', 'Style blending', 'Concept visuals'],
    releaseDate: '2023-01-25',
    company: 'Phygital+',
    imageUrl: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
    featured: false,
    demoUrl: 'https://www.phygital.plus/',
    usage: `1. Go to https://www.phygital.plus/
  2. Browse AI-generated art collections.
  3. Purchase or download visuals for branding or inspiration.
  4. Optionally request custom styles via prompt.`,
    accessType: 'Paid',
    examples: [
      'Generate abstract concept art for a branding project.',
      'Browse AI art inspired by architecture and fashion.',
      'Use physical+digital aesthetics in a gallery promo.'
    ]
  },
  {
    id: '56',
    name: 'Stockimg.ai',
    slug: 'stockimg.ai',
    category: 'Pictures',
    description: 'Stockimg.ai generates high-quality stock images and illustrations based on your prompt.',
    capabilities: ['Prompt-based image generation', 'Stock photo generation', 'Poster & book cover creation'],
    releaseDate: '2023-03-07',
    company: 'Stockimg.ai',
    imageUrl: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg',
    featured: false,
    demoUrl: 'https://stockimg.ai/',
    usage: `1. Go to https://stockimg.ai/
  2. Enter your prompt (e.g., "futuristic city at sunset").
  3. Choose output type (poster, logo, book cover).
  4. Download the result or refine it further.`,
    accessType: 'Partially Free',
    examples: [
      'Generate a book cover with your story’s title.',
      'Create stock images for a blog post.',
      'Design a unique app icon from scratch.'
    ]
  },
  {
    id: '57',
    name: 'Bing Create',
    slug: 'bing Create',
    category: 'Pictures',
    description: 'Bing Create uses DALL·E to generate AI art from text prompts, integrated with Microsoft tools.',
    capabilities: ['Text-to-image generation', 'DALL·E integration', 'Microsoft account access'],
    releaseDate: '2023-02-10',
    company: 'Microsoft',
    imageUrl: 'https://images.pexels.com/photos/860922/pexels-photo-860922.jpeg',
    featured: false,
    demoUrl: 'https://www.bing.com/images/create',
    usage: `1. Visit https://www.bing.com/images/create
  2. Sign in with your Microsoft account.
  3. Enter a creative prompt in English.
  4. Choose from several AI-generated image results.
  5. Save or share your favorite images.`,
    accessType: 'Free',
    examples: [
      'Generate surreal art for your mood board.',
      'Create fantasy creatures from text.',
      'Produce background visuals for video or slides.'
    ]
  },
  {
    id: '58',
    name: 'Looka',
    slug: 'looka',
    category: 'Design',
    description: 'Looka is an AI-powered logo maker that helps you design a brand identity in minutes.',
    capabilities: ['Logo generation', 'Brand kit creation', 'Business card design'],
    releaseDate: '2021-05-15',
    company: 'Looka Inc.',
    imageUrl: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg',
    featured: false,
    demoUrl: 'https://looka.com/',
    usage: `1. Go to https://looka.com/
  2. Enter your company name and choose your style preferences.
  3. Browse generated logos and edit the one you like.
  4. Download the logo and brand assets after purchase.`,
    accessType: 'Paid',
    examples: [
      'Create a modern tech startup logo in 5 minutes.',
      'Generate a full branding kit for a consulting firm.',
      'Customize a logo template with AI suggestions.'
    ]
  },
  {
    id: '59',
    name: 'Clipdrop',
    slug: 'clipdrop',
    category: 'Design',
    description: 'Clipdrop offers AI tools for image enhancement, background removal, and relighting.',
    capabilities: ['Background removal', 'Image relighting', 'Upscaling', 'Object cleanup'],
    releaseDate: '2022-07-20',
    company: 'Stability AI',
    imageUrl: 'https://images.pexels.com/photos/6476591/pexels-photo-6476591.jpeg',
    featured: false,
    demoUrl: 'https://clipdrop.co/',
    usage: `1. Go to https://clipdrop.co/
  2. Upload your image or paste from clipboard.
  3. Choose the tool (e.g., remove background, relight).
  4. Download the enhanced image.`,
    accessType: 'Partially Free',
    examples: [
      'Remove background from product photos.',
      'Relight an image to fit social media aesthetics.',
      'Enhance and upscale profile pictures.'
    ]
  },
  {
    id: '60',
    name: 'Autodraw',
    slug: 'autodraw',
    category: 'Design',
    description: 'Autodraw uses AI to match your sketches with professional icons and drawings.',
    capabilities: ['Sketch recognition', 'Icon suggestion', 'Drag-and-drop drawing'],
    releaseDate: '2020-04-03',
    company: 'Google Creative Lab',
    imageUrl: 'https://images.pexels.com/photos/6476593/pexels-photo-6476593.jpeg',
    featured: false,
    demoUrl: 'https://www.autodraw.com/',
    usage: `1. Visit https://www.autodraw.com/
  2. Start sketching with your mouse or finger.
  3. AI will suggest matching professional icons.
  4. Select and download or use in a project.`,
    accessType: 'Free',
    examples: [
      'Draw a quick icon for a presentation.',
      'Sketch a flowchart and enhance with suggested symbols.',
      'Use as a creative teaching tool for kids.'
    ]
  },
  {
    id: '61',
    name: 'Vance AI',
    slug: 'vance AI',
    category: 'Design',
    description: 'Vance AI provides tools for image enhancement, denoising, sharpening, and more.',
    capabilities: ['Image upscaling', 'Face enhancer', 'Old photo restoration'],
    releaseDate: '2021-11-30',
    company: 'Vance Technology',
    imageUrl: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg',
    featured: false,
    demoUrl: 'https://vanceai.com/',
    usage: `1. Go to https://vanceai.com/
  2. Upload your image.
  3. Choose an enhancement tool (e.g., Upscale, Enhance).
  4. Download the processed image.`,
    accessType: 'Partially Free',
    examples: [
      'Restore an old black-and-white photo.',
      'Enhance sharpness and resolution of profile pics.',
      'Denoise and brighten low-light images.'
    ]
  },
  {
    id: '62',
    name: 'Design AI',
    slug: 'design AI',
    category: 'Design',
    description: 'Designs.ai helps you create logos, videos, and banners with AI-driven automation.',
    capabilities: ['Logo maker', 'Video generator', 'Banner design', 'Mockups'],
    releaseDate: '2022-03-05',
    company: 'Inmagine Group',
    imageUrl: 'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg',
    featured: false,
    demoUrl: 'https://designs.ai/',
    usage: `1. Visit https://designs.ai/
  2. Select a tool like Logomaker, Videomaker, or Designmaker.
  3. Enter details (e.g., brand name, purpose).
  4. Generate designs and download with subscription.`,
    accessType: 'Paid',
    examples: [
      'Generate a business logo with color suggestions.',
      'Create a promo video in minutes.',
      'Design a banner ad for your campaign.'
    ]
  },
  {
    id: '63',
    name: 'Syllaby',
    slug: 'syllaby',
    category: 'Video',
    description: 'Syllaby helps you generate scripts and schedule videos for social media marketing.',
    capabilities: ['Script generation', 'Social media scheduling', 'Video marketing'],
    releaseDate: '2022-01-10',
    company: 'Syllaby Inc.',
    imageUrl: 'https://images.pexels.com/photos/6432103/pexels-photo-6432103.jpeg',
    featured: false,
    demoUrl: 'https://syllaby.io/',
    usage: `1. Go to https://syllaby.io/
  2. Choose your industry and audience.
  3. Get a script for your video content.
  4. Use the built-in scheduler to post on social platforms.`,
    accessType: 'Partially Free',
    examples: [
      'Generate a video script to promote your service.',
      'Plan a week of content for Instagram Reels.',
      'Create short video topics for TikTok.'
    ]
  },
  {
    id: '64',
    name: 'HeyGen',
    slug: 'heyGen',
    category: 'Video',
    description: 'HeyGen allows you to create AI-generated videos with avatars and voice cloning.',
    capabilities: ['AI avatars', 'Voice cloning', 'Text-to-video'],
    releaseDate: '2023-02-22',
    company: 'HeyGen',
    imageUrl: 'https://images.pexels.com/photos/7047679/pexels-photo-7047679.jpeg',
    featured: true,
    demoUrl: 'https://www.heygen.com/',
    usage: `1. Sign up at https://www.heygen.com/
  2. Choose an avatar and voice.
  3. Input your script or text content.
  4. Generate and download the video.`,
    accessType: 'Partially Free',
    examples: [
      'Create a corporate training video with an AI avatar.',
      'Generate multilingual explainer videos.',
      'Produce a product intro using just text.'
    ]
  },
  {
    id: '65',
    name: 'Nullface.ai',
    slug: 'nullface.ai',
    category: 'Video',
    description: 'Nullface.ai offers tools for face-swapping and deepfake video creation.',
    capabilities: ['Face swapping', 'AI video generation', 'Character animation'],
    releaseDate: '2023-08-05',
    company: 'Nullface',
    imageUrl: 'https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg',
    featured: false,
    demoUrl: 'https://nullface.ai/',
    usage: `1. Visit https://nullface.ai/
  2. Upload your video or choose a template.
  3. Select a face or character to swap.
  4. Process and download the edited video.`,
    accessType: 'Paid',
    examples: [
      'Create a viral video using deepfake tech.',
      'Swap faces in a movie scene.',
      'Animate a fictional character with your voice.'
    ]
  },
  {
    id: '66',
    name: 'Decohere',
    slug: 'decohere',
    category: 'Video',
    description: 'Decohere uses AI to generate abstract and creative videos from text prompts.',
    capabilities: ['AI-generated visuals', 'Abstract storytelling', 'Music syncing'],
    releaseDate: '2023-05-19',
    company: 'Decohere AI',
    imageUrl: 'https://images.pexels.com/photos/8092367/pexels-photo-8092367.jpeg',
    featured: false,
    demoUrl: 'https://decohere.ai/',
    usage: `1. Visit https://decohere.ai/
  2. Input your text or theme prompt.
  3. Select style and duration.
  4. Generate and export your creative video.`,
    accessType: 'Free',
    examples: [
      'Create a surreal visual for a music track.',
      'Generate a dreamlike video from a poem.',
      'Produce AI art synced with sound.'
    ]
  },
  {
    id: '67',
    name: 'Ssnthesia',
    slug: 'ssnthesia',
    category: 'Video',
    description: 'Ssnthesia helps you create professional videos with AI avatars and voiceovers.',
    capabilities: ['AI presenters', 'Voiceover generation', 'Multilingual videos'],
    releaseDate: '2023-01-12',
    company: 'Synthesia Ltd.',
    imageUrl: 'https://images.pexels.com/photos/7567520/pexels-photo-7567520.jpeg',
    featured: true,
    demoUrl: 'https://www.synthesia.io/',
    usage: `1. Sign up at https://www.synthesia.io/
  2. Choose a presenter and input your script.
  3. Customize the background, language, and layout.
  4. Generate and download the video.`,
    accessType: 'Paid',
    examples: [
      'Create training videos for employees.',
      'Produce a product walkthrough with voiceover.',
      'Translate videos into multiple languages.'
    ]
  },
  {
    id: '68',
    name: 'Phrasee',
    slug: 'phrasee',
    category: 'Automation',
    description: 'Phrasee uses AI to generate and optimize marketing copy for emails, push notifications, and more.',
    capabilities: ['AI copywriting', 'Email subject line optimization', 'A/B testing automation'],
    releaseDate: '2021-06-10',
    company: 'Phrasee Ltd.',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    featured: false,
    demoUrl: 'https://phrasee.co/',
    usage: `1. Visit https://phrasee.co/ and request a demo.
  2. Integrate with your email marketing platform.
  3. Let Phrasee generate optimized subject lines and content.
  4. Track performance via A/B testing tools.`,
    accessType: 'Paid',
    examples: [
      'Improve email open rates with AI-optimized subject lines.',
      'Automate newsletter content creation.',
      'Generate high-converting push notification messages.'
    ]
  },
  {
    id: '69',
    name: 'Outreach',
    slug: 'outreach',
    category: 'Automation',
    description: 'Outreach automates and optimizes the sales engagement process using AI insights.',
    capabilities: ['Sales automation', 'Lead scoring', 'Email sequencing', 'Pipeline management'],
    releaseDate: '2020-04-15',
    company: 'Outreach.io',
    imageUrl: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
    featured: true,
    demoUrl: 'https://www.outreach.io/',
    usage: `1. Go to https://www.outreach.io/ and sign up for a demo.
  2. Import your CRM contacts and leads.
  3. Create automated sequences for sales outreach.
  4. Use AI analytics to track engagement and optimize messaging.`,
    accessType: 'Paid',
    examples: [
      'Automate follow-ups to inbound leads.',
      'Schedule multi-step email campaigns for cold prospects.',
      'Score leads based on AI behavior analysis.'
    ]
  },
  {
    id: '70',
    name: 'ClickUp',
    slug: 'clickUp',
    category: 'Automation',
    description: 'ClickUp is a productivity platform with AI features for task management and workflow automation.',
    capabilities: ['Task automation', 'Team collaboration', 'Docs & wikis', 'AI assistant'],
    releaseDate: '2017-10-25',
    company: 'ClickUp',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    featured: false,
    demoUrl: 'https://clickup.com/',
    usage: `1. Go to https://clickup.com/ and create an account.
  2. Create a workspace and invite your team.
  3. Use the automation panel to create rules (e.g., assign tasks, send alerts).
  4. Leverage AI tools to summarize, generate content, or analyze tasks.`,
    accessType: 'Partially Free',
    examples: [
      'Auto-assign tasks when status changes.',
      'Summarize a meeting with the AI assistant.',
      'Set recurring workflows for weekly check-ins.'
    ]
  },
  {
    id: '71',
    name: 'Drift',
    slug: 'drift',
    category: 'Automation',
    description: 'Drift uses AI chatbots to automate lead qualification and sales conversations.',
    capabilities: ['AI chatbots', 'Lead routing', 'Conversational marketing', 'CRM integration'],
    releaseDate: '2019-03-11',
    company: 'Drift',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    featured: true,
    demoUrl: 'https://www.drift.com/',
    usage: `1. Sign up at https://www.drift.com/
  2. Install Drift chatbot on your website.
  3. Configure conversation flows and lead routing.
  4. Use AI to qualify leads and book meetings automatically.`,
    accessType: 'Partially Free',
    examples: [
      'Route leads to the right sales rep in real time.',
      'Book calendar meetings without human input.',
      'Automatically answer FAQs and qualify buyers.'
    ]
  },
  {
    id: '72',
    name: 'Emplifi',
    slug: 'emplifi',
    category: 'Automation',
    description: 'Emplifi provides AI-powered tools for customer engagement, including social media automation and analytics.',
    capabilities: ['Social media automation', 'Customer analytics', 'AI insights', 'Omnichannel engagement'],
    releaseDate: '2021-11-08',
    company: 'Emplifi',
    imageUrl: 'https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg',
    featured: false,
    demoUrl: 'https://emplifi.io/',
    usage: `1. Visit https://emplifi.io/ and request access.
  2. Connect your social and customer service platforms.
  3. Use dashboards to track campaigns and audience engagement.
  4. Automate publishing and responses with AI.`,
    accessType: 'Paid',
    examples: [
      'Schedule social media posts across multiple platforms.',
      'Analyze customer feedback trends automatically.',
      'Use AI to recommend optimal posting times.'
    ]
  },
  {
    id: '73',
    name: 'AdCopy',
    slug: 'adCopy',
    category: 'Marketing',
    description: 'AdCopy generates high-converting ad copy using AI for various platforms like Google, Facebook, and Instagram.',
    capabilities: ['Ad copy generation', 'A/B testing', 'Performance optimization'],
    releaseDate: '2022-04-05',
    company: 'AdCopy AI',
    imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    featured: false,
    demoUrl: 'https://adcopy.ai/',
    usage: `1. Visit https://adcopy.ai/ and create an account.
  2. Select the platform (e.g., Google Ads, Facebook).
  3. Enter your product or service information.
  4. Let the AI generate optimized ad text and run A/B tests.`,
    accessType: 'Paid',
    examples: [
      'Create 5 ad variations for a summer shoe sale.',
      'Test emotional vs. logical copy angles.',
      'Generate localized ads for international campaigns.'
    ]
  },
  {
    id: '74',
    name: 'Predis AI',
    slug: 'predis AI',
    category: 'Marketing',
    description: 'Predis AI helps create social media content, captions, and creatives automatically with AI.',
    capabilities: ['Social media content generation', 'Hashtag suggestions', 'AI video generation'],
    releaseDate: '2022-01-15',
    company: 'Predis.ai',
    imageUrl: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    featured: false,
    demoUrl: 'https://predis.ai/',
    usage: `1. Go to https://predis.ai/ and sign up.
  2. Connect your social accounts.
  3. Use the AI dashboard to generate posts and captions.
  4. Review, edit, and schedule content directly from the platform.`,
    accessType: 'Partially Free',
    examples: [
      'Generate daily Instagram posts for a clothing brand.',
      'Create a week of captions for a fitness account.',
      'Use AI to suggest trending hashtags and video formats.'
    ]
  },
  {
    id: '75',
    name: 'Howler AI',
    slug: 'howler AI',
    category: 'Marketing',
    description: 'Howler AI crafts compelling cold emails and outreach campaigns using natural language AI.',
    capabilities: ['Cold email writing', 'Campaign automation', 'Lead engagement'],
    releaseDate: '2023-02-08',
    company: 'Howler AI',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    featured: true,
    demoUrl: 'https://www.howler.ai/',
    usage: `1. Go to https://www.howler.ai/ and sign up.
  2. Import your leads and select outreach goals.
  3. Generate customized cold emails for each contact.
  4. Automate follow-ups and track responses.`,
    accessType: 'Paid',
    examples: [
      'Write a cold outreach email for a SaaS tool.',
      'Automate a 3-step email sequence for investor outreach.',
      'A/B test different email intros for higher engagement.'
    ]
  },
  {
    id: '76',
    name: 'Blaze AI',
    slug: 'blaze AI',
    category: 'Marketing',
    description: 'Blaze AI is a social media assistant that generates viral content and captions in seconds.',
    capabilities: ['AI caption writing', 'Viral trend analysis', 'Content planner'],
    releaseDate: '2023-05-10',
    company: 'Blaze AI',
    imageUrl: 'https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg',
    featured: false,
    demoUrl: 'https://www.blazeai.xyz/',
    usage: `1. Visit https://www.blazeai.xyz/ and register.
  2. Describe the topic or upload a link.
  3. Let the AI generate a viral-style post or caption.
  4. Copy or schedule content to your platform.`,
    accessType: 'Partially Free',
    examples: [
      'Generate a trending TikTok caption.',
      'Write a LinkedIn post on AI trends.',
      'Get Twitter threads auto-written from blog posts.'
    ]
  },
  {
    id: '77',
    name: 'AdCreative',
    slug: 'adCreative',
    category: 'Marketing',
    description: 'AdCreative.ai generates ad creatives and banners using AI for multiple ad platforms.',
    capabilities: ['Creative design', 'Banner generation', 'Conversion tracking'],
    releaseDate: '2021-12-20',
    company: 'AdCreative.ai',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    featured: true,
    demoUrl: 'https://www.adcreative.ai/',
    usage: `1. Visit https://www.adcreative.ai/ and log in.
  2. Connect your ad platform accounts.
  3. Choose a campaign type and provide brand assets.
  4. AI will generate banners and creatives automatically.`,
    accessType: 'Paid',
    examples: [
      'Create 10 ad banners for a product launch.',
      'Design Facebook ad creatives in minutes.',
      'Test multiple creative versions for ROI.'
    ]
  },
  {
    id: '78',
    name: 'Metricool',
    slug: 'metricool',
    category: 'Social Networks',
    description: 'Metricool is an all-in-one social media analytics and planning tool with automation and AI insights.',
    capabilities: ['Social media analytics', 'Post scheduling', 'Competitor tracking'],
    releaseDate: '2020-07-14',
    company: 'Metricool',
    imageUrl: 'https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg',
    featured: true,
    demoUrl: 'https://metricool.com/',
    usage: `1. Go to https://metricool.com/ and sign up.
  2. Connect your social accounts (Instagram, Twitter, LinkedIn, etc.).
  3. Use the dashboard to view analytics and schedule posts.
  4. Leverage AI-powered suggestions for content timing and hashtags.`,
    accessType: 'Partially Free',
    examples: [
      'Analyze Instagram engagement metrics for last month.',
      'Schedule posts for the upcoming product launch.',
      'Monitor your competitors’ social performance.'
    ]
  },
  {
    id: '79',
    name: 'Postwise',
    slug: 'postwise',
    category: 'Social Networks',
    description: 'Postwise is an AI writer for Twitter that helps you grow and engage your audience with optimized tweets.',
    capabilities: ['Tweet generation', 'Thread creation', 'Growth analytics'],
    releaseDate: '2023-02-01',
    company: 'Postwise',
    imageUrl: 'https://images.pexels.com/photos/6476258/pexels-photo-6476258.jpeg',
    featured: false,
    demoUrl: 'https://postwise.ai/',
    usage: `1. Visit https://postwise.ai/ and create an account.
  2. Input your topic or niche and let the AI write tweets.
  3. Organize content into threads or scheduled posts.
  4. Use built-in analytics to optimize future posts.`,
    accessType: 'Paid',
    examples: [
      'Create a viral Twitter thread on AI tools.',
      'Generate 30 days of scheduled tweets about finance.',
      'Rewrite tweets to boost engagement rate.'
    ]
  },
  {
    id: '80',
    name: 'Tribescaler',
    slug: 'tribescaler',
    category: 'Social Networks',
    description: 'Tribescaler helps you write viral hooks and improve your tweets for better reach and engagement.',
    capabilities: ['Hook generation', 'Viral content rewriting', 'Engagement boosting'],
    releaseDate: '2022-10-25',
    company: 'Tribescaler',
    imageUrl: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
    featured: false,
    demoUrl: 'https://tribescaler.com/',
    usage: `1. Go to https://tribescaler.com/ and sign up.
  2. Paste your tweet idea or topic.
  3. Let the AI suggest viral hook versions.
  4. Choose and post the best-performing ones.`,
    accessType: 'Paid',
    examples: [
      'Rewrite a tweet to make it more clickable.',
      'Generate 10 hooks for a productivity thread.',
      'Turn a blog post headline into a viral tweet intro.'
    ]
  },
  {
    id: '81',
    name: 'TweetHunter',
    slug: 'tweetHunter',
    category: 'Social Networks',
    description: 'TweetHunter is a Twitter growth tool that helps create, schedule, and optimize tweets with AI.',
    capabilities: ['Tweet scheduling', 'Content inspiration', 'AI replies'],
    releaseDate: '2022-04-11',
    company: 'TweetHunter',
    imageUrl: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    featured: false,
    demoUrl: 'https://tweethunter.io/',
    usage: `1. Sign up at https://tweethunter.io/.
  2. Use the inspiration library or write your own tweets.
  3. Use AI suggestions to improve engagement.
  4. Schedule tweets and track performance metrics.`,
    accessType: 'Paid',
    examples: [
      'Generate 7 tweets per week for your brand.',
      'Optimize a thread on startup tips.',
      'Set auto-replies to grow your network.'
    ]
  },
  {
    id: '82',
    name: 'Typefully',
    slug: 'typefully',
    category: 'Social Networks',
    description: 'Typefully is a powerful tool for writing and publishing Twitter threads with real-time collaboration.',
    capabilities: ['Thread writing', 'Real-time editing', 'Engagement metrics'],
    releaseDate: '2021-09-20',
    company: 'Typefully',
    imageUrl: 'https://images.pexels.com/photos/3201146/pexels-photo-3201146.jpeg',
    featured: true,
    demoUrl: 'https://typefully.com/',
    usage: `1. Visit https://typefully.com/ and sign in with Twitter.
  2. Start writing a tweet or thread in the editor.
  3. Use collaboration mode to get input from teammates.
  4. Publish or schedule with optimal timing suggestions.`,
    accessType: 'Partially Free',
    examples: [
      'Draft a full thread about product design tips.',
      'Collaborate with your co-founder on startup tweets.',
      'Schedule a tweetstorm for Monday morning.'
    ]
  },
  {
    id: '83',
    name: 'Codeium',
    slug: 'codeium',
    category: 'Coding',
    description: 'Codeium is a free AI-powered code completion tool supporting multiple programming languages.',
    capabilities: ['Code completion', 'Intelligent suggestions', 'IDE integration'],
    releaseDate: '2022-08-10',
    company: 'Codeium',
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
    featured: true,
    demoUrl: 'https://codeium.com/',
    usage: `1. Visit https://codeium.com/ and install the extension for your IDE (VS Code, JetBrains, etc.).
  2. Sign up and link your account if required.
  3. Start typing code; suggestions will appear automatically.
  4. Accept or modify suggestions using keyboard shortcuts.`,
    accessType: 'Free',
    examples: [
      'Auto-complete JavaScript functions in VS Code.',
      'Get Python snippets for data analysis.',
      'Generate boilerplate code in seconds.'
    ]
  },
  {
    id: '84',
    name: 'Continue',
    slug: 'continue',
    category: 'Coding',
    description: 'Continue is an open-source Copilot alternative for code generation and auto-suggestions.',
    capabilities: ['Inline code suggestions', 'Multi-language support', 'Self-hosting available'],
    releaseDate: '2023-03-05',
    company: 'Continue.dev',
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
    featured: false,
    demoUrl: 'https://continue.dev/',
    usage: `1. Go to https://continue.dev/ and follow installation instructions.
  2. Integrate with your IDE (VS Code preferred).
  3. Start typing code, and Continue will provide inline suggestions.
  4. Use self-hosted or cloud version as preferred.`,
    accessType: 'Free',
    examples: [
      'Write React components faster with suggestions.',
      'Generate SQL queries based on plain English.',
      'Use open-source models for secure coding.'
    ]
  },
  {
    id: '85',
    name: 'V0.dev',
    slug: 'V0.dev',
    category: 'Coding',
    description: 'V0.dev by Vercel lets you generate React/Next.js UI components using natural language prompts.',
    capabilities: ['UI component generation', 'React/Next.js support', 'Tailwind integration'],
    releaseDate: '2023-11-15',
    company: 'Vercel',
    imageUrl: 'https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg',
    featured: true,
    demoUrl: 'https://v0.dev/',
    usage: `1. Navigate to https://v0.dev/.
  2. Type a prompt like "Create a pricing table UI with three plans".
  3. Preview and copy the generated Tailwind + React code.
  4. Paste directly into your project to use.`,
    accessType: 'Free',
    examples: [
      'Generate a responsive navbar in seconds.',
      'Design a blog layout with dark mode support.',
      'Create feature cards using Tailwind CSS.'
    ]
  },
  {
    id: '86',
    name: 'CadeWP',
    slug: 'cadeWP',
    category: 'Coding',
    description: 'CadeWP is an AI-based WordPress code assistant that helps automate PHP, JS, and CSS development.',
    capabilities: ['WordPress plugin coding', 'Theme customization', 'Code suggestions'],
    releaseDate: '2022-09-01',
    company: 'CadeWP',
    imageUrl: 'https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg',
    featured: false,
    demoUrl: 'https://cadewp.com/',
    usage: `1. Visit https://cadewp.com/ and log in or register.
  2. Start a coding session in the CadeWP dashboard.
  3. Describe what you want to create (e.g., "a custom post type plugin").
  4. Copy the generated code into your WordPress site.`,
    accessType: 'Paid',
    examples: [
      'Generate a WordPress plugin for custom user roles.',
      'Create CSS tweaks for mobile responsiveness.',
      'Automate shortcodes with AI.'
    ]
  },
  {
    id: '87',
    name: 'Refraction',
    slug: 'refraction',
    category: 'Coding',
    description: 'Refraction is an AI tool that generates and refactors code based on natural language instructions.',
    capabilities: ['Code generation', 'Bug fixing', 'Language translation'],
    releaseDate: '2023-01-18',
    company: 'Refraction AI',
    imageUrl: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
    featured: false,
    demoUrl: 'https://refraction.dev/',
    usage: `1. Open https://refraction.dev/ in your browser.
  2. Choose your language (Python, JavaScript, etc.).
  3. Enter natural language instructions for what code you need.
  4. Review and copy the generated or refactored code.`,
    accessType: 'Partially Free',
    examples: [
      'Convert a JavaScript function to Python.',
      'Fix bugs in a recursive function.',
      'Generate SQL queries from plain English.'
    ]
  },
  {
    id: '88',
    name: 'FluentlyAI',
    slug: 'fluentlyAI',
    category: 'Speech to Text',
    description: 'FluentlyAI offers real-time transcription and AI summaries for meetings and calls.',
    capabilities: ['Real-time transcription', 'Meeting summaries', 'Multi-language support'],
    releaseDate: '2023-06-01',
    company: 'FluentlyAI Inc.',
    imageUrl: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    featured: false,
    demoUrl: 'https://fluently.ai/',
    usage: `1. Visit https://fluently.ai/ and sign up.
  2. Connect your Zoom, Google Meet, or upload audio files.
  3. Get real-time transcription and summary right after the session.
  4. Download or share transcripts via email or export.`,
    accessType: 'Partially Free',
    examples: [
      'Transcribe a Zoom team meeting automatically.',
      'Get a concise summary of a 1-hour call.',
      'Translate the transcript into Spanish.'
    ]
  },
  {
    id: '89',
    name: 'Cockatoo',
    slug: 'cockatoo',
    category: 'Speech to Text',
    description: 'Cockatoo provides fast, accurate voice transcription powered by AI and deep learning.',
    capabilities: ['Audio transcription', 'File uploads', 'Speaker separation'],
    releaseDate: '2022-11-25',
    company: 'Cockatoo AI',
    imageUrl: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg',
    featured: false,
    demoUrl: 'https://www.cockatoo.com/',
    usage: `1. Go to https://www.cockatoo.com/ and create an account.
  2. Upload your audio or video files.
  3. Select transcription options (language, speaker tags).
  4. Receive and download the transcript within minutes.`,
    accessType: 'Paid',
    examples: [
      'Convert podcast episodes into text.',
      'Identify speakers in interview recordings.',
      'Generate subtitles for YouTube videos.'
    ]
  },
  {
    id: '90',
    name: 'WhisperUI',
    slug: 'whisperUI',
    category: 'Speech to Text',
    description: 'WhisperUI is a user-friendly interface for OpenAI’s Whisper model, enabling high-accuracy speech transcription.',
    capabilities: ['Whisper integration', 'Offline processing', 'Batch transcription'],
    releaseDate: '2023-02-19',
    company: 'WhisperUI Devs',
    imageUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    featured: true,
    demoUrl: 'https://whisperui.dev/',
    usage: `1. Visit https://whisperui.dev/.
  2. Drag and drop your audio/video files.
  3. Choose model size and output format.
  4. Start transcription and download results.`,
    accessType: 'Free',
    examples: [
      'Transcribe interviews offline with Whisper.',
      'Use different Whisper model sizes for speed/accuracy.',
      'Get .srt subtitle files from audio.'
    ]
  },
  {
    id: '91',
    name: 'AddemblyAI',
    slug: 'addemblyAI',
    category: 'Speech to Text',
    description: 'AddemblyAI provides accurate speech recognition and transcription with powerful APIs.',
    capabilities: ['API access', 'Keyword detection', 'Real-time transcription'],
    releaseDate: '2021-08-10',
    company: 'AssemblyAI',
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    featured: false,
    demoUrl: 'https://www.assemblyai.com/',
    usage: `1. Visit https://www.assemblyai.com/ and get your API key.
  2. Send audio via their API using documentation.
  3. Receive transcriptions, keyword highlights, and topics.
  4. Integrate it into your app or dashboard.`,
    accessType: 'Partially Free',
    examples: [
      'Integrate transcription into your app.',
      'Detect important keywords from phone calls.',
      'Build searchable transcripts from webinars.'
    ]
  },
  {
    id: '92',
    name: 'SpeechPulse',
    slug: 'speechPulse',
    category: 'Speech to Text',
    description: 'SpeechPulse offers accurate speech-to-text for enterprise use, with speaker diarization and analytics.',
    capabilities: ['Enterprise-grade transcription', 'Speaker diarization', 'Analytics dashboard'],
    releaseDate: '2023-07-12',
    company: 'SpeechPulse AI',
    imageUrl: 'https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg',
    featured: false,
    demoUrl: 'https://speechpulse.ai/',
    usage: `1. Visit https://speechpulse.ai/ and register your company account.
  2. Upload files or stream live conversations.
  3. View transcripts, speaker breakdown, and analytics.
  4. Export to Excel, PDF, or sync with cloud services.`,
    accessType: 'Paid',
    examples: [
      'Generate transcripts from corporate calls.',
      'Analyze speaking time per participant.',
      'Export transcripts to Excel with time codes.'
    ]
  },
  {
    id: '93',
    name: 'GPTZero',
    slug: 'GPTZero',
    category: 'AI Detector',
    description: 'GPTZero detects AI-generated text with high accuracy and is widely used by educators.',
    capabilities: ['AI text detection', 'Highlight AI-written parts', 'Batch analysis'],
    releaseDate: '2023-01-03',
    company: 'GPTZero',
    imageUrl: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg',
    featured: true,
    demoUrl: 'https://gptzero.me/',
    usage: `1. Go to https://gptzero.me/.
  2. Paste or upload the text/document you want to check.
  3. Click “Detect Text” and wait for the analysis.
  4. Review AI probability and highlighted areas.`,
    accessType: 'Free',
    examples: [
      'Check if a student essay was AI-written.',
      'Analyze AI use in business reports.',
      'Review large documents with batch uploads.'
    ]
  },
  {
    id: '94',
    name: 'Wordtune',
    slug: 'wordtune',
    category: 'AI Detector',
    description: 'Wordtune is a writing assistant that also includes AI content detection and rewriting features.',
    capabilities: ['AI rewriter', 'Tone control', 'AI content suggestions'],
    releaseDate: '2022-04-15',
    company: 'AI21 Labs',
    imageUrl: 'https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg',
    featured: false,
    demoUrl: 'https://www.wordtune.com/',
    usage: `1. Visit https://www.wordtune.com/ and log in.
  2. Paste or write your content in the editor.
  3. Use suggestions or rewriting tools to refine the content.
  4. Use AI detection insights when rewriting.`,
    accessType: 'Partially Free',
    examples: [
      'Rewrite text to sound more human.',
      'Adjust the tone from casual to formal.',
      'Detect robotic-sounding text and improve it.'
    ]
  },
  {
    id: '95',
    name: 'Copyleaks',
    slug: 'copyleaks',
    category: 'AI Detector',
    description: 'Copyleaks offers advanced plagiarism and AI-generated content detection tools for institutions and publishers.',
    capabilities: ['AI content detection', 'Plagiarism scan', 'LMS integration'],
    releaseDate: '2021-10-12',
    company: 'Copyleaks Inc.',
    imageUrl: 'https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg',
    featured: false,
    demoUrl: 'https://copyleaks.com/',
    usage: `1. Visit https://copyleaks.com/ and sign up.
  2. Upload your file or paste the content.
  3. Choose between plagiarism or AI detection scan.
  4. Review the detailed report with matched sources.`,
    accessType: 'Partially Free',
    examples: [
      'Detect ChatGPT-written content in assignments.',
      'Scan published articles for originality.',
      'Integrate detection into an LMS or CMS.'
    ]
  },
  {
    id: '96',
    name: 'BypassGPT',
    slug: 'bypassGPT',
    category: 'AI Detector',
    description: 'BypassGPT detects and rewrites AI-generated text to make it undetectable by common detectors.',
    capabilities: ['AI detection', 'Bypass AI detectors', 'Text rewriting'],
    releaseDate: '2023-08-20',
    company: 'BypassGPT',
    imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    featured: false,
    demoUrl: 'https://www.bypassgpt.ai/',
    usage: `1. Go to https://www.bypassgpt.ai/.
  2. Paste the suspected AI-generated text.
  3. Click “Rewrite” to humanize the content.
  4. Copy or download the rewritten version.`,
    accessType: 'Paid',
    examples: [
      'Humanize AI-generated essays.',
      'Bypass GPTZero or Turnitin checks.',
      'Rewrite AI text for social media posts.'
    ]
  },
  {
    id: '97',
    name: 'Grammarly',
    slug: 'grammarly',
    category: 'AI Detector',
    description: 'Grammarly helps with grammar and clarity while detecting AI-written content in premium plans.',
    capabilities: ['Grammar checking', 'Tone analysis', 'AI content insight'],
    releaseDate: '2018-05-30',
    company: 'Grammarly Inc.',
    imageUrl: 'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg',
    featured: true,
    demoUrl: 'https://www.grammarly.com/',
    usage: `1. Visit https://www.grammarly.com/ and install the extension or use the web editor.
  2. Log in and upload or type your text.
  3. Use writing suggestions and check for AI signals (premium feature).
  4. Export or copy the improved version.`,
    accessType: 'Partially Free',
    examples: [
      'Enhance clarity in AI-generated text.',
      'Use tone suggestions for essays.',
      'Detect AI-written content in business writing.'
    ]
  },
  {
    id: '98',
    name: 'Udio',
    slug: 'udio',
    category: 'Voice',
    description: 'Udio is an AI music generation tool that allows users to create full songs with vocals from text prompts.',
    capabilities: ['AI music generation', 'Custom vocals', 'Genre selection'],
    releaseDate: '2024-04-10',
    company: 'Udio AI',
    imageUrl: 'https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg',
    featured: true,
    demoUrl: 'https://www.udio.com/',
    usage: `1. Go to https://www.udio.com/ and sign up.
  2. Enter a description of the song you want to generate.
  3. Choose the style, genre, and vocal preferences.
  4. Click “Create” and wait for your AI-generated song.`,
    accessType: 'Free',
    examples: [
      'Create a pop song about summer vacation.',
      'Generate background music for a YouTube video.',
      'Make a birthday song with personalized lyrics.'
    ]
  },
  {
    id: '99',
    name: 'Suno AI',
    slug: 'suno AI',
    category: 'Voice',
    description: 'Suno AI is a platform for generating realistic singing voices and complete songs using AI.',
    capabilities: ['Voice synthesis', 'AI singing', 'Multilingual vocals'],
    releaseDate: '2024-03-15',
    company: 'Suno Inc.',
    imageUrl: 'https://images.pexels.com/photos/164716/pexels-photo-164716.jpeg',
    featured: true,
    demoUrl: 'https://suno.ai/',
    usage: `1. Visit https://suno.ai/ and log in.
  2. Describe the type of voice or music you want.
  3. Adjust parameters like mood and genre.
  4. Generate and download the song or vocal sample.`,
    accessType: 'Partially Free',
    examples: [
      'Generate a rock song with AI vocals.',
      'Produce choral vocals for a video project.',
      'Create multilingual songs from prompts.'
    ]
  },
  {
    id: '100',
    name: 'VEED.IO',
    slug: 'VEED.IO',
    category: 'Voice',
    description: 'VEED.IO offers a wide range of video editing tools, including AI voiceovers and audio transcription.',
    capabilities: ['AI voiceover', 'Video editing', 'Speech-to-text'],
    releaseDate: '2019-10-01',
    company: 'VEED Ltd.',
    imageUrl: 'https://images.pexels.com/photos/67654/pexels-photo-67654.jpeg',
    featured: false,
    demoUrl: 'https://www.veed.io/',
    usage: `1. Go to https://www.veed.io/ and upload your video.
  2. Use the voiceover tool to add AI-generated narration.
  3. You can also transcribe speech into text automatically.
  4. Edit and export the final video.`,
    accessType: 'Partially Free',
    examples: [
      'Add narration to product demo videos.',
      'Transcribe podcasts for accessibility.',
      'Generate voiceovers in different accents.'
    ]
  },
  {
    id: '101',
    name: 'Speechtify',
    slug: 'speechtify',
    category: 'Voice',
    description: 'Speechtify is an AI-powered text-to-speech platform with realistic voices for multiple languages.',
    capabilities: ['Text-to-speech', 'Voice cloning', 'Multilingual support'],
    releaseDate: '2023-06-25',
    company: 'Speechtify AI',
    imageUrl: 'https://images.pexels.com/photos/258004/pexels-photo-258004.jpeg',
    featured: false,
    demoUrl: 'https://www.speechtify.com/',
    usage: `1. Visit https://www.speechtify.com/ and sign in.
  2. Paste your text into the editor.
  3. Choose a voice, language, and speed settings.
  4. Click “Generate” and download your audio.`,
    accessType: 'Free',
    examples: [
      'Convert blog posts to spoken audio.',
      'Generate voice messages for customer support.',
      'Make multilingual announcements.'
    ]
  },
  {
    id: '102',
    name: 'ElevenLabs',
    slug: 'elevenLabs',
    category: 'Voice',
    description: 'ElevenLabs provides advanced AI voice synthesis with ultra-realistic speech and voice cloning features.',
    capabilities: ['Voice cloning', 'Realistic TTS', 'Emotional speech synthesis'],
    releaseDate: '2022-09-12',
    company: 'ElevenLabs Inc.',
    imageUrl: 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg',
    featured: true,
    demoUrl: 'https://www.elevenlabs.io/',
    usage: `1. Go to https://www.elevenlabs.io/ and log in.
  2. Upload or clone a voice, or use a prebuilt one.
  3. Enter your text and choose emotional settings.
  4. Generate and export the audio file.`,
    accessType: 'Partially Free',
    examples: [
      'Clone your own voice for content creation.',
      'Generate lifelike audiobooks.',
      'Add emotional tone to dialogue in games.'
    ]
  },
  {
    id: '103',
    name: 'Alva',
    slug: 'alva',
    category: 'WEB3',
    description: 'Alva is a Web3-native AI assistant that helps users navigate decentralized applications and protocols.',
    capabilities: ['Web3 assistant', 'Smart contract interaction', 'DeFi support'],
    releaseDate: '2023-08-01',
    company: 'Alva AI',
    imageUrl: 'https://images.pexels.com/photos/6779531/pexels-photo-6779531.jpeg',
    featured: true,
    demoUrl: 'https://alva.xyz/',
    usage: `1. Visit https://alva.xyz/ and connect your wallet.
  2. Use the AI assistant to query DeFi protocols or NFT data.
  3. Receive real-time insights and take actions directly via prompts.
  4. Explore dashboards and on-chain metrics.`,
    accessType: 'Free',
    examples: [
      'Analyze token performance across DeFi platforms.',
      'Get summaries of NFT ownership and trends.',
      'Interact with smart contracts using natural language.'
    ]
  },
  {
    id: '104',
    name: 'Alethea',
    slug: 'alethea',
    category: 'WEB3',
    description: 'Alethea is a decentralized protocol for creating and trading interactive AI characters on the blockchain.',
    capabilities: ['AI character creation', 'NFT integration', 'Conversational agents'],
    releaseDate: '2022-11-10',
    company: 'Alethea AI',
    imageUrl: 'https://images.pexels.com/photos/7275470/pexels-photo-7275470.jpeg',
    featured: true,
    demoUrl: 'https://alethea.ai/',
    usage: `1. Go to https://alethea.ai/ and sign in with your wallet.
  2. Create or customize your AI character as an NFT.
  3. Interact with characters using natural conversations.
  4. Trade, train, or showcase your characters in dApps.`,
    accessType: 'Partially Free',
    examples: [
      'Create a talking AI NFT for your Web3 profile.',
      'Buy and trade AI avatars on marketplaces.',
      'Use intelligent agents in metaverse environments.'
    ]
  },
  {
    id: '105',
    name: 'Adot AI',
    slug: 'adot AI',
    category: 'WEB3',
    description: 'Adot AI enables on-chain governance and analytics using AI to support DAO decision-making.',
    capabilities: ['DAO analytics', 'Governance automation', 'Proposal insights'],
    releaseDate: '2023-04-17',
    company: 'Adot Labs',
    imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg',
    featured: false,
    demoUrl: 'https://adot.ai/',
    usage: `1. Visit https://adot.ai/ and link your wallet.
  2. View active proposals in DAOs you belong to.
  3. Use AI to understand implications and optimize voting.
  4. Track governance participation and outcomes.`,
    accessType: 'Free',
    examples: [
      'Summarize DAO proposals before voting.',
      'Analyze sentiment around governance decisions.',
      'Optimize treasury allocations using AI models.'
    ]
  },
  {
    id: '106',
    name: 'Spice AI',
    slug: 'spice AI',
    category: 'WEB3',
    description: 'Spice AI helps developers build data-driven Web3 apps with integrated AI models and blockchain datasets.',
    capabilities: ['AI for Web3 devs', 'Blockchain data indexing', 'Time-series analysis'],
    releaseDate: '2023-05-29',
    company: 'Spice AI',
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
    featured: false,
    demoUrl: 'https://spice.ai/',
    usage: `1. Go to https://spice.ai/ and explore developer docs.
  2. Use the CLI to pull and analyze blockchain data.
  3. Integrate AI models for predictions in your dApp.
  4. Deploy queries and dashboards for real-time use.`,
    accessType: 'Free',
    examples: [
      'Forecast gas prices based on past behavior.',
      'Build dashboards of user activity across chains.',
      'Apply ML models to DeFi lending data.'
    ]
  },
  {
    id: '107',
    name: 'LIKN',
    slug: 'LIKN',
    category: 'WEB3',
    description: 'LIKN is an AI-integrated Web3 identity layer, enabling personalized interactions and on-chain identity.',
    capabilities: ['Web3 identity', 'Personalized UX', 'Data sovereignty'],
    releaseDate: '2023-12-02',
    company: 'LIKN Protocol',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
    featured: false,
    demoUrl: 'https://likn.xyz/',
    usage: `1. Visit https://likn.xyz/ and connect your crypto wallet.
  2. Set up your decentralized identity (DID).
  3. Train your AI profile on interactions and preferences.
  4. Use your identity across Web3 apps with contextual AI help.`,
    accessType: 'Free',
    examples: [
      'Create a persistent Web3 identity with AI memory.',
      'Log in to dApps with personalized assistants.',
      'Manage your data visibility and usage rights.'
    ]
  },
  {
    id: '108',
    name: 'Khanmigo',
    slug: 'khanmigo',
    category: 'Education',
    description: "Khanmigo is Khan Academy's AI-powered tutor and teaching assistant, built on GPT-4.",
    capabilities: ['Interactive tutoring', 'Homework help', 'Lesson explanations'],
    releaseDate: '2023-03-14',
    company: 'Khan Academy',
    imageUrl: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg',
    featured: false,
    paperUrl: 'https://blog.khanacademy.org/meet-khanmigo-khans-experimental-ai-guide/',
    usage: `Use Khanmigo through Khan Academy:
  1. Visit https://www.khanacademy.org/khan-labs.
  2. Log in or create a Khan Academy account.
  3. Apply to join the Khanmigo beta program.
  4. Access tutoring and explanations directly inside learning modules.`,
    accessType: 'Partially Free',
    examples: [
      'Get step-by-step help with algebra problems.',
      'Ask for an explanation of Newton’s laws.',
      'Get writing feedback on an essay draft.'
    ]
  },
  {
    id: '109',
    name: 'Socratic by Google',
    slug: 'socratic by Google',
    category: 'Education',
    description: "Socratic is a Google-powered AI app that helps students solve problems and understand concepts via AI explanations.",
    capabilities: ['Homework solver', 'Concept breakdowns', 'Visual explanations'],
    releaseDate: '2020-08-10',
    company: 'Google',
    imageUrl: 'https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg',
    featured: false,
    paperUrl: 'https://socratic.org/',
    usage: `Use Socratic on mobile devices:
  1. Download Socratic from the iOS or Android store.
  2. Open the app and log in with a Google account.
  3. Take a photo of your question or type it in.
  4. Get explanations, answers, and related resources.`,
    accessType: 'Free',
    examples: [
      'Scan a chemistry problem and get a step-by-step explanation.',
      'Type in a math equation and receive visual help.',
      'Learn history facts with links to sources.'
    ]
  },
  {
    id: '110',
    name: 'Querium',
    slug: 'querium',
    category: 'Education',
    description: "Querium uses AI to deliver personalized STEM tutoring and skills development for students and professionals.",
    capabilities: ['STEM tutoring', 'Skills assessment', 'Step-by-step coaching'],
    releaseDate: '2016-06-01',
    company: 'Querium',
    imageUrl: 'https://images.pexels.com/photos/4145192/pexels-photo-4145192.jpeg',
    featured: false,
    paperUrl: 'https://www.querium.com/',
    usage: `Access Querium via institutional or direct login:
  1. Visit https://www.querium.com/.
  2. Create an account or log in through your school.
  3. Choose a subject like math or physics.
  4. Complete adaptive lessons and receive AI coaching.`,
    accessType: 'Paid',
    examples: [
      'Get AI help with solving algebraic expressions.',
      'Receive real-time feedback on calculus problems.',
      'Prepare for STEM exams with personalized training.'
    ]
  },
  {
    id: '111',
    name: 'Knowji',
    slug: 'knowji',
    category: 'Education',
    description: "Knowji is an AI-powered vocabulary learning app using spaced repetition and intelligent tracking.",
    capabilities: ['Vocabulary learning', 'Spaced repetition', 'Pronunciation training'],
    releaseDate: '2018-01-05',
    company: 'Knowji Inc.',
    imageUrl: 'https://images.pexels.com/photos/4145194/pexels-photo-4145194.jpeg',
    featured: false,
    paperUrl: 'https://www.knowji.com/',
    usage: `Learn words with Knowji:
  1. Download the Knowji app from your mobile store.
  2. Choose a vocabulary pack or course.
  3. Practice with intelligent flashcards and quizzes.
  4. Track your progress and review weak areas.`,
    accessType: 'Paid',
    examples: [
      'Master SAT vocabulary words efficiently.',
      'Learn pronunciation through audio examples.',
      'Track retention with AI-based scheduling.'
    ]
  },
  {
    id: '112',
    name: 'TutorAI',
    slug: 'tutorAI',
    category: 'Education',
    description: "TutorAI is a virtual tutor that helps users learn any subject by generating customized, readable lessons using AI.",
    capabilities: ['Lesson generation', 'Subject guidance', 'Conversational teaching'],
    releaseDate: '2023-01-20',
    company: 'TutorAI',
    imageUrl: 'https://images.pexels.com/photos/4144293/pexels-photo-4144293.jpeg',
    featured: true,
    paperUrl: 'https://tutorai.me/',
    usage: `Start learning on TutorAI:
  1. Go to https://tutorai.me/.
  2. Type a topic you want to learn (e.g., “quantum mechanics”).
  3. Read the generated lesson and ask follow-up questions.
  4. Navigate deeper based on curiosity or need.`,
    accessType: 'Free',
    examples: [
      'Learn the basics of photosynthesis.',
      'Study the causes of World War I.',
      'Understand the structure of DNA with explanations.'
    ]
  },
  {
    id: '113',
    name: 'Obviously AI',
    slug: 'obviously AI',
    category: 'Data Analysis',
    description: "Obviously AI enables non-technical users to run machine learning predictions on their data using natural language.",
    capabilities: ['No-code predictions', 'Data import & analysis', 'Automated ML modeling'],
    releaseDate: '2020-02-01',
    company: 'Obviously AI',
    imageUrl: 'https://images.pexels.com/photos/6693650/pexels-photo-6693650.jpeg',
    featured: true,
    paperUrl: 'https://www.obviously.ai/',
    usage: `Use Obviously AI via web interface:
  1. Sign up at https://www.obviously.ai/.
  2. Upload your CSV or connect a data source.
  3. Ask questions in plain English (e.g., "What affects customer churn?").
  4. Receive predictions, visualizations, and downloadable results.`,
    accessType: 'Partially Free',
    examples: [
      'Predict which customers are likely to churn.',
      'Identify key factors impacting sales.',
      'Build ML models without coding.'
    ]
  },
  {
    id: '114',
    name: 'MonkeyLearn',
    slug: 'monkeyLearn',
    category: 'Data Analysis',
    description: "MonkeyLearn helps users extract insights from text data using AI-powered no-code tools and dashboards.",
    capabilities: ['Text classification', 'Sentiment analysis', 'Custom AI models'],
    releaseDate: '2019-06-15',
    company: 'MonkeyLearn',
    imageUrl: 'https://images.pexels.com/photos/6693567/pexels-photo-6693567.jpeg',
    featured: false,
    paperUrl: 'https://monkeylearn.com/',
    usage: `Use MonkeyLearn for text data analysis:
  1. Visit https://monkeylearn.com/.
  2. Upload your data or connect to integrations (e.g., Google Sheets).
  3. Apply pre-built models or train your own.
  4. Visualize and export analysis results.`,
    accessType: 'Partially Free',
    examples: [
      'Analyze customer reviews for sentiment.',
      'Categorize support tickets by topic.',
      'Build custom classifiers for product feedback.'
    ]
  },
  {
    id: '115',
    name: 'Polymer',
    slug: 'polymer',
    category: 'Data Analysis',
    description: "Polymer AI turns spreadsheets into dynamic dashboards and searchable databases using AI.",
    capabilities: ['Data visualization', 'Dashboard generation', 'Searchable interfaces'],
    releaseDate: '2022-03-20',
    company: 'Polymer Search',
    imageUrl: 'https://images.pexels.com/photos/6693539/pexels-photo-6693539.jpeg',
    featured: false,
    paperUrl: 'https://www.polymersearch.com/',
    usage: `Turn your data into dashboards:
  1. Go to https://www.polymersearch.com/.
  2. Upload your spreadsheet or data file.
  3. Polymer auto-generates dashboards and search tools.
  4. Filter, explore, and present insights without coding.`,
    accessType: 'Free',
    examples: [
      'Create dashboards from sales data.',
      'Explore survey results with filters.',
      'Search customer data visually.'
    ]
  },
  {
    id: '116',
    name: 'Tangent Works',
    slug: 'tangent Works',
    category: 'Data Analysis',
    description: "Tangent Works offers InstantML, an AI engine for time series forecasting and anomaly detection with minimal configuration.",
    capabilities: ['Time series forecasting', 'Anomaly detection', 'AutoML'],
    releaseDate: '2021-07-01',
    company: 'Tangent Works',
    imageUrl: 'https://images.pexels.com/photos/6693595/pexels-photo-6693595.jpeg',
    featured: false,
    paperUrl: 'https://www.tangent.works/',
    usage: `Use InstantML via Tangent Works:
  1. Register at https://www.tangent.works/.
  2. Upload time series data or connect via API.
  3. Configure parameters or use defaults.
  4. Get real-time forecasts and anomaly insights.`,
    accessType: 'Paid',
    examples: [
      'Forecast energy consumption for next month.',
      'Detect anomalies in server metrics.',
      'Predict stock demand trends.'
    ]
  },
  {
    id: '117',
    name: 'IBM Watson Studio',
    slug: 'IBM Watson Studio',
    category: 'Data Analysis',
    description: "IBM Watson Studio is a powerful AI platform for building, training, and deploying models across enterprise data.",
    capabilities: ['Model training', 'Data visualization', 'Collaboration tools'],
    releaseDate: '2018-11-01',
    company: 'IBM',
    imageUrl: 'https://images.pexels.com/photos/6693656/pexels-photo-6693656.jpeg',
    featured: false,
    paperUrl: 'https://www.ibm.com/cloud/watson-studio',
    usage: `Work with Watson Studio:
  1. Sign up at https://www.ibm.com/cloud/watson-studio.
  2. Create a project and upload datasets.
  3. Use built-in tools (SPSS, notebooks, AutoAI) to build models.
  4. Train, validate, and deploy models in the cloud.`,
    accessType: 'Partially Free',
    examples: [
      'Train a churn prediction model.',
      'Visualize customer segmentation.',
      'Collaborate with teams on AI pipelines.'
    ]
  },
  {
    id: '118',
    name: 'Tidio',
    slug: 'tidio',
    category: 'Customer Support',
    description: "Tidio combines live chat and AI chatbots to improve customer support and boost sales.",
    capabilities: ['AI chatbot', 'Live chat', 'Helpdesk automation'],
    releaseDate: '2019-10-01',
    company: 'Tidio',
    imageUrl: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg',
    featured: true,
    paperUrl: 'https://www.tidio.com/',
    usage: `How to use Tidio:
  1. Go to https://www.tidio.com/ and sign up.
  2. Integrate the widget into your website.
  3. Set up AI chatbot flows and live chat triggers.
  4. Monitor and reply to customers in real-time.`,
    accessType: 'Partially Free',
    examples: [
      'Answer FAQs automatically.',
      'Chat with visitors via live chat.',
      'Automate product recommendations.'
    ]
  },
  {
    id: '119',
    name: 'Zendesk AI',
    slug: 'zendesk AI',
    category: 'Customer Support',
    description: "Zendesk AI helps automate ticket triaging, provide answer suggestions, and streamline customer support operations.",
    capabilities: ['Ticket automation', 'AI suggestions', 'Multichannel support'],
    releaseDate: '2023-03-15',
    company: 'Zendesk',
    imageUrl: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg',
    featured: false,
    paperUrl: 'https://www.zendesk.com/service/artificial-intelligence/',
    usage: `Use Zendesk AI:
  1. Log in to your Zendesk account.
  2. Navigate to Admin Center > AI & Automation.
  3. Enable AI features like intent detection and macro suggestions.
  4. Analyze performance in the AI dashboard.`,
    accessType: 'Paid',
    examples: [
      'Auto-assign tickets to the right department.',
      'Get suggested replies for faster support.',
      'Detect intent from customer messages.'
    ]
  },
  {
    id: '120',
    name: 'Forethought',
    slug: 'forethought',
    category: 'Customer Support',
    description: "Forethought uses generative AI to understand, prioritize, and resolve support tickets before agents step in.",
    capabilities: ['Generative AI', 'Ticket resolution', 'Predictive analytics'],
    releaseDate: '2022-01-01',
    company: 'Forethought',
    imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
    featured: false,
    paperUrl: 'https://forethought.ai/',
    usage: `Use Forethought:
  1. Request a demo at https://forethought.ai/.
  2. Integrate with your helpdesk system (Zendesk, Salesforce, etc.).
  3. Forethought begins triaging and resolving tickets.
  4. Track ticket resolution rates and AI impact.`,
    accessType: 'Paid',
    examples: [
      'Resolve common password reset requests.',
      'Prioritize urgent tickets automatically.',
      'Use AI to draft responses for agents.'
    ]
  },
  {
    id: '121',
    name: 'Freshdesk Freddy AI',
    slug: 'freshdesk Freddy AI',
    category: 'Customer Support',
    description: "Freddy AI by Freshdesk offers smart ticketing, agent assistance, and customer self-service tools.",
    capabilities: ['AI agent assist', 'Smart ticketing', 'Chatbots'],
    releaseDate: '2021-08-20',
    company: 'Freshworks',
    imageUrl: 'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg',
    featured: false,
    paperUrl: 'https://www.freshworks.com/freddy-ai/',
    usage: `Use Freddy AI:
  1. Go to https://www.freshworks.com/freddy-ai/ and sign up.
  2. Enable Freddy features from the Freshdesk console.
  3. Set up AI automations and FAQ bots.
  4. Train Freddy on your support data.`,
    accessType: 'Partially Free',
    examples: [
      'AI suggests responses to agents.',
      'Automated answers to repetitive queries.',
      'Self-service chatbots for customers.'
    ]
  },
  {
    id: '122',
    name: 'SupportLogic',
    slug: 'supportLogic',
    category: 'Customer Support',
    description: "SupportLogic provides proactive support operations using NLP to surface signals from customer interactions.",
    capabilities: ['Sentiment analysis', 'Escalation prediction', 'Voice-of-customer insights'],
    releaseDate: '2021-02-10',
    company: 'SupportLogic',
    imageUrl: 'https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg',
    featured: false,
    paperUrl: 'https://www.supportlogic.io/',
    usage: `Use SupportLogic:
  1. Connect your helpdesk system to SupportLogic.
  2. Analyze historical support data for risk and sentiment.
  3. Use proactive alerts to prevent escalations.
  4. Measure agent performance with AI insights.`,
    accessType: 'Paid',
    examples: [
      'Detect rising customer frustration early.',
      'Identify tickets at risk of escalation.',
      'Track and coach support team behavior.'
    ]
  },
  {
    id: '123',
    name: 'PromptHero',
    slug: 'promptHero',
    category: 'Prompt Engineering',
    description: "PromptHero is a platform to find, create, and share high-quality AI prompts for tools like Midjourney, DALL·E, and ChatGPT.",
    capabilities: ['Prompt sharing', 'Prompt marketplace', 'Search engine for prompts'],
    releaseDate: '2022-09-10',
    company: 'PromptHero',
    imageUrl: 'https://images.pexels.com/photos/8384134/pexels-photo-8384134.jpeg',
    featured: true,
    paperUrl: 'https://prompthero.com/',
    usage: `How to use PromptHero:
  1. Go to https://prompthero.com/.
  2. Search or browse AI prompts by tool or style.
  3. Copy a prompt and paste it into the appropriate AI tool (e.g., Midjourney).
  4. Save your favorite prompts or contribute your own.`,
    accessType: 'Free',
    examples: [
      'Find prompts for generating anime-style images in Midjourney.',
      'Search for ChatGPT prompts to write marketing copy.',
      'Save a prompt for photorealistic portraits.'
    ]
  },
  {
    id: '124',
    name: 'PromptBase',
    slug: 'promptBase',
    category: 'Prompt Engineering',
    description: "PromptBase is a marketplace to buy and sell prompts for AI models like GPT, Midjourney, and DALL·E.",
    capabilities: ['Prompt marketplace', 'Prompt monetization', 'Prompt templates'],
    releaseDate: '2022-08-01',
    company: 'PromptBase',
    imageUrl: 'https://images.pexels.com/photos/16292190/pexels-photo-16292190.jpeg',
    featured: false,
    paperUrl: 'https://promptbase.com/',
    usage: `Use PromptBase:
  1. Visit https://promptbase.com/.
  2. Browse the prompt store by category or model.
  3. Purchase prompts or sign up to sell your own.
  4. Use purchased prompts in tools like ChatGPT or Midjourney.`,
    accessType: 'Paid',
    examples: [
      'Buy prompts for e-commerce product descriptions.',
      'Sell your own prompts for social media copywriting.',
      'Use paid prompts to generate logos with DALL·E.'
    ]
  },
  {
    id: '125',
    name: 'FlowGPT',
    slug: 'flowGPT',
    category: 'Prompt Engineering',
    description: "FlowGPT is a community-driven platform where users discover and share powerful ChatGPT prompts.",
    capabilities: ['Prompt discovery', 'Prompt sharing', 'Community reviews'],
    releaseDate: '2023-01-25',
    company: 'FlowGPT',
    imageUrl: 'https://images.pexels.com/photos/16292184/pexels-photo-16292184.jpeg',
    featured: false,
    paperUrl: 'https://flowgpt.com/',
    usage: `Use FlowGPT:
  1. Go to https://flowgpt.com/.
  2. Sign up to save and contribute prompts.
  3. Explore trending or curated prompts.
  4. Copy a prompt into ChatGPT to try it.`,
    accessType: 'Free',
    examples: [
      'Find a ChatGPT prompt to generate viral tweets.',
      'Save a prompt for writing LinkedIn posts.',
      'Upvote useful prompts created by other users.'
    ]
  },
  {
    id: '126',
    name: 'AIPRM',
    slug: 'AIPRM',
    category: 'Prompt Engineering',
    description: "AIPRM is a browser extension that adds a prompt library directly to ChatGPT, offering ready-made prompts for SEO, marketing, and more.",
    capabilities: ['Prompt library', 'Browser integration', 'Prompt sharing'],
    releaseDate: '2023-02-10',
    company: 'AIPRM',
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    featured: true,
    paperUrl: 'https://www.aiprm.com/',
    usage: `Use AIPRM:
  1. Install the AIPRM Chrome extension from the Chrome Web Store.
  2. Open ChatGPT at https://chat.openai.com/.
  3. Access the AIPRM prompt library directly in the interface.
  4. Select a prompt and run it instantly in ChatGPT.`,
    accessType: 'Partially Free',
    examples: [
      'Use SEO-focused prompts to write blog posts.',
      'Access marketing email templates instantly.',
      'Save and favorite frequently used prompts.'
    ]
  },
  {
    id: '127',
    name: 'PromptPerfect',
    slug: 'promptPerfect',
    category: 'Prompt Engineering',
    description: "PromptPerfect helps you refine and optimize prompts for better results with GPT, Claude, Midjourney, and other AI tools.",
    capabilities: ['Prompt optimization', 'Multimodel support', 'Prompt analysis'],
    releaseDate: '2023-04-05',
    company: 'PromptPerfect',
    imageUrl: 'https://images.pexels.com/photos/15867168/pexels-photo-15867168.jpeg',
    featured: false,
    paperUrl: 'https://promptperfect.jina.ai/',
    usage: `Use PromptPerfect:
  1. Visit https://promptperfect.jina.ai/.
  2. Enter your prompt and select the AI model you're targeting.
  3. Get refined prompt suggestions for better output.
  4. Copy and use the optimized prompt in your desired tool.`,
    accessType: 'Partially Free',
    examples: [
      'Improve a vague Midjourney prompt for better detail.',
      'Refine a ChatGPT prompt to get structured answers.',
      'Analyze and rewrite prompts for Claude.'
    ]
  },
  {
    id: '128',
    name: 'MindMeister',
    slug: 'mindMeister',
    category: 'Mind Mapping',
    description: "MindMeister is a collaborative online mind mapping tool that helps users visually organize ideas and projects.",
    capabilities: ['Collaborative mind mapping', 'Real-time editing', 'Presentation mode'],
    releaseDate: '2007-03-15',
    company: 'MeisterLabs',
    imageUrl: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg',
    featured: true,
    paperUrl: 'https://www.mindmeister.com/',
    usage: `How to use MindMeister:
  1. Visit https://www.mindmeister.com/ and create an account.
  2. Start a new mind map from scratch or use a template.
  3. Add main topics, subtopics, icons, images, and notes.
  4. Collaborate with others in real time or export your map as PDF/image.`,
    accessType: 'Partially Free',
    examples: [
      'Plan a product roadmap with your team.',
      'Organize ideas for a thesis or research paper.',
      'Create a content calendar using a mind map.'
    ]
  },
  {
    id: '129',
    name: 'Xmind',
    slug: 'xmind',
    category: 'Mind Mapping',
    description: "Xmind is a professional mind mapping and brainstorming tool designed for clarity, creativity, and productivity.",
    capabilities: ['Tree chart', 'Logic chart', 'Zen mode', 'Export to PDF/PNG'],
    releaseDate: '2007-11-01',
    company: 'Xmind Ltd.',
    imageUrl: 'https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg',
    featured: false,
    paperUrl: 'https://www.xmind.net/',
    usage: `Use Xmind:
  1. Download the app from https://www.xmind.net/ or use the web version.
  2. Start a blank mind map or choose a structure (tree, fishbone, logic).
  3. Add nodes, topics, connectors, and styles.
  4. Save your project locally or export it in various formats.`,
    accessType: 'Partially Free',
    examples: [
      'Create a study plan with visual hierarchy.',
      'Design a customer journey map.',
      'Brainstorm startup ideas using a tree map.'
    ]
  },
  {
    id: '130',
    name: 'Whimsical',
    slug: 'whimsical',
    category: 'Mind Mapping',
    description: "Whimsical offers a visual workspace combining mind maps, flowcharts, wireframes, and docs to support creative and collaborative thinking.",
    capabilities: ['Mind mapping', 'Flowcharts', 'Wireframes', 'Real-time collaboration'],
    releaseDate: '2018-06-01',
    company: 'Whimsical, Inc.',
    imageUrl: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg',
    featured: true,
    paperUrl: 'https://whimsical.com/mind-maps',
    usage: `Use Whimsical:
  1. Visit https://whimsical.com/mind-maps and sign up.
  2. Start a new mind map using the visual editor.
  3. Drag and drop nodes, add colors, links, and icons.
  4. Share the mind map with your team for feedback or editing.`,
    accessType: 'Free',
    examples: [
      'Collaborate on a marketing plan visually.',
      'Visualize content ideas for a blog.',
      'Organize brainstorming sessions remotely.'
    ]
  },
  {
    id: '131',
    name: 'Coggle',
    slug: 'coggle',
    category: 'Mind Mapping',
    description: "Coggle is an easy-to-use mind mapping tool designed for taking notes, planning, and collaborative idea development.",
    capabilities: ['Infinite branches', 'Collaboration', 'Markdown support', 'Image embedding'],
    releaseDate: '2013-05-01',
    company: 'Coggle It Ltd.',
    imageUrl: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    featured: false,
    paperUrl: 'https://coggle.it/',
    usage: `Use Coggle:
  1. Go to https://coggle.it/ and log in with Google.
  2. Click “Create Diagram” to start a new map.
  3. Add branches, style text, and upload images.
  4. Invite collaborators or export your mind map.`,
    accessType: 'Partially Free',
    examples: [
      'Create a decision tree for a business process.',
      'Plan a book outline visually.',
      'Collaborate on meeting notes in real time.'
    ]
  },
  {
    id: '132',
    name: 'MindNode',
    slug: 'mindNode',
    category: 'Mind Mapping',
    description: "MindNode is a user-friendly mind mapping app for macOS and iOS that helps you capture, organize, and visualize your thoughts.",
    capabilities: ['Quick entry', 'Focus mode', 'Visual tags', 'iCloud sync'],
    releaseDate: '2011-10-15',
    company: 'IdeasOnCanvas GmbH',
    imageUrl: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg',
    featured: false,
    paperUrl: 'https://www.mindnode.com/',
    usage: `Use MindNode:
  1. Download from the App Store or visit https://www.mindnode.com/.
  2. Create a new document and enter your central idea.
  3. Add branches and subnodes using keyboard or drag-and-drop.
  4. Sync maps with iCloud and export to Markdown, PDF, or OPML.`,
    accessType: 'Paid',
    examples: [
      'Visualize your personal goals and habits.',
      'Organize a creative writing outline.',
      'Use visual tags to group related ideas.'
    ]
  },
  {
    id: '133',
    name: 'MagickPen',
    slug: 'magickPen',
    category: 'Texts',
    description: 'MagickPen is an AI-powered writing assistant that helps create articles, emails, essays, and more in a clean interface.',
    capabilities: ['Text generation', 'Blog writing', 'Email drafting', 'Idea development'],
    releaseDate: '2023-05-12',
    company: 'MagickPen',
    imageUrl: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg',
    featured: false,
    usage: `1. Go to https://www.magickpen.com.
  2. Select the type of content you want to create (e.g., blog post, essay, letter).
  3. Enter your topic or prompt.
  4. Click "Generate" to receive AI-written content.
  5. Edit, format, and export or copy the result.`,
    accessType: 'Free',
    examples: [
      'Write a blog post about the future of AI in education.',
      'Draft a professional resignation letter.',
      'Summarize a long article in bullet points.'
    ]
  },
  {
    id: '134',
    name: 'Gamma.app',
    slug: 'gamma.app',
    category: 'Presentations',
    description: 'Gamma turns your ideas into beautiful presentations, docs, or web pages with the help of AI.',
    capabilities: ['Presentation generation', 'Interactive slides', 'Design templates', 'Content summarization'],
    releaseDate: '2022-11-04',
    company: 'Gamma',
    imageUrl: 'https://images.pexels.com/photos/3184309/pexels-photo-3184309.jpeg',
    featured: true,
    usage: `1. Visit https://gamma.app and sign up for an account.
  2. Choose "Create with AI" and describe what kind of presentation or document you need.
  3. Review the AI-generated structure and edit the content as needed.
  4. Customize the theme, layout, and share/export the result.`,
    accessType: 'Partially Free',
    examples: [
      'Startup pitch deck with 5 slides.',
      'Lesson plan about climate change.',
      'Marketing plan for a new product launch.'
    ]
  },
  {
    id: '135',
    name: 'TalkPal',
    slug: 'talkPal',
    category: 'Education',
    description: 'TalkPal is an AI language partner that helps you practice English conversation through chat or voice.',
    capabilities: ['English speaking practice', 'Grammar correction', 'Vocabulary improvement', 'Real-time chat'],
    releaseDate: '2023-03-15',
    company: 'TalkPal',
    imageUrl: 'https://images.pexels.com/photos/4049785/pexels-photo-4049785.jpeg',
    featured: false,
    usage: `1. Go to https://www.talkpal.ai.
  2. Choose your preferred language and level.
  3. Start chatting or speaking with the AI.
  4. Receive feedback on grammar, pronunciation, and vocabulary.
  5. Track your progress with personalized recommendations.`,
    accessType: 'Free',
    examples: [
      'Practice ordering food in a restaurant.',
      'Talk about your daily routine in English.',
      'Describe your favorite movie.'
    ]
  },
  {
    id: '136',
    name: 'Bardeen',
    slug: 'bardeen',
    category: 'Automation',
    description: 'Bardeen is a powerful AI tool to automate repetitive tasks in your browser using simple workflows.',
    capabilities: ['Workflow automation', 'Browser task automation', 'Data transfer', 'Custom integrations'],
    releaseDate: '2022-06-22',
    company: 'Bardeen AI',
    imageUrl: 'https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg',
    featured: true,
    usage: `1. Install the Bardeen Chrome extension from https://www.bardeen.ai.
  2. Open the extension and sign in with your Google account.
  3. Browse ready-made workflows or create your own automation.
  4. Run automations with a single click or set them to run on triggers.`,
    accessType: 'Free',
    examples: [
      'Automatically copy LinkedIn profiles to Google Sheets.',
      'Scrape product data from e-commerce websites.',
      'Get daily email reports from Notion tasks.'
    ]
  }

];

export const getAIModelById = (id: string): AIModel | undefined => {
  return aiModels.find((model) => model.id === id);
};

export const getAIModelCategories = (): string[] => {
  const categories = new Set(aiModels.map((model) => model.category));
  return Array.from(categories);
};

export const getFeaturedAIModels = (): AIModel[] => {
  return aiModels.filter((model) => model.featured);
};