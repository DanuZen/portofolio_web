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
    // Pattern: large, small, small, medium, large, small, medium, small
    const patterns = [
      { width: 'flex-[0_0_450px]', height: 'h-[520px]' }, // Large portrait
      { width: 'flex-[0_0_280px]', height: 'h-[520px]' }, // Tall narrow
      { width: 'flex-[0_0_300px]', height: 'h-[520px]' }, // Medium portrait
      { width: 'flex-[0_0_320px]', height: 'h-[520px]' }, // Medium
      { width: 'flex-[0_0_380px]', height: 'h-[520px]' }, // Large
      { width: 'flex-[0_0_300px]', height: 'h-[520px]' }, // Medium
      { width: 'flex-[0_0_500px]', height: 'h-[520px]' }, // Extra large
      { width: 'flex-[0_0_280px]', height: 'h-[520px]' }, // Small
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
      <motion.div
        layout
        className="flex gap-4 md:gap-6 min-w-min"
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
                  delay: index * 0.08,
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

