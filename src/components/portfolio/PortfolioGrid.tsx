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
  // Dynamic widths for creative horizontal layout
  const getCardStyle = (index: number) => {
    // Pattern: varied widths for visual interest
    const patterns = [
      { width: 'w-[380px]', height: 'h-[480px]' }, // Large
      { width: 'w-[280px]', height: 'h-[480px]' }, // Narrow
      { width: 'w-[320px]', height: 'h-[480px]' }, // Medium
      { width: 'w-[360px]', height: 'h-[480px]' }, // Large-Medium
      { width: 'w-[300px]', height: 'h-[480px]' }, // Medium
      { width: 'w-[340px]', height: 'h-[480px]' }, // Medium-Large
      { width: 'w-[420px]', height: 'h-[480px]' }, // Extra Large
      { width: 'w-[290px]', height: 'h-[480px]' }, // Narrow-Medium
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-6 hide-scrollbar">
      <motion.div
        layout
        className="flex gap-4 md:gap-6 px-4 md:px-6 lg:px-8"
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

