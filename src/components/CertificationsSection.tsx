'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';

interface CertificationItem {
  title: string;
  provider: string;
  year: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
  url: string;
}

const certificationsList: CertificationItem[] = [
  {
    title: 'Oracle Generative AI Professional',
    provider: 'Oracle',
    year: '2025',
    color: '#F80000',
    gradient: 'linear-gradient(135deg, #F80000 0%, #B30000 100%)',
    icon: '🔴',
    description: 'Generative Models architectures, fine-tuning setups, prompt engineering frameworks, and deployment patterns.',
    url: 'https://oracle.com',
  },
  {
    title: 'Java (Advanced) Certification',
    provider: 'GeeksforGeeks',
    year: '2024',
    color: '#2F8D46',
    gradient: 'linear-gradient(135deg, #2F8D46 0%, #1E5E2F 100%)',
    icon: '🟢',
    description: 'Advanced concurrency structures, functional patterns, JVM properties tuning, and collections optimizations.',
    url: 'https://geeksforgeeks.org',
  },
  {
    title: 'Cisco Networking Essentials',
    provider: 'Cisco',
    year: '2024',
    color: '#049FD9',
    gradient: 'linear-gradient(135deg, #049FD9 0%, #026A91 100%)',
    icon: '🔵',
    description: 'Networking topologies, subnetting routines, security protocols, routing systems, and diagnostic tools.',
    url: 'https://cisco.com',
  },
  {
    title: 'Edunet Machine Learning Trainee',
    provider: 'Edunet Foundation',
    year: '2025',
    color: '#C62839',
    gradient: 'linear-gradient(135deg, #C62839 0%, #8C1C28 100%)',
    icon: '🤖',
    description: 'End-to-end Machine Learning pipelines training, validation grids, models scoring, and service deployment.',
    url: 'https://edunetfoundation.org',
  },
  {
    title: 'IBM Artificial Intelligence Specialist',
    provider: 'IBM',
    year: '2025',
    color: '#0530AD',
    gradient: 'linear-gradient(135deg, #0530AD 0%, #021E6B 100%)',
    icon: '💻',
    description: 'Deep neural networks models, NLP classification vectors, chatbots engines, and cloud AI models integration.',
    url: 'https://ibm.com',
  },
];

export default function CertificationsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
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
      id="certifications"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #fff0f9 35%, #f0f9ff 70%, #f0fdf4 100%)' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-blob-strong absolute -top-[10%] -left-[5%] w-[45vw] h-[45vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #d8b4fe, #a855f7)', animationDelay: '0s' }} />
        <div className="section-blob absolute bottom-[0%] right-[-5%] w-[40vw] h-[40vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #fbcfe8, #ec4899)', animationDelay: '6s' }} />
        <div className="section-blob absolute top-[30%] right-[30%] w-[25vw] h-[25vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #a5f3fc, #06b6d4)', animationDelay: '3s' }} />
        {/* Rainbow ring */}
        <div className="absolute top-[10%] right-[10%] w-[160px] h-[160px] rounded-full spin-slow" style={{ animationDuration: '20s', border: '2px solid', borderImageSlice: 1, borderImageSource: 'linear-gradient(90deg, #a855f7, #ec4899, #3b82f6)' }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,1) 1px,transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      {/* Floating 3D objects */}
      <div className="absolute top-[12%] left-[8%]  w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-slow z-20">🏅</div>
      <div className="absolute bottom-[18%] right-[8%] w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-medium z-20" style={{ animationDelay: '1.5s' }}>📜</div>
      <div className="absolute top-[45%] right-[6%]  w-11 h-11 glass-card-premium rounded-xl  border border-white/60 shadow-lg  flex items-center justify-center text-xl  float-alt    z-20" style={{ animationDuration: '6s' }}>🛡️</div>
      <div className="absolute top-[65%] left-[5%]  w-10 h-10 glass-card-premium rounded-xl  border border-white/60 shadow-md  flex items-center justify-center text-lg  float-3d-slow z-20" style={{ animationDelay: '2.5s' }}>✨</div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A855F7] font-mono mb-4 block">
            [ 06 / CREDENTIALS ]
          </span>
          <h2
            className="text-4xl md:text-5xl font-black leading-none tracking-tighter"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Certifications
          </h2>
        </div>

        {/* Masonry / grid wrapper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-h-[64vh] overflow-y-auto pr-2 no-scrollbar"
        >
          {certificationsList.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-card rounded-[24px] p-6 flex flex-col justify-between border border-white/60 shadow-md relative overflow-hidden group h-[220px]"
            >
              {/* Colored Glow overlay on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none"
                style={{ background: cert.gradient }}
              />

              {/* Top Row: Provider Logo placeholder and verify link */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{cert.icon}</span>
                    <span 
                      className="text-xs font-black font-mono uppercase tracking-wider"
                      style={{ color: cert.color }}
                    >
                      {cert.provider}
                    </span>
                  </div>
                  
                  {/* Verify button */}
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-bold text-text-muted hover:text-text-primary transition-colors hover:scale-105"
                  >
                    <span>Verify</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3
                  className="font-black text-sm text-text-primary tracking-tight leading-snug mb-1 group-hover:text-highlight transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {cert.title}
                </h3>
                <p className="text-[11px] text-text-secondary leading-snug line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="flex justify-between items-center pt-3 border-t border-text-primary/5 mt-auto">
                <span className="text-[9px] font-bold text-text-muted font-mono uppercase">
                  Credential ID: Verified
                </span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-text-primary/5 text-text-secondary font-mono">
                  {cert.year}
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
