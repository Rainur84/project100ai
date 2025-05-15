import React from 'react';
import { Link } from 'react-router-dom';
import {
  Github, Twitter, Linkedin, Youtube, Mail,
  Heart, Coffee, DollarSign, CreditCard, Bitcoin, Copy
} from 'lucide-react';

const Footer: React.FC = () => {
  const copyCardNumber = () => {
    navigator.clipboard.writeText('4400 4303 3462 9885');
    alert('Card number copied to clipboard!');
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                100+ AI Models
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Neurobox — exploring the cutting edge of artificial intelligence through comprehensive model descriptions and analysis.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Home</Link></li>
              <li><Link to="/models" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">AI Models</Link></li>
              <li><Link to="/compare" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Compare Models</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">About Neurobox</Link></li>
              <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/models?category=Large Language Model" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Language Models</Link></li>
              <li><Link to="/models?category=Image Generation" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Image Generators</Link></li>
              <li><Link to="/models?category=Video Generation" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Video Generators</Link></li>
              <li><Link to="/models?category=Multimodal Model" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Multimodal Models</Link></li>
              <li><Link to="/models?category=Speech Recognition" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Speech Recognition</Link></li>
              <li><Link to="/models?category=Natural Language Processing" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">NLP Models</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Support Neurobox</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Help us continue providing quality information about AI models by supporting our work.
            </p>
            <div className="space-y-3">
              <button
                onClick={copyCardNumber}
                className="flex items-center w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
              >
                <CreditCard size={16} className="mr-2" />
                Copy Card Number
                <Copy size={14} className="ml-2" />
              </button>

              <a
                href="https://ko-fi.com/neurobox"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full px-3 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-md hover:bg-orange-200 dark:hover:bg-orange-800 transition-colors"
              >
                <Coffee size={16} className="mr-2" />
                Ko-fi
              </a>

              <a
                href="https://www.paypal.com/ncp/payment/5P4X3D2TLNYYL"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full px-3 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                <DollarSign size={16} className="mr-2" />
                PayPal
              </a>

              <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-md">
                <div className="flex items-center">
                  <Bitcoin size={16} className="mr-2" />
                  <span className="text-sm break-all">3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5</span>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5');
                    alert('Bitcoin address copied!');
                  }}
                  className="ml-2 text-sm hover:underline"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} 100 AI Models. All rights reserved.
            </p>
            <div className="flex items-center">
              <a href="mailto:contact@neurobox.ai" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center">
                <Mail size={16} className="mr-1" />
                <span>journeylistusa.outlook.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;