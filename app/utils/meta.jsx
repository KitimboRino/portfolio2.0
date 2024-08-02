'use client'
import { useEffect } from 'react';

const TitleChangeComponent = () => {
  useEffect(() => {
    const handleBlur = () => {
      document.title = 'We miss you, we can create magic!';
    };
    const handleFocus = () => {
      document.title = 'Welcome back to Rino\'s Portfolio!';
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  return null;
};

export default TitleChangeComponent;