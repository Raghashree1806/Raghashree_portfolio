import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseSize: number;
  brightness: number;
  pulseSpeed: number;
  vx: number;
  vy: number;
}

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -1000,
    y: -1000,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let stars: Star[] = [];
    const starCount = Math.floor(Math.min(width * 0.09, 130));

    function initStars() {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        const base = Math.random() * 1.5 + 0.6;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: base,
          baseSize: base,
          brightness: Math.random() * 0.7 + 0.3,
          pulseSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.09,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.09,
        });
      }
    }

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const hoverRadius = 140;

      // Draw interactive constellation connection lines to cursor
      if (mouse.active && !prefersReducedMotion) {
        for (let i = 0; i < stars.length; i++) {
          const star = stars[i];
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < hoverRadius) {
            const alpha = (1 - dist / hoverRadius) * 0.25;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw faint celestial constellation lines between stars
      if (!prefersReducedMotion) {
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.04)';
        ctx.lineWidth = 0.6;
        for (let i = 0; i < stars.length; i += 3) {
          for (let j = i + 1; j < stars.length; j += 4) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 110) {
              ctx.beginPath();
              ctx.moveTo(stars[i].x, stars[i].y);
              ctx.lineTo(stars[j].x, stars[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw and update stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.x += star.vx;
          star.y += star.vy;

          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;

          star.brightness += star.pulseSpeed;
          if (star.brightness > 0.95 || star.brightness < 0.25) {
            star.pulseSpeed = -star.pulseSpeed;
          }
        }

        // Check proximity to cursor: stars get bigger and brighter as cursor approaches
        let currentSize = star.baseSize;
        let currentBrightness = star.brightness;

        if (mouse.active) {
          const dx = star.x - mouse.x;
          const dy = star.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < hoverRadius) {
            const factor = 1 - dist / hoverRadius;
            // Stars magnify significantly near the cursor (up to 3.5x size)
            currentSize = star.baseSize * (1 + factor * 2.2);
            currentBrightness = Math.min(1, star.brightness + factor * 0.5);

            // Subtle glowing halo for enlarged star
            ctx.fillStyle = `rgba(56, 189, 248, ${factor * 0.4})`;
            ctx.beginPath();
            ctx.arc(star.x, star.y, currentSize * 2.8, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Draw star core
        ctx.fillStyle = `rgba(241, 245, 249, ${currentBrightness})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, currentSize, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-75"
    />
  );
}
