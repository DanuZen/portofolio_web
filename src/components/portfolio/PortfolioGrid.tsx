import type { Project } from '@/types';
import { PortfolioCard } from './PortfolioCard';

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
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-1 md:row-span-2', // Tall
      'md:col-span-2 md:row-span-1', // Wide
      'md:col-span-1 md:row-span-1', // Small
      'md:col-span-1 md:row-span-2', // Tall
      'md:col-span-2 md:row-span-1', // Wide
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4 md:gap-6 px-4 md:px-6 lg:px-8">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={getBentoClass(index)}
        >
          <PortfolioCard
            project={project}
            showCategory={true}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

