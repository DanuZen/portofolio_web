import { useState, useEffect } from 'react';

/**
 * Hook to detect which section is currently in view at the top of the viewport
 * Returns whether the current section has a light or dark background and the active section ID
 */
export function useActiveSection() {
  const [isLightSection, setIsLightSection] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    const checkSection = () => {
      // Get all sections with data-section-theme attribute
      const sections = document.querySelectorAll('[data-section-theme]');
      
      if (sections.length === 0) {
        setIsLightSection(false);
        setActiveSectionId('');
        return;
      }

      // Check which section is at the top of the viewport (where navbar is)
      const navbarHeight = 200; // Increased threshold for better detection
      
      // Convert NodeList to Array and reverse to check deepest children first (nested sections)
      const sectionsArray = Array.from(sections).reverse();

      let foundActive = false;

      for (const section of sectionsArray) {
        const rect = section.getBoundingClientRect();
        // Section is considered active if it covers the navbar area
        if (rect.top <= navbarHeight && rect.bottom > navbarHeight) {
          const theme = section.getAttribute('data-section-theme');
          setIsLightSection(theme === 'light');
          setActiveSectionId(section.id);
          foundActive = true;
          return;
        }
      }
      
      // Default to light if no section found
      if (!foundActive) {
        setIsLightSection(false);
        // If we're at the very top, assume hero/first section
        if (window.scrollY < 100) {
            setActiveSectionId('hero');
        }
      }
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

  return { isLightSection, activeSectionId };
}
