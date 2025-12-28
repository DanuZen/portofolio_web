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
  { name: 'Beranda', path: '/', index: 0 },
  { name: 'Portfolio', path: '/portfolio', index: 1 },
  { name: 'Tentang', path: '/about', index: 2 },
  { name: 'Kontak', path: '/contact', index: 3 },
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
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#B8FF00] bg-transparent hover:bg-[#B8FF00]/10 transition-all duration-300"
            >
              <span className="text-[#B8FF00] font-bold text-sm tracking-wide">DANN</span>
            </Link>
          </motion.div>

          {/* Center - Desktop Navigation Pills */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <button
                    onClick={() => {
                      navigateWithDirection(currentIndex, link.index);
                      navigate(link.path);
                    }}
                    className={cn(
                      "relative px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border",
                      isActive
                        ? "bg-[#B8FF00] text-black border-[#B8FF00]"
                        : "bg-transparent text-[#B8FF00] border-[#B8FF00] hover:bg-[#B8FF00]/10"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {isActive && (
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 12h8M12 8v8M6 6l2 2M18 6l-2 2M6 18l2-2M18 18l-2-2" stroke="currentColor" strokeWidth="1" fill="none"/>
                        </svg>
                      )}
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
              <div className="w-32 lg:w-48 h-px bg-[#B8FF00]" />
              <div className="w-2 h-2 rounded-full bg-[#B8FF00]" />
            </div>
            <div className="flex items-center gap-1 text-[#B8FF00]">
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
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10 rounded-full border border-[#B8FF00] text-[#B8FF00] hover:bg-[#B8FF00]/10"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-[hsl(0,0%,8%)] border-[#B8FF00]/20">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <button
                        key={link.path}
                        onClick={() => {
                          navigateWithDirection(currentIndex, link.index);
                          navigate(link.path);
                          setMobileMenuOpen(false);
                        }}
                        className={cn(
                          "text-left px-5 py-3 rounded-full text-base font-bold tracking-wide transition-all duration-300 border",
                          isActive
                            ? "bg-[#B8FF00] text-black border-[#B8FF00]"
                            : "bg-transparent text-[#B8FF00] border-[#B8FF00] hover:bg-[#B8FF00]/10"
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
