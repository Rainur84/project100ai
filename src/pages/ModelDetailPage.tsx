// src/pages/ModelDetailPage.tsx

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAIModelById } from '../data/aiModels';
import { AIModel } from '../types';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, Star, ExternalLink, Github, FileText, 
  Calendar, Building, Tag, Zap, Share2, Heart 
} from 'lucide-react';

const ModelDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [model, setModel] = useState<AIModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showFullUsage, setShowFullUsage] = useState<boolean>(false);
  const USAGE_LIMIT = 300;

  useEffect(() => {
    if (id) {
      const foundModel = getAIModelById(id);
      setModel(foundModel || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 px-4 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!model) {
    return (
      <div className="py-24 px-4 min-h-screen">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-bold mb-4">AI Model Not Found</h2>
            <p className="mb-4">We couldn't find the AI model you're looking for.</p>
            <Link 
              to="/models" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to AI Models
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(model.releaseDate).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const truncatedUsage = model.usage && model.usage.length > USAGE_LIMIT
    ? model.usage.slice(0, USAGE_LIMIT) + '...'
    : model.usage;

  return (
    <main className="py-24 px-4">
      <Helmet>
         <title>{model.name} – AI Model Details</title>
         <meta name="description" content={model.description.slice(0, 160)} />
         <meta property="og:title" content={model.name} />
         <meta property="og:description" content={model.description.slice(0, 160)} />
         <meta property="og:image" content={model.imageUrl} />
         <meta property="og:url" content={`https://project100ai-bay.vercel.app/models/${model.id}`} />
         <meta property="og:type" content="website" />
         <meta name="twitter:card" content="summary_large_image" />
         <script type="application/ld+json">
            {JSON.stringify({
               "@context": "https://schema.org",
               "@type": "SoftwareApplication",
               "name": model.name,
               "description": model.description,
               "applicationCategory": model.category,
               "operatingSystem": "All",
               "image": model.imageUrl,
               "url": `https://project100ai-bay.vercel.app/models/${model.id}`,
               "author": {
                 "@type": "Organization",
                 "name": model.company
               },
               "releaseDate": model.releaseDate,
               ...(model.demoUrl && {
                "offers": {
                  "@type": "Offer",
                  "url": model.demoUrl,
                  "price": "0.00",
                  "priceCurrency": "USD"
                }
              })
           })}
         </script>
       </Helmet>

      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <Link 
            to="/models" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to AI Models
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mb-8">
              {/* Hero Image */}
              <div className="relative aspect-video">
                <img 
                  src={model.imageUrl} 
                  alt={`Illustration for ${model.name}`} 
                  className="w-full h-full object-cover"
                />
                {model.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-md">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-8">
                <h1 className="text-3xl font-bold mb-4">{model.name}</h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                  {model.description}
                </p>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <Zap size={20} className="mr-2 text-yellow-500" />
                    Capabilities
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {model.capabilities.map((capability, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {capability}
                      </span>
                    ))}
                  </div>
                </div>

                {model.usage && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <FileText size={20} className="mr-2 text-green-500" />
                      How to Use
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-base whitespace-pre-line">
                      {showFullUsage ? model.usage : truncatedUsage}
                    </p>
                    {model.usage.length > USAGE_LIMIT && (
                      <button 
                        onClick={() => setShowFullUsage(prev => !prev)}
                        className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        {showFullUsage ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-4">
                  {model.demoUrl && (
                    <a 
                      href={model.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Try Demo
                    </a>
                  )}
                  {model.githubUrl && (
                    <a 
                      href={model.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md flex items-center transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub Repository
                    </a>
                  )}
                  {model.paperUrl && (
                    <a 
                      href={model.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md flex items-center transition-colors"
                    >
                      <FileText size={16} className="mr-2" />
                      Research Paper
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Similar Models */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-8">
              <h2 className="text-xl font-semibold mb-6">Similar Models</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Check out these AI models in the same category.
              </p>
              <div className="text-center p-8">
                <Link 
                  to={`/models?category=${encodeURIComponent(model.category)}`}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md inline-flex items-center transition-colors"
                >
                  <Tag size={16} className="mr-2" />
                  View All {model.category} Models
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="order-1 lg:order-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-6 mb-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Model Details</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Calendar size={20} className="mr-3 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">Release Date</span>
                    <span className="font-medium">{formattedDate}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Building size={20} className="mr-3 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">Developer</span>
                    <span className="font-medium">{model.company}</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Tag size={20} className="mr-3 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">Category</span>
                    <Link 
                      to={`/models?category=${encodeURIComponent(model.category)}`}
                      className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {model.category}
                    </Link>
                  </div>
                </li>
                <li className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex space-x-3">
                    <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Share2 size={16} className="mr-1" />
                      Share
                    </button>
                    <button className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <Heart size={16} className="mr-1" />
                      Favorite
                    </button>
                  </div>
                </li>
                <li className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    to="/compare" 
                    className="block w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-center transition-colors"
                  >
                    Add to Comparison
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Section */}
            <div className="bg-gradient-to-br from-purple-700 to-blue-700 rounded-xl shadow-md overflow-hidden p-6 text-white">
              <div className="flex items-center mb-4">
                <Star size={24} className="text-yellow-300 mr-2" />
                <h3 className="text-lg font-semibold">Support Our Project</h3>
              </div>
              <p className="mb-4 text-blue-100">
                Help us continue providing quality information about AI models by supporting our work.
              </p>
              <Link 
                to="/donate" 
                className="block w-full py-2 bg-white text-blue-700 rounded-md text-center font-medium hover:bg-blue-50 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ModelDetailPage;