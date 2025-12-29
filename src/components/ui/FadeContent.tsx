import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface FadeContentProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number; // Distance from top where fade starts (default: 150)
}

export function FadeContent({ children, className, threshold = 150 }: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Map scroll progress to opacity
  // As the element scrolls up (progress goes 0 -> 1), opacity goes 1 -> 0
  // We want it to fade out only when it's near the top
  // This is a simplified approach, let's try a more direct scrollY approach for absolute position relative to viewport
  
  return (
    <div ref={ref} className={cn("relative", className)}>
      <FadeInner threshold={threshold}>{children}</FadeInner>
    </div>
  );
}

function FadeInner({ children, threshold }: { children: React.ReactNode; threshold: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100px", "start -100px"] // Adjust these offsets to control when fade happens relative to top
  });
  
  // Actually, for "fading out as it hits the nav", we want to track the element's position relative to the viewport top.
  // useScroll with target tracks the element's progress through the viewport.
  // "start start" = element top at viewport top.
  // "start 0px" = element top at viewport top.
  
  // Let's use a simpler approach: Opacity based on scroll position relative to the element's start
  // But we want it to fade ONLY when it gets close to the top of the screen.
  
  const { scrollY } = useScroll();
  const opacity = useTransform(
    scrollY,
    (y) => {
        if (!ref.current) return 1;
        const elementTop = ref.current.offsetTop;
        const distanceToTop = elementTop - y;
        
        if (distanceToTop < threshold) {
            // Calculate opacity: 0 at 0px (top), 1 at threshold
            return Math.max(0, Math.min(1, distanceToTop / threshold));
        }
        return 1;
    }
  );

  // The above logic with useTransform(scrollY) is tricky because it causes re-renders or needs layout effects.
  // Better to use useScroll with offset.
  
  // "start start" -> Element top hits viewport top
  // "start end" -> Element top hits viewport bottom
  
  // We want opacity 1 until "start 150px" (150px from top)
  // Then opacity 0 at "start 0px" (top)
  
  const { scrollYProgress: fadeProgress } = useScroll({
    target: ref,
    offset: ["start 150px", "start 0px"]
  });
  
  const opacityTransform = useTransform(fadeProgress, [0, 1], [0, 1]); 
  // Wait, progress 0 is "start 150px" (lower down), progress 1 is "start 0px" (at top)? 
  // No, scroll progress usually goes 0 to 1 as you scroll DOWN.
  // When element is entering from bottom:
  // "start end" (0) -> "end start" (1)
  
  // Let's try a different offset configuration.
  // We want to detect when the element is leaving the top.
  // target: ref
  // offset: ["start viewport_top + threshold", "start viewport_top"]
  
  return (
    <motion.div 
      ref={ref}
      style={{ opacity: opacityTransform }}
    >
      {children}
    </motion.div>
  );
}

// Let's rewrite with a cleaner implementation using absolute scroll tracking which is more robust for this specific "fade at top" effect
export function FadeContentSimple({ children, className, threshold = 200 }: FadeContentProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 120px", "start 60px"]
    });
    
    // When scroll is at "start 100px" (element top is 100px from top of viewport), progress is 0.
    // When scroll is at "start 0px" (element top is at top of viewport), progress is 1.
    // We want opacity 1 at progress 0, and opacity 0 at progress 1.
    
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div ref={ref} style={{ opacity }} className={className}>
            {children}
        </motion.div>
    );
}
