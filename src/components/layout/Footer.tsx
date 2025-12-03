import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Dribbble } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';

export function Footer() {
  return (
    <footer className="py-6 px-6 lg:px-8" style={{ backgroundColor: 'hsl(0, 11%, 91%)' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Row - Services */}
        <div className="text-center">
          <div className="text-xs md:text-sm font-black tracking-wide" style={{ color: 'hsl(0, 0%, 8%)' }}>
            GRAPHIC DESIGN | BRANDING DESIGN | LOGO DESIGN | PRINT MEDIA DESIGN
          </div>
        </div>

        {/* Bottom Row - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Left - Contact Me */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'hsl(0, 0%, 8%)' }}>
              CONTACT ME
            </h3>
          </div>

          {/* Center - Empty Space */}
          <div className="text-center">
          </div>

          {/* Right - Social Media */}
          <div className="flex flex-col items-end gap-2">
            {/* Social Icons */}
            <div className="flex gap-2">
              <a 
                href={photographerInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={photographerInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={photographerInfo.socialLinks.behance} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border-2 border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
              >
                <Dribbble className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
