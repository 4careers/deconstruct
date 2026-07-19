"use client";
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function Shortcuts() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is typing in an input field
      const activeTag = document.activeElement?.tagName.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select') {
        return;
      }

      const key = e.key.toLowerCase();
      
      if (key === 'd') {
        document.body.classList.remove('light-mode');
      } else if (key === 'l') {
        document.body.classList.add('light-mode');
      } else if (key === 'f') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => console.log(err));
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
      } else if (key === 'c') {
        // If we are not on the homepage, go back to the homepage
        if (pathname !== '/') {
          router.push('/');
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [router, pathname]);

  return null;
}
