import React from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  project: Project;
  showCategory?: boolean;
  index?: number;
}

/**
 * Simple portfolio card for bento grid layout
 * Shows overlay on hover without expand animation
 */
export function PortfolioCard({ 
  project, 
  showCategory = true,
  index = 0
}: PortfolioCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="h-full w-full">
      <Link
        to={`/project/${project.slug}`}
        className="group block relative overflow-hidden rounded-2xl h-full w-full shadow-lg hover:shadow-2xl transition-shadow duration-500"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted h-full w-full">
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
              'group-hover:scale-105'
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Overlay with gradient and text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white text-xl md:text-2xl font-medium tracking-wide">
                  {project.title}
                </h3>
                {showCategory && (
                  <div className="flex items-center gap-2 text-sm text-white/80 font-light tracking-wide">
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
