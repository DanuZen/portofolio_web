import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  showCategory?: boolean;
  index?: number;
  initialWidth?: number;
}

/**
 * Project card component with image, hover overlay, and smooth animations
 * Used in homepage featured projects and portfolio grid
 */
export function ProjectCard({ 
  project, 
  showCategory = true,
  index = 0,
  initialWidth
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="h-full" style={{ width: initialWidth ? `${initialWidth}px` : 'auto' }}>
      <Link
        to={`/project/${project.slug}`}
        className="group block relative overflow-hidden rounded-3xl h-full"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted h-full rounded-3xl">
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse rounded-3xl" />
          )}
          
          <img
            src={project.coverImage}
            alt={project.title}
            className={cn(
              'w-full h-full object-cover transition-all duration-700 rounded-3xl',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-105'
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </Link>
    </div>
  );
}
