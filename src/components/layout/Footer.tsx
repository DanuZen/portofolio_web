import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Github, User } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import LogoDann from '@/assets/LogoDann.png';

export function Footer() {
  return (
    <footer className="pt-0 pb-6 px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Bottom Row - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Left - Contact Me */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
              CONTACT ME
            </h3>
            <a href={`mailto:${photographerInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm md:text-lg">
              {photographerInfo.email}
            </a>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <img src={LogoDann} alt="Logo" className="h-20 w-auto object-contain" />
          </div>

          {/* Right - Social Media */}
          <div className="flex flex-col items-end gap-3">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
              FOLLOW ME
            </h3>
            {/* Social Icons */}
            <div className="flex gap-5">
              <Link to="/admin/login" className="text-secondary hover:text-secondary transition-all duration-300">
                <User className="w-7 h-7" />
              </Link>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                <Youtube className="w-7 h-7" />
              </a>
              <a href={photographerInfo.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                <Github className="w-7 h-7" />
              </a>
              <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300">
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}