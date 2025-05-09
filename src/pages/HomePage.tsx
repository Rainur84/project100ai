import React from 'react';
import Hero from '../components/Hero';
import AIModelCard from '../components/AIModelCard';
import { getFeaturedAIModels } from '../data/aiModels';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, BarChart2, MessageSquare } from 'lucide-react';
import { Helmet } from "react-helmet";

const HomePage: React.FC = () => {
  const featuredModels = getFeaturedAIModels();

  return (
    <div>
      <Helmet>
        <title>NeuroBox – Discover the Best AI Models</title>
        <meta
          name="description"
          content="Explore powerful and innovative AI models by category. Discover large language models, image generation tools, and compare AI technologies side by side."
        />
        <meta name="keywords" content="AI models, large language models, image generation AI, multimodal AI, compare AI tools, NeuroBox" />
        <meta name="author" content="NeuroBox Team" />
        <meta property="og:title" content="NeuroBox – Discover the Best AI Models" />
        <meta property="og:description" content="Explore powerful and innovative AI models by category and compare them easily." />
        <meta property="og:image" content="https://neuro-box.ai/og-image.png" />
        <meta property="og:url" content="https://neuro-box.ai" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NeuroBox – Discover the Best AI Models" />
        <meta name="twitter:description" content="Explore powerful and innovative AI models by category and compare them easily." />
        <meta name="twitter:image" content="https://neuro-box.ai/og-image.png" />
      </Helmet>

      <Hero />

      {/* Featured Models Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <div className="flex items-center mb-2">
                <Star size={20} className="text-yellow-500 mr-2" />
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Featured AI Models
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Explore the most innovative and powerful AI models that are pushing the boundaries of what's possible in artificial intelligence.
              </p>
            </div>
            <Link
              to="/models"
              className="mt-4 md:mt-0 flex items-center font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              View all models
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredModels.slice(0, 4).map(model => (
              <AIModelCard key={model.id} model={model} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore AI Models by Category</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover AI models organized by their primary functions and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/models?category=Large Language Model" className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                <MessageSquare size={30} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Language Models</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                AI systems that understand and generate human language for various applications
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-medium flex items-center">
                Explore
                <ChevronRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link to="/models?category=Image Generation" className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Image Generation</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                AI models that create realistic or artistic images from text descriptions
              </p>
              <span className="text-purple-600 dark:text-purple-400 font-medium flex items-center">
                Explore
                <ChevronRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link to="/models?category=Multimodal Model" className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all p-6 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">Multimodal Models</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced AI systems that can process and generate multiple types of data
              </p>
              <span className="text-green-600 dark:text-green-400 font-medium flex items-center">
                Explore
                <ChevronRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/models"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium inline-flex items-center transition-all duration-300"
            >
              View All Categories
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Compare Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-4">Compare AI Models Side by Side</h2>
                <p className="text-blue-100 mb-6">
                  Not sure which AI model is right for your needs? Use our comparison tool to evaluate different models based on capabilities, performance, and use cases.
                </p>
                <Link
                  to="/compare"
                  className="px-6 py-3 bg-white text-blue-800 rounded-xl font-medium inline-flex items-center hover:bg-blue-50 transition-colors"
                >
                  <BarChart2 size={18} className="mr-2" />
                  Compare Models
                </Link>
              </div>
              <div className="hidden md:block relative h-full">
                <img
                  src="https://images.pexels.com/photos/7567557/pexels-photo-7567557.jpeg"
                  alt="AI Model Comparison"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Trends</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and be the first to know about the latest AI models, comparisons, and innovations.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;