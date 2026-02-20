"use client";
import React, { useState, useEffect, useRef } from 'react';
import {
  Trophy,
  Zap,
  Settings,
  Cpu,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Flag,
  Timer,
  Gauge,
  Activity,
  User,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Wind,
  Radio
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring, useInView } from 'framer-motion';
import Link from 'next/link';
import { projects } from './projects/projectData';

// --- Preloader Component ---
const F1Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [lights, setLights] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLights(prev => (prev < 5 ? prev + 1 : prev));
    }, 600);

    if (lights === 5) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [lights, onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[200] flex flex-col items-center justify-center">
      <div className="flex gap-2 sm:gap-4 mb-8">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-zinc-800 ${lights >= i ? 'bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.8)]' : 'bg-zinc-900'}`}></div>
            <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-zinc-800 ${lights >= i ? 'bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.8)]' : 'bg-zinc-900'}`}></div>
          </div>
        ))}
      </div>
      <p className="font-black italic tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-sm animate-pulse">WARMING UP ENGINES...</p>
    </div>
  );
};

// --- Animation Components ---
const Reveal = ({ children, width = "100%", delay = 0.2 }: { children: React.ReactNode; width?: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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


  const skills = [
    { name: "ENGINEERING", level: 95, icon: <Settings size={18} /> },
    { name: "REACTION TIME", level: 90, icon: <Zap size={18} /> },
    { name: "STRATEGY", level: 85, icon: <Activity size={18} /> },
    { name: "COMPUTING", level: 92, icon: <Cpu size={18} /> },
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
    // Don't scroll if clicking on interactive elements
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

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden md:cursor-none pb-6 sm:pb-8">

      <AnimatePresence>
        {loading && <F1Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Custom Cursor - Hidden on mobile */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-red-600 rounded-full z-[9999] pointer-events-none hidden md:flex items-center justify-center"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-red-600 rounded-full"></div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[100] origin-left" style={{ scaleX }} />

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
            className="fixed bottom-12 sm:bottom-14 right-4 sm:right-6 z-[99] w-12 h-12 sm:w-14 sm:h-14 bg-red-600 hover:bg-white hover:text-black text-white flex items-center justify-center transform -skew-x-12 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all active:scale-90 group"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} className="transform skew-x-12 group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Live Ticker Bar - Hidden/Smaller on small mobile */}
      <div className="fixed bottom-0 left-0 right-0 h-6 sm:h-8 bg-red-600 z-[100] flex items-center overflow-hidden border-t border-black/20">
        <div className="flex gap-24 whitespace-nowrap animate-ticker py-1 px-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-12 font-black italic text-[8px] sm:text-[10px] items-center uppercase tracking-tighter">
              <span>LIVE TELEMETRY: ACTIVE</span>
              <span>GPS_POS: {mousePos.x}, {mousePos.y}</span>
              <span>SYSTEM_STATUS: NO_ERRORS</span>
              <span>ENGINE_TEMP: OPTIMIZED</span>
              <span>LAP_TIME: 1:12.332</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${scrolled ? 'bg-black/95 border-red-600 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center font-black italic transform -skew-x-12 text-sm">F1</div>
            <span className="font-black tracking-tighter text-xl italic">RACING_DEVEL</span>
          </motion.div>

          <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
            {["profile", "skills", "garage", "contact"].map((item, idx) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="hover:text-red-500 transition-colors relative group uppercase font-bold"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
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
            className="fixed inset-0 bg-black z-[110] flex flex-col items-center justify-center gap-8 text-4xl font-black italic uppercase tracking-tighter"
          >
            {["profile", "skills", "garage", "contact"].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="hover:text-red-600 active:text-red-700">{item}</button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden px-4 cursor-pointer" onClick={(e) => scrollToNext(e, 'hero')}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white transform -rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white transform rotate-6"></div>
        </motion.div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block border border-white/20 px-4 py-1 mb-4 sm:mb-6 transform -skew-x-12"
          >
            <p className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] font-bold uppercase flex items-center gap-2">
              <Radio size={10} className="animate-pulse text-red-600" /> Live race connection established
            </p>
          </motion.div>
          <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-[10rem] font-black italic tracking-tighter leading-none uppercase select-none">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="inline-block"
            >FULL</motion.span>&#32;<motion.span
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-red-600"
            >THROTTLE</motion.span><br />
            <motion.span
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="inline-block glitch-text"
              data-text="PROJECTS"
            >PROJECTS</motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-12"
          >
            <div className="flex items-center gap-2 sm:gap-4 border-l-4 border-red-600 pl-3 sm:pl-4 text-left">
              <span className="text-[9px] sm:text-sm font-bold opacity-50 uppercase">Driver</span>
              <span className="text-base sm:text-2xl font-black tracking-tight">THANAKORN W.</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 border-l-4 border-white/20 pl-3 sm:pl-4 text-left">
              <span className="text-[9px] sm:text-sm font-bold opacity-50 uppercase">Position</span>
              <span className="text-base sm:text-2xl font-black tracking-tight uppercase">Fullstack Eng.</span>
            </div>
          </motion.div>
        </div>

        <motion.button
          onClick={() => scrollTo('profile')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center group active:scale-95 transition-transform"
        >
          <span className="text-[8px] sm:text-[10px] uppercase font-black tracking-widest mb-2 opacity-50 group-hover:opacity-100 transition-opacity">Push to start</span>
          <ChevronDown className="text-red-600 w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>
      </section>

      {/* Profile Section */}
      <section id="profile" className="py-20 sm:py-24 px-6 border-y border-white/5 bg-[#0d0d0d] cursor-pointer" onClick={(e) => scrollToNext(e, 'profile')}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full sm:max-w-sm md:col-span-1 relative mx-auto md:mx-0"
            >
              <div className="aspect-[3/4] overflow-hidden border-2 border-red-600 relative group">
                <img
                  src="/Kanitphong.gif"
                  // src="/Gemini_Generated_Image_mtdlv0mtdlv0mtdl.png"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-red-600/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-l-2 border-red-600"></div>
              <div className="mt-4 flex gap-4">
                <div className="bg-red-600 px-3 py-1 font-bold text-[10px] transform -skew-x-12">RANK: PRO</div>
                <div className="bg-white text-black px-3 py-1 font-bold text-[10px] transform -skew-x-12 uppercase">Sector 1</div>
              </div>
            </motion.div>

            <div className="md:col-span-3 space-y-8">
              <Reveal>
                <div className="flex items-center gap-4 opacity-50">
                  <User size={16} />
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase italic">Driver Profile & Bio</span>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight text-center md:text-left">
                  OPTIMIZED FOR <span className="text-red-600 text-shadow-red">MAXIMUM</span> PERFORMANCE.
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Reveal delay={0.4}>
                    <p className="text-gray-400 font-medium text-base sm:text-lg leading-relaxed">
                      วิศวกรซอฟต์แวร์ผู้หลงใหลในความเร็วและความแม่นยำ ผมมองว่าการเขียนโค้ดคือการเซ็ตอัพรถแข่ง ทุกบรรทัดต้องทำหน้าที่อย่างมีประสิทธิภาพ และทุกฟีเจอร์ต้องผ่านการทดสอบในสนามจริงเพื่อให้ได้ผลลัพธ์ที่รวดเร็วที่สุด
                    </p>
                  </Reveal>
                </div>
                <div className="border-l-2 md:border-l border-red-600/30 md:border-white/10 pl-6 md:pl-8 space-y-6">
                  {["Current Team", "Specialization", "Base Operations"].map((label, i) => (
                    <Reveal key={label} delay={0.5 + (i * 0.1)}>
                      <div>
                        <h4 className="text-red-600 font-bold uppercase text-[10px] sm:text-xs tracking-widest mb-1 italic">{label}</h4>
                        <p className="text-lg sm:text-xl font-bold italic uppercase tracking-tight">
                          {i === 0 ? "Independent Contractor" : i === 1 ? "System Architecture" : "Bangkok, Thailand"}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black py-20 sm:py-24 cursor-pointer" onClick={(e) => scrollToNext(e, 'skills')}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
            <div>
              <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-2 italic flex items-center gap-2">
                <Gauge size={14} /> Technical Performance Calibration
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter">DRIVER_SKILLS</h2>
            </div>
            <div className="font-mono text-[10px] text-zinc-500 hidden sm:block">
              SYSTEM CHECK: COMPLETED
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#111] border border-white/10 p-6 sm:p-8 relative overflow-hidden group hover:border-red-600 transition-colors"
              >
                <div className="flex justify-between items-start mb-10 sm:mb-12">
                  <div className="p-3 sm:p-4 bg-red-600 transform -skew-x-12 group-hover:bg-white group-hover:text-red-600 transition-colors">
                    {skill.icon}
                  </div>
                  <div className="text-right">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="block font-mono text-xl sm:text-2xl font-black text-white"
                    >{skill.level}</motion.span>
                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-tighter italic">Precision Score</span>
                  </div>
                </div>
                <h3 className="font-black text-lg sm:text-xl italic uppercase tracking-tighter mb-4">{skill.name}</h3>
                <div className="w-full h-1.5 bg-white/5 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-red-600 relative z-10"
                  ></motion.div>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Activity size={100} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Garage (Alternating) */}
      <section id="garage" className="py-20 sm:py-24 px-6 max-w-7xl mx-auto overflow-hidden cursor-pointer" onClick={(e) => scrollToNext(e, 'garage')}>
        <Reveal>
          <div className="mb-16 sm:mb-20">
            <p className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-2 italic">Pit Stop / Stall Records</p>
            <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter">THE_GARAGE</h2>
          </div>
        </Reveal>

        <div className="space-y-24 sm:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-8 sm:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 relative group"
              >
                <div className="aspect-[16/9] overflow-hidden border border-white/10 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-50 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-0 left-0 bg-red-600 px-4 sm:px-6 py-1 sm:py-2 font-black italic transform -translate-x-1 -translate-y-1">
                    {project.id}
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-white/5 pointer-events-none group-hover:border-red-600/20 transition-colors"></div>
              </motion.div>

              {/* Text Column */}
              <motion.div
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 space-y-4 sm:space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-red-600 font-black italic uppercase tracking-widest text-xs sm:text-sm">{project.category}</span>
                  <div className="h-[1px] flex-grow bg-white/10"></div>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed italic">
                  "{project.description}"
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] sm:text-[10px] border border-white/20 px-2 sm:px-3 py-1 uppercase font-bold tracking-widest bg-white/5">{tag}</span>
                  ))}
                </div>
                <div className="pt-4">
                  <Link href={`/projects/${project.id}`}>
                    <span className="flex items-center gap-2 group/btn bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 font-black italic uppercase tracking-widest transform -skew-x-12 hover:bg-red-600 hover:text-white transition-all active:scale-95 inline-flex">
                      View Project <ArrowUpRight size={18} />
                    </span>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-red-600 py-24 sm:py-32 relative overflow-hidden mb-8 cursor-pointer" onClick={(e) => scrollToNext(e, 'contact')}>
        <div className="absolute inset-0 opacity-10 pointer-events-none checkered-bg"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <Flag className="mx-auto mb-6 sm:mb-8 w-16 h-16 sm:w-20 sm:h-20" />
          </motion.div>
          <h2 className="text-4xl sm:text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-6 sm:mb-8 leading-none">
            REACH THE<br />FINISH LINE
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="bg-black text-white px-10 py-5 text-base sm:text-lg font-black italic uppercase tracking-widest hover:bg-white hover:text-black transition-all transform -skew-x-12 shadow-2xl active:scale-95">
              Hire Me Now
            </button>
            <button className="border-4 border-black text-black px-10 py-5 text-base sm:text-lg font-black italic uppercase tracking-widest hover:bg-black hover:text-white transition-all transform -skew-x-12 active:scale-95">
              Get Resume
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-24 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black italic transform -skew-x-12 text-lg">F1</div>
            <span className="block font-black tracking-tighter text-2xl italic leading-none">THANAKORN_2024</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              VER: 1.1.2 // STATUS: OPTIMIZED
            </div>
            <div className="flex gap-6 mt-2">
              {["LinkedIn", "Github", "X"].map(social => (
                <a key={social} href="#" className="text-[10px] font-black italic uppercase tracking-widest hover:text-red-600 transition-colors">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        html { scroll-behavior: smooth; }
        
        .scanlines {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(255, 255, 255, 0.05) 50%
          );
          background-size: 100% 4px;
        }

        .checkered-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E");
        }

        .glitch-text {
          position: relative;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }

        .glitch-text:hover::before {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
          color: #ff0000;
          z-index: -1;
        }

        .glitch-text:hover::after {
          animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
          color: #00ffff;
          z-index: -2;
        }

        .speed-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(90deg, transparent, #fff, transparent);
          animation: move-right 0.8s linear infinite;
        }

        @keyframes move-right {
          0% { transform: translateX(-100%) skewX(-45deg); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateX(300%) skewX(-45deg); opacity: 0; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(-3px, -3px); }
          60% { transform: translate(3px, 3px); }
          80% { transform: translate(3px, -3px); }
          100% { transform: translate(0); }
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .animate-ticker {
          animation: ticker 15s linear infinite;
        }

        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }

        .text-shadow-red {
          text-shadow: 0 0 15px rgba(220, 38, 38, 0.5);
        }

        section[id] {
          scroll-margin-top: 70px;
        }

        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
      `}} />
    </div>
  );
};

export default App;