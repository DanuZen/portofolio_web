import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children?: ReactNode;
  backgroundImage?: string;
  className?: string;
  speed?: number; // 0.1 = subtle, 0.5 = strong parallax
  overlay?: boolean;
}

/**
 * Section wrapper with parallax background effect
 */
export function ParallaxSection({
  children,
  backgroundImage,
  className = '',
  speed = 0.3,
  overlay = true,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ y }}
        >
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          {overlay && (
            <motion.div 
              className="absolute inset-0 bg-black/50"
              style={{ opacity }}
            />
          )}
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
