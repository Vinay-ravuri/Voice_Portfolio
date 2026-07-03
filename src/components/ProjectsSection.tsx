'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  gradient: string;
  color: string;
  height: string; // Masonry card height
  imageTag: React.ReactNode;
}

// Inline custom SVG GitHub icon to prevent import errors
const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.82 1.102.82 2.222v3.293c0 .319.22.58.82.577C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const projectsList: ProjectItem[] = [
  {
    id: 'cricpredx',
    title: 'CricPredX — IPL Match Outcome Predictor',
    category: 'Featured Machine Learning',
    description: 'High-performance machine learning model predicting real-time ball-by-ball IPL match probabilities using historical stats, live scores, and pitch properties.',
    tech: ['React.js', 'Python', 'Flask', 'Scikit-Learn'],
    github: 'https://github.com/ravurivinay',
    live: 'https://cricpredx-ipl.vercel.app',
    gradient: 'linear-gradient(135deg, #FF4B2B 0%, #FF416C 100%)',
    color: '#FF416C',
    height: 'h-[440px]',
    imageTag: (
      <div className="w-full h-full bg-gradient-to-br from-[#FF4B2B]/20 to-[#FF416C]/10 flex flex-col justify-end p-6 border-b border-white/40">
        <span className="text-[10px] font-bold font-mono text-[#FF416C] uppercase bg-white/80 px-2 py-0.5 rounded self-start mb-2">Live Predictor Engine</span>
        <div className="flex flex-col gap-1.5 font-mono text-[9px] text-[#FF4B2B]">
          <p>&gt; Loading match model parameters...</p>
          <p>&gt; Scikit-Learn accuracy: <span className="font-bold">92.4%</span></p>
        </div>
      </div>
    ),
  },
  {
    id: 'campusconnect',
    title: 'Campus Connect 3D Node',
    category: 'Full Stack & 3D Graphics',
    description: 'Immersive campus portal rendering student directory datasets as fully interactive 3D WebGL network node graphs.',
    tech: ['React.js', 'Three.js', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/ravurivinay',
    gradient: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
    color: '#7F00FF',
    height: 'h-[250px]',
    imageTag: (
      <div className="w-full h-40 bg-gradient-to-br from-[#7F00FF]/10 to-[#E100FF]/5 flex items-center justify-center relative overflow-hidden">
        {/* Abstract WebGL node mesh */}
        <div className="absolute w-24 h-24 rounded-full border border-dashed border-[#7F00FF]/30 animate-spin" />
        <div className="absolute w-12 h-12 rounded-full bg-[#E100FF]/10 blur-md" />
        <Layers className="w-8 h-8 text-[#7F00FF] relative z-10" />
      </div>
    ),
  },
  {
    id: 'airesume',
    title: 'Smart ATS AI CV Builder',
    category: 'Generative AI',
    description: 'CV optimization portal using OpenAI completions to scan, score, and edit resumes against enterprise ATS keyword filters.',
    tech: ['React.js', 'Spring Boot', 'MySQL', 'OpenAI API'],
    github: 'https://github.com/ravurivinay',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    color: '#11998e',
    height: 'h-[280px]',
    imageTag: (
      <div className="w-full h-44 bg-gradient-to-br from-[#11998e]/10 to-[#38ef7d]/5 flex flex-col justify-center p-4">
        <div className="w-full h-2.5 rounded bg-black/5 mb-2" />
        <div className="w-[80%] h-2.5 rounded bg-black/5 mb-2" />
        <div className="w-[90%] h-2.5 rounded bg-gradient-to-r from-[#11998e]/30 to-[#38ef7d]/30" />
      </div>
    ),
  },
  {
    id: 'infrawatch',
    title: 'InfraWatch AI Monitor',
    category: 'DevOps Analytics',
    description: 'Real-time server anomaly monitor assessing processor load metrics and classifying threat indicators.',
    tech: ['Python', 'Scikit-Learn', 'Spring Boot', 'React'],
    github: 'https://github.com/ravurivinay',
    gradient: 'linear-gradient(135deg, #3E5151 0%, #DECBA4 100%)',
    color: '#3E5151',
    height: 'h-[250px]',
    imageTag: (
      <div className="w-full h-40 bg-gradient-to-br from-[#3E5151]/10 to-[#DECBA4]/5 flex items-center justify-center">
        <span className="text-xs font-mono font-bold text-[#3E5151]">InfraWatch AI // Active</span>
      </div>
    ),
  },
  {
    id: 'devpulse',
    title: 'DevPulse Git Analytics',
    category: 'Developer Tools',
    description: 'Metrics platform fetching repositories metadata to visualize commit logs velocity and workflow contributions.',
    tech: ['Spring Boot', 'Python', 'React', 'Recharts'],
    github: 'https://github.com/ravurivinay',
    gradient: 'linear-gradient(135deg, #f857a6 0%, #ff5858 100%)',
    color: '#f857a6',
    height: 'h-[280px]',
    imageTag: (
      <div className="w-full h-44 bg-gradient-to-br from-[#f857a6]/10 to-[#ff5858]/5 flex items-end p-4">
        <div className="flex gap-1.5 items-end h-16 w-full">
          <div className="w-4 bg-[#f857a6] h-[30%] rounded-t" />
          <div className="w-4 bg-[#f857a6] h-[60%] rounded-t" />
          <div className="w-4 bg-[#ff5858] h-[90%] rounded-t" />
          <div className="w-4 bg-[#ff5858] h-[45%] rounded-t" />
        </div>
      </div>
    ),
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 260,
        damping: 24,
      },
    },
  };

  const featuredProject = projectsList[0];
  const gridProjects = projectsList.slice(1);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fdf4ff 50%, #eff6ff 100%)' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-blob-strong absolute -top-[10%] -left-[5%] w-[45vw] h-[45vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #fdba74, #f97316)', animationDelay: '0s' }} />
        <div className="section-blob absolute bottom-[0%] -right-[5%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #c4b5fd, #8b5cf6)', animationDelay: '6s' }} />
        <div className="section-blob absolute top-[30%] left-[45%] w-[25vw] h-[25vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #93c5fd, #3b82f6)', animationDelay: '3s' }} />
        {/* Moving light streaks */}
        <div className="absolute top-[25%] left-0 right-0 h-[1px] light-streak opacity-30" style={{ animationDuration: '4s' }} />
        <div className="absolute top-[60%] left-0 right-0 h-[1px] light-streak opacity-20" style={{ animationDuration: '5.5s', animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(rgba(249,115,22,1) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,1) 1px,transparent 1px)', backgroundSize: '55px 55px' }} />
      </div>

      {/* Floating 3D icons */}
      <div className="absolute top-[12%] right-[8%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-slow z-20">📊</div>
      <div className="absolute bottom-[15%] left-[8%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-medium z-20" style={{ animationDelay: '1.5s' }}>🖥️</div>
      <div className="absolute top-[50%] right-[5%] w-10 h-10 glass-card-premium rounded-xl border border-white/60 shadow-lg flex items-center justify-center text-lg float-alt z-20" style={{ animationDuration: '6s' }}>🚀</div>


      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F97316] font-mono mb-4 block">
            [ 04 / PORTFOLIO ]
          </span>
          <h2
            className="text-4xl md:text-5xl font-black leading-none tracking-tighter"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #ea580c, #8b5cf6, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projects
          </h2>
        </div>

        {/* 2-Column Split: Featured spotlight on Left (45%), Masonry grid of 4 projects on Right (55%) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-h-[64vh] overflow-y-auto pr-2 no-scrollbar"
        >
          {/* Left Column: Featured spotlight card */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[28px] border border-white/60 shadow-lg relative overflow-hidden flex flex-col justify-between h-full min-h-[420px] max-h-[460px] group"
            >
              {/* Glow overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none"
                style={{ background: featuredProject.gradient }}
              />

              {/* Cover visual */}
              <div className="relative flex-1 bg-white">
                {featuredProject.imageTag}
              </div>

              {/* Info content */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-text-primary/5 text-text-muted font-mono uppercase">
                      {featuredProject.category}
                    </span>
                    
                    <div className="flex gap-2">
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-text-primary transition-colors p-1"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4.5 h-4.5" />
                      </a>
                      {featuredProject.live && (
                        <a
                          href={featuredProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-primary transition-colors p-1"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3
                    className="font-black text-lg text-text-primary tracking-tight mb-2 group-hover:text-highlight transition-colors"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {featuredProject.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-4">
                    {featuredProject.description}
                  </p>
                </div>

                {/* Footer stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-text-primary/5">
                  {featuredProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-bold px-2 py-0.5 rounded bg-text-primary/5 text-text-secondary font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 2-Column Grid (masonry layout of other 4 projects) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {gridProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className={`glass-card rounded-[24px] border border-white/50 shadow-md relative overflow-hidden flex flex-col justify-between ${project.height} group`}
              >
                {/* Visual glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none"
                  style={{ background: project.gradient }}
                />

                {/* Cover graphic */}
                <div className="relative">
                  {project.imageTag}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-text-primary/5 text-text-muted font-mono uppercase">
                        {project.category}
                      </span>
                      
                      <div className="flex gap-1.5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-text-muted hover:text-text-primary transition-colors p-1"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-text-primary transition-colors p-1"
                            aria-label="Live Demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3
                      className="font-black text-sm text-text-primary tracking-tight leading-snug mb-1 group-hover:text-highlight transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-text-secondary leading-snug line-clamp-2 pr-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Badges footer */}
                  <div className="flex flex-wrap gap-1 pt-3 mt-3 border-t border-text-primary/5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-text-primary/5 text-text-secondary font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
