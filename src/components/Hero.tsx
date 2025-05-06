import React from 'react';
import { ChevronRight, Brain, Sparkles, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import bgImage from '../assets/hero-bg.jpg'; // Обязательно чтобы файл hero-bg.jpg был в папке assets!

import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30" />
        <img 
          src={bgImage} 
          alt="Abstract AI background" 
          className="w-full h-full object-cover opacity-40" 
          loading="lazy" 
        />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 mb-6 bg-blue-700/30 rounded-full">
            <span className="flex items-center px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <Sparkles size={16} className="mr-2" />
              100+ AI Models in One Place
            </span>
          </div>

          {/* Центрированный заголовок */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Explore the World of</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Artificial Intelligence
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover 100+ cutting-edge AI models, compare their capabilities, and stay updated with the latest advancements in artificial intelligence technology.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mb-10">
            <SearchBar fullWidth placeholder="Search AI models, categories, or capabilities..." />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/models" 
              aria-label="Explore AI models"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium flex items-center transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Explore Models
              <ChevronRight size={18} className="ml-1" />
            </Link>
            <Link 
              to="/compare" 
              aria-label="Compare AI models"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-xl font-medium transition-all duration-300 w-full sm:w-auto text-center"
            >
              Compare Models
            </Link>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-transform hover:transform hover:scale-105 duration-300">
            <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4">
              <Brain className="text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Detailed Model Insights</h3>
            <p className="text-gray-300">Comprehensive information about each AI model, including capabilities, research papers, and demos.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-transform hover:transform hover:scale-105 duration-300">
            <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center mb-4">
              <Layers className="text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Side-by-Side Comparison</h3>
            <p className="text-gray-300">Compare different AI models to find the perfect solution for your specific needs.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-transform hover:transform hover:scale-105 duration-300">
            <div className="w-12 h-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-4">
              <Zap className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Always Up-to-Date</h3>
            <p className="text-gray-300">Stay informed with the latest AI models and advancements in the artificial intelligence field.</p>
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28..." opacity=".25" className="fill-white dark:fill-gray-800"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69..." opacity=".5" className="fill-white dark:fill-gray-800"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32..." className="fill-white dark:fill-gray-800"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;