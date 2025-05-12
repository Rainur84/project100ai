import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const prompts = [
  {
    id: 1,
    title: 'YouTube Video Script',
    description: 'Create a high-converting script for a YouTube video on any topic.',
    category: 'Content',
    prompt: `Write a YouTube script about [topic] that is engaging, persuasive, and includes a strong call to action at the end.`,
  },
  {
    id: 2,
    title: 'Midjourney Product Image',
    description: 'Generate a realistic product image using Midjourney.',
    category: 'Design',
    prompt: `Realistic product photo of a [product type], studio lighting, white background --v 6 --ar 1:1`,
  },
  {
    id: 3,
    title: 'Email Marketing Copy',
    description: 'Craft a compelling email for promoting a digital product.',
    category: 'Marketing',
    prompt: `Write a high-converting email to promote my digital product [product name] to freelancers.`,
  },
  {
    id: 4,
    title: 'Landing Page Copy',
    description: 'Create persuasive text for a product landing page.',
    category: 'Content',
    prompt: `Write landing page copy for an AI tool that helps designers create faster.`,
  },
  {
    id: 5,
    title: 'Bug Fix Code Review',
    description: 'Find and fix the issue in a JavaScript function.',
    category: 'Coding',
    prompt: `Here’s my JavaScript code: [code]. Please identify and fix the bug and explain what was wrong.`,
  },
  {
  id: 6,
  title: 'Explain Complex Topic to a Child',
  description: 'Simplify any complex topic to make it understandable for a young student.',
  category: 'Education',
  prompt: `Explain [topic] in a way that a 10-year-old can understand, using simple language and examples.`,
},
{
  id: 7,
  title: 'Lesson Plan Generator',
  description: 'Create a lesson plan based on a specific topic and grade level.',
  category: 'Education',
  prompt: `Create a 1-hour lesson plan for teaching [topic] to 7th grade students. Include objectives, activities, and a brief quiz.`,
},
{
  id: 8,
  title: 'Daily Task Organizer',
  description: 'Structure your day using AI to prioritize and balance tasks.',
  category: 'Productivity',
  prompt: `Create a productive daily schedule from 8 AM to 6 PM that includes time for [tasks], breaks, and lunch.`,
},
{
  id: 9,
  title: 'Meeting Summary Generator',
  description: 'Summarize meeting notes into actionable items.',
  category: 'Productivity',
  prompt: `Here are my meeting notes: [paste]. Summarize them into key takeaways and next action steps.`,
},
{
  id: 10,
  title: 'Voice Assistant Script',
  description: 'Generate a natural-sounding script for a voice assistant or AI bot.',
  category: 'Voice',
  prompt: `Write a friendly and concise voice assistant script to guide a user through setting up their new smart device.`,
},
{
  id: 11,
  title: 'Text-to-Speech Ad Script',
  description: 'Create a short ad script optimized for AI voiceover.',
  category: 'Voice',
  prompt: `Write a 30-second product advertisement script that sounds natural when read aloud by a text-to-speech AI.`,
},
{
  id: 12,
  title: 'SEO Blog Outline',
  description: 'Generate an SEO-optimized outline for a blog article.',
  category: 'SEO',
  prompt: `Create a blog outline on "[keyword]" optimized for SEO. Include H1, H2, H3 headings and key phrases.`,
},
{
  id: 13,
  title: 'Meta Description Generator',
  description: 'Write a compelling meta description for a webpage.',
  category: 'SEO',
  prompt: `Write a meta description under 160 characters for a page about [topic], using the keyword "[keyword]".`,
},
{
  id: 14,
  title: 'Customer Complaint Response',
  description: 'Craft a polite and helpful reply to a customer complaint.',
  category: 'Customer Support',
  prompt: `Write a professional and empathetic email in response to this customer complaint: "[paste complaint]".`,
},
{
  id: 15,
  title: 'AI Chat Support Agent',
  description: 'Simulate a live chat support message for common customer issues.',
  category: 'Customer Support',
  prompt: `Act as a live chat support agent for [company]. Respond to this message: "[customer question]".`,
},
{
  id: 16,
  title: 'Generate Mind Map Ideas',
  description: 'Create a structured mind map on any topic with subtopics and connections.',
  category: 'Mind Mapping',
  prompt: `Create a detailed mind map for the topic "[topic]". Include 3 levels of subtopics and logical connections.`,
},
{
  id: 17,
  title: 'Brainstorm Creative Concepts',
  description: 'Use mind mapping to generate innovative ideas around a core concept.',
  category: 'Mind Mapping',
  prompt: `Help me brainstorm creative ideas around "[central concept]" using a mind map format.`,
},
{
  id: 18,
  title: 'Analyze Dataset Insights',
  description: 'Get summary and insights from a raw dataset description.',
  category: 'Data Analysis',
  prompt: `Analyze the following dataset: [paste summary]. Identify trends, anomalies, and key takeaways.`,
},
{
  id: 19,
  title: 'Chart Suggestions from Data',
  description: 'Recommend best chart types for data visualization.',
  category: 'Data Analysis',
  prompt: `Based on this dataset [paste data structure], suggest the best chart types for presenting the information and explain why.`,
},
{
  id: 20,
  title: 'Improve My Prompt',
  description: 'Refine an AI prompt to get better, more specific results.',
  category: 'Prompt Engineering',
  prompt: `Here is my current prompt: "[original prompt]". Improve it for clarity and maximum output quality.`,
},
{
  id: 21,
  title: 'Design Prompt for Specific Goal',
  description: 'Create a precise prompt for a specific AI use case.',
  category: 'Prompt Engineering',
  prompt: `Write a prompt that helps an AI generate [type of result] for [target audience or goal].`,
},
{
  id: 22,
  title: 'Improve UX Copy',
  description: 'Rewrite user interface text for better clarity and friendliness.',
  category: 'UI/UX',
  prompt: `Rewrite the following UI text to be more user-friendly, clear, and actionable: "[original text]".`,
},
{
  id: 23,
  title: 'Landing Page Feedback',
  description: 'Evaluate a landing page and suggest UX improvements.',
  category: 'UI/UX',
  prompt: `Review the structure and copy of this landing page: [URL or content]. Suggest improvements for better user experience and conversion.`,
},
{
  id: 24,
  title: 'Automation Workflow Planner',
  description: 'Design an automated workflow for a repetitive business task.',
  category: 'Automation',
  prompt: `Design an automation workflow for this process: "[describe the process]". Include the tools that can be used at each step.`,
},
{
  id: 25,
  title: 'Email Automation Sequence',
  description: 'Generate a multi-step email sequence for onboarding or marketing.',
  category: 'Automation',
  prompt: `Create a 4-part email automation sequence to onboard new users who signed up for [product/service].`,
},
{
    id: 26,
    title: 'Brand Name Generator',
    description: 'Generate catchy and original brand names for a new business.',
    category: 'Marketing',
    prompt: `Generate 10 unique and memorable brand name ideas for a startup in the [industry] niche. Ensure the names are creative and .com domains are likely available.`,
  },
  {
    id: 27,
    title: 'Job Interview Preparation',
    description: 'Prepare for job interviews with tailored questions and answers.',
    category: 'Education',
    prompt: `I'm applying for a [job title] role. Give me 10 common interview questions with ideal answers based on relevant experience and skills.`,
  },
  {
    id: 28,
    title: 'Summarize Long Article',
    description: 'Condense long texts into short bullet-point summaries.',
    category: 'Productivity',
    prompt: `Summarize the following article in under 200 words with bullet points: [paste article here]. Focus on key arguments and conclusions.`,
  },
  {
    id: 29,
    title: 'Social Media Captions Generator',
    description: 'Create engaging captions for product posts on social media.',
    category: 'Marketing',
    prompt: `Write 5 creative social media captions to promote [product/service]. Use a friendly tone and include emojis and relevant hashtags.`,
  },
  {
    id: 30,
    title: 'Startup Pitch Outline',
    description: 'Structure a pitch for your startup idea.',
    category: 'Business',
    prompt: `Create a pitch outline for a startup based on [idea]. Include sections for problem, solution, market size, traction, and next steps.`,
  },
  {
    id: 31,
    title: 'AI Art Prompt Creator',
    description: 'Generate detailed prompts for AI image generation.',
    category: 'Design',
    prompt: `Write a vivid, detailed prompt for AI art generation of a [subject]. Include lighting, mood, setting, style, and camera angle.`,
  },
  {
    id: 32,
    title: 'Cold Outreach Email',
    description: 'Write a professional email to attract new clients.',
    category: 'Marketing',
    prompt: `Write a cold email introducing my [product/service] to a potential client. Keep it brief, friendly, and highlight key benefits.`,
  },
  {
    id: 33,
    title: 'YouTube Video Title Ideas',
    description: 'Generate clickable and SEO-friendly video titles.',
    category: 'Content',
    prompt: `Come up with 10 YouTube video titles about [topic]. They should be catchy, clear, and optimized for search visibility.`,
  },
  {
    id: 34,
    title: 'Tone Rewriting',
    description: 'Change the tone of text while keeping the message.',
    category: 'Prompt Engineering',
    prompt: `Rewrite the following message to sound more positive and encouraging: "[your original text here]".`,
  },
  {
    id: 35,
    title: 'Weekly Productivity Planner',
    description: 'Plan a week’s worth of tasks and goals effectively.',
    category: 'Productivity',
    prompt: `Create a weekly productivity plan for a solo entrepreneur balancing client work, marketing, and learning. Include priorities and time estimates.`,
  },
  {
    id: 36,
    title: 'Product Description Generator',
    description: 'Write persuasive product descriptions for an eCommerce store.',
    category: 'Marketing',
    prompt: `Create a product description for [product name], highlighting its benefits, features, and use cases in under 150 words.`,
  },
  {
    id: 37,
    title: 'SEO Blog Outline',
    description: 'Generate a blog post outline optimized for SEO.',
    category: 'Blogging',
    prompt: `Create an SEO-optimized outline for a blog post titled "[blog topic]". Include H1, H2, and H3 structure with keyword-rich subheadings.`,
  },
  {
    id: 38,
    title: 'LinkedIn Bio Generator',
    description: 'Craft a professional and impactful LinkedIn bio.',
    category: 'Social Networks',
    prompt: `Write a compelling LinkedIn bio for a [profession] with 5+ years of experience in [industry], emphasizing skills and achievements.`,
  },
  {
    id: 39,
    title: 'Ad Copy for Facebook',
    description: 'Write ad copy for Facebook campaigns.',
    category: 'Marketing',
    prompt: `Write 3 variations of a high-converting Facebook ad promoting [product/service]. Use attention-grabbing hooks and a strong CTA.`,
  },
  {
    id: 40,
    title: 'Generate Tweet Threads',
    description: 'Create informative and viral tweet threads.',
    category: 'Social Networks',
    prompt: `Write a 10-tweet thread explaining [topic] in a clear, engaging, and informative way. Add hooks and calls to engagement.`,
  },
  {
    id: 41,
    title: 'Customer Support Response',
    description: 'Write a helpful and polite customer service reply.',
    category: 'Customer Support',
    prompt: `Respond to a customer complaint about [issue] with empathy and offer a solution. Keep it professional and reassuring.`,
  },
  {
    id: 42,
    title: 'Script for TikTok Video',
    description: 'Create a short and catchy TikTok video script.',
    category: 'Video',
    prompt: `Write a 30-second TikTok script to promote [product/topic]. Make it trendy, upbeat, and include a hook in the first 3 seconds.`,
  },
  {
    id: 43,
    title: 'Technical Concept Simplifier',
    description: 'Explain complex topics in simple language.',
    category: 'Education',
    prompt: `Explain [technical concept] to a 12-year-old. Use analogies and simple language for better understanding.`,
  },
  {
    id: 44,
    title: 'Daily Affirmations',
    description: 'Generate positive affirmations for daily mindset.',
    category: 'Productivity',
    prompt: `Give me 10 positive affirmations focused on confidence, success, and clarity for the day.`,
  },
  {
    id: 45,
    title: 'Create Quiz Questions',
    description: 'Generate quiz questions and answers on a topic.',
    category: 'Education',
    prompt: `Generate 5 multiple choice quiz questions about [subject] with correct answers and short explanations.`,
  },
  {
    id: 46,
    title: 'App Feature Suggestions',
    description: 'Suggest new features for a mobile/web app.',
    category: 'Ideas',
    prompt: `Suggest 5 innovative and useful features for a [type of app] that would enhance user experience and retention.`,
  },
  {
    id: 47,
    title: 'Weekly Email Newsletter',
    description: 'Write a weekly update email for subscribers.',
    category: 'Marketing',
    prompt: `Write a weekly newsletter for [brand/business name], including updates, tips, and a featured product or article.`,
  },
  {
    id: 48,
    title: 'Sales Page Headline Ideas',
    description: 'Generate compelling headlines for a sales landing page.',
    category: 'Marketing',
    prompt: `Give me 5 sales page headline ideas for [product/service] that grab attention and convey value.`,
  },
  {
    id: 49,
    title: 'Welcome Message for Chatbot',
    description: 'Write a warm welcome message for a website chatbot.',
    category: 'Chatbots',
    prompt: `Write a friendly and helpful welcome message for a chatbot assisting visitors on a [type of website].`,
  },
  {
    id: 50,
    title: 'YouTube Video Script',
    description: 'Generate a full script for a YouTube video.',
    category: 'Video',
    prompt: `Write a full YouTube script (about 2 minutes long) on the topic “[topic]”, with an intro, body, and call to action.`,
  },
  {
    id: 51,
    title: 'Generate Mind Map Ideas',
    description: 'Create a structured mind map outline.',
    category: 'Mind Mapping',
    prompt: `Create a mind map for the topic “[central topic]” with 3 main branches and sub-ideas for each.`,
  },
  {
    id: 52,
    title: 'Freelance Proposal Generator',
    description: 'Write a professional freelance proposal.',
    category: 'Business',
    prompt: `Write a proposal for a freelance project where I’m offering [service] to a client in the [industry]. Emphasize results and process.`,
  },
  {
    id: 53,
    title: 'Prompt Generator for GPT',
    description: 'Generate high-quality prompts for language models.',
    category: 'Prompt Engineering',
    prompt: `Generate 5 high-quality prompts for GPT to help with [goal], making them clear, specific, and result-oriented.`,
  },
  {
    id: 54,
    title: 'Instagram Reels Ideas',
    description: 'Create viral ideas for Instagram Reels.',
    category: 'Social Networks',
    prompt: `Give me 5 creative Instagram Reel ideas for a brand that sells [product]. They should be engaging and on-trend.`,
  },
  {
    id: 55,
    title: 'Startup Name with .com Available',
    description: 'Suggest startup names with available domains.',
    category: 'Ideas',
    prompt: `Suggest 5 brandable startup names for a [industry] company, and check if .com domain is likely available.`,
  },
];

const categories = ['All', 'Automation', 'Data Analysis', 'Content', 'Customer Support', 'Design', 'Business', 'Education', 'SEO', 'Mind Mapping', 'Productivity', 'Prompt Engineering', 'Marketing', 'Voice', 'UI/UX', 'Coding'];

const PromptsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPrompts =
    selectedCategory === 'All'
      ? prompts
      : prompts.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Best AI Prompts for Every Need – NeuroBox</title>
        <meta
          name="description"
          content="Discover the best AI prompts for content creation, productivity, marketing, and more. Ready-to-use and optimized for ChatGPT, Claude, Gemini, Midjourney, and others."
        />
        <meta
          name="keywords"
          content="AI prompts, ChatGPT prompts, Midjourney prompts, free AI prompts, marketing prompts, productivity prompts"
        />
        <link rel="canonical" href="https://project100ai-bay.vercel.app/prompts" />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">AI Prompts</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Explore a curated collection of powerful prompts for ChatGPT, Midjourney, and other AI tools. Filter by category to find the perfect one.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2">{prompt.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{prompt.description}</p>
              <pre className="whitespace-pre-wrap break-words text-sm bg-gray-100 dark:bg-gray-700 p-3 rounded-md">
                {prompt.prompt}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PromptsPage;