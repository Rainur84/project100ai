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
];

const categories = ['All', 'Content', 'Design', 'Marketing', 'Coding'];

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