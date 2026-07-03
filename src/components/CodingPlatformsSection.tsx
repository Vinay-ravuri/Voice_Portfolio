'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Code2, ShieldAlert } from 'lucide-react';

interface PlatformItem {
  name: string;
  handle: string;
  url: string;
  stat: string;
  statLabel: string;
  color: string;
  gradient: string;
  icon: string;
}

const platforms: PlatformItem[] = [
  {
    name: 'GeeksforGeeks',
    handle: 'ravurivinay',
    url: 'https://www.geeksforgeeks.org/user/ravurivinay08/',
    stat: 'Active Profile',
    statLabel: 'Practice & Articles',
    color: '#2F8D46',
    gradient: 'linear-gradient(135deg, #2F8D46 0%, #1E5E2F 100%)',
    icon: '🔷',
  },
  {
    name: 'HackerRank',
    handle: 'ravurivinay',
    url: 'https://www.hackerrank.com/profile/ravurivinay08',
    stat: '5★ Java Gold',
    statLabel: 'Problem Solver',
    color: '#00EA64',
    gradient: 'linear-gradient(135deg, #00EA64 0%, #00B54D 100%)',
    icon: '🏆',
  },
  {
    name: 'CodeChef',
    handle: 'ravurivinay',
    url: 'https://www.codechef.com/users/ravurivinay',
    stat: '2★ Rating',
    statLabel: 'Active Contestant',
    color: '#5B4638',
    gradient: 'linear-gradient(135deg, #5B4638 0%, #3D2E25 100%)',
    icon: '🍳',
  },
];

export default function CodingPlatformsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 24 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 280,
        damping: 24,
      },
    },
  };

  return (
    <section
      id="coding"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #eef2ff 50%, #f5f3ff 100%)' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-blob-strong absolute -top-[15%] -right-[10%] w-[50vw] h-[50vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #93c5fd, #3b82f6)', animationDelay: '0s' }} />
        <div className="section-blob absolute -bottom-[10%] -left-[5%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #c4b5fd, #8b5cf6)', animationDelay: '5s' }} />
        <div className="section-blob absolute top-[35%] left-[40%] w-[22vw] h-[22vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #a5f3fc, #06b6d4)', animationDelay: '9s' }} />
        {/* Large orbit rings */}
        <div className="absolute top-[20%] right-[20%] w-[220px] h-[220px] rounded-full border border-[#3b82f6]/15 spin-slow" style={{ animationDuration: '28s' }} />
        <div className="absolute top-[20%] right-[20%] w-[160px] h-[160px] m-[30px] rounded-full border border-dashed border-[#8b5cf6]/20 spin-reverse" style={{ animationDuration: '20s' }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(rgba(59,130,246,1) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* Floating 3D assets */}
      <div className="absolute top-[12%] left-[8%]  w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-slow z-20">🎯</div>
      <div className="absolute bottom-[15%] right-[8%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-medium z-20" style={{ animationDelay: '1.2s' }}>📊</div>
      <div className="absolute top-[50%] right-[5%]  w-11 h-11 glass-card-premium rounded-xl  border border-white/60 shadow-lg  flex items-center justify-center text-xl  float-alt    z-20" style={{ animationDuration: '7s' }}>💻</div>
      <div className="absolute top-[70%] left-[5%]  w-10 h-10 glass-card-premium rounded-xl  border border-white/60 shadow-md  flex items-center justify-center text-lg  float-3d-slow z-20" style={{ animationDelay: '2s' }}>⚡</div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3B82F6] font-mono mb-4 block">
            [ 07 / COMPETITIVE ]
          </span>
          <h2
            className="text-4xl md:text-5xl font-black leading-none tracking-tighter"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #1d4ed8, #7c3aed, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Coding Profiles
          </h2>
        </div>

        {/* 4 Cards Grid side-by-side matching mockup */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {platforms.map((p) => (
            <motion.div
              key={p.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[26px] p-6 border border-white/60 shadow-md flex flex-col justify-between h-[210px] relative overflow-hidden group"
            >
              {/* Colored Glow overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none"
                style={{ background: p.gradient }}
              />

              {/* Top part: Icon and Profile name */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{p.icon}</span>
                    <h3 
                      className="font-black text-base text-text-primary tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {p.name}
                    </h3>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-text-primary transition-colors p-1"
                    aria-label={`${p.name} Profile`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Rating score details */}
                <p 
                  className="text-2xl font-black tracking-tight"
                  style={{ color: p.color }}
                >
                  {p.stat}
                </p>
                <p className="text-xs text-text-muted mt-1 leading-snug font-mono uppercase">
                  {p.statLabel}
                </p>
              </div>

              {/* View Profile Button */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 py-2.5 rounded-xl border border-text-primary/5 hover:border-text-primary/20 bg-text-primary/5 hover:bg-text-primary/10 text-xs font-bold text-text-primary text-center transition-all duration-300 decoration-none block"
              >
                View Profile
              </a>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
