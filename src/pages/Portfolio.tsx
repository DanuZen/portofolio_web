import { useState } from 'react';
import { projects, getProjectsByCategory } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { CategoryFilter } from '@/components/portfolio/CategoryFilter';

const categories = [
  { id: 'all', label: 'Semua Karya' },
  { id: 'portraits', label: 'Potret' },
  { id: 'landscapes', label: 'Pemandangan' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'architecture', label: 'Arsitektur' },
  { id: 'documentary', label: 'Dokumenter' }
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
        description="Jelajahi portfolio fotografi lengkap saya yang menampilkan potret, pemandangan, karya editorial, arsitektur, dan proyek dokumenter."
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
                Koleksi kurasi fotografi yang mencakup berbagai subjek dan gaya
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

        {/* Portfolio Grid - Full Width Horizontal Scroll */}
        <section className="pb-24">
          <PortfolioGrid 
            projects={filteredProjects}
            key={activeCategory}
          />
        </section>
      </div>
    </>
  );
}
