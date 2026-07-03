'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Brain, Code, FileText, Layout } from 'lucide-react';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Auto-play the video and handle audio toggle or play safety
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playsInline = true;
    
    const playVideo = () => {
      // Attempt to play unmuted automatically
      video.muted = false;
      setIsMuted(false);
      video.play().catch((err) => {
        console.log('Autoplay unmuted blocked, playing muted instead', err);
        video.muted = true;
        setIsMuted(true);
        video.play().catch((err2) => {
          console.log('Autoplay failed completely', err2);
        });
      });
    };

    // Unmute on first user interaction with the document (bypasses browser autoplay restrictions)
    const handleInteraction = () => {
      if (video) {
        video.muted = false;
        setIsMuted(false);
        // Play unmuted if blocked
        video.play().catch(() => {});
      }
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('mousedown', handleInteraction);

    // Intersection observer to play/pause when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          } else {
            video.pause();
            video.muted = true;
            setIsMuted(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
      cleanupListeners();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const statsList = [
    { value: '500+', label: 'Git Commits', icon: <Code className="w-4 h-4 text-[#8B5CF6]" /> },
    { value: '8.75', label: 'CGPA', icon: <Brain className="w-4 h-4 text-highlight" /> },
    { value: '5+', label: 'Projects Completed', icon: <Layout className="w-4 h-4 text-[#3B82F6]" /> },
    { value: '3+', label: 'M.L. Pipelines', icon: <Brain className="w-4 h-4 text-[#10B981]" /> },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen lg:h-screen flex items-center bg-[#FFFFFF] py-20 overflow-hidden"
    >
      {/* 3D background elements & radial lighting glows */}
      <div className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-[#E11D48]/3 pointer-events-none blur-[140px]" />
      <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-[#8B5CF6]/3 pointer-events-none blur-[120px]" />
      
      {/* Floating 3D Cubes & Shapes surrounding the page */}
      <div className="absolute top-[18%] left-[8%] w-12 h-12 glass-card rounded-xl opacity-35 border border-white/60 shadow-lg float-3d-slow z-0" />
      <div className="absolute bottom-[25%] right-[48%] w-10 h-10 glass-card rounded-full opacity-30 border border-white/60 shadow-md float-3d-medium z-0" />
      <div className="absolute top-[35%] right-[42%] w-7 h-7 glass-card rounded-md opacity-25 border border-white/40 shadow-sm float-3d-slow z-0" />

      <div className="w-full max-w-[90vw] xl:max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 h-full flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
        
        {/* Left Side: Text and metrics row */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center select-none py-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:gap-8"
          >
            {/* Tag badge */}
            <motion.div variants={textVariants} className="flex items-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-text-primary/5 border border-text-primary/5 text-xs sm:text-sm font-bold font-mono text-text-muted">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" /> Available for Internships &amp; Full-time
              </span>
            </motion.div>

            {/* Heading block */}
            <motion.div variants={textVariants} className="flex flex-col">
              <p
                className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-text-secondary leading-none mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Hello, I&apos;m
              </p>
              <h1
                className="text-7xl sm:text-8xl md:text-9xl xl:text-[9rem] font-black tracking-tighter leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                <span className="bg-gradient-to-r from-highlight via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                  VINAY
                </span>
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl font-black tracking-widest text-[#E11D48] mt-3 font-mono uppercase"
              >
                Full Stack Developer &amp; AI/ML Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.div variants={textVariants}>
              <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl font-medium">
                I build intelligent, scalable, and user-friendly digital experiences with modern technologies. Bridging the gap between robust systems engineering and cutting-edge intelligence algorithms.
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div variants={textVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-highlight to-[#8B5CF6] text-base font-bold text-white shadow-md hover:shadow-[0_0_20px_rgba(198,40,57,0.3)] transition-all hover:scale-105 duration-300 decoration-none"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-text-primary/10 text-base font-bold text-text-primary hover:bg-text-primary/5 transition-all hover:scale-105 duration-300 decoration-none"
              >
                <span>Download CV</span>
                <Download className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Statistics Row matching image */}
            <motion.div
              variants={textVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-text-primary/5"
            >
              {statsList.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 border border-white/60 shadow-sm flex flex-col justify-between h-[104px] hover:border-text-primary/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-3xl font-black text-text-primary tracking-tight leading-none">
                      {stat.value}
                    </span>
                    {stat.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-text-muted leading-tight font-mono uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: 50% width on desktop, larger video area */}
        <div className="w-full lg:w-[50%] h-[45%] lg:h-full relative flex items-end justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="w-full h-full relative flex items-end justify-center"
          >
            {/* Talking Video */}
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/ak3cyoc9/video/upload/v1783098432/hero-intro_diu4na.mp4"
              loop
              muted={isMuted}
              playsInline
              className="w-full max-h-[85vh] object-contain object-bottom pointer-events-none"
              style={{ mixBlendMode: 'multiply' }}
            />

            {/* Seamless gradients overlays to blend video white background into #FFFFFF section background */}
            {/* Bottom edge fade */}
            <div
              className="absolute left-0 right-0 bottom-0 h-[22%] pointer-events-none"
              style={{
                background: 'linear-gradient(to top, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
              }}
            />
            {/* Left edge fade */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[20%] pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
              }}
            />
            {/* Top edge fade */}
            <div
              className="absolute left-0 right-0 top-0 h-[18%] pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
              }}
            />
            {/* Right edge fade */}
            <div
              className="absolute right-0 top-0 bottom-0 w-[20%] pointer-events-none"
              style={{
                background: 'linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
