import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

interface PageTransitionProps {
  children: ReactNode;
}

const pageTransition = {
  type: "tween" as const,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  duration: 0.4,
};

/**
 * Page transition wrapper for smooth route changes
 * Provides consistent slide animations based on navigation direction
 */
export function PageTransition({ children }: PageTransitionProps) {
  const { direction } = useNavigation();
  
  const variants = {
    initial: { opacity: 0, x: direction === 'right' ? 100 : -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: direction === 'right' ? -100 : 100 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={pageTransition}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
