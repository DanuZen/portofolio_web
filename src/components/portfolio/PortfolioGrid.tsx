import type { Project } from '@/types';
import { PortfolioCard } from './PortfolioCard';

interface PortfolioGridProps {
  projects: Project[];
}

/**
 * Portfolio grid with masonry-style layout
 * Uses CSS columns for gap-free arrangement
 */
export function PortfolioGrid({ projects }: PortfolioGridProps) {
  // Varied heights for visual interest
  const getHeightClass = (index: number) => {
    const patterns = [
      'h-[400px]', // tall
      'h-[280px]', // medium
      'h-[320px]', // medium-tall
      'h-[350px]', // tall
      'h-[260px]', // short
      'h-[380px]', // tall
      'h-[300px]', // medium
      'h-[340px]', // medium-tall
    ];
    return patterns[index % patterns.length];
  };

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 px-4 md:px-6 lg:px-8 space-y-4">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`break-inside-avoid ${getHeightClass(index)}`}
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

