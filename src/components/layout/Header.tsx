import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
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
 * Main header component with scroll-aware styling
 * Transparent on hero section, solid when scrolled
 * Mobile responsive with hamburger menu
 */
export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateWithDirection } = useNavigation();
  
  // Get current tab index
  const currentIndex = navLinks.findIndex(link => link.path === location.pathname) || 0;
  
  // Header is transparent only on homepage hero when not scrolled
  const isTransparent = location.pathname === '/' && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'bg-background/90 backdrop-blur-lg border-b border-border shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              'transition-all duration-300',
              'text-foreground hover:text-muted-foreground'
            )}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <img 
                src={LogoDann} 
                alt="DANN Logo" 
                className="h-8 w-auto object-contain transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link, index) => (
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
                      "relative text-lg leading-7 font-light tracking-wide transition-colors duration-300 bg-transparent border-none cursor-pointer",
                      "text-foreground hover:text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </button>
                </motion.div>
              ))}
            
            {/* Sliding underline indicator */}
            <motion.div
              className={cn(
                "absolute -bottom-1 h-px w-[60px]",
                "bg-foreground"
              )}
              animate={{
                x: currentIndex * 100,
              }}
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ left: 0 }}
            />
            
            {/* Icon Group with smaller gap */}
            <div className="flex items-center gap-1">


            </div>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-1">



            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    'size-9',
                    'text-foreground hover:bg-foreground/10'
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => {
                        navigateWithDirection(currentIndex, link.index);
                        navigate(link.path);
                        setMobileMenuOpen(false);
                      }}
                      className="text-lg leading-7 font-light tracking-wide text-foreground hover:text-muted-foreground text-left bg-transparent border-none cursor-pointer"
                    >
                      {link.name}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
