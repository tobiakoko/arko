import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Base dark background with subtle texture */}
      <div className="fixed inset-0 grain" style={{ backgroundColor: 'var(--color-primary)' }} />

      {/* Cinematic split-tone mesh gradient */}
      <div className="fixed inset-0 split-tone" style={{
        background: `
          radial-gradient(at 0% 0%, rgba(136, 212, 212, 0.08) 0px, transparent 50%),
          radial-gradient(at 100% 0%, rgba(255, 176, 136, 0.06) 0px, transparent 50%),
          radial-gradient(at 100% 100%, rgba(136, 212, 212, 0.06) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(255, 176, 136, 0.08) 0px, transparent 50%)
        `
      }} />

      {/* Subtle cursor follower with cinematic glow */}
      <motion.div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(136, 212, 212, 0.08) 0%, rgba(0, 217, 217, 0.04) 40%, transparent 70%)',
          filter: 'blur(60px)',
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 150 }}
      />

      {/* Ambient floating orbs with reduced saturation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              background: i % 3 === 0
                ? 'radial-gradient(circle, rgba(136, 212, 212, 0.04) 0%, transparent 70%)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(255, 176, 136, 0.03) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(0, 217, 217, 0.03) 0%, transparent 70%)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(80px)',
            }}
            animate={{
              y: [0, Math.random() * 150 - 75, 0],
              x: [0, Math.random() * 150 - 75, 0],
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Global vignette overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.4) 100%)'
      }} />

      {/* Light ray accent from top */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 255, 255, 0.03), transparent 60%)',
        opacity: 0.5,
      }} />
    </>
  );
}
