import { useState, useEffect } from 'react';

export const useScrollToTop = (initialScrollState = false) => {
  const [scrollToTop, setScrollToTop] = useState(initialScrollState);

  useEffect(() => {
    if (scrollToTop) {
      setScrollToTop(false);
      try {
        window.scroll({
          top: 0,
        });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }
  }, [scrollToTop, setScrollToTop]);

  return setScrollToTop;
};