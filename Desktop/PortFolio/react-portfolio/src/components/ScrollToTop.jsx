import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <a 
          href="#top" 
          className="scroll-to-top"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <i className="fas fa-chevron-up"></i>
        </a>
      )}
    </>
  );
};

export default ScrollToTop;
