import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AIModelCard from '../components/AIModelCard';
import SearchBar from '../components/SearchBar';
import { aiModels } from '../data/aiModels';
import { AIModel } from '../types';
import { Search as SearchIcon, AlertCircle } from 'lucide-react';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [searchResults, setSearchResults] = useState<AIModel[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);
  
  const performSearch = (query: string) => {
    setIsSearching(true);
    setSearchQuery(query);
    
    // Simulate network delay for a more realistic search experience
    setTimeout(() => {
      const lowercaseQuery = query.toLowerCase();
      
      const results = aiModels.filter(model => 
        model.name.toLowerCase().includes(lowercaseQuery) ||
        model.description.toLowerCase().includes(lowercaseQuery) ||
        model.company.toLowerCase().includes(lowercaseQuery) ||
        model.category.toLowerCase().includes(lowercaseQuery) ||
        model.capabilities.some(cap => cap.toLowerCase().includes(lowercaseQuery))
      );
      
      setSearchResults(results);
      setIsSearching(false);
      
      // Update URL with search query
      const newUrl = `/search?q=${encodeURIComponent(query)}`;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }, 500);
  };
  
  const handleSearch = (query: string) => {
    performSearch(query);
  };
  
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Search AI Models</h1>
          <div className="max-w-2xl mx-auto">
            <SearchBar 
              fullWidth 
              placeholder="Search by name, capability, company, or category..." 
              onSearch={handleSearch}
            />
          </div>
        </div>
        
        {/* Search Results */}
        <div className="mb-8">
          {searchQuery && !isSearching && (
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Found {searchResults.length} results for "{searchQuery}"
            </p>
          )}
          
          {isSearching ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : searchQuery && searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map(model => (
                <AIModelCard key={model.id} model={model} featured={model.featured} />
              ))}
            </div>
          ) : searchQuery ? (
            <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                <AlertCircle size={32} className="text-gray-500 dark:text-gray-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">No Results Found</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
                We couldn't find any AI models matching "{searchQuery}". 
                Try using different keywords or browse our categories.
              </p>
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <SearchIcon size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Search for AI Models</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2 max-w-md mx-auto">
                Enter a search term to find AI models by name, capability, company, or category.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm max-w-md mx-auto">
                Example searches: "image generation", "OpenAI", "language model", "code"
              </p>
            </div>
          )}
        </div>
        
        {/* Popular Searches */}
        {!searchQuery && (
          <div className="mb-16">
            <h2 className="text-xl font-semibold mb-4">Popular Searches</h2>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => performSearch("language model")}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm transition-colors"
              >
                Language Models
              </button>
              <button 
                onClick={() => performSearch("image generation")}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm transition-colors"
              >
                Image Generation
              </button>
              <button 
                onClick={() => performSearch("OpenAI")}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm transition-colors"
              >
                OpenAI
              </button>
              <button 
                onClick={() => performSearch("multimodal")}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm transition-colors"
              >
                Multimodal
              </button>
              <button 
                onClick={() => performSearch("code")}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm transition-colors"
              >
                Code Generation
              </button>
              <button 
                onClick={() => performSearch("video")}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm transition-colors"
              >
                Video Generation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;