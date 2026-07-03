'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
  tech: string[];
  color: string;
}

const experienceList: ExperienceItem[] = [
  {
    role: 'Java Full Stack Trainee',
    company: 'TechWing',
    location: 'Rajahmundry, AP',
    duration: '2025 — Present',
    bullets: [
      'Training in Java Core, Spring Boot, REST APIs, MySQL, Hibernate, and React.js.',
      'Building responsive, modular full-stack interfaces linked to spring microservices.',
      'Refining database schemas and executing data flow pipeline integrations.',
    ],
    tech: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Hibernate', 'React.js'],
    color: '#8B5CF6',
  },
  {
    role: 'Machine Learning Intern',
    company: 'Edunet Foundation',
    location: 'Remote',
    duration: 'May — Jul 2025',
    bullets: [
      'Engineered 3 end-to-end Machine Learning pipelines from scratch in Python.',
      'Achieved 90%+ classification accuracy on fraud detection and SMS spam filters.',
      'Tuned cross-validation grids and hyperparameter routines in Scikit-Learn.',
    ],
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
    color: '#E11D48',
  },
];

export default function ExperienceSection() {
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.2, ease: 'easeInOut' as const },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 260, damping: 20 },
    },
  };

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 40%, #fff1f2 100%)' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm peach blob top-left */}
        <div className="section-blob-strong absolute -top-[10%] -left-[5%] w-[50vw] h-[50vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #fdba74, #f97316)', animationDelay: '0s' }} />
        {/* Soft amber blob bottom-right */}
        <div className="section-blob absolute -bottom-[5%] right-[-5%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #fca5a5, #ef4444)', animationDelay: '7s' }} />
        {/* Rose mid-center */}
        <div className="section-blob absolute top-[40%] left-[45%] w-[25vw] h-[25vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #fde68a, #f59e0b)', animationDelay: '3s' }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(rgba(249,115,22,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      {/* Floating 3D icons */}
      <div className="absolute top-[12%] left-[8%]  w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-slow z-20">🏢</div>
      <div className="absolute top-[18%] left-[25%] w-12 h-12 glass-card-premium rounded-xl  border border-white/60 shadow-lg  flex items-center justify-center text-xl  float-3d-medium z-20" style={{ animationDelay: '1s' }}>💼</div>
      <div className="absolute bottom-[18%] right-[8%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-alt    z-20" style={{ animationDuration: '7s' }}>🏆</div>
      <div className="absolute bottom-[28%] left-[5%] w-10 h-10 glass-card-premium rounded-xl  border border-white/60 shadow-md  flex items-center justify-center text-lg  float-3d-slow z-20" style={{ animationDelay: '2s' }}>⚡</div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316] font-mono mb-4 block">
            [ 05 / MILESTONES ]
          </span>
          <h2
            className="text-4xl md:text-5xl font-black leading-none tracking-tighter"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #ea580c, #f97316, #f59e0b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Experience
          </h2>
        </div>

        {/* Timeline Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
          
          {/* Left Column: Heading brief info */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3
              className="text-2xl font-black text-text-primary tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Professional Career
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 font-medium">
              A scrolling vertical timeline showcasing my internships, trainee roles, and contributions in full stack and ML.
            </p>
          </div>

          {/* Right Column: Scroll-Animated Timeline cards */}
          <div className="lg:col-span-8 relative pl-8 md:pl-16 flex flex-col gap-10 justify-center">
            
            {/* Timeline Line */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="absolute left-[34px] md:left-[58px] top-4 bottom-4 w-[2px] bg-text-primary/10 origin-top pointer-events-none"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B5CF6] to-highlight w-full" />
            </motion.div>

            {experienceList.map((exp, index) => (
              <div key={exp.company} className="relative flex gap-6 md:gap-10 items-start w-full">
                
                {/* Timeline Dot Node */}
                <motion.div
                  variants={nodeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border border-text-primary/10 text-text-primary shadow-md relative z-10 flex-shrink-0"
                  style={{ borderLeft: `4px solid ${exp.color}` }}
                >
                  <Briefcase className="w-5 h-5" style={{ color: exp.color }} />
                </motion.div>

                {/* Timeline Glass Card */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-[24px] p-6 flex-1 border border-white/60 shadow-lg relative overflow-hidden"
                >
                  {/* Color glow overlay on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 hover:opacity-[0.015] transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: exp.color }}
                  />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
                    <div>
                      <h4
                        className="font-black text-lg text-text-primary tracking-tight"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {exp.role}
                      </h4>
                      <p 
                        className="text-sm font-black mt-0.5"
                        style={{ color: exp.color }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Duration badge */}
                    <div className="flex flex-wrap gap-2 text-[10px] font-bold font-mono text-text-muted">
                      <span className="flex items-center gap-1.5 bg-text-primary/5 px-2.5 py-1 rounded">
                        <Calendar className="w-3 h-3" /> {exp.duration}
                      </span>
                      <span className="flex items-center gap-1.5 bg-text-primary/5 px-2.5 py-1 rounded">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2 mb-4">
                    {exp.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2 text-xs text-text-secondary leading-normal items-start font-medium">
                        <CheckCircle2 className="w-4 h-4 text-text-muted mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-text-primary/5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-bold px-2 py-0.5 rounded bg-text-primary/5 text-text-secondary font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
