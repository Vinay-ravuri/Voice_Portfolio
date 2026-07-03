'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll to shrink navbar, update active section, and calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Shrink effect trigger
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is in view
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }

      // Calculate progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; // space for navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
      >
        <motion.div
          animate={{
            height: isScrolled ? '64px' : '76px',
            width: isScrolled ? '94%' : '92%',
            y: isScrolled ? -4 : 0,
          }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className={`glass-capsule flex items-center justify-between px-6 md:px-8 w-full max-w-7xl pointer-events-auto rounded-full relative overflow-hidden ${
            isScrolled ? 'gradient-border-animated shadow-md' : 'border border-white/60 shadow-sm'
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex items-center gap-1.5 text-xl font-black tracking-tighter text-text-primary group decoration-none"
          >
            <span className="bg-gradient-to-r from-highlight to-[#8B5CF6] bg-clip-text text-transparent">RV</span>
            <span className="w-2 h-2 rounded-full bg-highlight group-hover:scale-125 transition-transform duration-300" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="relative px-4 py-2 text-[15px] font-bold text-text-secondary hover:text-text-primary transition-colors duration-200 whitespace-nowrap decoration-none"
                  style={{ fontSize: '17px' }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[2.5px] bg-gradient-to-r from-highlight to-[#8B5CF6] rounded-full"
                      transition={{ type: 'spring' as const, stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Resume button & Mobile menu toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-6 py-2.5 text-sm font-bold border-0 bg-gradient-to-r from-highlight to-[#8B5CF6] rounded-full text-white hover:shadow-[0_0_20px_rgba(198,40,57,0.45)] transition-all duration-300 hover:scale-[1.05] decoration-none"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-text-primary hover:bg-text-primary/5 rounded-full transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Scroll Progress Bar at the bottom of the capsule */}
          <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-text-primary/5 rounded-full overflow-hidden pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-highlight to-[#8B5CF6] transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-24 left-6 right-6 z-40 p-6 glass-card rounded-[28px] border border-white/50 shadow-2xl flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`py-2 px-4 text-base font-bold rounded-xl transition-all ${
                  activeSection === link.id
                    ? 'bg-gradient-to-r from-highlight/10 to-[#8B5CF6]/10 text-highlight'
                    : 'text-text-secondary hover:text-text-primary hover:bg-text-primary/5'
                } decoration-none`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'contact')}
              className="mt-2 w-full py-3 text-center bg-gradient-to-r from-highlight to-[#8B5CF6] rounded-xl text-white font-bold hover:opacity-90 decoration-none shadow-md"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
