import { motion } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { Separator } from '@/components/ui/separator';
import { SEOHead } from '@/components/seo/SEOHead';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Pembatas1 from '@/assets/Pembatas1.png';

/**
 * About page with photographer biography and professional information
 * Features split layout with portrait video and comprehensive biography
 */
export default function About() {
  const {
    data: aboutSettings
  } = useQuery({
    queryKey: ['about-settings'],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from('about_settings').select('*').single();
      if (error) throw error;
      return data;
    }
  });
  return <>
      <SEOHead title="Tentang" description={`Pelajari tentang ${photographerInfo.name}, ${photographerInfo.tagline}. ${photographerInfo.biography.split('\n\n')[0]}`} image={photographerInfo.portraitImage} />
      
      <div className="min-h-screen" style={{ backgroundColor: 'hsl(0, 0%, 8%)' }}>
        {/* Hero Section */}
      <section className="pt-16 md:pt-24 pb-0 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div initial={{
            opacity: 0.8,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4
          }}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-4">
              <span className="text-white">TEN</span><span className="text-red-500">TANG</span>
            </h1>
            <p className="text-white text-lg md:text-xl font-light leading-relaxed">
              Fotografer & Pencerita Visual
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portrait and Biography - Split Layout */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Portrait Image */}
            <motion.div className="space-y-6" initial={{
              opacity: 0.8,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4
            }}>
              <div className="aspect-[3/4] relative overflow-hidden rounded-sm bg-muted">
                {aboutSettings?.media_url ? aboutSettings.media_type === 'video' ? <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                      <source src={aboutSettings.media_url} type="video/mp4" />
                    </video> : <img src={aboutSettings.media_url} alt={photographerInfo.name} className="absolute inset-0 w-full h-full object-cover" /> : null}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {photographerInfo.socialLinks.instagram && <a href={photographerInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="Instagram">
                    <Instagram className="size-5" />
                  </a>}
                {photographerInfo.socialLinks.linkedin && <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="LinkedIn">
                    <Linkedin className="size-5" />
                  </a>}
                {photographerInfo.socialLinks.behance && <a href={photographerInfo.socialLinks.behance} target="_blank" rel="noopener noreferrer" className="p-3 border border-border rounded-sm hover:bg-accent transition-colors" aria-label="Behance">
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8h6a3 3 0 0 1 0 6H3V8z" />
                      <path d="M3 14h7a3 3 0 0 1 0 6H3v-6z" />
                      <path d="M14 7h7" />
                      <path d="M17 8a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </a>}
              </div>
            </motion.div>

            {/* Biography and Info */}
            <motion.div className="space-y-8" initial={{
              opacity: 0.8,
              x: 10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.1
            }}>
              {/* Name and Tagline */}
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  {photographerInfo.name}
                </h2>
                <p className="text-xl text-muted-foreground font-light tracking-wide">
                  {photographerInfo.tagline}
                </p>
              </div>

              <Separator />

              {/* Biography */}
              <div className="space-y-4">
                {photographerInfo.biography.split('\n\n').map((paragraph, index) => <p key={index} className="text-base md:text-lg font-light leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>)}
              </div>

              {/* Contact Info */}
              <div className="pt-4 space-y-2">
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Email: </span>
                  <a href={`mailto:${photographerInfo.email}`} className="text-foreground hover:text-muted-foreground transition-colors">
                    {photographerInfo.email}
                  </a>
                </div>
                <div className="text-sm font-light tracking-wide">
                  <span className="text-muted-foreground">Lokasi: </span>
                  <span className="text-foreground">{photographerInfo.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Divider */}
      <div className="w-full">
        
      </div>
      </div>
    </>;
}