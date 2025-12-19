import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface PortfolioCardProps {
  project: Project;
  showCategory?: boolean;
  index?: number;
}

/**
 * Portfolio card with enhanced hover animations
 * Features smooth transitions, glow effects, and elegant reveals
 */
export function PortfolioCard({ 
  project, 
  showCategory = true,
  index = 0
}: PortfolioCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <motion.div 
      className="h-full w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${project.slug}`}
        className="group block relative overflow-hidden rounded-2xl h-full w-full"
      >
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:duration-500" />
        
        {/* Card container */}
        <div className="relative overflow-hidden rounded-2xl h-full w-full bg-muted shadow-lg group-hover:shadow-2xl transition-all duration-500">
          {/* Loading placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          
          {/* Image with zoom and brightness effects */}
          <img
            src={project.coverImage}
            alt={project.title}
            className={cn(
              'w-full h-full object-cover transition-all duration-700 ease-out',
              isLoaded ? 'opacity-100' : 'opacity-0',
              'group-hover:scale-110 group-hover:brightness-75'
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Animated border */}
          <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-all duration-500" />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Category badge - slides in from left */}
            {showCategory && (
              <div className="absolute top-4 left-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white border border-white/20">
                  {project.category}
                </span>
              </div>
            )}
            
            {/* View indicator - fades in at top right */}
            <div className="absolute top-4 right-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 delay-150">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <ArrowUpRight 
                  className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
                  strokeWidth={2}
                />
              </div>
            </div>
            
            {/* Title and info - slides up */}
            <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide drop-shadow-lg">
                {project.title}
              </h3>
              {showCategory && (
                <div className="flex items-center gap-3 text-sm text-white/70 font-light tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span>{project.year}</span>
                  <span className="w-8 h-px bg-white/40" />
                  <span>{project.location || 'Portfolio'}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
