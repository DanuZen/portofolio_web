import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Creative portfolio grid with horizontal flowing layout
 * Features varied card sizes similar to creative photographer portfolios
 * Cards arranged in flexible rows with different widths
 */
export function PortfolioGrid({ projects }: PortfolioGridProps) {
  // Dynamic widths for creative horizontal layout - smaller sizes
  const getCardStyle = (index: number) => {
    // Pattern: varied widths for visual interest - compact sizes
    const patterns = [
      { width: 'w-[180px]', height: 'h-[380px]' }, // Narrow portrait
      { width: 'w-[220px]', height: 'h-[380px]' }, // Medium
      { width: 'w-[200px]', height: 'h-[380px]' }, // Medium-narrow
      { width: 'w-[190px]', height: 'h-[380px]' }, // Narrow-medium
      { width: 'w-[210px]', height: 'h-[380px]' }, // Medium
      { width: 'w-[195px]', height: 'h-[380px]' }, // Medium-narrow
      { width: 'w-[225px]', height: 'h-[380px]' }, // Medium-large
      { width: 'w-[185px]', height: 'h-[380px]' }, // Narrow
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-6 hide-scrollbar">
      <motion.div
        layout
        className="flex gap-3 md:gap-4 px-4 md:px-6 lg:px-8"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => {
            const cardStyle = getCardStyle(index);
            
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.05,
                  layout: { duration: 0.4 }
                }}
                className={`${cardStyle.width} ${cardStyle.height} flex-shrink-0`}
              >
                <ProjectCard
                  project={project}
                  showCategory={true}
                  index={index}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

