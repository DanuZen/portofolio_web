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
import LogoDann from '@/assets/LogoDann.png';
import Pembatas1 from '@/assets/Pembatas1.png';
import Pembatas2 from '@/assets/Pembatas2.png';

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
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background with geometric pattern */}
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/login-bg.jpg)' }} />
        
        {/* Hero Content */}
        <div className="relative h-full w-full flex items-center justify-end">
          {/* Center - Profile Photo */}
          <motion.div className="absolute inset-0 flex items-center justify-end" initial={{
            opacity: 0,
            scale: 1.1
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 1.2,
            ease: "easeOut"
          }}>
            <div className="relative h-full w-full max-w-4xl mr-0 flex items-center justify-end">
              <img src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" alt="Photographer" className="h-[90%] w-auto object-cover object-center grayscale" />
              {/* Gradient overlays for blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
            </div>
          </motion.div>

          {/* Typography overlay */}
          <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20 flex justify-center">
            <motion.div className="space-y-6 w-full max-w-7xl text-center" initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 1,
              ease: "easeOut"
            }}>
              <motion.div initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.8,
                delay: 0.2
              }} className="flex justify-center mb-4">
                <img 
                  src={LogoDann} 
                  alt="DANN" 
                  className="w-[50%] md:w-[45%] lg:w-[40%] h-auto object-contain drop-shadow-2xl" 
                />
              </motion.div>

              <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.6
              }} className="text-sm md:text-base max-w-md mx-auto font-light leading-relaxed text-slate-400">
                {photographerInfo.heroIntroduction}
              </motion.p>
            </motion.div>
          </div>

          {/* Social Icons - Vertical Right */}
          <motion.div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6 z-20" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 1
          }}>
            <div className="writing-mode-vertical text-xs tracking-widest text-gray-500 mb-4 font-light">
              FOLLOW
            </div>
            <a href={photographerInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:border-white hover:text-black transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:border-white hover:text-black transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={photographerInfo.socialLinks.behance} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-white hover:border-white hover:text-black transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 1.2,
            duration: 0.8
          }}>
            <ScrollIndicator />
          </motion.div>
        </div>
      </section>

        {/* Image Divider 1 */}
        <div className="w-full">
          <img src={Pembatas1} alt="" className="w-full h-auto object-cover" />
        </div>

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

        {/* Image Divider 2 */}
        <div className="w-full">
          <img src={Pembatas2} alt="" className="w-full h-auto object-cover" />
        </div>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 bg-background">
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