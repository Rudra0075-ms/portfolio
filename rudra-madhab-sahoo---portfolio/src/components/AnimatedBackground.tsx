import React, { useEffect, useRef, useState } from 'react';

export const AnimatedBackground: React.FC = () => {
  const mouseGlowRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const animFrameId = useRef<number | null>(null);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    // Only enable mouse-tracking glow if user has a fine pointing device (desktop mouse)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setCanHover(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      // Smooth lerp towards mouse position
      const ease = 0.08;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.transform = `translate3d(${currentPos.current.x - 300}px, ${currentPos.current.y - 300}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleMediaChange);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* Dynamic Ambient Gradient Blobs */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-indigo-600/10 dark:bg-indigo-500/10 blur-[130px] animate-ambient-1" />
      <div className="absolute top-[35%] right-[-5%] w-[600px] h-[600px] rounded-full bg-violet-600/8 dark:bg-violet-500/10 blur-[140px] animate-ambient-2" />
      <div className="absolute bottom-[10%] left-[5%] w-[550px] h-[550px] rounded-full bg-emerald-600/6 dark:bg-emerald-500/6 blur-[130px] animate-ambient-3" />

      {/* Global Interactive Mouse Spotlight (Desktop only) */}
      {canHover && (
        <div
          ref={mouseGlowRef}
          style={{ willChange: 'transform' }}
          className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-radial from-indigo-500/8 via-violet-500/4 to-transparent dark:from-indigo-400/8 dark:via-violet-400/4 dark:to-transparent blur-3xl opacity-70 transition-opacity duration-300"
        />
      )}

      {/* High-definition Geometric Grid with Radial Vignette */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-40 dark:opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]" />
    </div>
  );
};
