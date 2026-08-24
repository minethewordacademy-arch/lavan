"use client";
import { useEffect } from 'react';

export default function GlobalProtection() {
  useEffect(() => {
    const preventRightClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'IMG' || (e.target as HTMLElement).tagName === 'VIDEO') {
        e.preventDefault();
      }
    };
    
    const preventKeys = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 's')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('keydown', preventKeys);

    return () => {
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('keydown', preventKeys);
    };
  }, []);

  return null;
}