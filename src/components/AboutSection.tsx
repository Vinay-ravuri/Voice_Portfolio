'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, CheckCircle } from 'lucide-react';

/* Tiny floating particle component */
const Particle = ({ size, x, y, delay, duration, color }: {
  size: number; x: number; y: number; delay: number; duration: number; color: string;
}) => (
  <div
    className="absolute rounded-full pointer-events-none particle-drift"
    style={{
      width: size, height: size,
      left: `${x}%`, top: `${y}%`,
      background: color,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    }}
  />
);

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const bullets = [
    { title: 'Problem Solver', desc: 'I love solving complex algorithms and puzzles.', color: '#C62839', icon: <Zap className="w-5 h-5 text-white" /> },
    { title: 'Quick Learner', desc: 'I adapt and master new tech stacks efficiently.', color: '#F59E0B', icon: <Code className="w-5 h-5 text-white" /> },
    { title: 'Team Player', desc: 'I enjoy collaborative efforts and design sprints.', color: '#3B82F6', icon: <Users className="w-5 h-5 text-white" /> },
    { title: 'Innovative', desc: 'I design creative architectures to resolve workflows.', color: '#10B981', icon: <CheckCircle className="w-5 h-5 text-white" /> },
  ];

  const particles = [
    { size: 6, x: 12, y: 20, delay: 0,   duration: 7,  color: 'rgba(139,92,246,0.5)' },
    { size: 4, x: 80, y: 15, delay: 1.5, duration: 9,  color: 'rgba(59,130,246,0.5)' },
    { size: 8, x: 55, y: 70, delay: 0.8, duration: 6,  color: 'rgba(236,72,153,0.4)' },
    { size: 5, x: 30, y: 85, delay: 2,   duration: 8,  color: 'rgba(16,185,129,0.5)' },
    { size: 3, x: 90, y: 60, delay: 0.3, duration: 10, color: 'rgba(245,158,11,0.5)' },
    { size: 7, x: 70, y: 40, delay: 1.2, duration: 7,  color: 'rgba(139,92,246,0.4)' },
    { size: 4, x: 8,  y: 60, delay: 2.5, duration: 9,  color: 'rgba(59,130,246,0.4)' },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #f0f7ff 50%, #fff0f8 100%)' }}
    >
      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large purple blob top-left */}
        <div className="section-blob-strong absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #a78bfa, #8b5cf6)', animationDelay: '0s' }} />
        {/* Blue blob bottom-right */}
        <div className="section-blob absolute bottom-[5%] right-[-5%] w-[45vw] h-[45vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #93c5fd, #3b82f6)', animationDelay: '6s' }} />
        {/* Pink blob center */}
        <div className="section-blob absolute top-[40%] left-[40%] w-[30vw] h-[30vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #f9a8d4, #ec4899)', animationDelay: '3s' }} />

        {/* Floating particles */}
        {particles.map((p, i) => <Particle key={i} {...p} />)}

        {/* Orbital ring */}
        <div className="absolute top-[10%] right-[12%] w-[180px] h-[180px] rounded-full border border-[#8b5cf6]/15 spin-slow" style={{ animationDuration: '25s' }} />
        <div className="absolute top-[10%] right-[12%] w-[140px] h-[140px] m-[20px] rounded-full border border-dashed border-[#3b82f6]/20 spin-reverse" style={{ animationDuration: '18s' }} />

        {/* Grid mesh */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* Floating 3D icon objects */}
      <div className="absolute top-[18%] right-[8%] w-14 h-14 rounded-2xl glass-card-premium flex items-center justify-center text-2xl float-3d-slow z-20 shadow-lg border border-white/60">💻</div>
      <div className="absolute bottom-[22%] right-[18%] w-12 h-12 rounded-xl glass-card-premium flex items-center justify-center text-xl float-3d-medium z-20 shadow-lg border border-white/60" style={{ animationDelay: '1s' }}>☕</div>
      <div className="absolute top-[55%] left-[6%] w-12 h-12 rounded-xl glass-card-premium flex items-center justify-center text-xl float-alt z-20 shadow-lg border border-white/60" style={{ animationDuration: '7s' }}>🖥️</div>
      <div className="absolute bottom-[12%] left-[22%] w-10 h-10 rounded-xl glass-card-premium flex items-center justify-center text-lg float-3d-slow z-20 border border-white/60" style={{ animationDelay: '2s' }}>⚡</div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Glass laptop + floating objects */}
          <motion.div variants={itemVariants} className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full aspect-[4/3] max-w-[460px] flex items-center justify-center">
              {/* Glow behind laptop */}
              <div className="absolute w-[80%] h-[80%] rounded-full blur-[80px] z-0 glow-pulse"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.25), rgba(59,130,246,0.15))', animationDuration: '5s' }} />

              {/* 3D Glass Laptop mock */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: -3 }}
                transition={{ type: 'spring' as const, stiffness: 300, damping: 25 }}
                className="relative w-[90%] aspect-[16/10] glass-card-premium border border-white/70 shadow-2xl rounded-2xl p-4 flex flex-col z-10 animated-border overflow-hidden"
              >
                {/* Shimmer sweep */}
                <div className="absolute inset-0 shimmer-sweep rounded-2xl opacity-50 pointer-events-none" />

                {/* Traffic lights */}
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                </div>
                {/* Code text */}
                <div className="flex-1 font-mono text-[10px] text-text-secondary leading-normal overflow-hidden select-none">
                  <p className="text-highlight font-bold mb-1">// Profile.json</p>
                  <p><span className="text-[#8B5CF6]">const</span> developer = &#123;</p>
                  <p className="pl-4">name: <span className="text-[#10B981]">&apos;Vinay&apos;</span>,</p>
                  <p className="pl-4">role: <span className="text-[#10B981]">&apos;AI/ML &amp; Full Stack Trainee&apos;</span>,</p>
                  <p className="pl-4">core: [<span className="text-[#3B82F6]">&apos;Python&apos;</span>, <span className="text-[#3B82F6]">&apos;Spring Boot&apos;</span>, <span className="text-[#3B82F6]">&apos;React&apos;</span>],</p>
                  <p className="pl-4">motto: <span className="text-[#10B981]">&apos;Build intelligent software&apos;</span></p>
                  <p>&#125;;</p>
                </div>
              </motion.div>

              {/* Laptop base */}
              <div className="absolute bottom-[2%] w-[94%] h-[8%] bg-white/60 border border-white/70 shadow-md rounded-lg z-20" />

              {/* Small floating badges */}
              <div className="absolute top-[8%] left-[2%] w-11 h-11 rounded-xl glass-card border border-[#3B82F6]/30 shadow-lg flex items-center justify-center float-3d-slow z-25 text-2xl hover:scale-110 transition-transform">💻</div>
              <div className="absolute bottom-[20%] right-[0%] w-11 h-11 rounded-xl glass-card border border-[#8B5CF6]/30 shadow-lg flex items-center justify-center float-3d-medium z-25 text-2xl hover:scale-110 transition-transform">⚙️</div>
              <div className="absolute top-[50%] left-[84%] w-9 h-9 rounded-xl glass-card border border-highlight/30 shadow-sm flex items-center justify-center float-alt z-25 text-xl" style={{ animationDuration: '6s' }}>💡</div>
              <div className="absolute bottom-[10%] left-[6%] w-10 h-10 rounded-xl glass-card border border-[#10B981]/30 shadow-sm flex items-center justify-center float-3d-medium z-25 text-xl">📊</div>
            </div>
          </motion.div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8B5CF6] font-mono mb-4 block">
                [ 01 / PROFILE ]
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-text-primary leading-none tracking-tighter mb-6 text-glow-animate"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Building The <span className="bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">Future</span>
              <br />With Code.
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base text-text-secondary leading-relaxed mb-6 font-medium">
              I am a passionate Full Stack Developer and AI/ML enthusiast who loves turning complex problems into simple, beautiful, and performant solutions. I design systems that create positive real-world impact.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8 relative select-none">
              <span className="font-serif italic text-3xl text-[#8B5CF6]/80 font-bold opacity-80 pl-2 block tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                Vinay
              </span>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#8B5CF6] to-transparent mt-1 ml-1" />
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {bullets.map((b) => (
                <motion.div
                  key={b.title}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="flex items-start gap-3 glass-card-premium rounded-2xl p-3 border border-white/60 animated-border hover-glow cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 icon-bounce" style={{ backgroundColor: b.color }}>
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-primary mb-0.5" style={{ fontFamily: 'var(--font-heading)' }}>{b.title}</h3>
                    <p className="text-xs text-text-muted leading-snug">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
