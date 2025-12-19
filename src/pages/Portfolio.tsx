import { useState } from 'react';
import { getProjectsByCategory } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { CategoryFilter } from '@/components/portfolio/CategoryFilter';
import { useCategories } from '@/hooks/useCategories';
import Pembatas1 from '@/assets/Pembatas1.png';

/**
 * Portfolio page with dynamic category filtering
 * Features creative layouts and smooth animations
 */
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const {
    data: categories = []
  } = useCategories();
  const filteredProjects = getProjectsByCategory(activeCategory);
  return <>
      <SEOHead title="Portfolio" description="Jelajahi portfolio fotografi lengkap saya yang menampilkan potret, pemandangan, karya editorial, arsitektur, dan proyek dokumenter." />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="text-center space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                PORTFOLIO
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                Koleksi kurasi fotografi yang mencakup berbagai subjek dan gaya
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <CategoryFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
            </motion.div>
          </div>
        </section>

        {/* Portfolio Grid - Full Width Horizontal Scroll */}
        <section className="pb-24">
          <PortfolioGrid projects={filteredProjects} key={activeCategory} />
        </section>

        {/* Image Divider */}
        <div className="w-full">
          
        </div>
      </div>
    </>;
}