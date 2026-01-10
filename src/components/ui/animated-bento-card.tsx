"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBentoCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBentoCard({ children, className }: AnimatedBentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -8;
    const rotateYValue = ((x - centerX) / centerX) * 8;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      rgba(255, 59, 48, 0.15),
      transparent 80%
    )
  `;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "bg-neutral-900 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu [border:1px_solid_rgba(255,255,255,.1)]",
        "transition-shadow duration-300",
        isHovered && "shadow-[0_0_40px_rgba(255,59,48,0.15)]",
        className
      )}
    >
      {/* Glow effect on hover */}
      <motion.div
        style={{ background }}
        className={cn(
          "pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )}
      />
      
      {/* Spotlight border effect */}
      <motion.div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 transition-opacity duration-300",
          isHovered && "opacity-100"
        )}
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 59, 48, 0.4),
              transparent 70%
            )
          `,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
