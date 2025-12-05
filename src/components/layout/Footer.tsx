import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Dribbble } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import LogoDannBlack from '@/assets/LogoDannBlack.png';

export function Footer() {
  return (
    <footer className="py-6 px-6 lg:px-8" style={{ backgroundColor: 'hsl(0, 11%, 91%)' }}>
      <div className="max-w-7xl mx-auto space-y-6">


        {/* Bottom Row - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Left - Contact Me */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'hsl(0, 0%, 8%)' }}>
              CONTACT ME
            </h3>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <img src={LogoDannBlack} alt="Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Right - Social Media */}
          <div className="flex flex-col items-end gap-3">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: 'hsl(0, 0%, 8%)' }}>
              FOLLOW ME
            </h3>
            {/* Social Icons */}
            <div className="flex gap-5">
              <a 
                href={photographerInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-7 h-7" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
              >
                <Youtube className="w-7 h-7" />
              </a>
              <a 
                href={photographerInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a 
                href={photographerInfo.socialLinks.behance} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
              >
                <Dribbble className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
