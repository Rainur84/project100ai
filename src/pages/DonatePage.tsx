import React from 'react';
import { useLocation } from 'react-router-dom';
import DonationCard from '../components/DonationCard';
import { donationMethods } from '../data/donationMethods';
import { Heart, Star, Users } from 'lucide-react';

const DonatePage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedMethod = queryParams.get('method');
  
  // Filter donation methods if a method is specified in the URL
  const filteredMethods = selectedMethod 
    ? donationMethods.filter(method => method.id === selectedMethod)
    : donationMethods;
  
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
            <Heart size={24} className="text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Support Our Project</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your donations help us maintain and expand our comprehensive database of AI models, 
            ensuring we can continue to provide up-to-date information about the latest advancements in AI technology.
          </p>
        </div>
        
        {/* Impact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                <circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Resource</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We provide AI information to researchers, developers, and enthusiasts from over 150 countries worldwide.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <Star size={24} className="text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Content</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're committed to providing accurate, comprehensive, and up-to-date information about every AI model we feature.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <Users size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We're a small team passionate about AI, supported by community contributions and donations.
            </p>
          </div>
        </div>
        
        {/* Donation Methods */}
        <h2 className="text-2xl font-bold mb-8 text-center">Ways to Support Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMethods.map(method => (
            <DonationCard key={method.id} method={method} />
          ))}
        </div>
        
        {/* Testimonials */}
        <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Others Support Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="italic mb-4">
                "100 AI Models has been an invaluable resource for my research. The detailed information about each model saves me countless hours of work."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-300 font-bold">DR</span>
                </div>
                <div>
                  <p className="font-medium">Dr. Rebecca Lee</p>
                  <p className="text-sm text-blue-200">AI Researcher</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="italic mb-4">
                "As a developer working with AI, I rely on this site to help me choose the right models for my projects. The comparison tool is especially useful."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-purple-300 font-bold">JM</span>
                </div>
                <div>
                  <p className="font-medium">James Miller</p>
                  <p className="text-sm text-blue-200">Software Engineer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <p className="italic mb-4">
                "I donate monthly because I believe in their mission of making AI knowledge accessible to everyone. It's a small price for such a valuable resource."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-300 font-bold">SC</span>
                </div>
                <div>
                  <p className="font-medium">Sarah Chen</p>
                  <p className="text-sm text-blue-200">Tech Enthusiast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Is my donation tax-deductible?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We're currently in the process of becoming a registered non-profit organization. At this time, donations are not tax-deductible, but we hope to change this in the near future.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How are donations used?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Donations go toward server costs, research expenses, content creation, and supporting our small team of dedicated contributors who maintain and expand the database.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I donate monthly?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! We offer monthly donation options through Patreon and other platforms. Monthly donations help us plan for the future and develop new features.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you accept cryptocurrency?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we accept Bitcoin, Ethereum, and several other cryptocurrencies. You can find the wallet addresses in our cryptocurrency donation section.
              </p>
            </div>
          </div>
        </div>
        
        {/* Other Ways to Help */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Other Ways to Support Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Can't donate? There are other ways you can help our project grow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="w-12 h-12 mx-auto bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 dark:text-yellow-400">
                  <polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" x2="14" y1="3" y2="10"></line><line x1="3" x2="10" y1="21" y2="14"></line>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Share Our Site</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Spread the word about our project on social media and with colleagues who might find it valuable.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                  <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Provide Feedback</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Help us improve by sending suggestions, reporting errors, or requesting new features.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <div className="w-12 h-12 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                  <path d="m12 15 2 2 4-4"></path><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Contribute Content</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Help us expand our database by contributing information about new AI models or updating existing entries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;