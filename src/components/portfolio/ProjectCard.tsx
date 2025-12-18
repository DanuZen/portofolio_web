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
    <div className="h-full">
      <Link
        to={`/project/${project.slug}`}
        className="group block relative overflow-hidden rounded-2xl h-full shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted h-full">
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          
          <img
            src={project.coverImage}
            alt={project.title}
            className={cn(
              'w-full h-full object-cover transition-all duration-700',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-105 group-hover:brightness-110'
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Overlay with gradient and text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide">
                  {project.title}
                </h3>
                {showCategory && (
                  <div className="flex items-center gap-3 text-sm text-white/90 font-light tracking-wide">
                    <span className="capitalize">{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
