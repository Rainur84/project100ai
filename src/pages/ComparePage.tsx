import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { aiModels } from '../data/aiModels';
import { AIModel } from '../types';
import { Check, X, RefreshCcw, Shuffle } from 'lucide-react';

const ComparePage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialModelIds = queryParams.get('models')?.split(',') || [];
  
  const [selectedModels, setSelectedModels] = useState<AIModel[]>([]);
  const [availableModels, setAvailableModels] = useState<AIModel[]>(aiModels);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  useEffect(() => {
    if (initialModelIds.length > 0) {
      const models = initialModelIds
        .map(id => aiModels.find(model => model.id === id))
        .filter((model): model is AIModel => !!model);
      
      setSelectedModels(models);
      updateAvailableModels(models);
    }
  }, []);
  
  const updateAvailableModels = (selected: AIModel[]) => {
    const selectedIds = selected.map(model => model.id);
    setAvailableModels(aiModels.filter(model => !selectedIds.includes(model.id)));
  };
  
  const handleModelSelect = (modelId: string) => {
    const model = availableModels.find(m => m.id === modelId);
    if (model) {
      const updatedSelected = [...selectedModels, model];
      setSelectedModels(updatedSelected);
      updateAvailableModels(updatedSelected);
    }
  };
  
  const handleModelRemove = (modelId: string) => {
    const model = selectedModels.find(m => m.id === modelId);
    const updatedSelected = selectedModels.filter(m => m.id !== modelId);
    setSelectedModels(updatedSelected);
    
    if (model) {
      setAvailableModels([...availableModels, model].sort((a, b) => a.name.localeCompare(b.name)));
    }
  };
  
  const clearComparison = () => {
    setSelectedModels([]);
    setAvailableModels(aiModels);
  };
  
  const filteredAvailableModels = searchQuery 
    ? availableModels.filter(model => 
        model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : availableModels;
  
  const getRandomComparison = () => {
    clearComparison();
    const shuffled = [...aiModels].sort(() => 0.5 - Math.random());
    const randomModels = shuffled.slice(0, 3);
    setSelectedModels(randomModels);
    updateAvailableModels(randomModels);
  };
  
  return (
    <div className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Compare AI Models</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Select AI models to compare their features, capabilities, and specifications side by side.
          </p>
        </div>
        
        {/* Model Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Select Models to Compare</h2>
            <div className="flex space-x-3">
              <button 
                onClick={clearComparison}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center"
                disabled={selectedModels.length === 0}
              >
                <RefreshCcw size={16} className="mr-1" />
                Clear
              </button>
              <button 
                onClick={getRandomComparison}
                className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
              >
                <Shuffle size={16} className="mr-1" />
                Random Comparison
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for models to compare..."
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white outline-none"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredAvailableModels.slice(0, 9).map(model => (
              <div 
                key={model.id}
                onClick={() => handleModelSelect(model.id)}
                className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer transition-colors"
              >
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-md overflow-hidden mr-3 flex-shrink-0">
                    <img src={model.imageUrl} alt={model.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">{model.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{model.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredAvailableModels.length > 9 && (
            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              + {filteredAvailableModels.length - 9} more models available
            </div>
          )}
        </div>
        
        {/* Comparison Table */}
        {selectedModels.length > 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/50">
                    <th className="px-6 py-3 text-left text-gray-500 dark:text-gray-400 font-medium text-sm uppercase tracking-wider sticky left-0 bg-gray-50 dark:bg-gray-900/50">
                      Comparison
                    </th>
                    {selectedModels.map(model => (
                      <th key={model.id} className="px-6 py-3 text-center min-w-[200px]">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-lg overflow-hidden mb-2">
                            <img src={model.imageUrl} alt={model.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-bold">{model.name}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{model.company}</span>
                          <button 
                            onClick={() => handleModelRemove(model.id)}
                            className="mt-2 p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                      Category
                    </td>
                    {selectedModels.map(model => (
                      <td key={model.id} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                          {model.category}
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                      Release Date
                    </td>
                    {selectedModels.map(model => (
                      <td key={model.id} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {new Date(model.releaseDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                      Capabilities
                    </td>
                    {selectedModels.map(model => (
                      <td key={model.id} className="px-6 py-4 text-sm">
                        <div className="flex flex-col items-center space-y-2">
                          {model.capabilities.map((capability, index) => (
                            <span key={index} className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs">
                              {capability}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                      Featured
                    </td>
                    {selectedModels.map(model => (
                      <td key={model.id} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {model.featured ? (
                          <Check className="mx-auto text-green-500" size={20} />
                        ) : (
                          <X className="mx-auto text-red-500" size={20} />
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                      Research Paper
                    </td>
                    {selectedModels.map(model => (
                      <td key={model.id} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {model.paperUrl ? (
                          <Check className="mx-auto text-green-500" size={20} />
                        ) : (
                          <X className="mx-auto text-red-500" size={20} />
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                      Open Source
                    </td>
                    {selectedModels.map(model => (
                      <td key={model.id} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {model.githubUrl ? (
                          <Check className="mx-auto text-green-500" size={20} />
                        ) : (
                          <X className="mx-auto text-red-500" size={20} />
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white sticky left-0 bg-white dark:bg-gray-800">
                      Demo Available
                    </td>
                    {selectedModels.map(model => (
                      <td key={model.id} className="px-6 py-4 whitespace-nowrap text-sm text-center">
                        {model.demoUrl ? (
                          <Check className="mx-auto text-green-500" size={20} />
                        ) : (
                          <X className="mx-auto text-red-500" size={20} />
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <RefreshCcw size={24} className="text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Models Selected</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Select AI models from the list above to begin comparing them.
            </p>
            <button 
              onClick={getRandomComparison}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors inline-flex items-center"
            >
              <Shuffle size={16} className="mr-2" />
              Try a Random Comparison
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;