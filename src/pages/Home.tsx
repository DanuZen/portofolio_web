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
        {/* Vertical Text - Right (Moved outside container for viewport edge positioning) */}
        <div className="absolute -right-4 md:-right-8 top-0 bottom-0 hidden lg:flex flex-col justify-center z-10 overflow-hidden h-screen pointer-events-none">
           <motion.div 
             className="text-transparent font-black tracking-widest select-none whitespace-nowrap"
             style={{ 
               writingMode: 'vertical-rl',
               textOrientation: 'mixed',
               WebkitTextStroke: '3px #FFFFFF',
               fontSize: '18vh',
             }}
             animate={{
               y: [0, -1000]
             }}
             transition={{
               repeat: Infinity,
               ease: "linear",
               duration: 20
             }}
           >
              PROGRAMER - DESAINER - PROGRAMER - DESAINER
           </motion.div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center py-24 overflow-hidden">
          {/* Full Width Neon Green Card */}
          {/* Hero Section - Redesigned */}
          <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
            


            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full -mt-32 md:-mt-40">

              
              {/* Person Image */}
              <motion.div
                className="relative z-10 h-[70vh] md:h-[90vh] w-full flex items-end justify-center pointer-events-none"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                 <img 
                   src="/lovable-uploads/33047453-4702-4be3-b274-e579545d50e1.png" 
                   alt="Dann" 
                   className="h-full w-auto object-contain object-bottom drop-shadow-2xl translate-x-12 md:translate-x-24"
                 />
              </motion.div>
            </div>

            {/* Floating Social Icons - Redesigned */}
            <motion.div 
              className="absolute bottom-12 z-30 flex justify-center"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-4 bg-[#FF3B30] px-6 py-3 rounded-full shadow-lg shadow-red-900/20">
                {[
                  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
                ].map((item, i) => (
                  <a 
                    key={i}
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-0 hover:gap-2 text-white transition-all duration-300 group"
                  >
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                    <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap font-medium text-base transition-all duration-300 ease-in-out">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

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
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-40">
              {/* Left: Stacked Cards in Cross Pattern */}
              <motion.div 
                className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px] lg:w-[450px] lg:h-[550px]"
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
                  const isVisible = Math.abs(relativeIndex) <= 2;
                  
                  if (!isVisible) return null;
                  
                  // Symmetrical Stacked card effect
                  const xOffset = relativeIndex * 25;
                  const yOffset = 0;
                  const rotateZ = relativeIndex * 5;
                  const scaleValue = 1 - Math.abs(relativeIndex) * 0.1;
                  const zIndex = 50 - Math.abs(relativeIndex);
                  
                  return (
                    <motion.div
                      key={project.id}
                      className="absolute rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing"
                      initial={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        left: 0,
                        top: 0,
                        transformOrigin: 'center center',
                      }}
                      animate={{ 
                        x: xOffset,
                        y: yOffset,
                        rotate: rotateZ,
                        scale: scaleValue,
                        zIndex,
                      }}
                      transition={{ 
                        duration: 0.4, 
                        ease: [0.32, 0.72, 0, 1],
                      }}
                      whileHover={isActive ? { scale: 1.02, y: -5 } : {}}
                    >
                      <Link 
                        to={`/project/${project.slug}`}
                        className="block w-full h-full"
                        draggable={false}
                      >
                        <div 
                          className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 transition-all duration-300"
                          style={{
                            boxShadow: isActive 
                              ? '0 0 30px rgba(255, 59, 48, 0.3), 0 20px 50px -15px rgba(0,0,0,0.5)' 
                              : '0 20px 50px -15px rgba(0,0,0,0.5)',
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
                      </Link>
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
