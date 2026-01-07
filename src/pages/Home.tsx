import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Youtube, Instagram, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SocialIcon } from '@/components/SocialIcon';
import LogoDann from '@/assets/LogoDann.png';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import image5 from '@/assets/image5.png';
import image6 from '@/assets/image6.png';
import image7 from '@/assets/image7.png';
import image8 from '@/assets/image8.png';
import image9 from '@/assets/image9.png';
import image10 from '@/assets/image10.png';
import image11 from '@/assets/image11.png';
import image12 from '@/assets/image12.png';
import image13 from '@/assets/image13.png';
import image14 from '@/assets/image14.png';

// Animation components
import { MagneticElement } from '@/components/ui/MagneticElement';
import { FloatingElement } from '@/components/ui/FloatingElement';
import { GlowCard } from '@/components/ui/GlowCard';
import { TextReveal, CharReveal } from '@/components/ui/TextReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { BlurReveal } from '@/components/ui/BlurReveal';
import { ScaleReveal } from '@/components/ui/ScaleReveal';
import { FadeContentSimple as FadeNearNav } from '@/components/ui/FadeContent';
import { TypewriterText } from '@/components/ui/TypewriterText';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    // Row 1 (7 items)
    { name: 'Affinity Designer', img: image1, bg: '#ccff00', shadow: 'rgba(204, 255, 0, 0.6)', fit: 'cover' },
    { name: 'Adobe Photoshop', img: image2, bg: '#001e36', shadow: 'rgba(49, 168, 255, 0.6)', fit: 'cover' },
    { name: 'Adobe Illustrator', img: image3, bg: '#330000', shadow: 'rgba(255, 59, 48, 0.6)', fit: 'cover' },
    { name: 'Adobe Lightroom', img: image7, bg: '#001E36', shadow: 'rgba(49, 168, 255, 0.6)', fit: 'cover' },
    { name: 'Adobe After Effect', img: image8, bg: '#00005b', shadow: 'rgba(153, 153, 255, 0.6)', fit: 'cover' },
    { name: 'Adobe InDesain', img: image9, bg: '#49021f', shadow: 'rgba(255, 51, 102, 0.6)', fit: 'cover' },
    { name: 'Canva', img: image10, bg: 'white', shadow: 'rgba(0, 196, 204, 0.6)', fit: 'contain', p: 'p-4' },
    // Row 2 (7 items)
    { name: 'Figma', img: image4, bg: 'white', shadow: 'rgba(255, 255, 255, 0.6)', fit: 'contain', p: 'p-5' },
    { name: 'PostgreSQL', img: image6, bg: 'white', shadow: 'rgba(255, 255, 255, 0.6)', fit: 'contain', p: 'p-5' },
    { name: 'Tailwind CSS', img: image5, bg: '#0F172A', shadow: 'rgba(56, 189, 248, 0.6)', fit: 'cover' },
    { name: 'React JS', img: image11, bg: 'white', shadow: 'rgba(97, 218, 251, 0.6)', fit: 'contain', p: 'p-4' },
    { name: 'Node JS', img: image12, bg: 'white', shadow: 'rgba(104, 160, 99, 0.6)', fit: 'contain', p: 'p-4' },
    { name: 'Supabase', img: image13, bg: '#1C1C1C', shadow: 'rgba(62, 207, 142, 0.6)', fit: 'cover' },
    { name: 'Git Hub', img: image14, bg: 'white', shadow: 'rgba(0, 0, 0, 0.6)', fit: 'contain', p: 'p-4' },
  ];
  
  const handlePrevProject = () => {
    setActiveProjectIndex((prev) => (prev === 0 ? featuredProjects.length - 1 : prev - 1));
  };
  
  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextProject();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeProjectIndex]);
  
  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>
    <SEOHead />
    
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section - Modern Dark Design */}
      <section 
        ref={heroRef}
        id="hero" 
        data-section-theme="dark" 
        className="relative min-h-screen w-full overflow-x-hidden" 
        style={{ backgroundColor: 'hsl(0, 0%, 8%)' }}
      >
        <div className="container mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center py-24 overflow-hidden">
          {/* Full Width Neon Green Card */}
          <motion.div 
            className="relative w-full bg-[#FF3B30] rounded-[2.5rem] px-8 pt-8 pb-16 md:px-12 md:pt-12 md:pb-20 lg:px-16 lg:pt-16 lg:pb-24 overflow-hidden mb-24"
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          >
            {/* Animated background patterns */}
            <motion.div 
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />

            {/* Large CREATIVE Title at Top */}
            <motion.h1 
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] xl:text-[14rem] font-black leading-[0.9] tracking-tight mb-8 font-akzidenz text-slate-50 relative z-10"
              initial={{ opacity: 0, x: -100, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <CharReveal text="DANN" delay={0.3} staggerDelay={0.08} />
            </motion.h1>

            {/* Content Grid - Image Left, BRIEF Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
              {/* Left - Image with Arrow Icon */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Arrow Icon overlapping top-left of image */}
                <MagneticElement strength={0.4}>
                  <motion.div 
                    className="absolute -top-6 -left-2 md:-left-4 w-16 h-16 md:w-20 md:h-20 bg-[hsl(0,0%,8%)] rounded-full flex items-center justify-center z-10 cursor-pointer"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <ArrowRight className="w-8 h-8 md:w-10 md:h-10 text-[#FF3B30] -rotate-45" />
                  </motion.div>
                </MagneticElement>

                {/* Image Container with 3D hover */}
                <GlowCard className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-white">
                  <img 
                    src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" 
                    alt="Creative Team" 
                    className="absolute inset-0 w-full h-full object-center object-contain"
                  />
                </GlowCard>
              </motion.div>

              {/* Right - BRIEF Title and Description */}
              <motion.div 
                className="space-y-12"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <BlurReveal delay={0.8}>
                  <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.9] tracking-tight font-akzidenz text-slate-50 xl:text-7xl">
                    <TextReveal text="PROGRAMER" delay={0.9} />
                    <br/>& <br/>
                    <TextReveal text="DESAIN GRAFIS" delay={1.1} />
                  </h2>
                </BlurReveal>
                
                <motion.p 
                  className="text-white/90 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed text-justify mx-0 px-0 font-akzidenz-bold cursor-default transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ 
                    scale: 1.02, 
                    textShadow: "0 0 20px rgba(255,255,255,0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  Menciptakan produk digital yang estetis, fungsional, dan responsif. Menggabungkan kemampuan teknis dan kreativitas visual untuk menghadirkan solusi digital yang modern.
                </motion.p>
                
                <StaggerContainer staggerDelay={0.1} className="flex gap-1 mt-12">
                  {[Youtube, Instagram, Github, Linkedin].map((Icon, i) => (
                    <StaggerItem key={i} direction="up">
                      <MagneticElement strength={0.3}>
                        <SocialIcon 
                          icon={Icon} 
                          name={['YouTube', 'Instagram', 'GitHub', 'LinkedIn'][i]} 
                        />
                      </MagneticElement>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
              className="flex justify-center pt-10 md:pt-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <FloatingElement duration={2} distance={8}>
                <ScrollIndicator className="text-white hover:text-white/70" />
              </FloatingElement>
            </motion.div>
          </motion.div>

          {/* About Me Section - Redesigned */}
          <div id="about" data-section-theme="dark" className="w-full pb-0 mt-24 md:mt-32 scroll-mt-32 md:scroll-mt-40">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
              {/* Left Column: Title, Text & Tags */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Title */}
                <FadeNearNav>
                  <BlurReveal>
                    <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] font-akzidenz text-white">
                      <TypewriterText text="TENTANG" delay={0.1} /> 
                      <br/> 
                      <span className="text-[#FF3B30]">
                        <TypewriterText text="SAYA" delay={0.5} />
                      </span>
                    </h2>
                  </BlurReveal>
                </FadeNearNav>

                {/* Text & Tags */}
                <FadeNearNav>
                  <BlurReveal delay={0.2} className="space-y-8">
                    <motion.p 
                      className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed text-justify font-akzidenz-bold cursor-default"
                      whileHover={{ 
                        scale: 1.02, 
                        textShadow: "0 0 20px rgba(255,255,255,0.3)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      Saya adalah programer sekaligus desainer yang menciptakan produk digital yang estetis, fungsional, dan responsif. Dengan menggabungkan kemampuan teknis dan kreativitas visual, saya merancang UI/UX yang nyaman digunakan dan mewujudkannya menjadi kode yang rapi, cepat, serta dapat diandalkan.
                    </motion.p>
                    
                    {/* Tags */}
                    <StaggerContainer staggerDelay={0.1} className="flex flex-wrap gap-4 pt-4">
                      {['Web Development', 'UI/UX Design', 'Desain Grafis'].map((tag, i) => (
                        <StaggerItem key={tag} direction="left">
                          <motion.div 
                            className="px-6 py-2 rounded-full border border-white/20 text-white text-sm md:text-base cursor-default shimmer"
                            whileHover={{ 
                              scale: 1.05, 
                              borderColor: 'rgba(255, 59, 48, 0.5)',
                              boxShadow: '0 0 20px rgba(255, 59, 48, 0.3)'
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {tag}
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </BlurReveal>
                </FadeNearNav>
              </div>

              {/* Right Column: Image */}
              <FadeNearNav>
                <ScaleReveal delay={0.3} className="relative w-full h-full min-h-[500px] lg:min-h-0 rounded-[2.5rem] overflow-hidden bg-white">
                  {/* Arrow Icon */}
                  <MagneticElement strength={0.3}>
                    <motion.div 
                      className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center z-10 cursor-pointer"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-[#FF3B30] -rotate-45" />
                    </motion.div>
                  </MagneticElement>
                  
                  <motion.img 
                    src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" 
                    alt="About Me" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </ScaleReveal>
              </FadeNearNav>
            </div>
          </div>
        </div>
      </section>

      {/* Skills, Tools & Approach Section */}
      <section 
        id="skills" 
        data-section-theme="dark" 
        className="min-h-screen flex items-center relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden text-slate-50" 
        style={{ backgroundColor: 'hsl(0, 0%, 8%)' }}
      >
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header - Split Layout */}
          <FadeNearNav>
            <BlurReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                {/* Left: Title */}
                <div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] font-akzidenz uppercase">
                    <TypewriterText text="MEMBANGUN" delay={0.1} /> <br/>
                    <TypewriterText text="SOLUSI DENGAN" delay={0.6} className="whitespace-nowrap" /> <br/>
                    <span className="text-[#FF3B30] whitespace-nowrap">
                      <TypewriterText text="SKILLS & TOOLS" delay={1.5} />
                    </span>
                  </h2>
                </div>
                
                {/* Right: Description */}
                <div className="lg:text-right pt-4">
                  <motion.p 
                    className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed text-justify font-akzidenz-bold max-w-md ml-auto cursor-default"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ 
                      scale: 1.02, 
                      textShadow: "0 0 20px rgba(255,255,255,0.3)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Mengombinasikan kemampuan desain grafis dan pemrograman dengan tools modern untuk menciptakan karya yang rapi, konsisten, dan bernilai guna, serta mampu menyampaikan pesan secara efektif melalui visual dan solusi digital yang terstruktur.
                  </motion.p>
              </div>
            </div>
          </BlurReveal>
          </FadeNearNav>

          {/* Icons Grid */}
          <FadeNearNav>
            <motion.div 
              className="flex flex-col gap-4 max-w-xs mx-auto md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-8 md:max-w-5xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Mobile: Row 1 - 3 items with center offset up */}
              <div className="flex justify-center items-end gap-4 md:hidden">
                {/* Affinity Designer */}
                <motion.div 
                  className="w-20"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { 
                      opacity: 1, y: 0, scale: 1,
                      transition: { duration: 0.5, delay: 0, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                >
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div 
                        className="aspect-square w-full bg-[#ccff00] rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer"
                        whileHover={{ 
                          scale: 1.08,
                          boxShadow: '0 0 30px rgba(204, 255, 0, 0.6)'
                        }}
                      >
                        <img src={image1} alt="Affinity Designer" className="w-full h-full object-cover" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Affinity Designer
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>

                {/* Adobe Illustrator - offset up */}
                <motion.div 
                  className="w-20 -translate-y-6"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { 
                      opacity: 1, y: 0, scale: 1,
                      transition: { duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                >
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div 
                        className="aspect-square w-full bg-[#330000] rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer"
                        whileHover={{ 
                          scale: 1.08,
                          boxShadow: '0 0 30px rgba(255, 59, 48, 0.6)'
                        }}
                      >
                        <img src={image3} alt="Adobe Illustrator" className="w-full h-full object-cover" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Adobe Illustrator
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>

                {/* Adobe Photoshop */}
                <motion.div 
                  className="w-20"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { 
                      opacity: 1, y: 0, scale: 1,
                      transition: { duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                >
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div 
                        className="aspect-square w-full bg-[#001e36] rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer"
                        whileHover={{ 
                          scale: 1.08,
                          boxShadow: '0 0 30px rgba(49, 168, 255, 0.6)'
                        }}
                      >
                        <img src={image2} alt="Adobe Photoshop" className="w-full h-full object-cover" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Adobe Photoshop
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>
              </div>

              {/* Mobile: Row 2 - 3 items with center offset down */}
              <div className="flex justify-center items-start gap-4 md:hidden">
                {/* Figma */}
                <motion.div 
                  className="w-20"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { 
                      opacity: 1, y: 0, scale: 1,
                      transition: { duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                >
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div 
                        className="aspect-square w-full bg-white rounded-[2rem] flex items-center justify-center p-5 cursor-pointer"
                        whileHover={{ 
                          scale: 1.08,
                          boxShadow: '0 0 30px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        <img src={image4} alt="Figma" className="w-full h-full object-contain" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Figma
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>

                {/* PostgreSQL - offset down */}
                <motion.div 
                  className="w-20 translate-y-6"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { 
                      opacity: 1, y: 0, scale: 1,
                      transition: { duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                >
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div 
                        className="aspect-square w-full bg-white rounded-[2rem] flex items-center justify-center p-5 cursor-pointer"
                        whileHover={{ 
                          scale: 1.08,
                          boxShadow: '0 0 30px rgba(255, 255, 255, 0.6)'
                        }}
                      >
                        <img src={image6} alt="PostgreSQL" className="w-full h-full object-contain" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        PostgreSQL
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>

                {/* Tailwind CSS */}
                <motion.div 
                  className="w-20"
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.95 },
                    visible: { 
                      opacity: 1, y: 0, scale: 1,
                      transition: { duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
                    }
                  }}
                >
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div 
                        className="aspect-square w-full bg-[#0F172A] rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer"
                        whileHover={{ 
                          scale: 1.08,
                          boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)'
                        }}
                      >
                        <img src={image5} alt="Tailwind CSS" className="w-full h-full object-cover" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Tailwind CSS
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>
              </div>


            </motion.div>
          </FadeNearNav>

          {/* Skills Container - Desktop */}
          <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-16">
                
                {/* Design Tools */}
                <FadeNearNav>
                  <div className="flex flex-col gap-8">
                    <h3 className="text-2xl md:text-3xl font-akzidenz-bold text-white text-center tracking-wide">
                      <TypewriterText text="TOOL DESAIN GRAFIS" delay={0.1} />
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 justify-items-center">
                      {skills.slice(0, 7).map((skill, index) => (
                        <motion.div 
                          key={index}
                          className="w-28"
                          initial={{ opacity: 0, y: 40, scale: 0.95 }}
                          whileInView={{ 
                            opacity: 1, y: 0, scale: 1,
                            transition: { duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            onMouseEnter={() => setHoveredSkill(index)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            animate={{
                              scale: hoveredSkill === index ? 1.5 : 1,
                              opacity: hoveredSkill !== null && hoveredSkill !== index ? 0.1 : 1,
                              filter: hoveredSkill !== null && hoveredSkill !== index ? 'blur(2px)' : 'blur(0px)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <MagneticElement strength={0.2}>
                              <motion.div className="relative group flex flex-col items-center">
                                <motion.div 
                                  className={`aspect-square w-full rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer ${skill.bg === 'white' ? 'bg-white' : ''}`}
                                  style={{ backgroundColor: skill.bg !== 'white' ? skill.bg : undefined }}
                                  whileHover={{ 
                                    boxShadow: `0 0 30px ${skill.shadow}`
                                  }}
                                >
                                  <img 
                                    src={skill.img} 
                                    alt={skill.name} 
                                    className={`w-full h-full object-${skill.fit} ${skill.p || ''}`} 
                                  />
                                </motion.div>
                                <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                  {skill.name}
                                </span>
                              </motion.div>
                            </MagneticElement>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeNearNav>

                {/* Programming Tools */}
                <FadeNearNav>
                  <div className="flex flex-col gap-8">
                    <h3 className="text-2xl md:text-3xl font-akzidenz-bold text-white text-center tracking-wide">
                      <TypewriterText text="TOOL PROGRAMING" delay={1.5} />
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 justify-items-center">
                      {skills.slice(7, 14).map((skill, index) => (
                        <motion.div 
                          key={index + 7}
                          className="w-28"
                          initial={{ opacity: 0, y: 40, scale: 0.95 }}
                          whileInView={{ 
                            opacity: 1, y: 0, scale: 1,
                            transition: { duration: 0.5, delay: (index + 7) * 0.1, ease: [0.22, 1, 0.36, 1] }
                          }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            onMouseEnter={() => setHoveredSkill(index + 7)}
                            onMouseLeave={() => setHoveredSkill(null)}
                            animate={{
                              scale: hoveredSkill === index + 7 ? 1.5 : 1,
                              opacity: hoveredSkill !== null && hoveredSkill !== index + 7 ? 0.1 : 1,
                              filter: hoveredSkill !== null && hoveredSkill !== index + 7 ? 'blur(2px)' : 'blur(0px)'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <MagneticElement strength={0.2}>
                              <motion.div className="relative group flex flex-col items-center">
                                <motion.div 
                                  className={`aspect-square w-full rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer ${skill.bg === 'white' ? 'bg-white' : ''}`}
                                  style={{ backgroundColor: skill.bg !== 'white' ? skill.bg : undefined }}
                                  whileHover={{ 
                                    boxShadow: `0 0 30px ${skill.shadow}`
                                  }}
                                >
                                  <img 
                                    src={skill.img} 
                                    alt={skill.name} 
                                    className={`w-full h-full object-${skill.fit} ${skill.p || ''}`} 
                                  />
                                </motion.div>
                                <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                  {skill.name}
                                </span>
                              </motion.div>
                            </MagneticElement>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FadeNearNav>

              </div>
        </div>
      </section>

      {/* Featured Projects Section - Bold Header + Gallery */}
      <section 
        id="projects" 
        data-section-theme="dark" 
        className="min-h-screen flex items-center py-32 md:py-40" 
        style={{ backgroundColor: 'hsl(0, 0%, 8%)' }}
      >
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header - Split Layout */}


          {/* Projects Stacked Layout - Cross Pattern */}
          <div className="w-full px-4 md:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
              {/* Left: Stacked Cards in Cross Pattern */}
              <motion.div 
                className="relative w-[280px] h-[380px] md:w-[320px] md:h-[420px] lg:w-[380px] lg:h-[480px]"
                style={{ perspective: '1200px' }}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={(_, info) => {
                  const threshold = 50;
                  if (info.offset.x > threshold) {
                    setActiveProjectIndex((prev) => 
                      prev === 0 ? featuredProjects.length - 1 : prev - 1
                    );
                  } else if (info.offset.x < -threshold) {
                    setActiveProjectIndex((prev) => 
                      prev === featuredProjects.length - 1 ? 0 : prev + 1
                    );
                  }
                }}
              >
                {featuredProjects.map((project, index) => {
                  const total = featuredProjects.length;
                  let relativeIndex = index - activeProjectIndex;
                  
                  if (relativeIndex > total / 2) relativeIndex -= total;
                  if (relativeIndex < -total / 2) relativeIndex += total;
                  
                  const isActive = relativeIndex === 0;
                  const isVisible = relativeIndex >= 0 && relativeIndex <= 4;
                  
                  if (!isVisible) return null;
                  
                  // 3D Stacked card effect - cards fan out to the RIGHT behind the front card
                  const xOffset = relativeIndex * 25;
                  const yOffset = relativeIndex * 5;
                  const rotateZ = relativeIndex * 4;
                  const scaleValue = 1 - relativeIndex * 0.04;
                  const opacityValue = isActive ? 1 : Math.max(0.5, 1 - relativeIndex * 0.15);
                  const zIndex = 10 - relativeIndex;
                  
                  return (
                    <motion.div
                      key={project.id}
                      className="absolute rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing"
                      initial={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        transformOrigin: 'left center',
                        perspective: 1000,
                      }}
                      animate={{ 
                        x: xOffset,
                        y: yOffset,
                        rotate: rotateZ,
                        scale: scaleValue,
                        opacity: opacityValue,
                        zIndex,
                      }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.32, 0.72, 0, 1],
                      }}
                      whileHover={isActive ? { scale: 1.02, y: -5 } : {}}
                    >
                      <div 
                        className="relative w-full h-full rounded-2xl overflow-hidden"
                        style={{
                          boxShadow: isActive 
                            ? '0 30px 60px -15px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.1)' 
                            : `0 ${15 + relativeIndex * 5}px ${30 + relativeIndex * 10}px -${10 + relativeIndex * 3}px rgba(0,0,0,${0.5 - relativeIndex * 0.05})`,
                        }}
                      >
                        <img
                          src={project.coverImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        {/* Title at bottom */}
                        {isActive && (
                          <motion.div 
                            className="absolute bottom-0 left-0 right-0 p-5"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                          >
                            <h3 className="text-white text-xl md:text-2xl font-bold">
                              {project.title}
                            </h3>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Right: Navigation & Info */}
              <motion.div 
                className="flex flex-col items-center lg:items-start gap-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {/* Title moved here */}
                <div className="text-left mb-4">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] font-akzidenz uppercase">
                    <span className="text-white">
                      <TypewriterText text="PROYEK" delay={0.1} />
                    </span> <br/>
                    <span className="text-[#FF3B30]">
                      <TypewriterText text="UNGGULAN" delay={0.5} />
                    </span>
                  </h2>
                </div>

                {/* Project Info */}
                <motion.div 
                  key={activeProjectIndex}
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                      {featuredProjects[activeProjectIndex]?.title || 'Project Title'}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-0.5 bg-[#FF3B30]" />
                    <p className="text-white/60 uppercase tracking-widest text-sm">
                      {featuredProjects[activeProjectIndex]?.category || 'Category'}
                    </p>
                  </div>
                </motion.div>

                {/* Project Description */}
                <div className="w-full max-w-md h-32 flex flex-col justify-start">
                  <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed text-justify font-akzidenz-bold line-clamp-4">
                    {featuredProjects[activeProjectIndex]?.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* View All Link */}
        </div>
      </section>

    </div>
  </>;
}
