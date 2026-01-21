"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const TimelineItem = ({ 
  item, 
  index, 
  isActive,
  onDotClick
}: { 
  item: TimelineEntry; 
  index: number;
  isActive: boolean;
  onDotClick: () => void;
}) => {
  return (
    <motion.div
      className="flex justify-start pt-10 md:pt-40 md:gap-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      animate={{
        filter: isActive ? "blur(0px)" : "blur(3px)",
        opacity: isActive ? 1 : 0.3,
        scale: isActive ? 1 : 0.97,
      }}
      style={{
        transition: "filter 0.5s ease-out, opacity 0.5s ease-out, transform 0.5s ease-out"
      }}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <button 
          onClick={onDotClick}
          className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[hsl(0,0%,8%)] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
          aria-label={`Scroll to ${item.title}`}
        >
          <motion.div 
            className="h-4 w-4 rounded-full border-2"
            animate={{
              backgroundColor: isActive ? "#FF3B30" : "transparent",
              borderColor: isActive ? "#FF3B30" : "rgba(255,255,255,0.2)",
              boxShadow: isActive ? "0 0 12px rgba(255,59,48,0.6)" : "none"
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
        <motion.h3 
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
          animate={{
            color: isActive ? "#FF3B30" : "rgba(255,255,255,0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          {item.title}
        </motion.h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <motion.h3 
          className="md:hidden block text-2xl mb-4 text-left font-bold"
          animate={{
            color: isActive ? "#FF3B30" : "rgba(255,255,255,0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          {item.title}
        </motion.h3>
        {item.content}
      </div>
    </motion.div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  // Track which item is closest to center of viewport
  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      itemRefs.current.forEach((itemRef, index) => {
        if (itemRef) {
          const rect = itemRef.getBoundingClientRect();
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - viewportCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const scrollToItem = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10 relative"
      ref={containerRef}
    >
      {/* Mini Navigation Sidebar */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-1 bg-black/40 backdrop-blur-md rounded-full py-3 px-2 border border-white/10">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToItem(index)}
            className="group relative flex items-center justify-center"
            aria-label={`Navigate to ${item.title}`}
          >
            {/* Year label on hover */}
            <span className="absolute right-full mr-3 px-2 py-1 text-xs font-medium bg-black/80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {item.title}
            </span>
            
            {/* Dot indicator */}
            <motion.div
              className="w-2.5 h-2.5 rounded-full transition-all duration-300"
              animate={{
                backgroundColor: activeIndex === index ? "#FF3B30" : "rgba(255,255,255,0.3)",
                scale: activeIndex === index ? 1.3 : 1,
                boxShadow: activeIndex === index ? "0 0 8px rgba(255,59,48,0.6)" : "none"
              }}
              whileHover={{ scale: 1.5, backgroundColor: "#FF3B30" }}
            />
          </button>
        ))}
      </div>

      {/* Mobile Mini Navigation - Bottom fixed */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-2 bg-black/60 backdrop-blur-md rounded-full py-2 px-4 border border-white/10">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToItem(index)}
            className="flex flex-col items-center gap-1"
            aria-label={`Navigate to ${item.title}`}
          >
            <motion.div
              className="w-2 h-2 rounded-full transition-all duration-300"
              animate={{
                backgroundColor: activeIndex === index ? "#FF3B30" : "rgba(255,255,255,0.3)",
                scale: activeIndex === index ? 1.3 : 1,
              }}
            />
            <span 
              className={`text-[10px] font-medium transition-colors duration-300 ${
                activeIndex === index ? "text-[#FF3B30]" : "text-white/50"
              }`}
            >
              {item.title}
            </span>
          </button>
        ))}
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div 
            key={index} 
            ref={(el) => { itemRefs.current[index] = el; }}
          >
            <TimelineItem 
              item={item} 
              index={index} 
              isActive={activeIndex === index}
              onDotClick={() => scrollToItem(index)}
            />
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[31px] md:left-[31px] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#FF3B30] via-white to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
