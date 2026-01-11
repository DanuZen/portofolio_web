"use client";

import { forwardRef, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import LogoDann from "@/assets/LogoDann.png";

// Tool images imports
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image7 from "@/assets/image7.png";
import image8 from "@/assets/image8.png";
import image9 from "@/assets/image9.png";
import image10 from "@/assets/image10.png";
import image11 from "@/assets/image11.png";
import image12 from "@/assets/image12.png";
import image13 from "@/assets/image13.png";
import image14 from "@/assets/image14.png";

const designTools = [
  { name: "Affinity Designer", img: image1, bg: "#ccff00" },
  { name: "Adobe Photoshop", img: image2, bg: "#001e36" },
  { name: "Adobe Illustrator", img: image3, bg: "#330000" },
  { name: "Adobe Lightroom", img: image7, bg: "#001E36" },
  { name: "Adobe After Effect", img: image8, bg: "#00005b" },
  { name: "Adobe InDesign", img: image9, bg: "#49021f" },
  { name: "Canva", img: image10, bg: "white" },
];

const programmingTools = [
  { name: "Figma", img: image4, bg: "white" },
  { name: "PostgreSQL", img: image6, bg: "white" },
  { name: "Tailwind CSS", img: image5, bg: "#0F172A" },
  { name: "React JS", img: image11, bg: "white" },
  { name: "Node JS", img: image12, bg: "white" },
  { name: "Supabase", img: image13, bg: "#1C1C1C" },
  { name: "GitHub", img: image14, bg: "white" },
];

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; style?: React.CSSProperties }
>(({ className, children, style }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        className
      )}
      style={style}
      whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
});

Circle.displayName = "Circle";

const ToolIcon = forwardRef<
  HTMLDivElement,
  { tool: { name: string; img: string; bg: string }; className?: string }
>(({ tool, className }, ref) => {
  const isWhiteBg = tool.bg === "white";
  return (
    <motion.div
      ref={ref}
      className={cn(
        "z-10 flex items-center justify-center rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 group",
        className
      )}
      style={{ backgroundColor: tool.bg }}
      whileHover={{ scale: 1.15, boxShadow: `0 0 30px ${isWhiteBg ? 'rgba(255,255,255,0.6)' : tool.bg}` }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={tool.img}
        alt={tool.name}
        className={cn(
          "w-full h-full",
          isWhiteBg ? "object-contain p-2" : "object-cover"
        )}
      />
    </motion.div>
  );
});

ToolIcon.displayName = "ToolIcon";

export function ToolsBeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Design tools refs (left side)
  const design1Ref = useRef<HTMLDivElement>(null);
  const design2Ref = useRef<HTMLDivElement>(null);
  const design3Ref = useRef<HTMLDivElement>(null);
  const design4Ref = useRef<HTMLDivElement>(null);
  const design5Ref = useRef<HTMLDivElement>(null);
  const design6Ref = useRef<HTMLDivElement>(null);
  const design7Ref = useRef<HTMLDivElement>(null);

  // Programming tools refs (right side)
  const prog1Ref = useRef<HTMLDivElement>(null);
  const prog2Ref = useRef<HTMLDivElement>(null);
  const prog3Ref = useRef<HTMLDivElement>(null);
  const prog4Ref = useRef<HTMLDivElement>(null);
  const prog5Ref = useRef<HTMLDivElement>(null);
  const prog6Ref = useRef<HTMLDivElement>(null);
  const prog7Ref = useRef<HTMLDivElement>(null);

  const designRefs = [design1Ref, design2Ref, design3Ref, design4Ref, design5Ref, design6Ref, design7Ref];
  const progRefs = [prog1Ref, prog2Ref, prog3Ref, prog4Ref, prog5Ref, prog6Ref, prog7Ref];

  return (
    <div
      className="relative flex w-full max-w-6xl mx-auto items-center justify-center overflow-hidden py-10"
      ref={containerRef}
    >
      {/* Left Column - Design Tools */}
      <div className="flex flex-col gap-4 items-center">
        <motion.h3 
          className="text-lg md:text-xl font-akzidenz-bold text-white/80 mb-4 tracking-wide text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          DESAIN GRAFIS
        </motion.h3>
        <div className="flex flex-col gap-3">
          {designTools.map((tool, index) => (
            <ToolIcon
              key={tool.name}
              ref={designRefs[index]}
              tool={tool}
              className="w-12 h-12 md:w-14 md:h-14"
            />
          ))}
        </div>
      </div>

      {/* Center - DANN Logo */}
      <div className="flex flex-col items-center justify-center mx-8 md:mx-16 lg:mx-24">
        <Circle
          ref={centerRef}
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 p-4"
        >
          <img src={LogoDann} alt="DANN Logo" className="w-full h-full object-contain" />
        </Circle>
      </div>

      {/* Right Column - Programming Tools */}
      <div className="flex flex-col gap-4 items-center">
        <motion.h3 
          className="text-lg md:text-xl font-akzidenz-bold text-white/80 mb-4 tracking-wide text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          PROGRAMMING
        </motion.h3>
        <div className="flex flex-col gap-3">
          {programmingTools.map((tool, index) => (
            <ToolIcon
              key={tool.name}
              ref={progRefs[index]}
              tool={tool}
              className="w-12 h-12 md:w-14 md:h-14"
            />
          ))}
        </div>
      </div>

      {/* Animated Beams - Design Tools to Center */}
      {designRefs.map((ref, index) => (
        <AnimatedBeam
          key={`design-beam-${index}`}
          containerRef={containerRef}
          fromRef={ref}
          toRef={centerRef}
          curvature={-30 + index * 10}
          duration={4 + index * 0.3}
          delay={index * 0.2}
          gradientStartColor="#FF3B30"
          gradientStopColor="#ccff00"
          pathColor="rgba(255,255,255,0.1)"
        />
      ))}

      {/* Animated Beams - Center to Programming Tools */}
      {progRefs.map((ref, index) => (
        <AnimatedBeam
          key={`prog-beam-${index}`}
          containerRef={containerRef}
          fromRef={centerRef}
          toRef={ref}
          curvature={-30 + index * 10}
          duration={4 + index * 0.3}
          delay={index * 0.2}
          gradientStartColor="#ccff00"
          gradientStopColor="#38bdf8"
          pathColor="rgba(255,255,255,0.1)"
          reverse
        />
      ))}
    </div>
  );
}
