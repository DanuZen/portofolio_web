import { motion } from 'framer-motion';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Youtube, Instagram, Github, Linkedin } from 'lucide-react';
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

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  return <>
      <SEOHead />
      
      <div className="min-h-screen">
      {/* Hero Section - Two Column Layout */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#F5F0E8]">
        <div className="container mx-auto px-6 lg:px-12 h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column - Content */}
            <motion.div className="space-y-8 z-10" initial={{
              opacity: 0,
              x: -30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              ease: "easeOut"
            }}>
              {/* Large Title */}
              <div className="space-y-2">
              <motion.h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-black leading-[0.9] tracking-tight" initial={{
                  opacity: 0,
                  y: 30
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.8,
                  delay: 0.2
                }}>
                  Dann
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.4
              }}>
                {photographerInfo.heroIntroduction}
              </motion.p>

              {/* Social Icons */}
              

              {/* Statistics */}
              <motion.div className="flex gap-12 pt-4" initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.8,
                delay: 0.8
              }}>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-black">+250k</h3>
                  <p className="text-gray-500 text-sm max-w-[140px] leading-tight mt-1">Videos that reaching a wide audience and give lasting impression</p>
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-black">+800k</h3>
                  <p className="text-gray-500 text-sm max-w-[140px] leading-tight mt-1">Hours watched, engaging storytelling that captivates viewers</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with Orange Background */}
            <motion.div className="relative flex justify-center lg:justify-end" initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 1,
              delay: 0.3
            }}>
              {/* Orange/Amber Background Shape */}
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center z-20">
                  <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                
                <div className="relative w-[500px] md:w-[600px] lg:w-[700px] h-[600px] md:h-[750px] lg:h-[850px]">
                  {/* Yellow Shape Background */}
                  <div className="absolute inset-0 bg-amber-400" style={{
                    maskImage: `url('/images/hero-shape.png')`,
                    WebkitMaskImage: `url('/images/hero-shape.png')`,
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center'
                  }} />
                  
                  {/* Signature Text */}
                  <div className="absolute top-8 left-8 z-20 font-serif italic text-white text-2xl md:text-3xl" style={{
                    fontFamily: 'cursive',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
                  }}>
                    Gustatory
                  </div>
                  
                  {/* Photographer Image */}
                  <img src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" alt="Photographer" className="absolute inset-0 w-full h-full object-cover object-center" style={{
                    maskImage: `url('/images/hero-shape.png')`,
                    WebkitMaskImage: `url('/images/hero-shape.png')`,
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center'
                  }} />
                  
                  {/* Floating Action Buttons - Left Edge of Shape, Vertically Centered */}
                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.2,
          duration: 0.8
        }}>
          <ScrollIndicator />
        </motion.div>
      </section>

        {/* Image Divider 1 */}
        <div className="w-full">
          
        </div>

        {/* Introduction Section */}
        <section className="min-h-screen flex items-center py-32 md:py-40 bg-background">
          <div className="w-full">
            <ScrollReveal>
              <div className="space-y-8 text-center px-6 lg:px-8">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                  <span className="text-white">TENTANG </span><span className="text-red-500">SAYA</span>
                </h2>
                <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                  Programer & Desainer Profesional yang menciptakan produk digital estetis, fungsional, dan responsif.
                </p>
                <div className="text-base leading-relaxed text-white/70 max-w-3xl mx-auto">
                  <p>
                    Saya adalah programer sekaligus desainer yang menciptakan produk digital yang estetis, fungsional, dan responsif. Dengan menggabungkan kemampuan teknis dan kreativitas visual, saya merancang UI/UX yang nyaman digunakan dan mewujudkannya menjadi kode yang rapi, cepat, serta dapat diandalkan. Saya terus mengembangkan keterampilan untuk menghadirkan solusi digital yang modern dan berkualitas.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>


        {/* Skills, Tools & Approach Section */}
        <section className="min-h-screen flex items-center relative py-32 md:py-40 overflow-hidden text-slate-50 bg-background">
          <div className="w-full relative z-10">
            {/* Section Header */}
            <ScrollReveal>
              <div className="space-y-8 mb-16 text-center px-6 lg:px-8">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                  <span className="text-white">SKILLS </span>
                  <span className="text-red-500">& TOOLS</span>
                </h2>
                <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                  Menggabungkan keahlian teknis dan artistik dengan peralatan standar industri untuk menghasilkan karya visual yang memukau.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-6 lg:px-8">
              {/* Column 1: SKILLS */}
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

              {/* Column 2: TOOLS */}
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
                    {/* TypeScript */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="TypeScript">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3178C6]">
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
                      </svg>
                    </div>
                    {/* Node.js */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Node.js">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#539E43]">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
                      </svg>
                    </div>
                    {/* Tailwind */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Tailwind CSS">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#06B6D4]">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
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

              {/* Column 3: FILOSOFI CODING */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-6">FILOSOFI CODING</h2>

                  <div className="space-y-3 text-white/80 text-sm font-normal leading-relaxed">
                    <p>
                      <span className="text-red-500 font-semibold">KEJELASAN:</span> Kode bersih, mudah dibaca, dan mudah dikembangkan.
                    </p>
                    <p>
                      <span className="text-red-500 font-semibold">SOLUSI:</span> Memahami kebutuhan sebelum membangun solusi.
                    </p>
                    <p>
                      <span className="text-red-500 font-semibold">KOLABORASI:</span> Bekerja terbuka dengan tim untuk hasil scalable.
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
        <section className="min-h-screen flex items-center py-32 md:py-40 bg-background">
          <div className="w-full">
            {/* Bold Title Section */}
            <ScrollReveal>
              <div className="space-y-8 mb-16 text-center px-6 lg:px-8">
                {/* Bold Title */}
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                  <span className="text-white">PROYEK </span>
                  <span className="text-red-500">UNGGULAN</span>
                </h2>
                
                {/* Description */}
                <p className="text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                  Koleksi karya fotografi terpilih yang menampilkan keahlian dalam editorial, komersial, dan portrait photography. Setiap proyek dirancang dengan perhatian detail dan visi kreatif yang kuat.
                </p>
              </div>
            </ScrollReveal>

            {/* Projects Grid - Horizontal scrolling layout */}
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

            {/* View All Link */}
            <ScrollReveal delay={0.4}>
              <div className="flex justify-center mt-16 px-6 lg:px-8">
                <Link to="/portfolio" className="inline-flex items-center gap-3 text-xl font-bold text-white hover:text-red-500 transition-colors group">
                  <span>LIHAT SEMUA KARYA</span>
                  <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </>;
}