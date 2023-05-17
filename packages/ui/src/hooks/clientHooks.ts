'use client';
import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

export const useBodyScrollLock = (condition: boolean) => {
  useEffect(() => {
    if (condition) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [condition]);
};

export const useOnScreen = ({
  ref,
  rootMargin = '0px',
}: {
  ref: RefObject<Element>;
  rootMargin?: string;
}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return isIntersecting;
};
