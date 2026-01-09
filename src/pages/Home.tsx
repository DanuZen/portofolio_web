import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { SEOHead } from '@/components/seo/SEOHead';
import { ArrowRight, Youtube, Instagram, Github, Linkedin, User, Palette, PenTool, Globe } from 'lucide-react';
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

          {/* Vertical Text - Right */}
          <div className="absolute -right-4 md:-right-8 top-0 bottom-0 hidden lg:flex flex-col justify-center z-10 overflow-hidden h-screen pointer-events-none">
             <motion.div className="text-transparent font-black tracking-widest select-none whitespace-nowrap" style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            WebkitTextStroke: '3px #FFFFFF',
            fontSize: '18vh'
          }} animate={{
            y: ["0%", "-25%"]
          }} transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20
          }}>
                PROGRAMER & DESAIN GRAFIS - PROGRAMER & DESAIN GRAFIS - PROGRAMER & DESAIN GRAFIS - PROGRAMER & DESAIN GRAFIS - 
             </motion.div>
          </div>

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
        <section style={{ backgroundColor: 'hsl(0, 0%, 8%)' }}>
            <div id="about" data-section-theme="dark" className="w-full pb-0 mt-0 pt-20 md:pt-32 relative overflow-hidden">
              <div className="container mx-auto px-6 lg:px-12 relative z-10">
                
                {/* Section Title with Script Overlay - Centered & Single Line */}
                <div className="w-full text-center mb-12">
                   <h2 className="text-[8vw] md:text-[7vw] lg:text-[6vw] font-black text-white uppercase tracking-tight italic leading-none relative inline-block">
                      INTRODUCING,
                      <span 
                         className="absolute top-0 right-0 translate-x-[60%] -translate-y-[20%] text-[#FF6B35] text-[4vw] md:text-[3vw] lg:text-[2.5vw] not-italic font-normal"
                         style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}
                      >
                         Dann
                      </span>
                      &nbsp;MYSELF
                   </h2>
                </div>

                <BentoGrid className="lg:grid-rows-3">
                  {/* Card 1: About Me / IDE (2x2) */}
                  <BentoGridItem className="col-span-3 lg:col-span-2 lg:row-span-2 min-h-[500px] lg:min-h-auto flex flex-col justify-between p-0">
                    {/* Mock IDE Header */}
                    <div className="w-full bg-[#1e1e1e] p-3 flex items-center gap-2 border-b border-white/10 rounded-t-xl">
                       <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                       </div>
                       <div className="text-xs text-white/50 ml-4 font-mono">cvv-final.cs</div>
                    </div>
                    {/* Mock IDE Content */}
                    <div className="flex-1 bg-[#1e1e1e] p-6 font-mono text-sm overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1e1e1e]/90 z-10"></div>
                        <div className="text-blue-400">using <span className="text-white">AutoMapper;</span></div>
                        <div className="text-blue-400">using <span className="text-white">Contracts;</span></div>
                        <div className="text-blue-400">using <span className="text-white">Service.Contracts;</span></div>
                        <div className="text-blue-400">using <span className="text-white">Shared.DataTransferObjects;</span></div>
                        <br/>
                        <div className="text-blue-400">namespace <span className="text-white">Service;</span></div>
                        <br/>
                        <div className="text-blue-400">public scaled class <span className="text-yellow-400">ServiceManager</span> <span className="text-white">{`{`}</span></div>
                        <div className="pl-4 text-white">private readonly <span className="text-green-400">IRepositoryManager</span> _repositoryManager;</div>
                        <div className="pl-4 text-white">private readonly <span className="text-green-400">ILoggerManager</span> _logger;</div>
                        <div className="pl-4 text-white">private readonly <span className="text-green-400">IMapper</span> _mapper;</div>
                        <div className="pl-4 text-white">private readonly <span className="text-green-400">IDataShaper&lt;EmployeeDto&gt;</span> _dataShaper;</div>
                        <br/>
                        <div className="pl-4 text-white">public <span className="text-yellow-400">ServiceManager</span>(</div>
                        <div className="pl-8 text-green-400">IRepositoryManager repositoryManager,</div>
                        <div className="pl-8 text-green-400">ILoggerManager logger,</div>
                        <div className="pl-8 text-green-400">IMapper mapper,</div>
                        <div className="pl-8 text-green-400">IDataShaper&lt;EmployeeDto&gt; dataShaper)</div>
                        <div className="pl-4 text-white">{`{`}</div>
                        <div className="pl-8 text-white">_repositoryManager = repositoryManager;</div>
                        <div className="pl-8 text-white">_logger = logger;</div>
                        <div className="pl-4 text-white">{`}`}</div>
                        <div className="text-white">{`}`}</div>
                    </div>
                    
                    <div className="p-6 md:p-8 bg-[#1e1e1e] z-20 border-t border-white/5">
                       <h3 className="text-2xl font-bold text-white mb-2">Hi, I'm Dann</h3>
                       <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                          Over the last 4 years, I developed my frontend and backend dev skills to deliver dynamic and responsive software and web applications.
                       </p>
                    </div>
                  </BentoGridItem>

                  {/* Card 2: Design Principles */}
                  <BentoGridItem className="col-span-3 lg:col-span-1 min-h-[220px] bg-[#1a1a2e] relative overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[#0f0f1b]" />
                      
                      {/* Floating Pills - Static Layout for now due to complexity, can animate later */}
                      <div className="relative w-full h-full p-4">
                          <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white transform -rotate-12 border border-white/10">Desing Principles</div>
                          <div className="absolute top-10 right-8 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white transform rotate-12 border border-white/10">SRP</div>
                          <div className="absolute bottom-12 left-8 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white transform -rotate-6 border border-white/10">SOLID</div>
                          <div className="absolute bottom-8 right-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white transform rotate-6 border border-white/10">GRASP</div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[80%] text-center">
                              <h3 className="text-4xl font-black text-white/5 uppercase tracking-widest break-words leading-none">IS CRAFT</h3>
                          </div>
                          
                          <div className="absolute top-4 right-4 text-purple-500"><Palette size={20} /></div>
                          <div className="absolute bottom-4 right-8 bg-[#68217a] p-1.5 rounded-full"><div className="text-xs font-bold text-white">C#</div></div>
                          <div className="absolute bottom-12 left-4 bg-[#512bd4] p-1.5 rounded-full"><span className="text-[10px] font-bold text-white">.NET</span></div>
                      </div>
                  </BentoGridItem>

                  {/* Card 3: Time Zone */}
                  <BentoGridItem className="col-span-3 lg:col-span-1 min-h-[220px] bg-neutral-900 flex flex-col p-6 relative overflow-hidden group">
                      <div className="relative z-10">
                          <h3 className="text-xl font-bold text-white mb-2">Time Zone</h3>
                          <p className="text-neutral-400 text-sm">I'm based in Indonesia, and open to remote work worldwide.</p>
                      </div>
                      <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-500"></div>
                      <div className="absolute bottom-0 right-0 w-full h-32 overflow-hidden flex items-end justify-end opacity-50">
                         <Globe className="w-32 h-32 md:w-48 md:h-48 text-neutral-700 -mb-10 -mr-10 opacity-20" />
                      </div>
                  </BentoGridItem>

                  {/* Card 4: Contact */}
                  <BentoGridItem className="col-span-3 lg:col-span-1 bg-[#6a5acd] bg-gradient-to-br from-[#7b68ee] to-[#5143a0] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                      <div className="relative z-10 flex flex-col items-center gap-4">
                          <h3 className="text-xl font-bold text-white leading-tight">Do you want to start a project together?</h3>
                          <button className="bg-black/80 hover:bg-black text-white text-xs px-4 py-2 rounded flex items-center gap-2 transition-colors duration-300 border border-white/10">
                              <span onClick={() => navigator.clipboard.writeText('your.email@example.com')} className="cursor-pointer">Copy Email Address</span>
                          </button>
                      </div>
                  </BentoGridItem>

                  {/* Card 5: Tech Stack */}
                  <BentoGridItem className="col-span-3 lg:col-span-2 bg-[#0f0f1b] p-6 flex flex-row items-center justify-between overflow-hidden relative">
                      <div className="relative z-10 max-w-[50%]">
                          <h3 className="text-xl font-bold text-white mb-2">Tech Stack</h3>
                          <p className="text-neutral-400 text-sm mb-4">I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications</p>
                      </div>
                      
                      {/* Tech Stack Visuals - Right side */}
                      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center overflow-hidden">
                           {/* Orbiting Icons Mockup */}
                           <div className="relative w-full h-full">
                              <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
                                  <div className="flex flex-col gap-4 items-end">
                                      <div className="bg-[#1e1e2e] p-2 rounded-lg border border-white/10 animate-bounce delay-100"><div className="w-6 h-6 bg-[#68217a] rounded text-[10px] flex items-center justify-center text-white font-bold">C#</div></div>
                                      <div className="bg-[#1e1e2e] p-2 rounded-lg border border-white/10 animate-bounce delay-300"><div className="w-6 h-6 bg-[#007acc] rounded text-[10px] flex items-center justify-center text-white font-bold">TS</div></div>
                                      <div className="bg-[#1e1e2e] p-2 rounded-lg border border-white/10 animate-bounce delay-500"><div className="w-6 h-6 bg-[#61dafb] rounded text-[10px] flex items-center justify-center text-black font-bold">R</div></div>
                                  </div>
                              </div>
                           </div>
                      </div>
                  </BentoGridItem>
                </BentoGrid>
              </div>
            </div>
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
                <div className="lg:text-right pt-4">
                  <motion.p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed text-justify font-akzidenz-bold max-w-md ml-auto cursor-default" initial={{
                    opacity: 0,
                    x: 30
                  }} whileInView={{
                    opacity: 1,
                    x: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    duration: 0.6,
                    delay: 0.3
                  }} whileHover={{
                    scale: 1.02,
                    textShadow: "0 0 20px rgba(255,255,255,0.3)",
                    transition: {
                      duration: 0.2
                    }
                  }}>
                    Mengombinasikan kemampuan desain grafis dan pemrograman dengan tools modern untuk menciptakan karya yang rapi, konsisten, dan bernilai guna, serta mampu menyampaikan pesan secara efektif melalui visual dan solusi digital yang terstruktur.
                  </motion.p>
              </div>
            </div>
          </BlurReveal>
          </FadeNearNav>

          {/* Icons Grid */}
          <FadeNearNav>
            <motion.div className="flex flex-col gap-4 max-w-xs mx-auto md:flex-row md:flex-wrap md:justify-center md:items-center md:gap-8 md:max-w-5xl" initial="hidden" whileInView="visible" viewport={{
              once: true,
              margin: "-100px"
            }}>
              {/* Mobile: Row 1 - 3 items with center offset up */}
              <div className="flex justify-center items-end gap-4 md:hidden">
                {/* Affinity Designer */}
                <motion.div className="w-20" variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}>
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div className="aspect-square w-full bg-[#ccff00] rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer" whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 30px rgba(204, 255, 0, 0.6)'
                      }}>
                        <img src={image1} alt="Affinity Designer" className="w-full h-full object-cover" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Affinity Designer
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>

                {/* Adobe Illustrator - offset up */}
                <motion.div className="w-20 -translate-y-6" variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}>
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div className="aspect-square w-full bg-[#330000] rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer" whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 30px rgba(255, 59, 48, 0.6)'
                      }}>
                        <img src={image3} alt="Adobe Illustrator" className="w-full h-full object-cover" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Adobe Illustrator
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>

                {/* Adobe Photoshop */}
                <motion.div className="w-20" variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}>
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div className="aspect-square w-full bg-[#001e36] rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer" whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 30px rgba(49, 168, 255, 0.6)'
                      }}>
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
                <motion.div className="w-20" variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}>
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div className="aspect-square w-full bg-white rounded-[2rem] flex items-center justify-center p-5 cursor-pointer" whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 30px rgba(255, 255, 255, 0.6)'
                      }}>
                        <img src={image4} alt="Figma" className="w-full h-full object-contain" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Figma
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>

                {/* PostgreSQL - offset down */}
                <motion.div className="w-20 translate-y-6" variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}>
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div className="aspect-square w-full bg-white rounded-[2rem] flex items-center justify-center p-5 cursor-pointer" whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 30px rgba(255, 255, 255, 0.6)'
                      }}>
                        <img src={image6} alt="PostgreSQL" className="w-full h-full object-contain" />
                      </motion.div>
                      <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        PostgreSQL
                      </span>
                    </motion.div>
                  </MagneticElement>
                </motion.div>

                {/* Tailwind CSS */}
                <motion.div className="w-20" variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}>
                  <MagneticElement strength={0.2}>
                    <motion.div className="relative group flex flex-col items-center">
                      <motion.div className="aspect-square w-full bg-[#0F172A] rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer" whileHover={{
                        scale: 1.08,
                        boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)'
                      }}>
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
                      {skills.slice(0, 7).map((skill, index) => <motion.div key={index} className="w-28" initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                  }} whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }} viewport={{
                    once: true
                  }}>
                          <motion.div onMouseEnter={() => setHoveredSkill(index)} onMouseLeave={() => setHoveredSkill(null)} animate={{
                      scale: hoveredSkill === index ? 1.5 : 1,
                      opacity: hoveredSkill !== null && hoveredSkill !== index ? 0.1 : 1,
                      filter: hoveredSkill !== null && hoveredSkill !== index ? 'blur(2px)' : 'blur(0px)'
                    }} transition={{
                      duration: 0.3
                    }}>
                            <MagneticElement strength={0.2}>
                              <motion.div className="relative group flex flex-col items-center">
                                <motion.div className={`aspect-square w-full rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer ${skill.bg === 'white' ? 'bg-white' : ''}`} style={{
                            backgroundColor: skill.bg !== 'white' ? skill.bg : undefined
                          }} whileHover={{
                            boxShadow: `0 0 30px ${skill.shadow}`
                          }}>
                                  <img src={skill.img} alt={skill.name} className={`w-full h-full object-${skill.fit} ${skill.p || ''}`} />
                                </motion.div>
                                <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                  {skill.name}
                                </span>
                              </motion.div>
                            </MagneticElement>
                          </motion.div>
                        </motion.div>)}
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
                      {skills.slice(7, 14).map((skill, index) => <motion.div key={index + 7} className="w-28" initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.95
                  }} whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: (index + 7) * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }} viewport={{
                    once: true
                  }}>
                          <motion.div onMouseEnter={() => setHoveredSkill(index + 7)} onMouseLeave={() => setHoveredSkill(null)} animate={{
                      scale: hoveredSkill === index + 7 ? 1.5 : 1,
                      opacity: hoveredSkill !== null && hoveredSkill !== index + 7 ? 0.1 : 1,
                      filter: hoveredSkill !== null && hoveredSkill !== index + 7 ? 'blur(2px)' : 'blur(0px)'
                    }} transition={{
                      duration: 0.3
                    }}>
                            <MagneticElement strength={0.2}>
                              <motion.div className="relative group flex flex-col items-center">
                                <motion.div className={`aspect-square w-full rounded-[2rem] flex items-center justify-center overflow-hidden cursor-pointer ${skill.bg === 'white' ? 'bg-white' : ''}`} style={{
                            backgroundColor: skill.bg !== 'white' ? skill.bg : undefined
                          }} whileHover={{
                            boxShadow: `0 0 30px ${skill.shadow}`
                          }}>
                                  <img src={skill.img} alt={skill.name} className={`w-full h-full object-${skill.fit} ${skill.p || ''}`} />
                                </motion.div>
                                <span className="mt-3 text-white text-sm font-akzidenz-bold whitespace-nowrap text-center pointer-events-none opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                  {skill.name}
                                </span>
                              </motion.div>
                            </MagneticElement>
                          </motion.div>
                        </motion.div>)}
                    </div>
                  </div>
                </FadeNearNav>

              </div>
        </div>
      </section>

      {/* Featured Projects Section - Bold Header + Gallery */}
      <section id="projects" data-section-theme="dark" className="min-h-screen flex items-center py-32 md:py-40" style={{
        backgroundColor: 'hsl(0, 0%, 8%)'
      }}>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header - Split Layout */}


          {/* Projects Stacked Layout - Cross Pattern */}
          <div className="w-full px-4 md:px-8 lg:px-16">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-40">
              {/* Left: Stacked Cards in Cross Pattern */}
              <motion.div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px] lg:w-[450px] lg:h-[550px]" style={{
                perspective: '1200px'
              }} initial={{
                opacity: 0,
                x: -50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8
              }} drag="x" dragConstraints={{
                left: 0,
                right: 0
              }} dragElastic={0.1} onDragEnd={(_, info) => {
                const threshold = 50;
                if (info.offset.x > threshold) {
                  setActiveProjectIndex(prev => prev === 0 ? featuredProjects.length - 1 : prev - 1);
                } else if (info.offset.x < -threshold) {
                  setActiveProjectIndex(prev => prev === featuredProjects.length - 1 ? 0 : prev + 1);
                }
              }}>
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
                  return <motion.div key={project.id} className="absolute rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing" initial={false} style={{
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0,
                    transformOrigin: 'center center'
                  }} animate={{
                    x: xOffset,
                    y: yOffset,
                    rotate: rotateZ,
                    scale: scaleValue,
                    zIndex
                  }} transition={{
                    duration: 0.4,
                    ease: [0.32, 0.72, 0, 1]
                  }} whileHover={isActive ? {
                    scale: 1.02,
                    y: -5
                  } : {}}>
                      <Link to={`/project/${project.slug}`} className="block w-full h-full" draggable={false}>
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 transition-all duration-300" style={{
                        boxShadow: isActive ? '0 0 30px rgba(255, 59, 48, 0.3), 0 20px 50px -15px rgba(0,0,0,0.5)' : '0 20px 50px -15px rgba(0,0,0,0.5)'
                      }}>
                          <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          
                          {/* Title at bottom */}
                          {isActive && <motion.div className="absolute bottom-0 left-0 right-0 p-5" initial={{
                          opacity: 0,
                          y: 10
                        }} animate={{
                          opacity: 1,
                          y: 0
                        }} transition={{
                          delay: 0.2
                        }}>
                              <h3 className="text-white text-xl md:text-2xl font-bold">
                                {project.title}
                              </h3>
                            </motion.div>}
                        </div>
                      </Link>
                    </motion.div>;
                })}
              </motion.div>

              {/* Right: Navigation & Info */}
              <motion.div className="flex flex-col items-center lg:items-start gap-8" initial={{
                opacity: 0,
                x: 50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8,
                delay: 0.3
              }}>
                {/* Title moved here */}
                <div className="text-left mb-4">
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.9] font-akzidenz uppercase">
                    <span className="text-white">
                      <TypewriterText text="PROYEK" delay={0.1} />
                    </span> <br />
                    <span className="text-[#FF3B30]">
                      <TypewriterText text="UNGGULAN" delay={0.5} />
                    </span>
                  </h2>
                </div>

                {/* Project Info */}
                <motion.div key={activeProjectIndex} className="text-center lg:text-left" initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.3
                }}>
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