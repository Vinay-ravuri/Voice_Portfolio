'use client';

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import PremiumLoader from '@/components/PremiumLoader';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificationsSection from '@/components/CertificationsSection';
import CodingPlatformsSection from '@/components/CodingPlatformsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis smooth scroll once loading has completed
  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential decay
      smoothWheel: true,
    });

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Setup scroll reveal visual triggers for standard scroll items
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach(el => observer.observe(el));

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      observer.disconnect();
    };
  }, [isLoading]);

  return (
    <>
      {/* Premium Loading Sequence */}
      {isLoading && <PremiumLoader onComplete={() => setIsLoading(false)} />}

      {/* Main content — preloads in background, fades in after loading */}
      <div
        className="transition-opacity duration-1000 ease-out"
        style={{ opacity: isLoading ? 0 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
      >
        <Navbar />
        <main className="flex flex-col w-full relative bg-[#FFFFFF]">
          {/* Subtle global noise texture overlay */}
          <div className="noise-overlay" aria-hidden="true" />

          {/* S1: Hero */}
          <HeroSection />

          {/* S2: About */}
          <AboutSection />

          {/* S3: Education */}
          <EducationSection />

          {/* S4: Skills */}
          <SkillsSection />

          {/* S5: Projects */}
          <ProjectsSection />

          {/* S6: Experience */}
          <ExperienceSection />

          {/* S7: Certifications */}
          <CertificationsSection />

          {/* S8: Coding Profiles */}
          <CodingPlatformsSection />

          {/* S9: Achievements */}
          <AchievementsSection />

          {/* S10: Contact */}
          <ContactSection />
        </main>
      </div>
    </>
  );
}
