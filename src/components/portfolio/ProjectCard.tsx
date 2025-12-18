import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  initialWidth = 150
}: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div 
      className="h-full"
      animate={{ width: isHovered ? 280 : initialWidth }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            loading={index < 6 ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />
          
          {/* Overlay with gradient and text - only visible on hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <motion.div 
                className="space-y-1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h3 className="text-white text-xl font-medium tracking-wide leading-tight">
                  {project.title}
                </h3>
                {showCategory && (
                  <div className="flex items-center gap-2 text-sm text-white/80 font-light tracking-wide capitalize">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
