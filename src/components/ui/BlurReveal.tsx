import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface BlurRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * Blur to clear reveal animation
 */
export function BlurReveal({ children, className, delay = 0, duration = 0.8 }: BlurRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.95 }}
      animate={isInView 
        ? { opacity: 1, filter: 'blur(0px)', scale: 1 } 
        : { opacity: 0, filter: 'blur(20px)', scale: 0.95 }
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
