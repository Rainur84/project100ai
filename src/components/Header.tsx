import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { aiModels } from '../data/aiModels';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredModels = aiModels.filter((model) =>
    model.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlightMatch = (name: string) => {
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return name.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-600 rounded px-1">$1</mark>');
  };

  const handleSelectModel = (slug: string) => {
    setSearchTerm('');
    setShowResults(false);
    navigate(`/models/${slug}`);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Neurobox
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Home</Link>
          <Link to="/models" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">AI Models</Link>
          <Link to="/news" className="text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4">AI News</Link>
          <Link to="/compare" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Compare</Link>
          <Link to="/prompts" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Prompts</Link>
          <Link to="/donate" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Donate</Link>
          <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium">About</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4 relative" ref={searchRef}>
          <input
            type="text"
            placeholder="Search AI Models..."
            className="px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
          />
          {showResults && searchTerm && (
            <div className="absolute top-10 left-0 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-md z-50 max-h-80 overflow-y-auto border dark:border-gray-700">
              {filteredModels.length > 0 ? (
                filteredModels.map((model) => (
                  <div
                    key={model.slug}
                    onClick={() => handleSelectModel(model.slug)}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    dangerouslySetInnerHTML={{ __html: highlightMatch(model.name) }}
                  />
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500 dark:text-gray-400">No results</div>
              )}
            </div>
          )}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
          </button>
          <Link
            to="/donate"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
          >
            Support Us
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {['/', '/models', '/news', '/compare', '/prompts', '/donate', '/about'].map((path, index) => (
                <Link
                  key={index}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2 ${
                    path === '/news' ? 'text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-4' : ''
                  }`}
                >
                  {path === '/' ? 'Home' : path.replace('/', '').replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} className="text-yellow-400" />}
                  <span className="ml-2">{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;