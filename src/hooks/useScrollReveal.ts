// src/hooks/useScrollReveal.ts
import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (threshold = 0.1) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Отписываемся от слежки, чтобы анимация не срабатывала повторно при каждом скролле
          observer.unobserve(entry.target);
        }
      },
      {
        threshold, // Процент видимости элемента для старта анимации (0.1 = 10%)
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { elementRef, revealClass: isRevealed ? 'reveal-visible' : 'reveal-hidden' };
};

