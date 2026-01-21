import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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
import { Timeline } from '@/components/ui/timeline';

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
  const {
    scrollYProgress
  } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
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
        {/* Hero Section - Modern Dark Design */}
        <section ref={heroRef} id="hero" data-section-theme="dark" className="relative min-h-screen w-full overflow-x-hidden" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
          <RetroGrid className="-top-24" />


          <div className="container mx-auto px-6 lg:px-12 min-h-screen flex flex-col justify-center py-24 overflow-hidden">
            <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
              
              <div className="relative z-20 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center -mt-20 md:-mt-0">
                
                {/* Left Column: Text Content */}
                <div className="flex flex-col items-start justify-center space-y-6 text-left order-2 lg:order-1 px-4 lg:px-0">
                  <motion.div initial={{
                  opacity: 0,
                  x: -50
                }} animate={{
                  opacity: 1,
                  x: 0
                }} transition={{
                  duration: 0.8
                }} className="-mt-20 md:-mt-32">
                    <div className="flex items-baseline gap-3">
                      <span className="text-2xl md:text-3xl text-white/80 font-light">I'm</span>
                      <div className="h-[40px] overflow-hidden flex items-center min-w-[300px]">
                        <HyperText key={textOptions[currentTextIndex]} className="text-2xl md:text-3xl font-bold text-[#FF3B30]" duration={800}>
                          {textOptions[currentTextIndex]}
                        </HyperText>
                      </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mt-2 mb-4 uppercase">
                      Dann
                    </h1>
                    {/* Red Accent Line */}
                    <div className="h-2 w-24 bg-[#FF3B30] rounded-full mb-6"></div>
                    
                    <p className="text-white/90 text-lg md:text-xl max-w-lg leading-relaxed text-justify font-akzidenz-bold">
                      Coding today, debugging tomorrow, improving every day. True expertise is built through persistence, curiosity, and continuous learning.
                    </p>

                    {/* Social Icons */}
                    <div className="pt-8 flex items-center gap-4">
                      <div className="flex items-center gap-6">
                        {[{
                        icon: Youtube,
                        href: 'https://youtube.com',
                        label: 'YouTube'
                      }, {
                        icon: Instagram,
                        href: 'https://instagram.com',
                        label: 'Instagram'
                      }, {
                        icon: Github,
                        href: 'https://github.com',
                        label: 'GitHub'
                      }, {
                        icon: Linkedin,
                        href: 'https://linkedin.com',
                        label: 'LinkedIn'
                      }].map((item, i) => <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-0 hover:gap-2 text-white hover:text-[#FF3B30] transition-all duration-300 group">
                            <item.icon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                            <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 whitespace-nowrap font-akzidenz-bold text-base transition-all duration-300 ease-in-out">
                              {item.label}
                            </span>
                          </a>)}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column: Image & Background Shape */}
                <div className="relative flex items-center justify-center order-1 lg:order-2">
                  {/* Dark Circle Background */}
                  <div className="absolute z-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#1A1A1A] rounded-full blur-3xl opacity-50"></div>
                  
                  {/* Person Image */}
                  <motion.div className="relative z-10 h-[50vh] md:h-[80vh] w-full flex items-center justify-center" initial={{
                  opacity: 0,
                  scale: 0.9
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  duration: 1
                }}>
                    <img src={foto} alt="Dann" className="h-full w-auto object-contain drop-shadow-[0_-5px_5px_rgba(255,255,255,0.15)] scale-[1.7] -translate-y-80 -translate-x-12" />
                  </motion.div>
                </div>

              </div>



              {/* Info Bar */}
              <motion.div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-7xl px-6 lg:px-0 hidden md:flex justify-between items-end text-left z-30" initial={{
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
                  <h3 className="text-xs font-bold text-gray-500 tracking-widest mb-1">FULL NAME</h3>
                  <p className="text-white font-bold tracking-wider">DANN</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 tracking-widest mb-1">PHILOSOPHY</h3>
                  <p className="text-white font-bold tracking-wider">UI/UX & CODE</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 tracking-widest mb-1">FAVOURITE THING</h3>
                  <p className="text-white font-bold tracking-wider">CREATING</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-500 tracking-widest mb-1">CURRENT OCCUPATION</h3>
                  <p className="text-white font-bold tracking-wider">FREELANCER</p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

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


                {/* Timeline in Introduce Myself */}
                <Timeline data={[{
              title: "About Me",
              content: <div className="space-y-4">
                        {/* About Me Card with Photo */}
                        <div className="relative rounded-xl overflow-hidden h-64 md:h-80 group">
                          <img src={foto} alt="Dann" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />
                          <div className="relative z-20 h-full flex flex-col justify-end p-6">
                            <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Hi, I'm Dann</h3>
                            <p className="text-neutral-200 text-sm leading-relaxed drop-shadow-sm">
                              Front-End Developer & UI/UX Designer crafting intuitive user experiences.
                            </p>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <p className="text-white/80 text-sm leading-relaxed">
                            As a Front-End Developer & UI/UX Designer, I design and develop user-centered web interfaces by combining strong UI/UX principles with clean, modern front-end code. I focus on creating intuitive layouts, clear visual hierarchies, and responsive designs that adapt seamlessly across devices.
                          </p>
                        </div>
                        
                        {/* Time Zone & Hire Me */}
                        
                      </div>
            }, {
              title: "Tech Stack",
              content: <div className="space-y-4">
                        <p className="text-white/90 text-base md:text-lg font-akzidenz-bold mb-4">
                          I specialize in a variety of languages, frameworks, and tools to build modern web applications.
                        </p>
                        
                        {/* Tech Stack Grid */}
                        <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image1} alt="Tech 1" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image2} alt="Tech 2" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image3} alt="Tech 3" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image4} alt="Tech 4" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image5} alt="Tech 5" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image6} alt="Tech 6" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image7} alt="Tech 7" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image8} alt="Tech 8" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image9} alt="Tech 9" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image10} alt="Tech 10" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image11} alt="Tech 11" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image12} alt="Tech 12" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image13} alt="Tech 13" className="w-8 h-8 rounded object-contain" />
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex flex-col items-center gap-2">
                            <img src={image14} alt="Tech 14" className="w-8 h-8 rounded object-contain" />
                          </div>
                        </div>
                        
                        {/* FAQ Section */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 mt-4">
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
                      </div>
            }, {
              title: "2024",
              content: <div>
                        <p className="text-white/90 text-base md:text-lg font-akzidenz-bold mb-4">
                          Started focusing on full-stack development and expanded my expertise in React, TypeScript, and modern web technologies.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                            <h4 className="text-[#FF3B30] font-bold mb-2">React & TypeScript</h4>
                            <p className="text-white/70 text-sm">Mastered component architecture and type-safe development</p>
                          </div>
                          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                            <h4 className="text-[#FF3B30] font-bold mb-2">Tailwind CSS</h4>
                            <p className="text-white/70 text-sm">Built responsive, modern UI with utility-first approach</p>
                          </div>
                        </div>
                      </div>
            }, {
              title: "2023",
              content: <div>
                        <p className="text-white/90 text-base md:text-lg font-akzidenz-bold mb-4">
                          Expanded into UI/UX design and started building complete digital products from design to deployment.
                        </p>
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {['Figma', 'Adobe XD', 'Prototyping', 'User Research'].map(skill => <span key={skill} className="px-3 py-1 bg-[#FF3B30]/20 text-[#FF3B30] rounded-full text-sm font-medium">
                                {skill}
                              </span>)}
                          </div>
                        </div>
                        <p className="text-white/70 text-sm">
                          Completed multiple freelance projects focusing on user-centered design principles and seamless experiences.
                        </p>
                      </div>
            }, {
              title: "2022",
              content: <div>
                        <p className="text-white/90 text-base md:text-lg font-akzidenz-bold mb-4">
                          Began my journey as a graphic designer, learning the fundamentals of visual communication.
                        </p>
                        <ul className="space-y-2">
                          {['✅ Mastered Adobe Creative Suite', '✅ Created brand identities for local businesses', '✅ Developed strong typography skills', '✅ Started learning web development basics'].map((item, i) => <li key={i} className="text-white/80 text-sm flex items-center gap-2">
                              {item}
                            </li>)}
                        </ul>
                      </div>
            }, {
              title: "The Beginning",
              content: <div>
                        <p className="text-white/90 text-base md:text-lg font-akzidenz-bold mb-4">
                          Discovered my passion for design and technology. Started experimenting with creative tools and building small projects.
                        </p>
                        <div className="bg-gradient-to-r from-[#FF3B30]/20 to-transparent p-4 rounded-lg border-l-4 border-[#FF3B30]">
                          <p className="text-white/80 text-sm italic">
                            "Every expert was once a beginner. The key is to start, stay curious, and never stop learning."
                          </p>
                        </div>
                      </div>
            }]} />
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
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5
              }} className="md:col-span-1 md:row-span-1">
                  <Link to={`/project/${featuredProjects[0]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(255,255,255,0.4)'
                  }} transition={{
                    duration: 0.3
                  }}>
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
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }}>
                  <Link to={`/project/${featuredProjects[1]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(255,255,255,0.4)'
                  }} transition={{
                    duration: 0.3
                  }}>
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
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  <Link to={`/project/${featuredProjects[2]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(255,255,255,0.4)'
                  }} transition={{
                    duration: 0.3
                  }}>
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
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.3
              }}>
                  <Link to={`/project/${featuredProjects[3]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(255,255,255,0.4)'
                  }} transition={{
                    duration: 0.3
                  }}>
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
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.4
              }}>
                  <Link to={`/project/${featuredProjects[4]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(255,255,255,0.4)'
                  }} transition={{
                    duration: 0.3
                  }}>
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
                <motion.div initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.5
              }}>
                  <Link to={`/project/${featuredProjects[5]?.slug}`}>
                    <motion.div className="group relative h-[280px] md:h-[320px] rounded-2xl border border-white/20 overflow-hidden bg-neutral-900/50" whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(255,255,255,0.4)'
                  }} transition={{
                    duration: 0.3
                  }}>
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
              <motion.div className="mt-8 flex justify-center" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.6
            }}>
                <Link to="/portfolio">
                  <motion.button className="px-8 py-3 bg-[#FF3B30] text-white font-bold uppercase tracking-widest text-sm rounded-lg" whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(255, 59, 48, 0.5)'
                }} whileTap={{
                  scale: 0.95
                }}>
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