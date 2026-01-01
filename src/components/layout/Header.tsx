import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import LogoDann from '@/assets/LogoDann.png';
import { useNavigation } from '@/contexts/NavigationContext';

const navLinks = [
  { name: 'Beranda', path: '#hero', index: 0 },
  { name: 'Tentang', path: '#about', index: 1 },
  { name: 'Skills', path: '#skills', index: 2 },
  { name: 'Proyek', path: '#projects', index: 3 },
];

/**
 * Main header component with section-aware styling
 * Changes color based on the background of the current section in view
 * Mobile responsive with hamburger menu
 */
export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled } = useScrollPosition();
  const { isLightSection } = useActiveSection();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateWithDirection } = useNavigation();
  
  // Get current tab index
  const currentIndex = navLinks.findIndex(link => link.path === location.pathname) || 0;
  
  // Use section detection for homepage, otherwise use page-based logic
  const isHomepage = location.pathname === '/';
  const isLightBackground = isHomepage ? isLightSection : false;
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo in Pill */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
            >
              <img 
                src={LogoDann} 
                alt="DANN" 
                className={cn(
                  "h-8 w-auto object-contain transition-all duration-300",
                  isLightBackground ? "brightness-0" : ""
                )} 
              />
            </Link>
          </motion.div>

          {/* Center - Desktop Navigation Pills */}
          <nav className="hidden md:flex items-center gap-2 ml-64">
            {navLinks.map((link, index) => {
              // Check if link is active based on current section ID
              const activeSectionId = useActiveSection().activeSectionId;
              const isActive = activeSectionId ? link.path === `#${activeSectionId}` : location.pathname === link.path;
              
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <button
                    onClick={() => {
                      if (link.path.startsWith('#')) {
                        const element = document.querySelector(link.path);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      } else {
                        navigateWithDirection(currentIndex, link.index);
                        navigate(link.path);
                      }
                    }}
                    className={cn(
                      "relative px-5 py-2.5 rounded-full text-sm font-black font-akzidenz tracking-wide transition-all duration-300",
                      isActive
                        ? "text-[#FF3B30]"
                        : (isLightBackground
                            ? "bg-transparent text-black hover:bg-black/10"
                            : "bg-transparent text-white hover:bg-white/10")
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {link.name}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </nav>

          {/* Right Side - Decorative Line with Stars */}
          <motion.div 
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className={cn("w-32 lg:w-48 h-px transition-colors duration-300", isLightBackground ? "bg-black" : "bg-white")} />
              <div className={cn("w-2 h-2 rounded-full transition-colors duration-300", isLightBackground ? "bg-black" : "bg-white")} />
            </div>
            <div className={cn("flex items-center gap-1 transition-colors duration-300", isLightBackground ? "text-black" : "text-white")}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
              </svg>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
              </svg>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"/>
              </svg>
            </div>
          </motion.div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "inline-flex items-center justify-center rounded-md size-11 transition-colors duration-300",
                    isLightBackground 
                      ? "text-black hover:bg-black/10" 
                      : "text-white hover:bg-white/10"
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="w-8 h-8" strokeWidth={3} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-[hsl(0,0%,8%)] border-[#FF3B30]/20 p-0">
                <div className="px-6 pt-6 pb-4">
                  <img src={LogoDann} alt="DANN" className="h-8 w-auto" />
                </div>
                <nav className="flex flex-col gap-4 mt-2">
                  {navLinks.map((link) => {
                    // Check if link is active based on current section ID
                    const activeSectionId = useActiveSection().activeSectionId;
                    const isActive = activeSectionId ? link.path === `#${activeSectionId}` : location.pathname === link.path;
                    
                    return (
                      <button
                        key={link.path}
                        onClick={() => {
                          if (link.path.startsWith('#')) {
                            const element = document.querySelector(link.path);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                              setMobileMenuOpen(false);
                            }
                          } else {
                            navigateWithDirection(currentIndex, link.index);
                            navigate(link.path);
                            setMobileMenuOpen(false);
                          }
                        }}
                        className={cn(
                          "text-left px-5 py-4 text-4xl font-black font-akzidenz uppercase tracking-tighter transition-all duration-300",
                          isActive
                            ? "bg-[#FF3B30] text-black"
                            : "bg-transparent text-white hover:text-[#FF3B30]"
                        )}
                      >
                        {link.name}
                      </button>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
