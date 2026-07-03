'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillItem {
  name: string;
  percentage: number;
  experience: string;
  color: string;
  logo: React.ReactNode;
}

const skillsData: Record<string, SkillItem[]> = {
  Frontend: [
    {
      name: 'React.js',
      percentage: 90,
      experience: '2+ Years',
      color: '#3B82F6',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#3B82F6]" strokeWidth="2">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30, 12, 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90, 12, 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150, 12, 12)" />
        </svg>
      ),
    },
    {
      name: 'Next.js',
      percentage: 85,
      experience: '1+ Years',
      color: '#0F0F10',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#0F0F10]">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 18h-2v-12h2v12zm8 0h-2l-4-6v6h-2v-12h2l4 6v-6h2v12z" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      percentage: 80,
      experience: '2+ Years',
      color: '#3178C6',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#3178C6]">
          <path d="M0 0h24v24H0V0zm21.6 19.2V4.8H2.4v14.4h19.2zM10.8 7.2v2.4H8.4V7.2H6v4.8h4.8v-2.4H8.4V9.6h2.4zm8.4 0v4.8h-4.8V7.2h2.4v2.4h2.4V7.2z" />
        </svg>
      ),
    },
    {
      name: 'HTML5',
      percentage: 95,
      experience: '3+ Years',
      color: '#E34F26',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#E34F26]">
          <path d="M1.5 0h21l-1.9 21.2-8.6 2.8-8.6-2.8zM18 6h-12l.4 4.5h11.2zm-.8 9.2l-.1.8-5.1 1.7-5.1-1.7-.3-3.5h3.6l.2 1.8 1.6.5 1.6-.5.2-2.3h-7.3l-.3-3.6h11z" />
        </svg>
      ),
    },
    {
      name: 'CSS3',
      percentage: 92,
      experience: '3+ Years',
      color: '#1572B6',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#1572B6]">
          <path d="M1.5 0h21l-1.9 21.2-8.6 2.8-8.6-2.8zM18.4 4.5h-12.8l.3 3.6h9.1l-.3 3.6h-8.8l.3 3.6h5.2l-.3 3.3-3 .9-3-.9-.2-2.3h-3.6l.4 5.2 6.4 2.1 6.4-2.1z" />
        </svg>
      ),
    },
  ],
  Backend: [
    {
      name: 'Java',
      percentage: 90,
      experience: '2+ Years',
      color: '#007396',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#007396]">
          <path d="M18.8 16.2c.4-1.2.6-2.4.6-3.6 0-3.6-2.4-5.4-4.8-5.4-1.2 0-2.4.3-3.6.9v3.6c.9-.3 1.8-.5 2.7-.5 1.5 0 2.4.9 2.4 2.1 0 1.2-.6 2.1-1.2 3-.3.3-.6.6-1 1l-.6.6h5.5zm-8.2 1.2v-7.2h-2.4v7.2h2.4zm5.4-12.6h-2.4V2.4h2.4v2.4zm-7.8 0H5.8V2.4h2.4v2.4z" />
        </svg>
      ),
    },
    {
      name: 'Spring Boot',
      percentage: 85,
      experience: '2+ Years',
      color: '#6DB33F',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#6DB33F]">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14.5c0 1.9-1.6 3.5-3.5 3.5s-3.5-1.6-3.5-3.5v-5h2v5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-5h2v5z" />
        </svg>
      ),
    },
    {
      name: 'Node.js',
      percentage: 82,
      experience: '2+ Years',
      color: '#339933',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#339933]">
          <path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-3.6 17.4h-2.4v-8.4h2.4v8.4zm5.4 0h-2.4v-4.2c0-1 .3-1.8 1.2-1.8s1.2.8 1.2 1.8v4.2z" />
        </svg>
      ),
    },
    {
      name: 'REST APIs',
      percentage: 88,
      experience: '2+ Years',
      color: '#00A86B',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#00A86B]" strokeWidth="2">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <path d="M6 12h12M12 8v8" />
        </svg>
      ),
    },
  ],
  AI: [
    {
      name: 'Machine Learning',
      percentage: 82,
      experience: '2+ Years',
      color: '#E11D48',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#E11D48]">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.25z" />
        </svg>
      ),
    },
    {
      name: 'Pandas',
      percentage: 80,
      experience: '2+ Years',
      color: '#150458',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#150458]">
          <path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm-4.2 16.8c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm8.4 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
        </svg>
      ),
    },
    {
      name: 'TensorFlow',
      percentage: 75,
      experience: '1+ Years',
      color: '#FF6F00',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#FF6F00]">
          <path d="M12 0L1.5 6v12L12 24l10.5-6V6zm0 4.2l7.5 4.3v7l-7.5 4.3-7.5-4.3v-7z" />
        </svg>
      ),
    },
  ],
  Database: [
    {
      name: 'MySQL',
      percentage: 85,
      experience: '2+ Years',
      color: '#4479A1',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#4479A1]">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm4.8 15h-9.6v-1.2h9.6v1.2zm0-2.4h-9.6v-1.2h9.6v1.2zm0-2.4h-9.6V9h9.6v1.2z" />
        </svg>
      ),
    },
    {
      name: 'MongoDB',
      percentage: 80,
      experience: '2+ Years',
      color: '#47A248',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#47A248]">
          <path d="M12 0c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm1.8 15.6h-3.6v-7.2h3.6v7.2z" />
        </svg>
      ),
    },
  ],
  Tools: [
    {
      name: 'Git & GitHub',
      percentage: 90,
      experience: '3+ Years',
      color: '#F05032',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#F05032]">
          <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.4-.1s-1.3.4-1.7.8L.9 10.1C.1 10.9.1 12.2.9 13l10.2 10.2c.4.4 1.1.7 1.7.7s1.3-.3 1.7-.7l8.8-8.8c.8-.8.8-2 .1-2.9v-.1zm-11.2 8.7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm3-3c0-.6-.5-1-1-1v-2.3c.9-.4 1.5-1.3 1.5-2.3 0-1.4-1.1-2.5-2.5-2.5S10.6 9 10.6 10.4c0 1 .6 1.9 1.5 2.3v2.3c-.5 0-1 .4-1 1 0 .6.4 1 1 1h2.5c.5-.1 1-.5 1-1.1z" />
        </svg>
      ),
    },
    {
      name: 'Docker',
      percentage: 75,
      experience: '1+ Years',
      color: '#2496ED',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#2496ED]">
          <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.774c0-.102-.084-.185-.186-.185h-2.119c-.103 0-.186.083-.186.185v2.119c0 .102.083.185.186.185zM20.67 8.59c-.496-3.593-3.626-6.19-7.535-6.19-4.238 0-7.618 3.018-7.915 6.953-2.11.393-3.72 2.224-3.72 4.447 0 2.496 2.03 4.52 4.52 4.52h14.5c2.49 0 4.52-2.024 4.52-4.52 0-2.355-1.815-4.286-4.37-4.48-1.073-2.9-2.357-4.55-4.5-5.73z" />
        </svg>
      ),
    },
    {
      name: 'Postman',
      percentage: 85,
      experience: '2+ Years',
      color: '#FF6C37',
      logo: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#FF6C37]">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm5.4 15.6l-5.4-3.6V5.4h1.2v5.4l4.8 3-3 1.8zm-5.4-3.6v4.8h-1.2V7.8h5.4v1.2H12v3z" />
        </svg>
      ),
    },
  ],
};

const categories = Object.keys(skillsData);

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.94, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 280,
        damping: 22,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #ecfdf5 0%, #f0f9ff 40%, #faf5ff 100%)' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-blob-strong absolute -top-[15%] -left-[5%] w-[48vw] h-[48vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #6ee7b7, #10b981)', animationDelay: '0s' }} />
        <div className="section-blob absolute -bottom-[10%] right-[-5%] w-[42vw] h-[42vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #c4b5fd, #8b5cf6)', animationDelay: '5s' }} />
        <div className="section-blob absolute top-[30%] left-[40%] w-[25vw] h-[25vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #a5f3fc, #06b6d4)', animationDelay: '9s' }} />
        <div className="section-blob absolute top-[10%] right-[30%] w-[18vw] h-[18vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #fbcfe8, #ec4899)', animationDelay: '3s' }} />
        {/* Orbit rings */}
        <div className="absolute top-[20%] right-[12%] w-[200px] h-[200px] rounded-full border border-[#10b981]/15 spin-slow" style={{ animationDuration: '25s' }} />
        <div className="absolute bottom-[20%] left-[12%] w-[160px] h-[160px] rounded-full border border-dashed border-[#8b5cf6]/20 spin-reverse" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(rgba(16,185,129,1) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      {/* Floating 3D tech icons */}
      <div className="absolute top-[12%] right-[8%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-slow z-20">⚛️</div>
      <div className="absolute bottom-[18%] left-[8%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-medium z-20" style={{ animationDelay: '1.5s' }}>🐍</div>
      <div className="absolute top-[55%] right-[5%] w-11 h-11 glass-card-premium rounded-xl  border border-white/60 shadow-lg  flex items-center justify-center text-xl  float-alt    z-20" style={{ animationDuration: '6s' }}>⚙️</div>
      <div className="absolute top-[70%] left-[5%] w-10 h-10 glass-card-premium rounded-xl  border border-white/60 shadow-md  flex items-center justify-center text-lg  float-3d-slow z-20" style={{ animationDelay: '2s' }}>⚡</div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#10B981] font-mono mb-4 block">
            [ 03 / STACK ]
          </span>
          <h2
            className="text-4xl md:text-5xl font-black leading-none tracking-tighter"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #10b981, #06b6d4, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Skills &amp; Technologies
          </h2>
        </div>

        {/* Categories Tabs & Cards View split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left Side: Vertical category tabs */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 pr-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-full lg:rounded-2xl text-sm font-black tracking-tight text-left cursor-pointer transition-all duration-300 whitespace-nowrap lg:w-full border ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-highlight to-[#8B5CF6] text-white shadow-md border-0'
                    : 'bg-white/40 hover:bg-white border-white/50 text-text-secondary hover:text-text-primary'
                }`}
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Right Side: Skill Cards display with Circular Progress Rings */}
          <div className="lg:col-span-9 w-full min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
              >
                {skillsData[activeCategory].map((skill) => {
                  const radius = 28;
                  const circumference = 2 * Math.PI * radius;
                  const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

                  return (
                    <motion.div
                      key={skill.name}
                      variants={cardVariants}
                      whileHover={{ y: -6, rotate: 1.5 }}
                      className="glass-card rounded-[28px] p-6 border border-white/60 shadow-md flex items-center justify-between gap-6 hover:shadow-xl transition-shadow relative overflow-hidden"
                    >
                      {/* Interactive hover bg wash */}
                      <div 
                        className="absolute inset-0 opacity-0 hover:opacity-[0.015] transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: skill.color }}
                      />

                      {/* Info & Icon */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white border border-text-primary/5 shadow-sm flex items-center justify-center flex-shrink-0">
                          {skill.logo}
                        </div>
                        <div>
                          <h3
                            className="font-black text-base text-text-primary tracking-tight"
                            style={{ fontFamily: 'var(--font-heading)' }}
                          >
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-bold text-text-muted font-mono uppercase">
                            {skill.experience}
                          </span>
                        </div>
                      </div>

                      {/* SVG Circular Progress Ring */}
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <svg className="w-16 h-16 transform -rotate-90">
                          {/* Track */}
                          <circle
                            cx="32"
                            cy="32"
                            r={radius}
                            stroke="rgba(0, 0, 0, 0.04)"
                            strokeWidth="3.5"
                            fill="transparent"
                          />
                          {/* Progress */}
                          <motion.circle
                            cx="32"
                            cy="32"
                            r={radius}
                            stroke={skill.color}
                            strokeWidth="3.5"
                            fill="transparent"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset }}
                            transition={{ duration: 1.2, ease: 'easeOut' }}
                          />
                        </svg>
                        <div
                          className="absolute inset-0 flex items-center justify-center text-[10px] font-black font-mono text-text-primary"
                        >
                          {skill.percentage}%
                        </div>
                      </div>

                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
