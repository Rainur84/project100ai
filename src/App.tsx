import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ModelsPage from './pages/ModelsPage';
import ModelDetailPage from './pages/ModelDetailPage';
import ComparePage from './pages/ComparePage';
import DonatePage from './pages/DonatePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import PromptsPage from './pages/PromptsPage';
import NewsPage from './pages/NewsPage';
import GlossaryPage from './pages/GlossaryPage'; // ✅ импорт Glossary

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/models" element={<ModelsPage />} />
                <Route path="/model/:id" element={<ModelDetailPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/prompts" element={<PromptsPage />} />
                <Route path="/news" element={<NewsPage />} />
                <Route path="/glossary" element={<GlossaryPage />} /> {/* ✅ маршрут Glossary */}
                <Route path="/donate" element={<DonatePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;