
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Highlights from './components/Highlights';
import NewsSection from './components/NewsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Highlights />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
