"use client";
import React, { useState, useEffect } from 'react';
import {
  Monitor,
  Server,
  Database,
  Wrench,
  ChevronUp,
  Menu,
  X,
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

import F1Preloader from './components/F1Preloader';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import GarageSection from './components/GarageSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import PageStyles from './components/PageStyles';
import { useLanguage } from './context/LanguageContext';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { locale, setLocale, t } = useLanguage();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skillGroups = [
    {
      id: "SYS_01",
      category: t("skills.frontend"),
      icon: <Monitor size={20} />,
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
      performance: "95%",
    },
    {
      id: "SYS_02",
      category: t("skills.backend"),
      icon: <Server size={20} />,
      items: ["Node.js", "Python", "PHP", "REST API", "Prisma"],
      performance: "90%",
    },
    {
      id: "SYS_03",
      category: t("skills.database"),
      icon: <Database size={20} />,
      items: ["PostgreSQL", "MySQL", "NoSQL", "SQL"],
      performance: "88%",
    },
    {
      id: "SYS_04",
      category: t("skills.Systems-Analysis"),
      icon: <Database size={20} />,
      items: ["Requirement Analysis", "ERD", "UML", "Workflow Design", "Requirement gathering"],
      performance: "88%",
    },
    {
      id: "SYS_05",
      category: t("skills.tools"),
      icon: <Wrench size={20} />,
      items: ["Git", "Docker", "Postman", "VS Code", "AWS", "Antigravity"],
      performance: "92%",
    },
  ];

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  const sectionOrder = ['hero', 'profile', 'skills', 'garage', 'contact'];

  const scrollToNext = (e: React.MouseEvent, currentId: string) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, textarea, select')) return;

    const currentIndex = sectionOrder.indexOf(currentId);
    if (currentIndex < sectionOrder.length - 1) {
      const nextId = sectionOrder[currentIndex + 1];
      const element = document.getElementById(nextId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navItems = [
    { id: "profile", label: t("nav.profile") },
    { id: "skills", label: t("nav.skills") },
    { id: "garage", label: t("nav.garage") },
    { id: "contact", label: t("nav.contact") },
  ];

  return (
    <div className="min-h-screen bg-[#040a18] text-white font-sans selection:bg-[#ffc906] selection:text-[#040a18] overflow-x-hidden md:cursor-none pb-6 sm:pb-8">

      {/* <AnimatePresence>
        {loading && <F1Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence> */}

      {/* Custom Cursor - Hidden on mobile */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#ffc906] rounded-full z-[9999] pointer-events-none hidden md:flex items-center justify-center mix-blend-difference"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-1.5 h-1.5 bg-[#dc0000] rounded-full"></div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dc0000] via-[#ffc906] to-[#ffc906] z-[100] origin-left" style={{ scaleX }} />

      {/* Screen Effects (Scanlines & Noise & Speed Lines) */}
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
        <div className="absolute inset-0 scanlines"></div>
      </div>

      {/* Speed Lines Animation Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[85] overflow-hidden opacity-20">
        <div className="speed-line top-[10%] left-[-10%] w-[40%]"></div>
        <div className="speed-line top-[40%] left-[-15%] w-[60%] animation-delay-1000"></div>
        <div className="speed-line top-[70%] left-[-20%] w-[30%] animation-delay-2000"></div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-12 sm:bottom-14 right-4 sm:right-6 z-[99] w-12 h-12 sm:w-14 sm:h-14 bg-[#dc0000] hover:bg-[#ffc906] hover:text-[#040a18] text-white flex items-center justify-center transform -skew-x-12 shadow-[0_0_20px_rgba(220,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,201,6,0.3)] transition-all active:scale-90 group"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="transform skew-x-12 group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Live Ticker Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-6 sm:h-8 bg-[#dc0000] z-[100] flex items-center overflow-hidden border-t border-black/20">
        <div className="flex gap-24 whitespace-nowrap animate-ticker py-1 px-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-12 font-black italic text-[8px] sm:text-[10px] items-center uppercase tracking-tighter">
              <span>{t("ticker.telemetry")}</span>
              <span>GPS_POS: {mousePos.x}, {mousePos.y}</span>
              <span>{t("ticker.systemStatus")}</span>
              <span>{t("ticker.engineTemp")}</span>
              <span>{t("ticker.lapTime")}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${scrolled ? 'bg-[#040a18]/95 border-[#ffc906]/30 py-3 backdrop-blur-sm' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-[#ffc906] text-[#040a18] flex items-center justify-center font-black italic transform -skew-x-12 text-sm">RBR</div>
            <span className="font-black tracking-tighter text-xl italic text-white drop-shadow-md">RACING_DEVEL</span>
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  className="hover:text-[#ffc906] transition-colors relative group uppercase font-bold text-white drop-shadow-md"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ffc906] transition-all group-hover:w-full"></span>
                </motion.button>
              ))}
            </div>

            {/* Language Toggle */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center transform -skew-x-12 border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => setLocale("th")}
                className={`px-3 py-1 text-[10px] font-black tracking-wider transition-all transform skew-x-12 ${locale === "th" ? "bg-[#dc0000] text-white" : "text-white/60 hover:text-white"}`}
              >
                TH
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-3 py-1 text-[10px] font-black tracking-wider transition-all transform skew-x-12 ${locale === "en" ? "bg-[#dc0000] text-white" : "text-white/60 hover:text-white"}`}
              >
                EN
              </button>
            </motion.div>
          </div>

          <button className="md:hidden z-[120]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            className="fixed inset-0 bg-[#040a18] z-[110] flex flex-col items-center justify-center gap-8 text-4xl font-black italic uppercase tracking-tighter"
          >
            {/* Mobile Language Toggle */}
            <div className="flex items-center transform -skew-x-12 border border-white/20 overflow-hidden mb-4">
              <button
                onClick={() => setLocale("th")}
                className={`px-6 py-2 text-sm font-black tracking-wider transition-all transform skew-x-12 ${locale === "th" ? "bg-[#dc0000] text-white" : "text-white/60 hover:text-white"}`}
              >
                TH
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`px-6 py-2 text-sm font-black tracking-wider transition-all transform skew-x-12 ${locale === "en" ? "bg-[#dc0000] text-white" : "text-white/60 hover:text-white"}`}
              >
                EN
              </button>
            </div>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:text-[#ffc906] active:text-[#ffc906]">{item.label}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <HeroSection scrollTo={scrollTo} scrollToNext={scrollToNext} />

      {/* Profile Section */}
      <ProfileSection scrollToNext={scrollToNext} />

      {/* Skills Section */}
      <SkillsSection skillGroups={skillGroups} scrollToNext={scrollToNext} />

      {/* The Garage (Alternating) */}
      <GarageSection scrollToNext={scrollToNext} />

      {/* Contact Section */}
      <ContactSection scrollToNext={scrollToNext} />

      {/* Footer */}
      <FooterSection />

      {/* Styles */}
      <PageStyles />
    </div>
  );
};

export default App;