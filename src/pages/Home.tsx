import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Youtube, Instagram, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import LogoDann from '@/assets/LogoDann.png';
import Pembatas1 from '@/assets/Pembatas1.png';
import Pembatas2 from '@/assets/Pembatas2.png';
import Pembatas3 from '@/assets/Pembatas3.png';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import { FadeContentSimple as FadeContent } from '@/components/ui/FadeContent';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>
      <SEOHead />
      
      <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Modern Dark Design */}
      <section id="hero" data-section-theme="dark" className="relative min-h-screen w-full overflow-x-hidden" style={{ backgroundColor: 'hsl(0, 0%, 8%)' }}>
        <div className="container mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center py-24 overflow-hidden">
          {/* Full Width Neon Green Card */}
          <motion.div 
            data-section-theme="light"
            className="relative w-full bg-[#FF3B30] rounded-[2.5rem] px-8 pt-8 pb-16 md:px-12 md:pt-12 md:pb-20 lg:px-16 lg:pt-16 lg:pb-24 overflow-hidden mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Large CREATIVE Title at Top */}
            <FadeContent>
              <motion.h1 
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[14rem] font-black leading-[0.9] tracking-tight mb-8 font-akzidenz text-slate-50"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                DANN
              </motion.h1>
            </FadeContent>

            {/* Content Grid - Image Left, BRIEF Right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left - Image with Arrow Icon */}
                <FadeContent>
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {/* Arrow Icon overlapping top-left of image */}
                  <motion.div 
                    className="absolute -top-6 -left-2 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                  >
                    <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-[#FF3B30] -rotate-45" />
                  </motion.div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-white">
                    <img 
                      src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" 
                      alt="Creative Team" 
                      className="absolute inset-0 w-full h-full object-center object-contain"
                    />
                  </div>
                </motion.div>
                </FadeContent>

                {/* Right - BRIEF Title and Description */}
                <motion.div 
                  className="space-y-12"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <FadeContent>
                  <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tight font-akzidenz text-slate-50 xl:text-7xl">
                    PROGRAMER <br/>& <br/>DESAIN GRAFIS
                  </h2>
                  </FadeContent>
                  <FadeContent>
                  <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed text-justify mx-0 px-0 font-akzidenz-bold">
                    Menciptakan produk digital yang estetis, fungsional, dan responsif. Menggabungkan kemampuan teknis dan kreativitas visual untuk menghadirkan solusi digital yang modern.
                  </p>
                  </FadeContent>
                  <FadeContent>
                    <div className="flex gap-5 mt-12">
                      <a href="#" className="text-white hover:text-black transition-colors">
                        <Youtube className="w-6 h-6 md:w-7 md:h-7" />
                      </a>
                      <a href="#" className="text-white hover:text-black transition-colors">
                        <Instagram className="w-6 h-6 md:w-7 md:h-7" />
                      </a>
                      <a href="#" className="text-white hover:text-black transition-colors">
                        <Github className="w-6 h-6 md:w-7 md:h-7" />
                      </a>
                      <a href="#" className="text-white hover:text-black transition-colors">
                        <Linkedin className="w-6 h-6 md:w-7 md:h-7" />
                      </a>
                    </div>
                  </FadeContent>
                </motion.div>
              </div>

            {/* Scroll Indicator */}
            <FadeContent>
              <div className="flex justify-center pt-10 md:pt-14">
                <ScrollIndicator className="text-white hover:text-white/70" />
              </div>
            </FadeContent>
          </motion.div>

          {/* About Me Section - Redesigned */}
          <div id="about" className="w-full pb-0 mt-24 md:mt-32 scroll-mt-32 md:scroll-mt-40">
              {/* Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                {/* Left Column: Title, Text & Tags */}
                <div className="flex flex-col justify-center space-y-6">
                  {/* Title */}
                  <FadeContent>
                    <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] font-akzidenz text-white">
                      TENTANG <br/> <span className="text-[#FF3B30]">SAYA</span>
                    </h2>
                  </FadeContent>

                  {/* Text & Tags */}
                  <FadeContent className="space-y-8">
                    <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
                      Saya adalah programer sekaligus desainer yang menciptakan produk digital yang estetis, fungsional, dan responsif. Dengan menggabungkan kemampuan teknis dan kreativitas visual, saya merancang UI/UX yang nyaman digunakan dan mewujudkannya menjadi kode yang rapi, cepat, serta dapat diandalkan.
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <div className="px-6 py-2 rounded-full border border-white/20 text-white text-sm md:text-base hover:bg-white/10 transition-colors cursor-default">
                        Web Development
                      </div>
                      <div className="px-6 py-2 rounded-full border border-white/20 text-white text-sm md:text-base hover:bg-white/10 transition-colors cursor-default">
                        UI/UX Design
                      </div>
                      <div className="px-6 py-2 rounded-full border border-white/20 text-white text-sm md:text-base hover:bg-white/10 transition-colors cursor-default">
                        2024
                      </div>
                    </div>
                  </FadeContent>
                </div>

                {/* Right Column: Image */}
                <FadeContent className="relative w-full h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] overflow-hidden bg-white">
                   {/* Arrow Icon */}
                  <div className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center z-10">
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-[#FF3B30] -rotate-45" />
                  </div>
                  
                  <img 
                    src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" 
                    alt="About Me" 
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </FadeContent>
              </div>
          </div>
        </div>
      </section>

      {/* Image Divider 1 */}
      <div className="w-full">
        
      </div>

      {/* Skills, Tools & Approach Section */}
      <section id="skills" data-section-theme="dark" className="min-h-screen flex items-center relative py-32 md:py-40 overflow-hidden text-slate-50" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            {/* Section Header - Split Layout */}
            <FadeContent>
              <ScrollReveal>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                  {/* Left: Title */}
                  <div>
                    <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] font-akzidenz uppercase">
                      MEMBANGUN <br/>
                      <span className="whitespace-nowrap">SOLUSI DENGAN</span> <br/>
                      <span className="text-[#FF3B30]">SKILLS</span>
                    </h2>
                  </div>
                  
                  {/* Right: Description */}
                  <div className="lg:text-right pt-4">
                    <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-md ml-auto">
                      Presentations serve as versatile communication tools, utilized for demonstrations, lectures, speeches, reports, and more. Typically delivered before an audience, they fulfill various purposes, making presentations powerful tools for both persuasion and education.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </FadeContent>

            {/* Icons Grid */}
            <FadeContent>
              <ScrollReveal delay={0.2}>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
                  {/* Image 4 - Figma (Down) */}
                  <div className="aspect-square bg-white rounded-[2.5rem] flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300 translate-y-56">
                    <img src={image4} alt="Figma" className="w-full h-full object-contain" />
                  </div>

                  {/* Image 1 - Affinity Designer (Up) */}
                  <div className="aspect-square bg-[#ccff00] rounded-[2.5rem] flex items-center justify-center p-0 hover:scale-105 transition-transform duration-300 overflow-hidden">
                     <img src={image1} alt="Affinity Designer" className="w-full h-full object-cover" />
                  </div>

                  {/* Image 6 - PostgreSQL (Down) */}
                  <div className="aspect-square bg-white rounded-[2.5rem] flex items-center justify-center p-6 hover:scale-105 transition-transform duration-300 translate-y-56">
                    <img src={image6} alt="PostgreSQL" className="w-full h-full object-contain" />
                  </div>

                  {/* Image 3 - Adobe Illustrator (Up) */}
                  <div className="aspect-square bg-[#330000] rounded-[2.5rem] flex items-center justify-center p-0 hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img src={image3} alt="Adobe Illustrator" className="w-full h-full object-cover" />
                  </div>

                  {/* Image 5 - Tailwind/Other (Down) */}
                  <div className="aspect-square bg-[#0F172A] rounded-[2.5rem] flex items-center justify-center p-0 hover:scale-105 transition-transform duration-300 overflow-hidden translate-y-56">
                    <img src={image5} alt="Tool" className="w-full h-full object-cover" />
                  </div>

                  {/* Image 2 - Adobe Photoshop (Up) */}
                  <div className="aspect-square bg-[#001e36] rounded-[2.5rem] flex items-center justify-center p-0 hover:scale-105 transition-transform duration-300 overflow-hidden">
                    <img src={image2} alt="Adobe Photoshop" className="w-full h-full object-cover" />
                  </div>
                </div>
              </ScrollReveal>
            </FadeContent>
          </div>
        </section>

        {/* Image Divider 3 */}
        <div className="w-full">
          
        </div>

        {/* Featured Projects Section - Bold Header + Gallery */}
        <section id="projects" data-section-theme="dark" className="min-h-screen flex items-center py-32 md:py-40" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
          <div className="w-full">
            {/* Bold Title Section */}
            <FadeContent>
              <ScrollReveal>
                <div className="space-y-8 mb-16 text-center px-6 lg:px-8">
                  {/* Bold Title */}
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] font-akzidenz">
                    <span className="text-white">PROYEK </span>
                    <span className="text-red-500">UNGGULAN</span>
                  </h2>
                  
                  {/* Description */}
                  <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                    Koleksi karya fotografi terpilih yang menampilkan keahlian dalam editorial, komersial, dan portrait photography. Setiap proyek dirancang dengan perhatian detail dan visi kreatif yang kuat.
                  </p>
                </div>
              </ScrollReveal>
            </FadeContent>

            {/* Projects Grid - Horizontal scrolling layout */}
            <FadeContent>
              <div className="w-full overflow-x-auto overflow-y-hidden pb-6 hide-scrollbar px-6 lg:px-8">
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
            </FadeContent>

            {/* View All Link */}
            <FadeContent>
              <ScrollReveal delay={0.4}>
                <div className="flex justify-center mt-16 px-6 lg:px-8">
                  <Link to="/portfolio" className="inline-flex items-center gap-3 text-xl font-bold text-white hover:text-red-500 transition-colors group">
                    <span>LIHAT SEMUA KARYA</span>
                    <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
                  </Link>
                </div>
              </ScrollReveal>
            </FadeContent>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-section-theme="dark" className="min-h-screen flex items-center py-32 md:py-40" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
          <div className="w-full">
             <FadeContent>
               <ScrollReveal>
                <div className="space-y-8 mb-16 text-center px-6 lg:px-8">
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] font-akzidenz">
                    <span className="text-white">HUBUNGI </span><span className="text-red-500">KAMI</span>
                  </h2>
                  <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                    Mari diskusikan proyek Anda selanjutnya
                  </p>
                </div>
              </ScrollReveal>
            </FadeContent>

            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <FadeContent>
                  <ScrollReveal delay={0.2}>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                          Kirim <span className="text-red-500">Pesan</span>
                        </h2>
                      </div>
                      <ContactForm />
                    </div>
                  </ScrollReveal>
                </FadeContent>

                {/* Contact Information */}
                <FadeContent>
                  <ScrollReveal delay={0.4}>
                    <div className="space-y-8">
                      <div className="space-y-1">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                          Informasi <span className="text-red-500">Kontak</span>
                        </h2>
                      </div>

                      <Separator className="bg-white/10" />

                      {/* Contact Details */}
                      <div className="space-y-6">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-sm bg-red-600">
                            <Mail className="size-5 text-white" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-light tracking-wide text-white/50">
                              Email
                            </p>
                            <a href={`mailto:${photographerInfo.email}`} className="text-base md:text-lg font-light text-white hover:text-white/70 transition-colors">
                              {photographerInfo.email}
                            </a>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-sm bg-red-600">
                            <Phone className="size-5 text-white" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-light tracking-wide text-white/50">
                              Telepon
                            </p>
                            <a href={`tel:${photographerInfo.phone}`} className="text-base md:text-lg font-light text-white hover:text-white/70 transition-colors">
                              {photographerInfo.phone}
                            </a>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-sm bg-red-600">
                            <MapPin className="size-5 text-white" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-sm font-light tracking-wide text-white/50">
                              Lokasi
                            </p>
                            <p className="text-base md:text-lg font-light text-white">
                              {photographerInfo.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                </FadeContent>
              </div>
            </div>
          </div>
        </section>

        {/* Image Divider 3 */}
        <div className="w-full">
          
        </div>
      </div>
    </>;
}