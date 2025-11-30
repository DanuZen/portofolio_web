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
  const getCardWidth = (index: number) => {
    // Pattern: varied widths for visual interest - narrow and tall portrait cards
    const widths = [140, 160, 145, 155, 150, 165, 148, 158];
    return widths[index % widths.length];
  };

  return (
    <div className="w-full overflow-x-auto overflow-y-hidden pb-6 hide-scrollbar">
      <motion.div
        layout
        className="flex gap-3 px-4 md:px-6 lg:px-8 justify-center items-center"
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => {
            const cardWidth = getCardWidth(index);
            
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
                  layout: { 
                    duration: 0.4,
                    ease: "easeInOut"
                  }
                }}
                className="h-[450px] flex-shrink-0"
              >
                <ProjectCard
                  project={project}
                  showCategory={true}
                  index={index}
                  initialWidth={cardWidth}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

