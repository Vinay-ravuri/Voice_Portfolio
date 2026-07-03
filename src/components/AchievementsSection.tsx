'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AchievementItem {
  metric: string;
  label: string;
  detail: string;
  gradient: string;
  shadow: string;
}

const achievementsList: AchievementItem[] = [
  {
    metric: '500+',
    label: 'Git Commits',
    detail: 'Contributions and open source code updates.',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #991B1B 100%)',
    shadow: 'rgba(239, 68, 68, 0.25)',
  },
  {
    metric: '5+',
    label: 'Full Stack Projects',
    detail: 'Full stack deployments utilizing React & Spring Boot.',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #5B21B6 100%)',
    shadow: 'rgba(139, 92, 246, 0.25)',
  },
  {
    metric: '3+',
    label: 'ML Pipelines',
    detail: 'Custom machine learning models training pipelines.',
    gradient: 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)',
    shadow: 'rgba(59, 130, 246, 0.25)',
  },
  {
    metric: '8.75',
    label: 'CGPA',
    detail: 'Academic grading scale score at GIET College.',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)',
    shadow: 'rgba(245, 158, 11, 0.25)',
  },
  {
    metric: 'Internship',
    label: 'Edunet Foundation',
    detail: 'Machine Learning intern focusing on anomaly monitoring.',
    gradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
    shadow: 'rgba(16, 185, 129, 0.25)',
  },
  {
    metric: 'Hackathons',
    label: 'Active Participant',
    detail: 'Code sprint setups creating prototype solutions.',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #9D174D 100%)',
    shadow: 'rgba(236, 72, 153, 0.25)',
  },
];

export default function AchievementsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 260,
        damping: 22,
      },
    },
  };

  return (
    <section
      id="achievements"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #fff7ed 40%, #f0fdf4 100%)' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-blob-strong absolute -top-[15%] right-[-5%] w-[48vw] h-[48vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #fdba74, #f97316)', animationDelay: '0s' }} />
        <div className="section-blob absolute bottom-[-5%] -left-[5%] w-[42vw] h-[42vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #d8b4fe, #a855f7)', animationDelay: '5s' }} />
        <div className="section-blob absolute top-[35%] left-[35%] w-[22vw] h-[22vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #6ee7b7, #10b981)', animationDelay: '9s' }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(rgba(245,158,11,1) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      {/* Floating 3D assets */}
      <div className="absolute top-[12%] left-[8%]  w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-slow z-20">🏆</div>
      <div className="absolute top-[12%] right-[8%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-medium z-20" style={{ animationDelay: '1s' }}>⭐</div>
      <div className="absolute bottom-[18%] right-[8%] w-12 h-12 glass-card-premium rounded-xl  border border-white/60 shadow-lg  flex items-center justify-center text-xl  float-alt    z-20" style={{ animationDuration: '7s' }}>🎖️</div>
      <div className="absolute bottom-[18%] left-[8%] w-11 h-11 glass-card-premium rounded-xl  border border-white/60 shadow-md  flex items-center justify-center text-lg  float-3d-slow z-20" style={{ animationDelay: '2s' }}>✨</div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316] font-mono mb-4 block">
            [ 08 / ACCOMPLISHMENTS ]
          </span>
          <h2
            className="text-4xl md:text-5xl font-black leading-none tracking-tighter"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #f97316, #a855f7, #10b981)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Achievements
          </h2>
        </div>

        {/* 3x2 Grid of statistic cards matching mockup */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-h-[64vh] overflow-y-auto pr-2 no-scrollbar"
        >
          {achievementsList.map((a) => (
            <motion.div
              key={a.label}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-[28px] p-6 text-white flex flex-col justify-between h-[180px] shadow-lg relative overflow-hidden group"
              style={{ 
                background: a.gradient,
                boxShadow: `0 10px 30px -10px ${a.shadow}`
              }}
            >
              {/* White shimmer highlight */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

              {/* Metric large count */}
              <div>
                <span className="text-4xl font-black tracking-tighter block mb-2 leading-none">
                  {a.metric}
                </span>
                <h3 
                  className="font-black text-base tracking-tight leading-snug mb-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {a.label}
                </h3>
              </div>

              {/* Detail label */}
              <p className="text-xs text-white/80 leading-relaxed font-medium">
                {a.detail}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
