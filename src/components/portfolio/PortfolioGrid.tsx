import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Portfolio grid with bento-style layout
 * Features varied card sizes creating an asymmetric, dynamic grid
 */
export function PortfolioGrid({ projects }: PortfolioGridProps) {
  // Bento grid pattern: defines column and row spans for varied sizes
  const getBentoClass = (index: number) => {
    const patterns = [
      'md:col-span-2 md:row-span-2', // Large square
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-1 md:row-span-2', // Tall
      'md:col-span-2 md:row-span-1', // Wide
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-2 md:row-span-1', // Wide
      'md:col-span-1 md:row-span-2', // Tall
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-4 md:gap-6 px-4 md:px-6 lg:px-8">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.05,
              layout: { 
                duration: 0.4,
                ease: "easeInOut"
              }
            }}
            className={getBentoClass(index)}
          >
            <ProjectCard
              project={project}
              showCategory={true}
              index={index}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

