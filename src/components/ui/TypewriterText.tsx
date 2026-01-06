import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const TypewriterText = ({
  text,
  className = "",
  delay = 0,
  speed = 0.05,
}: TypewriterTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isInView && !isStarted) {
      const timeout = setTimeout(() => {
        setIsStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay, isStarted]);

  useEffect(() => {
    if (isStarted && !isFinished) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsFinished(true);
          clearInterval(interval);
        }
      }, speed * 1000);
      return () => clearInterval(interval);
    }
  }, [isStarted, isFinished, text, speed]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {displayedText}
      {isStarted && !isFinished && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block ml-1 w-[0.15em] h-[0.8em] bg-current align-baseline mb-[-0.05em]"
        />
      )}
    </span>
  );
};
