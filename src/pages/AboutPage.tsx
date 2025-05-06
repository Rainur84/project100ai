import React from 'react';
import { Mail, Github, Twitter, Users, Award, Calendar, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About 100 AI Models</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Exploring the cutting edge of artificial intelligence through comprehensive model descriptions and analysis.
          </p>
        </div>
        
        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" 
                alt="AI Technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                At 100+ AI Models, we're dedicated to making information about artificial intelligence accessible, 
                understandable, and useful to everyone—from AI researchers and developers to students and technology enthusiasts.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                We believe that understanding AI's capabilities, limitations, and potential is crucial as these 
                technologies continue to transform our world. By providing comprehensive, accurate information about 
                various AI models, we aim to foster informed discussions and decisions about this rapidly evolving field.
              </p>
            </div>
          </div>
        </div>
        
        {/* What We Offer */}
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <FileText className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Database</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Detailed information about 100+ significant AI models, including their capabilities, 
              technical specifications, use cases, and development history.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                <rect width="18" height="10" x="3" y="3" rx="2"></rect><rect width="18" height="8" x="3" y="13" rx="2"></rect>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Comparison Tools</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Side-by-side comparisons of AI models to help you understand their relative 
              strengths, weaknesses, and appropriate use cases.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visual Explanations</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Clear visuals and explanations that make complex AI concepts accessible 
              to both technical and non-technical audiences.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Links to research papers, demos, and additional learning resources for those 
              who want to deepen their understanding of specific AI models.
            </p>
          </div>
        </div>
        
        {/* Our Team */}
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            100+ AI Models is maintained by a small team of AI enthusiasts, researchers, and developers 
            who are passionate about making artificial intelligence more accessible and understandable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                AR
              </div>
              <h3 className="font-semibold mb-1">Alex Rodriguez</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Founder & AI Researcher</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Twitter size={16} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Github size={16} />
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                JS
              </div>
              <h3 className="font-semibold mb-1">Jamie Smith</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Lead Developer</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Twitter size={16} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Github size={16} />
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4 text-white text-2xl font-bold">
                LP
              </div>
              <h3 className="font-semibold mb-1">Lin Park</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Content Curator</p>
              <div className="flex justify-center space-x-2">
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Twitter size={16} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We also receive valuable contributions from a global community of AI experts and enthusiasts.
            </p>
            <Link to="/contribute" className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
              Learn how you can contribute
            </Link>
          </div>
        </div>
        
        {/* Quick Facts */}
        <h2 className="text-2xl font-bold mb-6">Quick Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
              <Calendar className="text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">Founded</p>
            <p className="text-2xl font-bold">2023</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-3">
              <Users className="text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">Monthly Visitors</p>
            <p className="text-2xl font-bold">50,000+</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
              <Award className="text-green-600 dark:text-green-400" />
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">AI Models Cataloged</p>
            <p className="text-2xl font-bold">100+</p>
          </div>
        </div>
        
        {/* Contact */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-blue-100">
            Have questions, suggestions, or want to contribute? We'd love to hear from you!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="mailto:contact@100aimodels.com" 
              className="inline-flex items-center px-4 py-2 bg-white text-blue-800 rounded-md hover:bg-blue-50 transition-colors"
            >
              <Mail size={16} className="mr-2" />
              Email Us
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-800 rounded-md hover:bg-blue-50 transition-colors"
            >
              <Twitter size={16} className="mr-2" />
              Follow on Twitter
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-800 rounded-md hover:bg-blue-50 transition-colors"
            >
              <Github size={16} className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;