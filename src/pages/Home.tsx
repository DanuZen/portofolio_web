import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  return <>
      <SEOHead />
      
      <div className="min-h-screen">
      {/* Hero Section - Editorial style with integrated photo */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {/* Background with subtle overlay */}
        <div className="absolute inset-0 z-0 bg-black" />
        
        {/* Hero Content */}
        <div className="relative h-full w-full">
          <div className="h-full flex items-center">
            {/* Left side - Large Typography */}
            <div className="relative z-10 w-full lg:w-1/2 px-6 lg:px-12 xl:px-20">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h1 className="font-display font-bold text-white leading-[0.9] tracking-tight">
                  <motion.div 
                    className="text-7xl md:text-8xl lg:text-9xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {photographerInfo.name.split(' ')[0]}
                  </motion.div>
                  <motion.div 
                    className="text-7xl md:text-8xl lg:text-9xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {photographerInfo.name.split(' ')[1]}
                  </motion.div>
                </h1>

                <motion.p 
                  className="text-sm md:text-base text-gray-400 max-w-md font-light leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {photographerInfo.heroIntroduction}
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-4 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Link to="/portfolio">
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base font-medium transition-colors"
                    >
                      Lihat Portfolio
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-base font-medium transition-colors"
                    >
                      Tentang
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Profile Photo */}
            <motion.div 
              className="absolute right-0 top-0 h-full w-1/2 lg:w-1/2 hidden lg:block"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="relative h-full w-full">
                <img 
                  src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" 
                  alt="Photographer" 
                  className="h-full w-full object-cover object-center grayscale"
                />
                {/* Gradient overlay for blending */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Social Icons - Vertical Right */}
          <motion.div 
            className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 z-20"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="writing-mode-vertical text-xs tracking-widest text-gray-500 mb-4 font-light">
              FOLLOW
            </div>
            <a 
              href={photographerInfo.socialLinks.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:border-white hover:text-black transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href={photographerInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:border-white hover:text-black transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href={photographerInfo.socialLinks.behance} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:border-white hover:text-black transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
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
                <Link to="/about" className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors group">
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
            <motion.div layout className="flex gap-3 px-4 md:px-6 lg:px-8 justify-center items-center">
              {featuredProjects.map((project, index) => {
              const widths = [140, 160, 145, 155, 150, 165, 148, 158];
              const cardWidth = widths[index % widths.length];
              return <motion.div key={project.id} layout initial={{
                opacity: 0,
                x: 50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.05,
                layout: {
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }} className="h-[450px] flex-shrink-0">
                    <ProjectCard project={project} showCategory={true} index={index} initialWidth={cardWidth} />
                  </motion.div>;
            })}
            </motion.div>
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link to="/portfolio" className="group inline-flex items-center gap-2 text-lg font-light tracking-wide text-foreground hover:text-muted-foreground transition-colors">
                <span>Lihat Semua Proyek</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>;
}