import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Creative portfolio grid with dynamic layouts
 * Features varied aspect ratios and spacing for visual interest
 * Responsive bento-style grid
 */
export function PortfolioGrid({ projects }: PortfolioGridProps) {
  // Dynamic aspect ratios for creative layout
  const getAspectRatio = (index: number): 'portrait' | 'landscape' | 'square' => {
    const patterns = ['landscape', 'portrait', 'square', 'landscape', 'portrait', 'landscape', 'square', 'portrait'];
    return patterns[index % patterns.length] as 'portrait' | 'landscape' | 'square';
  };

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => {
          const aspectRatio = getAspectRatio(index);
          
          // Create dynamic grid spans for bento layout
          const gridClass = 
            aspectRatio === 'landscape' 
              ? 'md:col-span-2 md:row-span-1' 
              : aspectRatio === 'portrait'
              ? 'md:col-span-1 md:row-span-2'
              : 'md:col-span-1 md:row-span-1';

          return (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.08,
                layout: { duration: 0.4 }
              }}
              className={gridClass}
            >
              <ProjectCard
                project={project}
                aspectRatio={aspectRatio}
                showCategory={true}
                index={index}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

