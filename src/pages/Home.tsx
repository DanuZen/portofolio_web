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
      <section id="hero" data-section-theme="dark" className="relative min-h-screen w-full overflow-x-hidden" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
        <div className="container mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center py-24 overflow-hidden">
          {/* Full Width Neon Green Card */}
          <motion.div data-section-theme="light" className="relative w-full bg-[#FF3B30] rounded-[2.5rem] px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10 overflow-hidden mb-24" initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }}>
            {/* Large CREATIVE Title at Top */}
            <FadeContent>
              <motion.h1 initial={{
                opacity: 0,
                x: -50
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.8,
                delay: 0.2
              }} className="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[14rem] font-bold leading-[0.9] tracking-tight mb-8 font-akzidenz text-slate-50">
                DANN
              </motion.h1>
            </FadeContent>

            {/* Content Grid - Image Left, BRIEF Right */}
            <FadeContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                {/* Left - Image with Arrow Icon */}
                <motion.div className="relative" initial={{
                  opacity: 0,
                  y: 30
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.4
                }}>
                  {/* Arrow Icon overlapping top-left of image */}
                  <motion.div className="absolute -top-6 -left-2 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex items-center justify-center z-10" initial={{
                    scale: 0,
                    rotate: -180
                  }} animate={{
                    scale: 1,
                    rotate: 0
                  }} transition={{
                    duration: 0.6,
                    delay: 0.6,
                    type: "spring"
                  }}>
                    <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-[#FF3B30] -rotate-45" />
                  </motion.div>

                  {/* Image Container */}
                  <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-white">
                    <img src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" alt="Creative Team" className="absolute inset-0 w-full h-full object-cover object-center" />
                  </div>
                </motion.div>

                {/* Right - BRIEF Title and Description */}
                <motion.div className="space-y-6" initial={{
                  opacity: 0,
                  x: 50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.5
                }}>
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tight font-akzidenz text-slate-50 xl:text-9xl">
                    BRIEF
                  </h2>
                  <p className="text-black/80 text-base md:text-lg lg:text-xl max-w-md leading-relaxed">
                    Menciptakan produk digital yang estetis, fungsional, dan responsif. Menggabungkan kemampuan teknis dan kreativitas visual untuk menghadirkan solusi digital yang modern.
                  </p>
                </motion.div>
              </div>
            </FadeContent>

            {/* Scroll Indicator */}
            <FadeContent>
              <div className="flex justify-center pt-20 md:pt-28">
                <ScrollIndicator className="text-black hover:text-black/70" />
              </div>
            </FadeContent>
          </motion.div>

          {/* About Me Section - Redesigned */}
          <div id="about" className="w-full px-6 lg:px-8 pb-0 mt-24 md:mt-32 scroll-mt-32 md:scroll-mt-40">
            <FadeContent>
              {/* Title - Full Width */}
              <div className="mb-12 md:mb-16">
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] font-akzidenz text-white">
                  TENTANG SAYA
                </h2>
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-stretch">
                {/* Left Column: Text & Tags */}
                <div className="space-y-8">
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
                </div>

                {/* Right Column: Image */}
                <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full rounded-[2.5rem] overflow-hidden bg-white">
                   {/* Arrow Icon */}
                  <div className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center z-10">
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-[#FF3B30] -rotate-45" />
                  </div>
                  
                  <img src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" alt="About Me" className="w-full h-full object-cover transition-opacity duration-500" />
                </div>
              </div>
            </FadeContent>
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
          <div className="w-full relative z-10">
            {/* Section Header */}
            <FadeContent>
              <ScrollReveal>
                <div className="space-y-8 mb-16 text-center px-6 lg:px-8">
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] font-akzidenz">
                    <span className="text-white">SKILLS </span>
                    <span className="text-red-500">& TOOLS</span>
                  </h2>
                  <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                    Menggabungkan keahlian teknis dan artistik dengan peralatan standar industri untuk menghasilkan karya visual yang memukau.
                  </p>
                </div>
              </ScrollReveal>
            </FadeContent>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-6 lg:px-8">
              {/* Column 1: SKILLS */}
              <FadeContent>
                <ScrollReveal>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                      SKILLS
                    </h2>
                    <ul className="space-y-3 text-white/90 text-base font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        FRONTEND DEVELOPMENT
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        BACKEND DEVELOPMENT
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        DATABASE DESIGN
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        UI/UX DESIGN
                      </li>
                    </ul>
                  </div>
                </ScrollReveal>
              </FadeContent>

              {/* Column 2: TOOLS */}
              <FadeContent>
                <ScrollReveal delay={0.1}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                      TOOLS
                    </h2>
                    <div className="flex flex-wrap gap-4 items-center">
                      {/* React */}
                      <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="React">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#61DAFB]">
                          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
                      </svg>
                    </div>
                    {/* Tailwind */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Tailwind CSS">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#06B6D4]">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                      </svg>
                    </div>
                    {/* PostgreSQL */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="PostgreSQL">
                      <img src={image4} alt="PostgreSQL" className="w-8 h-8 object-contain" />
                    </div>
                    {/* Git */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Git">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#F05032]">
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                      </svg>
                    </div>
                    {/* Figma */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Figma">
                      <img src={image1} alt="Figma" className="w-8 h-8 object-contain" />
                    </div>
                    {/* Adobe Illustrator */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Adobe Illustrator">
                      <img src={image3} alt="Adobe Illustrator" className="w-8 h-8 object-contain" />
                    </div>
                    {/* Adobe Photoshop */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Adobe Photoshop">
                      <img src={image2} alt="Adobe Photoshop" className="w-8 h-8 object-contain" />
                    </div>
                    {/* Affinity Designer */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Affinity Designer">
                      <img src={image5} alt="Affinity Designer" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </FadeContent>
            </div>
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
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] font-akzidenz">
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

        {/* Image Divider 3 */}
        <div className="w-full">
          
        </div>

        {/* Contact Section */}
        <section id="contact" data-section-theme="dark" className="min-h-screen flex items-center py-32 md:py-40" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
          <div className="w-full">
             <FadeContent>
               <ScrollReveal>
                <div className="space-y-8 mb-16 text-center px-6 lg:px-8">
                  <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] font-akzidenz">
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