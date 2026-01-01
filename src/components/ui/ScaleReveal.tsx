import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScaleRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  origin?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}

/**
 * Scale reveal animation with customizable origin
 */
export function ScaleReveal({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.7,
  origin = 'center'
}: ScaleRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const originMap = {
    center: 'center center',
    top: 'center top',
    bottom: 'center bottom',
    left: 'left center',
    right: 'right center',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0, rotate: -5 }}
      animate={isInView 
        ? { opacity: 1, scale: 1, rotate: 0 } 
        : { opacity: 0, scale: 0, rotate: -5 }
      }
      transition={{
        duration,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // Spring-like easing
      }}
      style={{ transformOrigin: originMap[origin] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
