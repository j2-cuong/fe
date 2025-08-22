import { useEffect, useRef } from "react";

export const SandEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Đặt kích thước canvas bằng với container
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Tạo các hạt cát
    const particles: Particle[] = [];
    const particleCount = 100;

    class Particle {
      x: number;
      y: number;
      speed: number;
      size: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * (canvas?.width ?? 0);
        this.y = Math.random() * (canvas?.height ?? 0);
        this.speed = 0.1 + Math.random() * 0.5;
        this.size = 1 + Math.random() * 2;
        this.opacity = 0.1 + Math.random() * 0.3;
      }

      update() {
        this.x += this.speed;
        this.y += this.speed * 0.2;

        if (canvas && this.x > canvas.width) {
          this.x = 0;
        }
        if (canvas && this.y > canvas.height) {
          this.y = 0;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 248, 220, ${this.opacity})`;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Khởi tạo các hạt
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-5 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
