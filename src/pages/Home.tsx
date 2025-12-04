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
import Pembatas3 from '@/assets/Pembatas3.png';

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
        <div className="absolute inset-0 z-0 bg-background" />
        
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
            <div className="relative h-full w-full max-w-4xl mr-0 flex items-center justify-end bg-background">
              <img src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" alt="Photographer" className="h-[90%] w-auto object-cover object-center grayscale" />
              {/* Gradient overlays for blending */}
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
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
                <img src={LogoDann} alt="DANN" className="w-[50%] md:w-[45%] lg:w-[40%] h-auto object-contain drop-shadow-2xl" />
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
              }} className="text-sm md:text-base max-w-md mx-auto font-light leading-relaxed text-white">
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
            <div className="writing-mode-vertical text-xs tracking-widest text-white mb-4 font-light">
              FOLLOW
            </div>
            <a href={photographerInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href={photographerInfo.socialLinks.behance} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 hover:text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all">
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

        {/* Introduction Section - Modern 2-Column Layout */}
        <section className="py-24 md:py-32 px-6 lg:px-8 relative overflow-hidden" style={{
        backgroundColor: 'hsl(0, 11%, 91%)'
      }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <ScrollReveal>
                <div className="space-y-8">
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none" style={{
                  color: 'hsl(0, 0%, 8%)'
                }}>
                    TENTANG
                    <br />
                    SAYA
                  </h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-semibold" style={{
                    color: 'hsl(0, 0%, 8%)'
                  }}>
                      FOTOGRAFER PROFESIONAL
                    </h3>
                    
                    <p className="text-lg md:text-xl font-medium" style={{
                    color: 'hsl(0, 0%, 20%)'
                  }}>
                      Spesialisasi dalam fotografi editorial dan komersial
                    </p>
                    
                    <div className="text-base leading-relaxed pt-4" style={{
                    color: 'hsl(0, 0%, 30%)'
                  }}>
                      <p>
                        {photographerInfo.biography.split('\n\n')[0]}
                      </p>
                    </div>
                  </div>
                  
                  <Link to="/about" className="inline-flex items-center gap-2 text-lg font-semibold hover:opacity-70 transition-all group bg-black text-white px-8 py-4">
                    <span>Pelajari Lebih Lanjut</span>
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Right Column - Image with Red Accent */}
              <ScrollReveal delay={0.2}>
                <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
                  {/* Red Circle Background */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-red-500 rounded-full z-0" />
                  
                  {/* Photographer Image */}
                  <div className="relative z-10 h-full flex items-end justify-center">
                    <img src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" alt="Photographer" className="h-[85%] w-auto object-cover object-bottom filter-none" />
                  </div>
                  
                  {/* Decorative Text on Circle */}
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
                    <div className="writing-mode-vertical text-white text-lg md:text-xl font-bold tracking-widest">
                      I am A Designer
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Image Divider 2 */}
        <div className="w-full">
          <img src={Pembatas2} alt="" className="w-full h-auto object-cover" />
        </div>

        {/* Skills, Tools & Approach Section */}
        <section style={{
        backgroundColor: 'hsl(0, 0, 8)'
      }} className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden text-slate-50">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <ScrollReveal>
              <div className="space-y-8 mb-16">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                  <span className="text-white">SKILLS </span>
                  <span className="text-red-500">& TOOLS</span>
                </h2>
                <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                  Menggabungkan keahlian teknis dan artistik dengan peralatan standar industri untuk menghasilkan karya visual yang memukau.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {/* Column 1: SKILLS */}
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    SKILLS
                  </h2>
                  <ul className="space-y-3 text-white text-lg font-medium">
                    <li>FOTOGRAFI EDITORIAL</li>
                    <li>FOTOGRAFI KOMERSIAL</li>
                    <li>POST-PROCESSING</li>
                    <li>LIGHTING DESIGN</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Column 2: TOOLS */}
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                    TOOLS
                  </h2>
                  <div className="flex gap-4">
                    {/* Photoshop Icon */}
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">Ps</span>
                    </div>
                    {/* Lightroom Icon */}
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">Lr</span>
                    </div>
                    {/* Capture One Icon */}
                    <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xl">C1</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Column 3: APPROACH TO DESIGN */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                    FILOSOFI
                    <br />
                    CODING
                  </h2>
                  <div className="space-y-4 text-white text-base font-normal leading-relaxed">
                    <p>
                      KEJELASAN & STRUKTUR: Menulis kode yang bersih, mudah dibaca, dan mudah dikembangkan dalam jangka panjang. Setiap baris harus punya tujuan.
                    </p>
                    <p>
                      SOLUSI BERDASARKAN KEBUTUHAN: Memahami kebutuhan pengguna/klien sebelum mulai membangun, sehingga solusi yang dibuat tepat sasaran dan efisien.
                    </p>
                    <p>
                      KOLABORASI: Bekerja secara terbuka dengan tim, berdiskusi, dan membangun solusi yang kuat serta scalable.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Image Divider 3 */}
        <div className="w-full">
          
        </div>

        {/* Featured Projects Section - Bold Header + Gallery */}
        <section className="py-32 md:py-40 px-6 lg:px-8" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
          <div className="max-w-7xl mx-auto">
            {/* Bold Title Section */}
            <ScrollReveal>
              <div className="space-y-8 mb-16">
                {/* Bold Title */}
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                  <span className="text-white">PROYEK </span>
                  <span className="text-red-500">UNGGULAN</span>
                </h2>
                
                {/* Description */}
                <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl">
                  Koleksi karya fotografi terpilih yang menampilkan keahlian dalam editorial, komersial, dan portrait photography. Setiap proyek dirancang dengan perhatian detail dan visi kreatif yang kuat.
                </p>
              </div>
            </ScrollReveal>

            {/* Projects Grid - Horizontal scrolling layout */}
            <div className="w-full overflow-x-auto overflow-y-hidden pb-6 hide-scrollbar">
              <motion.div layout className="flex gap-3 justify-center items-center">
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
              <div className="flex justify-center mt-16">
                <Link to="/portfolio" className="inline-flex items-center gap-3 text-xl font-bold text-white hover:text-red-500 transition-colors group">
                  <span>LIHAT SEMUA KARYA</span>
                  <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Image Divider 4 */}
        <div className="w-full">
          <img src={Pembatas1} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>
    </>;
}