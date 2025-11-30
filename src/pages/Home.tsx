import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with featured image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://images.pexels.com/videos/2675516/free-video-2675516.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.currentTarget;
              target.style.opacity = '0';
            }}
          >
            <source src="https://videos.pexels.com/video-files/2675516/2675516-sd_960_540_24fps.mp4" type="video/mp4" />
          </video>
          {/* Video from Pexels */}
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-6">
          <motion.div
            className="text-center space-y-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-extralight tracking-widest text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {photographerInfo.name.toUpperCase()}
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl font-light tracking-wide text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {photographerInfo.tagline}
            </motion.p>

            <motion.p
              className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {photographerInfo.heroIntroduction}
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ScrollIndicator />
          </motion.div>
        </div>
      </section>

        {/* Introduction Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide">
              Tentang Karya Saya
            </h2>
            <div className="space-y-4 text-lg font-light leading-relaxed text-muted-foreground">
              <p>
                {photographerInfo.biography.split('\n\n')[0]}
              </p>
            </div>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group"
                >
                  <span>Pelajari Lebih Lanjut Tentang Saya</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                Proyek Unggulan
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Pilihan karya terbaru
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid - Horizontal scrolling layout */}
          <div className="w-full overflow-x-auto overflow-y-hidden pb-6 hide-scrollbar">
            <motion.div
              layout
              className="flex gap-3 px-4 md:px-6 lg:px-8 justify-center items-center"
            >
              {featuredProjects.map((project, index) => {
                const widths = [140, 160, 145, 155, 150, 165, 148, 158];
                const cardWidth = widths[index % widths.length];
                
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.5,
                      delay: index * 0.05,
                      layout: { 
                        duration: 0.4,
                        ease: "easeInOut"
                      }
                    }}
                    className="h-[450px] flex-shrink-0"
                  >
                    <ProjectCard
                      project={project}
                      showCategory={true}
                      index={index}
                      initialWidth={cardWidth}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors"
              >
                <span>Lihat Semua Proyek</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
