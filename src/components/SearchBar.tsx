import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  fullWidth?: boolean;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  fullWidth = false, 
  placeholder = "Search AI models...",
  onSearch
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (onSearch) {
        onSearch(query.trim());
      } else {
        navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    }
  };

  const clearSearch = () => {
    setQuery('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`${fullWidth ? 'w-full' : 'max-w-md'} relative`}
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 pl-10 pr-12 text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:focus:ring-blue-400 outline-none"
          placeholder={placeholder}
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-16 flex items-center pr-3"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200" />
          </button>
        )}
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;