import { motion, useInView, Variants } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const getItemVariants = (direction: string): Variants => {
  const directions = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  };

  const offset = directions[direction as keyof typeof directions] || directions.up;

  return {
    hidden: { opacity: 0, ...offset, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

/**
 * Container for staggered animations
 */
export function StaggerContainer({ 
  children, 
  className, 
  staggerDelay = 0.1,
  direction = 'up'
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={{
        ...containerVariants,
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function StaggerItem({ children, className, direction = 'up' }: StaggerItemProps) {
  return (
    <motion.div variants={getItemVariants(direction)} className={className}>
      {children}
    </motion.div>
  );
}
