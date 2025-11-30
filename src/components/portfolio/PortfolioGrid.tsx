import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Portfolio grid with responsive layout
 * Features varied card sizes in a standard grid
 */
export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 lg:px-8">
      <AnimatePresence mode="popLayout">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.05,
              layout: { 
                duration: 0.4,
                ease: "easeInOut"
              }
            }}
            className="aspect-[3/2]"
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

