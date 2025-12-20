import { useState, useEffect } from 'react';

/**
 * Hook to detect which section is currently in view at the top of the viewport
 * Returns whether the current section has a light or dark background
 */
export function useActiveSection() {
  const [isLightSection, setIsLightSection] = useState(true);

  useEffect(() => {
    const checkSection = () => {
      // Get all sections with data-section-theme attribute
      const sections = document.querySelectorAll('[data-section-theme]');
      
      if (sections.length === 0) {
        setIsLightSection(true);
        return;
      }

      // Check which section is at the top of the viewport (where navbar is)
      const navbarHeight = 64; // Height of navbar
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        // Section is considered active if it covers the navbar area
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          const theme = section.getAttribute('data-section-theme');
          setIsLightSection(theme === 'light');
          return;
        }
      }
      
      // Default to light if no section found
      setIsLightSection(true);
    };

    // Check on mount
    checkSection();
    
    // Check on scroll
    window.addEventListener('scroll', checkSection, { passive: true });
    
    // Check on resize
    window.addEventListener('resize', checkSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkSection);
      window.removeEventListener('resize', checkSection);
    };
  }, []);

  return { isLightSection };
}
