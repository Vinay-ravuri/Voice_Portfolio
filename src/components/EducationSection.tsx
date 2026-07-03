'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  cgpa: string;
  color: string;
  glowColor: string;
  icon: React.ReactNode;
}

const educationList: EducationItem[] = [
  {
    id: 'giet',
    institution: 'GIET Engineering College, Rajahmundry',
    degree: 'B.Tech — Computer Science & Engineering (AI & ML)',
    duration: '2023 — Present',
    cgpa: '8.75',
    color: '#E11D48',
    glowColor: 'rgba(225,29,72,0.25)',
    icon: <GraduationCap className="w-6 h-6 text-white" />,
  },
  {
    id: 'chaitanya',
    institution: 'Sri Chaitanya Junior College',
    degree: 'Intermediate (MPC)',
    duration: '2021 — 2023',
    cgpa: '9.17',
    color: '#8B5CF6',
    glowColor: 'rgba(139,92,246,0.25)',
    icon: <BookOpen className="w-6 h-6 text-white" />,
  },
];

export default function EducationSection() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section
      id="education"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f0f9ff 40%, #ecfdf5 100%)' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky blue blob top-right */}
        <div className="section-blob-strong absolute -top-[15%] -right-[10%] w-[50vw] h-[50vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #7dd3fc, #3b82f6)', animationDelay: '0s' }} />
        {/* Cyan blob bottom-left */}
        <div className="section-blob absolute -bottom-[10%] -left-[5%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #6ee7b7, #10b981)', animationDelay: '5s' }} />
        {/* Lavender small mid */}
        <div className="section-blob absolute top-[30%] left-[35%] w-[25vw] h-[25vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #c4b5fd, #8b5cf6)', animationDelay: '9s' }} />

        {/* Glowing dashed orbit rings */}
        <div className="absolute top-[15%] left-[15%] w-[200px] h-[200px] rounded-full border-2 border-dashed border-[#3b82f6]/20 spin-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute bottom-[15%] right-[15%] w-[150px] h-[150px] rounded-full border border-[#10b981]/25 spin-reverse" style={{ animationDuration: '20s' }} />

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(rgba(59,130,246,1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Floating 3D assets */}
      <div className="absolute top-[12%] left-[8%]  w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-slow z-20">🎓</div>
      <div className="absolute bottom-[18%] right-[10%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-medium z-20" style={{ animationDelay: '1.5s' }}>📚</div>
      <div className="absolute top-[45%] right-[5%]  w-11 h-11 glass-card-premium rounded-xl border border-white/60 shadow-lg  flex items-center justify-center text-xl  float-alt    z-20" style={{ animationDuration: '7s' }}>📜</div>
      <div className="absolute top-[70%] left-[5%]  w-10 h-10 glass-card-premium rounded-xl border border-white/60 shadow-lg  flex items-center justify-center text-xl  float-3d-slow z-20" style={{ animationDelay: '2s' }}>✨</div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] font-mono mb-4 block">
            [ 02 / ACADEMICS ]
          </span>
          <h2
            className="text-4xl md:text-5xl font-black leading-none tracking-tighter"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #1d4ed8, #0ea5e9, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Education
          </h2>
        </div>

        {/* Timeline row */}
        <div className="relative w-full flex flex-col md:flex-row gap-8 items-center justify-center py-6">
          {/* Glowing connecting line */}
          <div className="hidden md:block absolute left-[5%] right-[5%] top-[50%] -translate-y-[50%] h-[2px] z-0 overflow-hidden">
            <div className="w-full h-full" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #10b981)' }} />
            <div className="absolute inset-0 light-streak" style={{ animationDuration: '3s' }} />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full relative z-10"
          >
            {educationList.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: idx === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-premium rounded-[28px] p-6 md:p-8 border border-white/70 shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 relative overflow-hidden animated-border hover-glow card-tilt"
                style={{ boxShadow: `0 20px 60px -20px ${edu.glowColor}` }}
              >
                {/* Shimmer sweep on hover via CSS */}
                <div className="absolute inset-0 shimmer-sweep opacity-0 hover:opacity-100 transition-opacity rounded-[28px] pointer-events-none" />
                {/* Inner glow */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-20" style={{ background: edu.color }} />

                <div className="flex items-center gap-5">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${edu.color}, ${edu.color}cc)` }}
                  >
                    {edu.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-black text-lg md:text-xl text-text-primary tracking-tight leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-bold text-text-secondary leading-snug mt-1">{edu.degree}</p>
                    <span className="inline-block text-[11px] font-bold text-white mt-2 font-mono uppercase px-2.5 py-0.5 rounded" style={{ background: edu.color }}>
                      {edu.duration}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono mb-1">CGPA</span>
                  <span className="text-3xl font-black tracking-tight text-glow-animate" style={{ color: edu.color }}>
                    {edu.cgpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
