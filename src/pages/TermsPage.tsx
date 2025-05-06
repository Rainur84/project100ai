import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const TermsPage: React.FC = () => {
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
              <FileText className="text-blue-600 dark:text-blue-400 mr-3" size={28} />
              <h1 className="text-3xl font-bold">Terms of Service</h1>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Last updated: April 1, 2025
            </p>
            
            <div className="prose max-w-none text-gray-700 dark:text-gray-300">
              <p>
                Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the 100 AI Models website (the "Service") operated by 100 AI Models ("us", "we", or "our").
              </p>
              
              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
              
              <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Content</h2>
              
              <p>
                Our Service allows you to view information about various AI models. The content on our Service includes text, images, and links related to AI models.
              </p>
              
              <p>
                100 AI Models has no obligation to monitor the content available through the Service but may do so. We reserve the right to remove any content that we determine, in our sole discretion, violates these Terms or is otherwise objectionable.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Intellectual Property</h2>
              
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of 100 AI Models and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of 100 AI Models.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Links To Other Web Sites</h2>
              
              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by 100 AI Models.
              </p>
              
              <p>
                100 AI Models has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that 100 AI Models shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
              </p>
              
              <p>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Donations</h2>
              
              <p>
                Donations made to 100 AI Models are voluntary and non-refundable. By making a donation, you acknowledge that you are not receiving any goods or services in exchange for your donation.
              </p>
              
              <p>
                We use donation funds to maintain and improve our Service, including but not limited to server costs, content creation, and development.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Termination</h2>
              
              <p>
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Disclaimer</h2>
              
              <p>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
              </p>
              
              <p>
                100 AI Models does not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Limitation Of Liability</h2>
              
              <p>
                In no event shall 100 AI Models, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Governing Law</h2>
              
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
              
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Changes</h2>
              
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <p>
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-100">Contact Us</h2>
              
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <p className="mt-2">
                <strong>Email:</strong> terms@100aimodels.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;