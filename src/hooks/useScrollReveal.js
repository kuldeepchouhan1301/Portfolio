import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // Skip scroll animations if reduced motion is preferred
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal-on-scroll');

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
