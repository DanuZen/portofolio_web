import { useState } from 'react';
import { getProjectsByCategory } from '@/data/projects';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { SEOHead } from '@/components/seo/SEOHead';
import { motion } from 'framer-motion';
import { CategoryFilter } from '@/components/portfolio/CategoryFilter';
import { useCategories } from '@/hooks/useCategories';


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
      
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(0, 0%, 8%)' }}>
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 pb-0 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div initial={{
              opacity: 0.8,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.4
            }}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4">
                <span className="text-white">PORT</span><span className="text-red-500">FOLIO</span>
              </h1>
              <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                Koleksi kurasi fotografi yang mencakup berbagai subjek dan gaya
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pt-12 pb-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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