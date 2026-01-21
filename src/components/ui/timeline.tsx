"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { 
    margin: "-40% 0px -40% 0px",
    once: false 
  });

  return (
    <motion.div
      ref={itemRef}
      key={index}
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
        filter: isInView ? "blur(0px)" : "blur(4px)",
        opacity: isInView ? 1 : 0.4,
        scale: isInView ? 1 : 0.98,
      }}
      style={{
        transition: "filter 0.4s ease-out, opacity 0.4s ease-out, scale 0.4s ease-out"
      }}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[hsl(0,0%,8%)] flex items-center justify-center">
          <motion.div 
            className="h-4 w-4 rounded-full border-2"
            animate={{
              backgroundColor: isInView ? "#FF3B30" : "transparent",
              borderColor: isInView ? "#FF3B30" : "rgba(255,255,255,0.2)",
              boxShadow: isInView ? "0 0 12px rgba(255,59,48,0.6)" : "none"
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <motion.h3 
          className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold"
          animate={{
            color: isInView ? "#FF3B30" : "rgba(255,255,255,0.6)"
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
            color: isInView ? "#FF3B30" : "rgba(255,255,255,0.6)"
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

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-white/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
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
