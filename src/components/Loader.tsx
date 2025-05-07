import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background || '#050505'};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  &.fade-out {
    animation: ${fadeOut} 1.2s ease forwards;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 1s ease, transform 1s ease;
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 3.5em;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary || '#00ccff'}, ${({ theme }) => theme.colors.secondary || '#ff00cc'});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Description = styled.p`
  font-size: 1.4em;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text || '#ccc'};
`;

type LoaderProps = {
  onComplete?: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle class
    class Particle {
      x: number;
      y: number;
      z: number;
      color: string;
      size: number;
      alpha: number;
      vx: number;
      vy: number;
      vz: number;
      constructor(x: number, y: number, z: number, color: string) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.color = color;
        this.size = Math.random() * 2 + 1;
        this.alpha = 1;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.vz = (Math.random() - 0.5) * 2;
      }
      project() {
        if (!canvas) return { x: 0, y: 0, scale: 1 };
        const perspective = 500;
        const scale = perspective / (perspective + this.z);
        return {
          x: this.x * scale + canvas.width / 2,
          y: this.y * scale + canvas.height / 2,
          scale: scale
        };
      }
      draw() {
        if (!ctx) return;
        const pos = this.project();
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, this.size * pos.scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;
        this.alpha -= 0.002;
        this.draw();
      }
    }

    // Dodecahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const vertices = [
      [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
      [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
      [0, phi, 1 / phi], [0, phi, -1 / phi], [0, -phi, 1 / phi], [0, -phi, -1 / phi],
      [1 / phi, 0, phi], [1 / phi, 0, -phi], [-1 / phi, 0, phi], [-1 / phi, 0, -phi],
      [phi, 1 / phi, 0], [phi, -1 / phi, 0], [-phi, 1 / phi, 0], [-phi, -1 / phi, 0]
    ].map(v => ({ x: v[0] * 100, y: v[1] * 100, z: v[2] * 100 }));

    let particles: Particle[] = [];
    const colors = [
      '0, 204, 255', // Cyan
      '255, 0, 204', // Magenta
      '0, 255, 136'  // Green
    ];

    // Create particles
    function createHoloParticles() {
      vertices.forEach(v => {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(v.x, v.y, v.z, color));
      });
    }

    // Rotate 3D
    function rotate3D(points: Particle[], angleX: number, angleY: number) {
      points.forEach(p => {
        const x = p.x * Math.cos(angleY) - p.z * Math.sin(angleY);
        const z = p.x * Math.sin(angleY) + p.z * Math.cos(angleY);
        p.x = x;
        p.z = z;
        const y = p.y * Math.cos(angleX) - p.z * Math.sin(angleX);
        p.z = p.y * Math.sin(angleX) + p.z * Math.cos(angleX);
        p.y = y;
      });
    }

    let angleX = 0;
    let angleY = 0;

    // Animation loop
    function animate() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotate3D(particles, 0.01, 0.015);

      particles.forEach((particle, index) => {
        particle.update();
        if (particle.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i].project();
          const p2 = particles[j].project();
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100 && ctx) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 204, 255, ${0.2 * particles[i].alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      if (particles.length > 0) {
        requestAnimationFrame(animate);
      } else {
        if (wrapperRef.current) wrapperRef.current.classList.add('fade-out');
        setTimeout(() => {
          if (wrapperRef.current) wrapperRef.current.style.display = 'none';
          if (contentRef.current) contentRef.current.classList.add('visible');
          if (onComplete) onComplete();
        }, 1200);
      }
    }

    createHoloParticles();
    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete]);

  return (
    <>
      <LoaderWrapper ref={wrapperRef}>
        <Canvas ref={canvasRef} />
      </LoaderWrapper>
      <Content ref={contentRef}>
        <Title>Creative Design Hub</Title>
        <Description>
          Step into a world of innovation and artistry. Explore my portfolio and let's craft something unforgettable together.
        </Description>
      </Content>
    </>
  );
};

export default Loader;