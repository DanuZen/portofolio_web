import { useState } from 'react';
import { projects, getProjectsByCategory } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { CategoryFilter } from '@/components/portfolio/CategoryFilter';

const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'landscapes', label: 'Landscapes' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'documentary', label: 'Documentary' }
];

/**
 * Portfolio page with dynamic category filtering
 * Features creative layouts and smooth animations
 */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <>
      <SEOHead 
        title="Portfolio"
        description="Browse my complete photography portfolio featuring portraits, landscapes, editorial work, architecture, and documentary projects."
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide">
                Portfolio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                A curated collection of photography spanning diverse subjects and styles
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CategoryFilter 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="px-4 md:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <PortfolioGrid 
              projects={filteredProjects}
              key={activeCategory}
            />
          </div>
        </section>
      </div>
    </>
  );
}
