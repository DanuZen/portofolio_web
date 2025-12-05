import { Linkedin, Youtube, Instagram, Github } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import LogoDannBlack from '@/assets/LogoDannBlack.png';

// Custom Behance icon since lucide-react doesn't have one
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7.5 11c1.8 0 3-1.2 3-2.7S9.2 6 7.5 6H3v5h4.5zM3 13v5.5h4.5c1.8 0 3.3-1.4 3.3-2.8S9.3 13 7.5 13H3zm4.5 3.5H5v-1.5h2.5c.5 0 .8.3.8.8s-.3.7-.8.7zM5 8h2.5c.5 0 .8.3.8.7 0 .5-.3.8-.8.8H5V8zm10-2h5v1.5h-5V6zm2.5 4c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.7 0 3.2-1 4-2.4h-2c-.4.5-1.1.9-2 .9-1.4 0-2.5-1-2.5-2h6.5c0-2.5-1.8-4.5-4-4.5zm-2 3.5c.2-1 1.1-2 2-2s1.8 1 2 2h-4z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="py-6 px-6 lg:px-8" style={{ backgroundColor: 'hsl(0, 11%, 91%)' }}>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Bottom Row - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Left - Contact Me */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'hsl(0, 0%, 8%)' }}>
              CONTACT ME
            </h3>
            <a href={`mailto:${photographerInfo.email}`} className="text-black/70 hover:text-red-500 transition-colors duration-300 text-sm md:text-lg">
              {photographerInfo.email}
            </a>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <img src={LogoDannBlack} alt="Logo" className="h-20 w-auto object-contain" />
          </div>

          {/* Right - Social Media */}
          <div className="flex flex-col items-end gap-3">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'hsl(0, 0%, 8%)' }}>
              FOLLOW ME
            </h3>
            {/* Social Icons */}
            <div className="flex gap-5">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300">
                <Youtube className="w-7 h-7" />
              </a>
              <a href={photographerInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300">
                <Github className="w-7 h-7" />
              </a>
              <a href={photographerInfo.socialLinks.behance} target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300">
                <BehanceIcon className="w-7 h-7" />
              </a>
              <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300">
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
