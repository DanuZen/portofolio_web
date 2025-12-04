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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
                        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
                      </svg>
                    </div>
                    {/* TypeScript */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="TypeScript">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3178C6]">
                        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
                      </svg>
                    </div>
                    {/* Node.js */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Node.js">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#539E43]">
                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                      </svg>
                    </div>
                    {/* Tailwind */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Tailwind CSS">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#06B6D4]">
                        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
                      </svg>
                    </div>
                    {/* PostgreSQL */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="PostgreSQL">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#336791]">
                        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4648a9.8753 9.8753 0 0 0-2.8574-.4378 8.794 8.794 0 0 0-3.1311.5128C7.3741-.0008 5.8585-.1164 4.5691.113 2.9373.4082 1.7346 1.2687.9982 2.6705c-.2223.4236-.8418 1.6127-.5765 3.5964.1632 1.2204.6608 3.358 1.5478 5.7214.5618 1.4975 1.0424 2.5397 1.4639 3.185.5765.8829 1.1284 1.2552 1.7001 1.1458.4077-.078.7006-.3776 1.0038-.757.082.1923.1759.3889.2815.5872.5618 1.0556 1.3712 1.7913 2.2467 2.0417.263.0753.5765.1184.9185.1184.4266 0 .9039-.0789 1.3994-.2369.6511-.2071 1.3096-.5247 1.9689-.9511.0146.1617.0329.3271.0549.4956.0951.7276.2387 1.4273.4265 2.0827.1199.4189.2729.8279.4558 1.2174.1435.3057.3154.5994.5116.8744.0619.0869.131.1721.2044.2543.0711.0799.1591.1747.2507.2477.1116.089.2325.162.3631.2157a1.0096 1.0096 0 0 0 .3995.0841c.0284 0 .0569-.0014.0853-.0043.2356-.024.4714-.1039.7003-.2373.3631-.2115.7119-.5296 1.0357-.9449.3238-.4152.623-.9247.888-1.5114.2059-.4561.3928-.9506.5559-1.4708.1254-.4.2379-.8174.3362-1.2481.0961-.4216.1789-.8577.2473-1.305.0571-.3728.103-.7554.1367-1.1448.0327-.3783.054-.7623.0635-1.1482.0062-.2504.0082-.5025.006-.7554l.0196-.0283c.4388-.6282.759-1.1769.989-1.6912.23-.5143.3735-.9949.4428-1.4824.0346-.2436.0535-.4884.0564-.7326a3.3306 3.3306 0 0 0-.0469-.7345zm-7.9163 1.0598c.0073.0123.0141.024.02.0355l-.0063.0023a.238.238 0 0 1-.0137-.0378zm2.1065 3.5057c-.029.2954-.0709.5874-.1239.8747-.0534.289-.1189.5728-.1958.8498-.0785.283-.1686.559-.2702.8269-.1033.2726-.2179.537-.3438.7916-.1259.2547-.2629.4994-.4106.7323-.1475.233-.3058.4539-.4739.6609-.1681.207-.346.3998-.5326.5767-.1866.1769-.3819.3376-.5846.4799a4.265 4.265 0 0 1-.6434.3997c-.2187.1136-.4427.2059-.6703.2746-.2275.0687-.4585.1138-.6915.1345-.2329.0208-.4674.0172-.7016-.0106a2.4457 2.4457 0 0 1-.7012-.1777c-.2262-.0909-.445-.2115-.6556-.3604a4.2268 4.2268 0 0 1-.6016-.5078c-.1928-.1937-.3751-.4098-.5461-.6454-.171-.2356-.3304-.4905-.4774-.7615a9.6177 9.6177 0 0 1-.3956-.8423 12.3153 12.3153 0 0 1-.3024-.9087 14.9692 14.9692 0 0 1-.2014-.9598 16.5618 16.5618 0 0 1-.0942-.9938 16.7765 16.7765 0 0 1 .0044-2.0037c.0178-.3325.0468-.6628.0871-.9895.0403-.3266.0918-.6495.1548-.968.063-.3185.1373-.6331.2229-.9424a12.751 12.751 0 0 1 .2939-.9281c.1079-.3052.2273-.6052.3582-.8986.1309-.2934.2731-.5801.4268-.8589.1536-.2788.3185-.5497.4945-.811.1761-.2612.3632-.5141.5612-.7571.198-.243.4067-.4757.6261-.6972a8.6193 8.6193 0 0 1 .6955-.6321c.24-.1972.49-.3831.7495-.5566.2595-.1735.5283-.3345.8058-.4816.2775-.1472.5635-.2805.8571-.3987.2937-.1181.5949-.2212.9028-.3079a8.7877 8.7877 0 0 1 .9479-.2249c.3207-.0635.6474-.1077.9787-.1318.1656-.012.3325-.0184.5002-.0189.1676-.0005.336.0048.5043.0162.1684.0113.3366.0287.5039.0521.1674.0234.3339.0528.4991.0881.1651.0353.3289.0765.4909.1236.162.047.3222.0999.4801.1585.1579.0586.3134.123.4662.1931.1527.0701.3027.1458.4494.2271.1467.0813.2901.1682.4298.2604.1397.0922.2756.1898.4074.2926.1318.1028.2596.211.3828.3243.1232.1133.2419.2316.3557.3547.1138.1231.2227.2509.3265.3832.1038.1323.2024.2691.2957.4101.0933.1409.181.2859.263.4347.082.1488.1583.3013.2287.4572.0704.1559.1349.3151.1935.4773.0586.1622.1111.3274.1577.4952.0466.1677.0871.3381.1216.5106.0345.1725.063.3471.0853.5233.0224.1762.0387.3541.0489.5331.0101.179.0141.3593.012.5403a8.0988 8.0988 0 0 1-.0327.5417c-.019.1795-.0444.3584-.0763.5362a7.0366 7.0366 0 0 1-.1256.5268c-.0494.1738-.1052.3455-.1672.5148-.062.1693-.1302.336-.2043.4996-.0741.1636-.1542.324-.2401.4809-.0859.1569-.1776.3102-.2749.4595-.0973.1493-.2001.2945-.3082.4353-.1081.1408-.2215.277-.3401.4084-.1186.1315-.2421.258-.3705.3793-.1284.1213-.2616.2372-.3994.3473-.1378.1101-.2802.2144-.4268.3127-.1465.0983-.2974.1905-.4522.2764-.1549.0859-.3137.1654-.4762.2383-.1625.0729-.3286.1392-.4981.1987-.1695.0595-.3423.1122-.5181.158-.1758.0458-.3546.0848-.5361.1168-.1814.032-.3655.0572-.5519.0754-.1863.0182-.3749.0295-.5653.0339-.1903.0044-.3825.0019-.5762-.0075a8.6463 8.6463 0 0 1-.5788-.0518c-.1921-.0245-.3836-.0558-.5742-.0938a8.1174 8.1174 0 0 1-.5665-.1322c-.1871-.0502-.3726-.1069-.5562-.17-.1835-.0631-.3651-.1326-.5445-.2082a7.4794 7.4794 0 0 1-.5309-.2396c-.1741-.0854-.3458-.1768-.5149-.2739-.1691-.0971-.3355-.1999-.4991-.3082-.1636-.1082-.3244-.2218-.4821-.3406a8.1867 8.1867 0 0 1-.4617-.3688c-.1509-.1272-.2984-.2594-.4425-.3963-.1441-.1369-.2846-.2785-.4215-.4245-.1369-.146-.2701-.2963-.3995-.451a9.6654 9.6654 0 0 1-.3735-.4743c-.1204-.1625-.2367-.3285-.3489-.4979-.1122-.1694-.22-.3421-.3237-.5177a10.5523 10.5523 0 0 1-.2941-.5386c-.0936-.1822-.1825-.3673-.2669-.5551-.0844-.1878-.164-.3783-.2389-.5711a11.1683 11.1683 0 0 1-.2071-.5858c-.0643-.1974-.1236-.3972-.1779-.5991a12.0228 12.0228 0 0 1-.1451-.6104c-.0429-.2058-.0808-.4135-.1135-.6228-.0327-.2093-.0603-.4204-.0828-.6328-.0225-.2124-.0398-.4262-.052-.6411-.0122-.215-.0193-.431-.0213-.6479a12.3728 12.3728 0 0 1 .0147-.6515c.0128-.217.0307-.4345.0538-.6522.0231-.2177.0515-.4356.085-.6534.0335-.2177.0722-.4354.1161-.6525.0439-.2171.093-.434.1473-.6502.0543-.2162.1137-.4315.1783-.6457a14.461 14.461 0 0 1 .2144-.6383c.0768-.211.1586-.4207.2455-.6288.087-.2081.1789-.4146.2758-.6191.0969-.2045.1986-.4072.3052-.6076.1066-.2004.2179-.3986.334-.5943.1161-.1957.2369-.389.3623-.5795.1254-.1904.2554-.3781.39-.5627.1345-.1846.2735-.3663.4168-.545.1434-.1786.2912-.3541.4434-.5262.1522-.172.3087-.3407.4695-.5058.1608-.1651.3259-.3266.4951-.4843.1692-.1577.3426-.3115.5202-.4613.1775-.1497.3591-.2954.5447-.4367.1856-.1413.3752-.2782.5686-.4106.1934-.1324.3907-.2601.5918-.383.201-.1229.4056-.2409.6138-.3539.2082-.1131.4198-.2211.6349-.3239.2151-.1028.4335-.2003.6551-.2924.2215-.0921.4462-.1788.6739-.26.2276-.0812.458-.1568.6911-.2269.2331-.0701.4688-.1346.7069-.1935.2381-.0589.4785-.1121.7211-.16.2425-.0479.4871-.0902.7337-.1268.2466-.0366.4951-.0675.7453-.0928.2502-.0253.5021-.0449.7556-.0589.2534-.014.5083-.0223.7645-.025.2561-.0027.5135.0002.7719.0088.2584.0086.5178.0228.7781.0426.2602.0198.5213.0452.7829.0762.2616.031.5237.0676.7862.1097.2625.0421.525.0897.7876.1428.2626.0531.5251.1117.787.1757.262.064.5235.1334.7844.2082.2609.0748.5209.155.7799.2405.259.0855.5168.1763.7732.2724.2564.0961.5114.1974.7646.304.2532.1066.5046.2185.754.3354.2494.117.4968.2391.7419.3663.2451.1272.488.2595.7283.3967.2404.1372.4781.2793.7129.4263.2348.147.467.2987.6961.4551.2291.1564.4551.3175.678.4831.2229.1656.4425.3358.6586.5104.2161.1746.4287.3537.6377.5371.209.1834.4142.3711.6156.5631.2013.192.3988.3882.5921.5886.1933.2004.3827.4049.568.6135.1852.2086.3663.4211.5431.6376.1768.2165.3494.437.5176.6613.1682.2243.3321.4524.4914.6842.1593.2318.3141.4672.4643.7062.1501.239.2956.4816.4363.7275.1407.246.2766.4954.4077.7481.1311.2527.2574.5086.3786.7677.1212.2591.2375.5213.3487.7866.1112.2653.2172.5336.3181.8048.1009.2712.1966.5452.2871.8219.0905.2767.1757.5561.2556.838.0799.2819.1544.5664.2236.8534.0692.287.1331.5764.1916.8682.0585.2918.1116.5859.1594.8822.0478.2963.0903.5948.1275.8953.0372.3006.069.6031.0956.9076.0265.3045.0477.6108.0635.9189.0159.3081.0265.6178.0319.9291.0054.3113.0056.624.0007.9382-.0049.3142-.0151.6298-.0306.9468-.0154.317-.0361.6352-.0621.9546z"/>
                      </svg>
                    </div>
                    {/* Git */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Git">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#F05032]">
                        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
                      </svg>
                    </div>
                    {/* Figma */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Figma">
                      <svg viewBox="0 0 24 24" className="w-8 h-8">
                        <path fill="#F24E1E" d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"/>
                        <path fill="#A259FF" d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z"/>
                        <path fill="#F24E1E" d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z"/>
                        <path fill="#FF7262" d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z"/>
                        <path fill="#1ABCFE" d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z"/>
                      </svg>
                    </div>
                    {/* Adobe Illustrator */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Adobe Illustrator">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#FF9A00]">
                        <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.74-.09-.27-.18-.56-.27-.84zm9.47-9.73h-16c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-18c0-1.1-.9-2-2-2zm-9.47 14.73h-1.71l-.63-1.97h-3.04l-.59 1.97h-1.66l2.92-8.46h1.81l2.9 8.46zm6.47-.01h-1.53v-.87h-.02c-.12.19-.27.36-.45.51-.17.15-.36.27-.56.37-.2.09-.42.16-.64.21-.23.04-.45.07-.68.07-.51 0-.94-.08-1.28-.24-.34-.16-.61-.37-.82-.63-.21-.26-.36-.56-.45-.89-.08-.34-.13-.68-.13-1.04v-4.49h1.6v4.04c0 .5.1.89.31 1.17.2.29.53.43.98.43.35 0 .64-.06.87-.18.22-.12.4-.27.54-.46.14-.19.23-.41.29-.66.05-.25.08-.52.08-.79v-3.54h1.6v6.99h-.01z"/>
                      </svg>
                    </div>
                    {/* Adobe Photoshop */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Adobe Photoshop">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#31A8FF]">
                        <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.6-.23-.85-.16-.25-.39-.44-.7-.61zM20 0H4C1.79 0 0 1.79 0 4v16c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4zM9.85 12.87c-.36.22-.77.37-1.19.44-.45.08-.91.12-1.37.12H6.98v3.71H5.25V6.2c.5-.08 1.01-.13 1.52-.15.51-.02 1.01-.03 1.52-.03.63 0 1.21.07 1.72.21.46.13.88.35 1.23.66.3.25.54.58.69.95.15.38.23.79.22 1.2 0 .62-.13 1.13-.4 1.54-.27.41-.63.73-1.07.95l-.83.34zm7.9 4.26c-.42.25-.9.42-1.39.48-.57.08-1.14.12-1.71.11-.6 0-1.2-.07-1.78-.2-.47-.11-.93-.35-1.32-.67-.35-.29-.62-.66-.79-1.08-.17-.45-.26-.94-.26-1.52v-5.74h1.73v5.47c0 .29.03.56.1.81.06.24.17.45.32.62.15.17.34.3.56.39.24.09.54.14.89.14.41.01.81-.06 1.19-.19v-7.24h1.73v8.25c0 .11-.09.26-.27.37z"/>
                      </svg>
                    </div>
                    {/* Affinity Designer */}
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-all" title="Affinity Designer">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#1B72BE]">
                        <path d="M24 2.344v19.312A2.345 2.345 0 0 1 21.656 24H2.344A2.345 2.345 0 0 1 0 21.656V2.344A2.344 2.344 0 0 1 2.344 0h19.312A2.344 2.344 0 0 1 24 2.344zM6.57 18.205h2.424l1.027-2.716h4.004l1.028 2.716h2.468L12.055 5.68zm5.47-10.801l1.454 3.845H10.6z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Column 3: FILOSOFI CODING */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-6">FILOSOFI CODING<br />
                    CODING
                  </h2>
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