import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { AIModel } from '../types';

interface AIModelCardProps {
  model: AIModel;
  featured?: boolean;
}

const AIModelCard: React.FC<AIModelCardProps> = ({ model, featured = false }) => {
  const [showFullUsage, setShowFullUsage] = useState(false);
  const maxUsageLength = 120;

  const toggleUsage = () => setShowFullUsage(prev => !prev);

  const usageText = model.usage || '';
  const isLong = usageText.length > maxUsageLength;
  const displayedUsage = showFullUsage ? usageText : usageText.slice(0, maxUsageLength) + (isLong ? '…' : '');

  return (
    <div 
      className={`group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
        featured ? 'border-2 border-blue-500 dark:border-blue-400' : 'border border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={model.imageUrl} 
          alt={model.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{model.name}</h3>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md">
            {model.category}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {model.description}
        </p>

        {/* How to use */}
        {model.usage && (
          <div className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            <span className="font-semibold text-gray-800 dark:text-gray-200">How to use:</span>{' '}
            {displayedUsage}
            {isLong && (
              <button
                onClick={toggleUsage}
                className="ml-2 text-blue-600 dark:text-blue-400 hover:underline focus:outline-none text-xs font-medium"
              >
                {showFullUsage ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {model.capabilities.slice(0, 3).map((capability, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
            >
              {capability}
            </span>
          ))}
          {model.capabilities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
              +{model.capabilities.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm mb-4">
          <span className="text-gray-500 dark:text-gray-400">
            {new Date(model.releaseDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            })}
          </span>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {model.company}
          </span>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-700">
          <Link 
            to={`/model/${model.id}`}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
          >
            View Details
          </Link>
          
          <div className="flex space-x-2">
            {model.demoUrl && (
              <a 
                href={model.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            
            {model.githubUrl && (
              <a 
                href={model.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            
            {model.paperUrl && (
              <a 
                href={model.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Research Paper"
              >
                <FileText size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIModelCard;