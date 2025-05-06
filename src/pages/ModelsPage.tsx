import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AIModelCard from '../components/AIModelCard';
import SearchBar from '../components/SearchBar';
import { aiModels, getAIModelCategories } from '../data/aiModels';
import { AIModel } from '../types';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

const ModelsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('category') || '';
  
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredModels, setFilteredModels] = useState<AIModel[]>(aiModels);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  
  const categories = ['All', ...getAIModelCategories()];
  
  useEffect(() => {
    let result = aiModels;
    
    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      result = result.filter(model => model.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(model => 
        model.name.toLowerCase().includes(query) ||
        model.description.toLowerCase().includes(query) ||
        model.company.toLowerCase().includes(query) ||
        model.capabilities.some(cap => cap.toLowerCase().includes(query))
      );
    }
    
    setFilteredModels(result);
  }, [selectedCategory, searchQuery]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const clearFilters = () => {
    setSelectedCategory('');
    setSearchQuery('');
  };
  
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">AI Model Directory</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Explore our comprehensive collection of AI models, from language models to image generators and everything in between.
          </p>
          
          {/* Search */}
          <div className="max-w-xl mx-auto">
            <SearchBar 
              fullWidth 
              placeholder="Search by name, capability, or company..." 
              onSearch={handleSearch}
            />
          </div>
        </div>
        
        {/* Filters */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Filter Models</h2>
            <button 
              className="md:hidden flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? (
                <>
                  <X size={16} className="mr-1" />
                  Hide Filters
                </>
              ) : (
                <>
                  <Filter size={16} className="mr-1" />
                  Show Filters
                </>
              )}
            </button>
          </div>
          
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <SlidersHorizontal size={16} className="text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Categories:</span>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === 'All' ? '' : category)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    (category === 'All' && !selectedCategory) || selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
              
              {(selectedCategory || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
                >
                  <X size={14} className="mr-1" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Results count */}
        <div className="mb-6 text-gray-600 dark:text-gray-400">
          {filteredModels.length} {filteredModels.length === 1 ? 'model' : 'models'} found
          {selectedCategory && ` in ${selectedCategory}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </div>
        
        {/* Models Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredModels.map(model => (
              <AIModelCard key={model.id} model={model} featured={model.featured} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="w-16 h-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <X size={24} className="text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Models Found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              We couldn't find any AI models matching your criteria.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelsPage;