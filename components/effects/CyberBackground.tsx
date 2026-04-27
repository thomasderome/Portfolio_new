'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CyberBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Particles (Data bits)
        const particles: { x: number; y: number; size: number; speed: number; opacity: number }[] =
            [];
        const particleCount = 60;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.5,
                speed: Math.random() * 0.3 + 0.05,
                opacity: Math.random() * 0.4,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = '#3f0';
            particles.forEach((p) => {
                ctx.globalAlpha = p.opacity;
                ctx.fillRect(p.x, p.y, p.size, p.size);

                p.y -= p.speed;
                if (p.y < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }

                if (Math.random() > 0.99) {
                    p.opacity = Math.random() * 0.4;
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-20 h-screen w-screen overflow-hidden bg-[#020602]">
            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.1]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #3f0 1px, transparent 1px),
                        linear-gradient(to bottom, #3f0 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Subtle Horizontal Scanlines */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                    backgroundSize: '100% 4px, 3px 100%',
                }}
            />

            {/* Radial Gradient for depth */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'radial-gradient(circle at center, transparent 0%, rgba(0, 5, 0, 0.6) 70%, rgba(0, 0, 0, 0.9) 100%)',
                }}
            />

            {/* Mouse Follow Glow - Fixed Alignment */}
            <motion.div
                className="pointer-events-none absolute h-[1000px] w-[1000px] opacity-[0.2]"
                style={{
                    left: dx,
                    top: dy,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'radial-gradient(circle at center, #3f0 0%, transparent 60%)',
                }}
            />

            {/* Moving Scanline */}
            <motion.div
                className="absolute right-0 left-0 h-[100px] bg-gradient-to-b from-transparent via-[#3f0] to-transparent opacity-[0.03]"
                animate={{
                    top: ['-20%', '120%'],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Canvas for particles */}
            <canvas ref={canvasRef} className="pointer-events-none absolute inset-0" />
        </div>
    );
}
