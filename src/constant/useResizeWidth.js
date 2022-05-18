import { useState, useEffect } from 'react';

export default function useResizeWidth() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () =>
        setInnerWidth(window.innerWidth)
      );
  }, [innerWidth]);

  return { innerWidth };
}
