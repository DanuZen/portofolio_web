import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Instagram, Github, User } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import LogoDann from '@/assets/LogoDann.png';

export function Footer() {
  return (
    <footer className="pt-0 pb-10 px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Bottom Row - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left - Contact Me */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              CONTACT ME
            </h3>
            <a
              href={`mailto:${photographerInfo.email}`}
              className="text-foreground/70 hover:text-red-500 transition-colors duration-300 text-sm md:text-lg"
            >
              {photographerInfo.email}
            </a>
          </div>

          {/* Center - Logo */}
          <div className="flex justify-center">
            <img src={LogoDann} alt="DANN logo" className="h-16 md:h-20 w-auto object-contain" loading="lazy" />
          </div>

          {/* Right - Social Media */}
          <div className="flex flex-col md:items-end gap-3">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">
              FOLLOW ME
            </h3>
            {/* Social Icons */}
            <div className="flex gap-5">
              <Link
                to="/admin/login"
                className="text-foreground/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
                aria-label="Admin login"
              >
                <User className="w-7 h-7" />
              </Link>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-7 h-7" />
              </a>
              <a
                href={photographerInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-7 h-7" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-7 h-7" />
              </a>
              <a
                href={photographerInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-red-500 hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
