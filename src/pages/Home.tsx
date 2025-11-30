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

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  return <>
      <SEOHead />
      
      <div className="min-h-screen">
        {/* Hero Section - Modern split layout */}
      <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8">
          <div className="h-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20">
            {/* Left Content */}
            <motion.div className="space-y-8 text-left" initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              ease: "easeOut"
            }}>
              <div className="space-y-4">
                <motion.div className="inline-block" initial={{
                  opacity: 0,
                  scale: 0.8
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  duration: 0.6,
                  delay: 0.2
                }}>
                  <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500" />
                  </div>
                </motion.div>
                
                <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.3
                }}>
                  Saya {photographerInfo.name},<br />
                  <span className="text-purple-400">{photographerInfo.tagline}</span>
                </motion.h1>
              </div>

              <motion.p initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.5
              }} className="text-lg leading-relaxed max-w-xl text-slate-50">
                {photographerInfo.heroIntroduction}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div className="flex flex-wrap gap-4" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.7
              }}>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 border-0 px-8 py-6 text-base font-semibold">
                    Tentang
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-base font-semibold">
                    Lihat Portfolio
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Photo Frame */}
            <motion.div className="relative hidden lg:flex items-center justify-center" initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }}>
              <div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] bg-gradient-to-br from-purple-600 to-purple-800 p-1 shadow-2xl">
                <div className="w-full h-full rounded-[1.9rem] bg-gray-900 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop" alt="Photographer portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>

              {/* Arrow Circle */}
              
            </motion.div>
          </div>

          {/* Social Icons - Vertical Right */}
          <motion.div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-6" initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 1
          }}>
            <div className="writing-mode-vertical text-sm tracking-wider text-gray-500 mb-4">
              FOLLOW ME ON:
            </div>
            <a href={photographerInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={photographerInfo.socialLinks.behance} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:border-purple-600 hover:text-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2" initial={{
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