import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
  showCategory?: boolean;
  index?: number;
}

/**
 * Project card component with image, hover overlay, and smooth animations
 * Used in homepage featured projects and portfolio grid
 */
export function ProjectCard({ 
  project, 
  aspectRatio, 
  showCategory = true,
  index = 0 
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const ratio = aspectRatio || 'landscape';
  
  const aspectRatioClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[3/2]',
    square: 'aspect-square'
  };

  return (
    <Link
      to={`/project/${project.slug}`}
      className="group block relative overflow-hidden rounded-2xl h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-muted h-full">
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        
        <motion.img
          src={project.coverImage}
          alt={project.title}
          className={cn(
            'w-full h-full object-cover transition-all duration-700',
            isLoaded ? 'opacity-100' : 'opacity-0',
            'group-hover:scale-110 group-hover:rotate-2'
          )}
          loading={index < 6 ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
        />
        
        {/* Overlay with gradient and text */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
          initial={false}
        >
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <motion.div
              initial={false}
              className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            >
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
            </motion.div>
          </div>
        </motion.div>

        {/* Subtle hover border glow effect */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-white/0 group-hover:ring-white/20 transition-all duration-500" />
      </div>
    </Link>
  );
}
