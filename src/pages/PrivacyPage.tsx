import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex items-center mb-6">
              <Shield className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
              <h1 className="text-3xl font-bold">Privacy Policy</h1>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Last updated: April 1, 2025
            </p>
            
            <div className="prose max-w-none text-gray-700 dark:text-gray-300">
              <p>
                100+ AI Models ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by 100 AI Models. This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service").
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Information We Collect</h2>
              
              <p>
                When you visit our website, we may collect the following types of information:
              </p>
              
              <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-100">Personal Information</h3>
              
              <p>
                We may ask for personal information, such as your:
              </p>
              
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Email address (if you subscribe to our newsletter)</li>
                <li>Name (if you make a donation or contact us)</li>
                <li>Payment information (if you make a donation)</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-800 dark:text-gray-100">Usage Information</h3>
              
              <p>
                We may also collect information about how you use our website, including:
              </p>
              
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Pages you visit</li>
                <li>Time spent on pages</li>
                <li>Links you click</li>
                <li>The referring website</li>
              </ul>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">How We Use Your Information</h2>
              
              <p>
                We use the information we collect for various purposes, including to:
              </p>
              
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>Provide, maintain, and improve our website</li>
                <li>Process donations</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Understand how users interact with our website</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Provide newsletter updates if you've subscribed</li>
              </ul>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Cookies and Similar Technologies</h2>
              
              <p>
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Third-Party Services</h2>
              
              <p>
                We may use third-party services, such as Google Analytics, payment processors, and email service providers, that may collect, monitor, and analyze this information. These third parties have their own privacy policies addressing how they use such information.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Security</h2>
              
              <p>
                We value your trust in providing us your personal information, thus we strive to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Your Rights</h2>
              
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              
              <ul className="list-disc pl-6 mt-2 mb-4">
                <li>The right to access the personal information we have about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing</li>
                <li>The right to data portability</li>
              </ul>
              
              <p>
                To exercise these rights, please contact us at the information provided below.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Children's Privacy</h2>
              
              <p>
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Changes to This Privacy Policy</h2>
              
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Contact Us</h2>
              
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              
              <p className="mt-2">
                <strong>Email:</strong> privacy@100aimodels.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;