import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  icon: LucideIcon;
  name: string;
  href?: string;
}

export function SocialIcon({ icon: Icon, name, href = '#' }: SocialIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      className="flex items-center gap-2 text-white hover:text-white transition-colors py-2 px-2 rounded-md"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Icon className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" />
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden whitespace-nowrap text-sm font-light tracking-wide"
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
