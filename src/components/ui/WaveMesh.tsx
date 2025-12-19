import { useEffect, useRef } from 'react';

/**
 * Animated wave mesh background component
 * Creates a flowing wave pattern similar to the reference design
 */
export function WaveMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const rows = 40;
      const cols = 80;
      const cellWidth = canvas.width / cols;
      const cellHeight = canvas.height / rows;
      
      // Draw horizontal lines with wave effect
      for (let i = 0; i <= rows; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 150, 255, ${0.03 + (i / rows) * 0.12})`;
        ctx.lineWidth = 0.5 + (i / rows) * 0.5;
        
        for (let j = 0; j <= cols; j++) {
          const x = j * cellWidth;
          const baseY = i * cellHeight;
          
          // Wave calculation with multiple frequencies
          const wave1 = Math.sin((j / cols) * Math.PI * 2 + time * 0.5 + i * 0.1) * 20;
          const wave2 = Math.sin((j / cols) * Math.PI * 4 + time * 0.3 - i * 0.05) * 10;
          const wave3 = Math.cos((j / cols) * Math.PI * 1.5 + time * 0.2) * 15;
          
          // Vertical offset increases towards bottom
          const verticalFactor = Math.pow(i / rows, 1.5);
          const y = baseY + (wave1 + wave2 + wave3) * verticalFactor;
          
          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      // Draw vertical lines with subtle wave
      for (let j = 0; j <= cols; j++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(100, 150, 255, ${0.02 + Math.abs(j - cols/2) / cols * 0.06})`;
        ctx.lineWidth = 0.3;
        
        for (let i = 0; i <= rows; i++) {
          const baseX = j * cellWidth;
          const baseY = i * cellHeight;
          
          const wave1 = Math.sin((j / cols) * Math.PI * 2 + time * 0.5 + i * 0.1) * 20;
          const wave2 = Math.sin((j / cols) * Math.PI * 4 + time * 0.3 - i * 0.05) * 10;
          const wave3 = Math.cos((j / cols) * Math.PI * 1.5 + time * 0.2) * 15;
          
          const verticalFactor = Math.pow(i / rows, 1.5);
          const x = baseX + (wave2 * 0.3) * verticalFactor;
          const y = baseY + (wave1 + wave2 + wave3) * verticalFactor;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }
      
      // Add glowing points at intersections (sparse)
      for (let i = 0; i <= rows; i += 4) {
        for (let j = 0; j <= cols; j += 4) {
          const baseX = j * cellWidth;
          const baseY = i * cellHeight;
          
          const wave1 = Math.sin((j / cols) * Math.PI * 2 + time * 0.5 + i * 0.1) * 20;
          const wave2 = Math.sin((j / cols) * Math.PI * 4 + time * 0.3 - i * 0.05) * 10;
          const wave3 = Math.cos((j / cols) * Math.PI * 1.5 + time * 0.2) * 15;
          
          const verticalFactor = Math.pow(i / rows, 1.5);
          const x = baseX + (wave2 * 0.3) * verticalFactor;
          const y = baseY + (wave1 + wave2 + wave3) * verticalFactor;
          
          const brightness = 0.2 + Math.sin(time + i * 0.2 + j * 0.1) * 0.15;
          
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(150, 180, 255, ${brightness * verticalFactor})`;
          ctx.fill();
        }
      }

      time += 0.015;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}
