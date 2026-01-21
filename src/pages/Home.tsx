import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Youtube, Instagram, Github, Linkedin, User, Palette, PenTool, Mail } from 'lucide-react';
import { Globe } from '@/components/ui/globe';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
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
import Logo from '@/assets/Logo.png';
import foto from '@/assets/foto.png';

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
import { RetroGrid } from '@/components/ui/retro-grid';
import { HyperText } from '@/components/ui/hyper-text';
import { cn } from '@/lib/utils';
import { BentoGrid, BentoCard, BentoGridItem } from '@/components/ui/bento-grid';
import { AnimatedBentoCard } from '@/components/ui/animated-bento-card';
import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-based-velocity';
import { ToolsBeamSection } from '@/components/ui/tools-beam-section';
import { HeroScrollVideo } from '@/components/ui/scroll-animated-video';

/**
 * Homepage with immersive hero section and featured projects grid
 * Showcases photographer's best work with minimal, elegant design
 */
export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const skills = [
  // Row 1 (7 items)
  {
    name: 'Affinity Designer',
    img: image1,
    bg: '#ccff00',
    shadow: 'rgba(204, 255, 0, 0.6)',
    fit: 'cover'
  }, {
    name: 'Adobe Photoshop',
    img: image2,
    bg: '#001e36',
    shadow: 'rgba(49, 168, 255, 0.6)',
    fit: 'cover'
  }, {
    name: 'Adobe Illustrator',
    img: image3,
    bg: '#330000',
    shadow: 'rgba(255, 59, 48, 0.6)',
    fit: 'cover'
  }, {
    name: 'Adobe Lightroom',
    img: image7,
    bg: '#001E36',
    shadow: 'rgba(49, 168, 255, 0.6)',
    fit: 'cover'
  }, {
    name: 'Adobe After Effect',
    img: image8,
    bg: '#00005b',
    shadow: 'rgba(153, 153, 255, 0.6)',
    fit: 'cover'
  }, {
    name: 'Adobe InDesain',
    img: image9,
    bg: '#49021f',
    shadow: 'rgba(255, 51, 102, 0.6)',
    fit: 'cover'
  }, {
    name: 'Canva',
    img: image10,
    bg: 'white',
    shadow: 'rgba(0, 196, 204, 0.6)',
    fit: 'contain',
    p: 'p-4'
  },
  // Row 2 (7 items)
  {
    name: 'Figma',
    img: image4,
    bg: 'white',
    shadow: 'rgba(255, 255, 255, 0.6)',
    fit: 'contain',
    p: 'p-5'
  }, {
    name: 'PostgreSQL',
    img: image6,
    bg: 'white',
    shadow: 'rgba(255, 255, 255, 0.6)',
    fit: 'contain',
    p: 'p-5'
  }, {
    name: 'Tailwind CSS',
    img: image5,
    bg: '#0F172A',
    shadow: 'rgba(56, 189, 248, 0.6)',
    fit: 'cover'
  }, {
    name: 'React JS',
    img: image11,
    bg: 'white',
    shadow: 'rgba(97, 218, 251, 0.6)',
    fit: 'contain',
    p: 'p-4'
  }, {
    name: 'Node JS',
    img: image12,
    bg: 'white',
    shadow: 'rgba(104, 160, 99, 0.6)',
    fit: 'contain',
    p: 'p-4'
  }, {
    name: 'Supabase',
    img: image13,
    bg: '#1C1C1C',
    shadow: 'rgba(62, 207, 142, 0.6)',
    fit: 'cover'
  }, {
    name: 'Git Hub',
    img: image14,
    bg: 'white',
    shadow: 'rgba(0, 0, 0, 0.6)',
    fit: 'contain',
    p: 'p-4'
  }];
  const handlePrevProject = () => {
    setActiveProjectIndex(prev => prev === 0 ? featuredProjects.length - 1 : prev - 1);
  };
  const handleNextProject = () => {
    setActiveProjectIndex(prev => prev === featuredProjects.length - 1 ? 0 : prev + 1);
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
      setActiveProjectIndex(prev => prev === featuredProjects.length - 1 ? 0 : prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textOptions = ["WEB DEVELOPER", "UI/UX DESIGNER", "GRAPHIC DESIGNER"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % textOptions.length);
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);
  return <>
      <SEOHead />
      <div className="min-h-screen overflow-x-hidden">
        {/* Hero Section with Scroll Animation */}
        <HeroScrollVideo
          title="Dann"
          subtitle="Front-End Developer & UI/UX Designer"
          meta="2025"
          credits={
            <div className="flex items-center gap-4 justify-center mt-4">
              {[
                { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-[#FF3B30] transition-colors duration-300"
                >
                  <item.icon className="w-5 h-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          }
          media={foto}
          mediaType="image"
          overlay={{
            caption: "PORTFOLIO • 2025",
            heading: "Crafting Digital Experiences",
            paragraphs: [
              "Coding today, debugging tomorrow, improving every day.",
              "True expertise is built through persistence, curiosity, and continuous learning.",
            ],
            extra: (
              <div className="flex gap-4 mt-4 justify-center">
                <a
                  href="#about"
                  className="px-6 py-2 bg-[#FF3B30] text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  Explore More
                </a>
                <a
                  href="#contact"
                  className="px-6 py-2 border border-white/30 text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            ),
          }}
          initialBoxSize={320}
          scrollHeightVh={250}
          smoothScroll={false}
        />

        {/* About Me Section - Redesigned */}
        <section style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
            <div id="about" data-section-theme="dark" className="w-full pb-0 mt-0 pt-20 md:pt-32 relative overflow-hidden">
              <div className="container mx-auto px-6 lg:px-12 relative z-10">
                
                {/* Section Title with Script Overlay - Centered & Single Line */}
                <div className="w-full text-center mb-12">
                   <h2 className="text-[8vw] md:text-[7vw] text-white uppercase tracking-tight italic leading-none relative inline-block lg:text-9xl text-center font-extrabold font-sans">
                      INTRODUCING  MYSELF
                   </h2>
                </div>

                <StaggerContainer className="w-full" staggerDelay={0.15} direction="up">
                  <BentoGrid className="gap-4 lg:grid-rows-[18rem_6rem_15rem]">
                    {/* Card 1: About Me / IDE (2x2) */}
                    <StaggerItem direction="up" className="col-span-3 lg:col-span-2 lg:row-span-2">
                      <AnimatedBentoCard className="relative p-0 overflow-hidden h-full">
                        {/* Background Image */}
                        <img src={foto} alt="Dann" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-300" />

                        {/* Content Overlay */}
                        <div className="relative z-20 h-full flex flex-col justify-end p-6">
                           <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Hi, I'm Dann</h3>
                           <div className="relative overflow-hidden">
                               <p className="block group-hover:hidden text-neutral-200 text-xs leading-relaxed transform transition-all duration-300 drop-shadow-sm">
                                  Front-End Developer & UI/UX Designer crafting intuitive user experiences.
                                </p>
                               <p className="hidden group-hover:block text-white text-xs leading-relaxed animate-in fade-in zoom-in-95 duration-300 drop-shadow-sm">
                                  As a Front-End Developer & UI/UX Designer, I design and develop user-centered web interfaces by combining strong UI/UX principles with clean, modern front-end code. I focus on creating intuitive layouts, clear visual hierarchies, and responsive designs that adapt seamlessly across devices. My goal is to build digital products that not only look visually appealing, but also prioritize usability, accessibility, and consistency to deliver meaningful and enjoyable user experiences.
                               </p>
                           </div>
                        </div>
                      </AnimatedBentoCard>
                    </StaggerItem>

                    {/* Card 3: Time Zone */}
                    <StaggerItem direction="up" className="col-span-3 lg:col-span-1">
                      <AnimatedBentoCard className="flex flex-col p-4 relative overflow-hidden h-full">
                          <div className="relative z-10">
                              <h3 className="text-lg font-bold text-white mb-1">Time Zone</h3>
                              <p className="text-neutral-400 text-xs">Based in Indonesia, open worldwide.</p>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-end opacity-60">
                             <div className="w-64 h-64 md:w-80 md:h-80 relative translate-x-12 md:translate-x-16">
                               <Globe className="w-full h-full" />
                             </div>
                          </div>
                      </AnimatedBentoCard>
                    </StaggerItem>

                    {/* Card 4: FAQ / Accordion - Moved here and spans 2 rows */}
                    <StaggerItem direction="right" className="col-span-3 lg:col-span-1 lg:row-span-2">
                      <AnimatedBentoCard className="p-4 flex flex-col justify-start relative overflow-hidden h-full">
                          <div className="w-full h-full overflow-y-auto pr-2">
                            <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value="item-1" className="border-b-white/10">
                                <AccordionTrigger className="text-white hover:no-underline hover:text-[#FF3B30] data-[state=open]:text-[#FF3B30] text-sm py-3">How do I start a project?</AccordionTrigger>
                                <AccordionContent className="text-neutral-400 text-xs">
                                  You can simply reach out to me via email or LinkedIn to discuss your project requirements.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2" className="border-b-white/10">
                                <AccordionTrigger className="text-white hover:no-underline hover:text-[#FF3B30] data-[state=open]:text-[#FF3B30] text-sm py-3">What is your tech stack?</AccordionTrigger>
                                <AccordionContent className="text-neutral-400 text-xs">
                                  I specialize in React, TypeScript, Node.js, and modern CSS frameworks like Tailwind.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-3" className="border-b-white/10">
                                <AccordionTrigger className="text-white hover:no-underline hover:text-[#FF3B30] data-[state=open]:text-[#FF3B30] text-sm py-3">Do you offer freelance?</AccordionTrigger>
                                <AccordionContent className="text-neutral-400 text-xs">
                                  Yes, I am available for freelance commissions and full-time roles.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          </div>
                      </AnimatedBentoCard>
                    </StaggerItem>

                    {/* Card 5: Tech Stack */}
                    <StaggerItem direction="up" className="col-span-3 lg:col-span-1">
                      <AnimatedBentoCard className="p-4 flex flex-row items-center justify-between overflow-hidden relative h-full">
                          <div className="relative z-10 max-w-[50%]">
                              <h3 className="text-lg font-bold text-white mb-1">Tech Stack</h3>
                              <p className="text-neutral-400 text-xs mb-2">I specialize in a variety of languages, frameworks, and tools.</p>
                          </div>
                          
                           {/* Tech Stack Visuals - Orbiting Circles */}
                           <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center overflow-hidden">
                                <div className="relative flex h-full w-full items-center justify-center">
                                   {/* Center Logo */}
                                   <img src={Logo} alt="Logo" className="absolute w-12 h-12 rounded-full object-contain z-10" />
                                   
                                   {/* Inner orbit - 7 icons (image8 - image14) */}
                                   <OrbitingCircles iconSize={24} radius={50} duration={25} speed={1}>
                                     <img src={image8} alt="Tech 8" className="w-6 h-6 rounded object-contain" />
                                     <img src={image9} alt="Tech 9" className="w-6 h-6 rounded object-contain" />
                                     <img src={image10} alt="Tech 10" className="w-6 h-6 rounded object-contain" />
                                     <img src={image11} alt="Tech 11" className="w-6 h-6 rounded object-contain" />
                                     <img src={image12} alt="Tech 12" className="w-6 h-6 rounded object-contain" />
                                     <img src={image13} alt="Tech 13" className="w-6 h-6 rounded object-contain" />
                                     <img src={image14} alt="Tech 14" className="w-6 h-6 rounded object-contain" />
                                   </OrbitingCircles>
                                   
                                   {/* Outer orbit - 7 icons (image1 - image7) - reverse */}
                                   <OrbitingCircles iconSize={24} radius={90} duration={35} speed={1} reverse>
                                     <img src={image1} alt="Tech 1" className="w-6 h-6 rounded object-contain" />
                                     <img src={image2} alt="Tech 2" className="w-6 h-6 rounded object-contain" />
                                     <img src={image3} alt="Tech 3" className="w-6 h-6 rounded object-contain" />
                                     <img src={image4} alt="Tech 4" className="w-6 h-6 rounded object-contain" />
                                     <img src={image5} alt="Tech 5" className="w-6 h-6 rounded object-contain" />
                                     <img src={image6} alt="Tech 6" className="w-6 h-6 rounded object-contain" />
                                     <img src={image7} alt="Tech 7" className="w-6 h-6 rounded object-contain" />
                                   </OrbitingCircles>
                                </div>
                           </div>
                      </AnimatedBentoCard>
                    </StaggerItem>

                    {/* Card: Hire Me */}
                    <StaggerItem direction="up" className="col-span-3 lg:col-span-1">
                      <AnimatedBentoCard className="p-4 flex flex-col justify-between relative overflow-hidden h-full">
                          <div className="relative z-10">
                              <div className="flex items-center justify-between mb-2">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-[#FF3B30]/20 transition-colors duration-300">
                                    <Mail className="w-5 h-5 text-white group-hover:text-[#FF3B30] transition-colors duration-300" />
                                </div>
                                <div className="h-2 w-2 rounded-full bg-[#FF3B30] animate-pulse" />
                              </div>
                              <h3 className="text-lg font-bold text-white mb-1">Hire Me</h3>
                              <p className="text-neutral-400 text-xs mb-4">Have a project in mind? Let's build something amazing together.</p>
                              
                              <a href="mailto:your.email@example.com" className="inline-flex items-center justify-center w-full py-2 px-4 bg-white text-black text-xs font-bold rounded-lg hover:bg-[#FF3B30] hover:text-white transition-all duration-300 group-hover:translate-y-0 translate-y-1">
                                  Get in Touch
                              </a>
                          </div>
                          
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#FF3B30]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </AnimatedBentoCard>
                    </StaggerItem>
                  </BentoGrid>
                </StaggerContainer>
              </div>
            </div>
        </section>

        {/* Scroll Based Velocity Section */}
        <section className="pt-40 pb-10 overflow-hidden" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
           <ScrollVelocityContainer className="text-4xl font-black md:text-7xl text-transparent font-sans tracking-widest flex flex-col gap-2" style={{
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)'
        }}>
             <ScrollVelocityRow baseVelocity={2} direction={1}>
               <span className="mr-8">WELCOME TO OUR PORTOFOLIO</span>
             </ScrollVelocityRow>
             <ScrollVelocityRow baseVelocity={2} direction={-1}>
               <span className="mr-8">WELCOME TO OUR PORTOFOLIO</span>
             </ScrollVelocityRow>
           </ScrollVelocityContainer>
        </section>

      {/* Skills, Tools & Approach Section */}
      <section id="skills" data-section-theme="dark" className="min-h-screen flex items-center relative pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden text-slate-50" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header - Split Layout */}
          <FadeNearNav>
            <BlurReveal>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
                {/* Left: Title */}
                <div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] font-akzidenz uppercase">
                    <TypewriterText text="MEMBANGUN" delay={0.1} /> <br />
                    <TypewriterText text="SOLUSI DENGAN" delay={0.6} className="whitespace-nowrap" /> <br />
                    <span className="text-[#FF3B30] whitespace-nowrap">
                      <TypewriterText text="SKILLS & TOOLS" delay={1.5} />
                    </span>
                  </h2>
                </div>
                
                {/* Right: Description */}
                <div></div>
              </div>
            </BlurReveal>
          </FadeNearNav>

          {/* Tools Beam Section */}
          <FadeNearNav>
            <ToolsBeamSection />
          </FadeNearNav>
        </div>
      </section>

      {/* Featured Projects Section - Bento Grid Layout */}
      <section id="projects" data-section-theme="dark" className="min-h-screen py-20 md:py-32 relative overflow-hidden" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
        {/* Vertical Text - Right (Absolute Positioned) */}
        <div className="absolute -right-4 md:-right-8 top-0 bottom-0 hidden lg:flex flex-col justify-center z-10 pointer-events-none">
             <motion.div className="text-transparent font-black tracking-widest select-none whitespace-nowrap" style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            WebkitTextStroke: '2px #FFFFFF',
            fontSize: '18vh'
          }} initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
                PROJECTS
             </motion.div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.h2 className="md:hidden text-4xl font-black tracking-tight font-akzidenz uppercase text-white mb-8" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }}>
              PROJECTS
            </motion.h2>

            {/* Bento Grid */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="md:col-span-1 md:row-span-1">
                  <Link to={`/project/${featuredProjects[0]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }} transition={{ duration: 0.3 }}>
                      <img src={featuredProjects[0]?.coverImage} alt={featuredProjects[0]?.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{featuredProjects[0]?.category}</p>
                        <h3 className="text-white text-xl font-bold">{featuredProjects[0]?.title}</h3>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Project 2 */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                  <Link to={`/project/${featuredProjects[1]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }} transition={{ duration: 0.3 }}>
                      <img src={featuredProjects[1]?.coverImage} alt={featuredProjects[1]?.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{featuredProjects[1]?.category}</p>
                        <h3 className="text-white text-xl font-bold">{featuredProjects[1]?.title}</h3>
                        <p className="text-white/70 text-sm mt-2 line-clamp-2">{featuredProjects[1]?.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Project 3 */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                  <Link to={`/project/${featuredProjects[2]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }} transition={{ duration: 0.3 }}>
                      <img src={featuredProjects[2]?.coverImage} alt={featuredProjects[2]?.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{featuredProjects[2]?.category}</p>
                        <h3 className="text-white text-xl font-bold">{featuredProjects[2]?.title}</h3>
                        <p className="text-white/70 text-sm mt-2 line-clamp-2">{featuredProjects[2]?.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Project 4 */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                  <Link to={`/project/${featuredProjects[3]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }} transition={{ duration: 0.3 }}>
                      <img src={featuredProjects[3]?.coverImage} alt={featuredProjects[3]?.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{featuredProjects[3]?.category}</p>
                        <h3 className="text-white text-xl font-bold">{featuredProjects[3]?.title}</h3>
                        <p className="text-white/70 text-sm mt-2 line-clamp-2">{featuredProjects[3]?.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Project 5 */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                  <Link to={`/project/${featuredProjects[4]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }} transition={{ duration: 0.3 }}>
                      <img src={featuredProjects[4]?.coverImage} alt={featuredProjects[4]?.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{featuredProjects[4]?.category}</p>
                        <h3 className="text-white text-xl font-bold">{featuredProjects[4]?.title}</h3>
                        <p className="text-white/70 text-sm mt-2 line-clamp-2">{featuredProjects[4]?.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Project 6 */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                  <Link to={`/project/${featuredProjects[5]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }} transition={{ duration: 0.3 }}>
                      <img src={featuredProjects[5]?.coverImage} alt={featuredProjects[5]?.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{featuredProjects[5]?.category}</p>
                        <h3 className="text-white text-xl font-bold">{featuredProjects[5]?.title}</h3>
                        <p className="text-white/70 text-sm mt-2 line-clamp-2">{featuredProjects[5]?.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              {/* View All Projects Link */}
              <motion.div className="mt-8 flex justify-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                <Link to="/portfolio">
                  <motion.button className="px-8 py-3 bg-[#FF3B30] text-white font-bold uppercase tracking-widest text-sm rounded-lg" whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 59, 48, 0.5)' }} whileTap={{ scale: 0.95 }}>
                    Lihat Semua Proyek
                  </motion.button>
                </Link>
              </motion.div>
            </div>
        </div>
      </section>

    </div>
  </>;
}