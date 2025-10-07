import { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import './App.scss';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScrollReveal = () => {
      const addShow = (selector) => {
        document.querySelectorAll(selector).forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 80) {
            el.classList.add('show');
          }
        });
      };
      addShow('.reveal');
      addShow('.reveal-left');
      addShow('.reveal-right');
      addShow('.reveal-stagger');
    };
    onScrollReveal();
    window.addEventListener('scroll', onScrollReveal);
    return () => window.removeEventListener('scroll', onScrollReveal);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="App">
      {loading && (
        <div className="loader"><div className="spinner"></div></div>
      )}
      <Header 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobile={toggleMobileMenu}
        onCloseMobile={closeMobileMenu}
      />
      
      <Element name="home">
        <Hero />
      </Element>
      
      <Element name="about">
        <div className="reveal"><About /></div>
      </Element>
      
      <Element name="skills">
        <div className="reveal"><Skills /></div>
      </Element>
      
      <Element name="projects">
        <div className="reveal"><Projects /></div>
      </Element>
      
      <Element name="contact">
        <div className="reveal"><Contact /></div>
      </Element>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;