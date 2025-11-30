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
  // Dynamic widths for creative horizontal layout - narrow and tall
  const getCardStyle = (index: number) => {
    // Pattern: varied widths for visual interest - narrow and tall portrait cards
    const patterns = [
      { width: 'w-[140px]', height: 'h-[450px]' }, // Narrow tall
      { width: 'w-[160px]', height: 'h-[450px]' }, // Medium narrow
      { width: 'w-[145px]', height: 'h-[450px]' }, // Narrow
      { width: 'w-[155px]', height: 'h-[450px]' }, // Medium narrow
      { width: 'w-[150px]', height: 'h-[450px]' }, // Medium
      { width: 'w-[165px]', height: 'h-[450px]' }, // Medium-wide
      { width: 'w-[148px]', height: 'h-[450px]' }, // Narrow
      { width: 'w-[158px]', height: 'h-[450px]' }, // Medium narrow
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-6 hide-scrollbar">
      <motion.div
        layout
        className="flex gap-3 px-4 md:px-6 lg:px-8 justify-center"
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

