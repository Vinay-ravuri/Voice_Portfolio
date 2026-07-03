'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.82 1.102.82 2.222v3.293c0 .319.22.58.82.577C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socials = [
  { name: 'GitHub', url: 'https://github.com/ravurivinay', icon: <Github className="w-5 h-5" /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ravurivinay', icon: <Linkedin className="w-5 h-5" /> },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate API request
    await new Promise(r => setTimeout(r, 1600));
    setSending(false);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    // Reset notification after a delay
    setTimeout(() => setSubmitted(false), 5000);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen lg:h-screen flex items-center py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf4ff 0%, #eff6ff 50%, #fff0f9 100%)' }}
    >
      {/* ── Animated background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="section-blob-strong absolute -top-[15%] right-[-5%] w-[50vw] h-[50vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #f9a8d4, #ec4899)', animationDelay: '0s' }} />
        <div className="section-blob absolute bottom-[-5%] -left-[5%] w-[42vw] h-[42vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #93c5fd, #3b82f6)', animationDelay: '6s' }} />
        <div className="section-blob absolute top-[30%] left-[35%] w-[25vw] h-[25vw] rounded-full"
          style={{ background: 'radial-gradient(circle, #d8b4fe, #8b5cf6)', animationDelay: '3s' }} />
        {/* Orbit rings */}
        <div className="absolute top-[15%] left-[12%] w-[180px] h-[180px] rounded-full border border-[#ec4899]/20 spin-slow" style={{ animationDuration: '22s' }} />
        <div className="absolute bottom-[15%] right-[15%] w-[140px] h-[140px] rounded-full border border-dashed border-[#3b82f6]/20 spin-reverse" style={{ animationDuration: '18s' }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(rgba(236,72,153,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>

      {/* Floating 3D icons */}
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 6, 0], rotate: [12, 18, 12] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[18%] right-[35%] text-4xl z-20 select-none pointer-events-none"
      >
        ✈️
      </motion.div>
      <div className="absolute top-[12%] left-[8%]  w-14 h-14 glass-card-premium rounded-2xl border border-white/70 shadow-xl flex items-center justify-center text-2xl float-3d-slow z-20">📧</div>
      <div className="absolute bottom-[18%] right-[8%] w-12 h-12 glass-card-premium rounded-xl  border border-white/60 shadow-lg  flex items-center justify-center text-xl  float-3d-medium z-20" style={{ animationDelay: '1.5s' }}>🌐</div>
      <div className="absolute bottom-[30%] left-[6%] w-11 h-11 glass-card-premium rounded-xl  border border-white/60 shadow-md  flex items-center justify-center text-lg  float-alt    z-20" style={{ animationDuration: '7s' }}>📍</div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Column: Heading and info (40%) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EC4899] font-mono mb-4 block">
              [ 09 / CONNECT ]
            </span>
            
            <h2
              className="text-4xl md:text-5xl font-black text-text-primary leading-[1.05] tracking-tighter mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let's Build
              <br />
              Something <span className="bg-gradient-to-r from-highlight to-[#8B5CF6] bg-clip-text text-transparent">Amazing</span>
              <br />
              Together.
            </h2>

            {/* Info details */}
            <div className="flex flex-col gap-5 w-full mb-8">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-text-primary/5 flex items-center justify-center text-highlight shadow-sm">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono">
                    Email
                  </p>
                  <a
                    href="mailto:ravurivinay08@gmail.com"
                    className="text-sm font-bold text-text-primary hover:text-highlight transition-colors decoration-none"
                  >
                    ravurivinay08@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-text-primary/5 flex items-center justify-center text-[#8B5CF6] shadow-sm">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono">
                    Location
                  </p>
                  <p className="text-sm font-bold text-text-primary">
                    Rajahmundry, Andhra Pradesh, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white border border-text-primary/5 flex items-center justify-center text-[#3B82F6] shadow-sm">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono">
                    Phone
                  </p>
                  <p className="text-sm font-bold text-text-primary">
                    +91 60000 00000
                  </p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-11 h-11 rounded-xl bg-white border border-text-primary/10 hover:border-text-primary text-text-muted hover:text-text-primary flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-sm decoration-none hover:scale-105"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Premium Contact Form (60%) */}
          <div className="lg:col-span-7 w-full relative">
            <motion.div
              variants={cardVariants}
              className="glass-card rounded-[32px] p-8 md:p-10 border border-white/60 shadow-xl relative overflow-hidden"
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                
                {/* Grid name & email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label 
                      htmlFor="name" 
                      className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-text-primary/5 focus:border-highlight focus:bg-white text-sm text-text-primary font-bold transition-all outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label 
                      htmlFor="email" 
                      className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 border border-text-primary/5 focus:border-highlight focus:bg-white text-sm text-text-primary font-bold transition-all outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label 
                    htmlFor="message" 
                    className="text-[10px] font-bold uppercase tracking-wider text-text-muted font-mono"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hello, I want to talk about..."
                    className="w-full px-4 py-3 rounded-xl bg-white/50 border border-text-primary/5 focus:border-highlight focus:bg-white text-sm text-text-primary font-bold transition-all outline-none resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4.5 rounded-2xl bg-gradient-to-r from-highlight to-[#8B5CF6] text-white font-bold text-sm shadow-md hover:shadow-[0_0_20px_rgba(198,40,57,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <span className="text-xs uppercase font-mono font-bold tracking-wider animate-pulse">
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Submission Notification banner */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-x-0 bottom-0 bg-[#10B981] text-white py-3 px-6 text-xs font-bold font-mono uppercase tracking-wider text-center flex items-center justify-center gap-2 z-20"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message Sent Successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
