import React from 'react';
import { Helmet } from 'react-helmet-async';

const PromptsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Prompts - Neurobox</title>
        <meta name="description" content="Browse effective AI prompts for creativity, productivity, and business goals." />
      </Helmet>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center">AI Prompts Library</h1>

        <div className="space-y-6">
          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-md">
            <h2 className="font-semibold text-xl mb-2">🧠 Generate New Business Ideas</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Prompt:</span> “Generate innovative business ideas in the field of [industry], targeting [audience]. The ideas should be scalable and leverage the latest technology trends.”
            </p>
          </div>

          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-md">
            <h2 className="font-semibold text-xl mb-2">📚 Summarize Research Articles</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Prompt:</span> “Summarize the key findings of the following research paper in simple terms: [insert text or link to research paper].”
            </p>
          </div>

          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-md">
            <h2 className="font-semibold text-xl mb-2">✍️ Write a YouTube Video Script</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Prompt:</span> “Write an engaging YouTube script about [topic]. Include a strong hook, 3–5 main points, and a compelling CTA at the end. Target audience: [audience]. Tone: [funny/informative/etc.].”
            </p>
          </div>

          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-md">
            <h2 className="font-semibold text-xl mb-2">🛍️ Product Description Generator</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Prompt:</span> “Write a compelling product description for a [product type] that highlights its main features and appeals to [target customer]. Include emotional triggers and persuasive language.”
            </p>
          </div>

          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-md">
            <h2 className="font-semibold text-xl mb-2">📧 Cold Email Outreach</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-medium">Prompt:</span> “Write a cold email to introduce our [product/service] to potential clients in the [industry]. Keep it short, personalized, and include a clear CTA.”
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromptsPage;