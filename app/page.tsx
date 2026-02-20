import React, { useState, useEffect } from 'react';
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
  ChevronDown
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: "01",
      title: "AERODYNAMICS UI",
      category: "UX/UI DESIGN",
      description: "ระบบจัดการข้อมูลแบบ Real-time ที่ลดแรงต้านการใช้งานของผู้ใช้ด้วยการออกแบบ Interface ที่ลื่นไหลเหมือนรถแข่งที่ผ่านอุโมงค์ลม เน้นประสิทธิภาพสูงสุดในการเข้าถึงข้อมูลสำคัญในพริบตา",
      tags: ["React", "Three.js", "Figma"],
      img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "PIT-STOP E-COMMERCE",
      category: "FULLSTACK",
      description: "แพลตฟอร์มซื้อขายที่เน้นความเร็วในการชำระเงินเพียง 3 วินาที (The 3-Second Pit Stop) ลดขั้นตอนที่ซับซ้อนเพื่อให้ผู้ใช้ได้รับประสบการณ์การซื้อที่รวดเร็วและแม่นยำที่สุด",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
      img: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "TELEMETRY DASHBOARD",
      category: "DATA VISUALIZATION",
      description: "แดชบอร์ดแสดงผลข้อมูลเซนเซอร์ในรูปแบบกราฟที่อ่านง่ายที่สุด เพื่อการวิเคราะห์ข้อมูลในระดับวินาทีต่อวินาที ช่วยให้นักพัฒนาเห็นภาพรวมของระบบได้อย่างแม่นยำเหมือนวิศวกรข้างสนาม",
      tags: ["Python", "D3.js", "IoT"],
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const skills = [
    { name: "ENGINEERING", level: 95, icon: <Settings size={18} /> },
    { name: "REACTION TIME", level: 90, icon: <Zap size={18} /> },
    { name: "STRATEGY", level: 85, icon: <Activity size={18} /> },
    { name: "COMPUTING", level: 92, icon: <Cpu size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-black/95 border-red-600 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center font-black italic transform -skew-x-12 text-sm">F1</div>
            <span className="font-black tracking-tighter text-xl italic">RACING_DEVEL</span>
          </div>

          <div className="hidden md:flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
            <a href="#profile" className="hover:text-red-500 transition-colors">Profile</a>
            <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
            <a href="#garage" className="hover:text-red-500 transition-colors">The Garage</a>
            <a href="#contact" className="hover:text-red-500 transition-colors">Finish Line</a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 text-3xl font-black italic uppercase tracking-tighter">
          <a href="#profile" onClick={() => setIsMenuOpen(false)}>Profile</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#garage" onClick={() => setIsMenuOpen(false)}>The Garage</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Finish Line</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white transform -rotate-12"></div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white transform rotate-6"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="inline-block border border-white/20 px-4 py-1 mb-6 transform -skew-x-12">
            <p className="text-[10px] tracking-[0.3em] font-bold uppercase">Ready for deployment</p>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter leading-none uppercase select-none">
            FULL <span className="text-red-600">THROTTLE</span><br />
            PROJECTS
          </h1>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 border-l-4 border-red-600 pl-4 text-left">
              <span className="text-sm font-bold opacity-50 uppercase">Driver</span>
              <span className="text-2xl font-black tracking-tight">THANAKORN W.</span>
            </div>
            <div className="flex items-center gap-4 border-l-4 border-white/20 pl-4 text-left">
              <span className="text-sm font-bold opacity-50 uppercase">Position</span>
              <span className="text-2xl font-black tracking-tight uppercase">Fullstack Engineer</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <ChevronDown className="text-red-600" />
        </div>
      </section>

      {/* Profile Section (New: 1:3 Ratio) */}
      <section id="profile" className="py-24 px-6 border-y border-white/5 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-4 gap-12 items-start">
            {/* Image (1/4) */}
            <div className="w-full md:col-span-1 relative">
              <div className="aspect-[3/4] overflow-hidden border-2 border-red-600 transform hover:scale-[1.02] transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-red-600"></div>
              <div className="mt-4 flex gap-4">
                <div className="bg-red-600 px-3 py-1 font-bold text-[10px] transform -skew-x-12">RANK: PRO</div>
                <div className="bg-white text-black px-3 py-1 font-bold text-[10px] transform -skew-x-12 uppercase">Sector 1</div>
              </div>
            </div>

            {/* Text (3/4) */}
            <div className="md:col-span-3 space-y-8">
              <div className="flex items-center gap-4 opacity-50">
                <User size={16} />
                <span className="text-xs font-bold tracking-[0.3em] uppercase italic">Driver Profile & Bio</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight">
                OPTIMIZED FOR <span className="text-red-600">MAXIMUM</span> PERFORMANCE.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <p className="text-gray-400 font-medium text-lg leading-relaxed">
                    วิศวกรซอฟต์แวร์ผู้หลงใหลในความเร็วและความแม่นยำ ผมมองว่าการเขียนโค้ดคือการเซ็ตอัพรถแข่ง ทุกบรรทัดต้องทำหน้าที่อย่างมีประสิทธิภาพ และทุกฟีเจอร์ต้องผ่านการทดสอบในสนามจริงเพื่อให้ได้ผลลัพธ์ที่รวดเร็วที่สุด
                  </p>
                  <p className="text-gray-400 font-medium text-lg leading-relaxed">
                    ประสบการณ์กว่า 5 ปีในวงการ Tech ที่เน้นการแก้ปัญหาที่ซับซ้อนและการสร้างสรรค์ประสบการณ์ที่ผู้ใช้จะไม่สามารถลืมได้
                  </p>
                </div>
                <div className="border-l border-white/10 pl-8 space-y-6">
                  <div>
                    <h4 className="text-red-600 font-bold uppercase text-xs tracking-widest mb-2 italic">Current Team</h4>
                    <p className="text-xl font-bold italic uppercase tracking-tight">Independent Contractor / Freelance</p>
                  </div>
                  <div>
                    <h4 className="text-red-600 font-bold uppercase text-xs tracking-widest mb-2 italic">Specialization</h4>
                    <p className="text-xl font-bold italic uppercase tracking-tight">System Architecture & UI Aerodynamics</p>
                  </div>
                  <div>
                    <h4 className="text-red-600 font-bold uppercase text-xs tracking-widest mb-2 italic">Base Operations</h4>
                    <p className="text-xl font-bold italic uppercase tracking-tight">Bangkok, Thailand [GMT+7]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section (Renamed from Telemetry) */}
      <section id="skills" className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-2 italic flex items-center gap-2">
                <Gauge size={14} /> Technical Performance Calibration
              </p>
              <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">DRIVER_SKILLS</h2>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-gray-500">ENGINE STATUS: OPTIMIZED [OK]</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-[#111] border border-white/10 p-8 relative overflow-hidden group hover:border-red-600 transition-colors">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-red-600 transform -skew-x-12 group-hover:bg-white group-hover:text-red-600 transition-colors">
                    {skill.icon}
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-2xl font-black text-white">{skill.level}</span>
                    <span className="block font-mono text-[10px] text-gray-500">PTS</span>
                  </div>
                </div>
                <h3 className="font-black text-xl italic uppercase tracking-tighter mb-4">{skill.name}</h3>
                <div className="w-full h-1 bg-white/5">
                  <div className="h-full bg-red-600 transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                </div>
                {/* Decorative background grid */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Activity size={100} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
            {["React.js", "Node.js", "TypeScript", "AWS", "Python", "SQL", "Docker", "Figma"].map((tech, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-red-600"></div>
                <span className="font-bold uppercase tracking-widest text-[11px] opacity-70 italic">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Garage (Projects - 1 row per project, Alternating) */}
      <section id="garage" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-20">
          <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs mb-2 italic">Pit Stop / Stall Records</p>
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">THE_GARAGE</h2>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Column */}
              <div className="w-full md:w-1/2 relative group">
                <div className="aspect-[16/9] overflow-hidden border border-white/10 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                  />
                  {/* Overlay on Image */}
                  <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* Project Tag */}
                  <div className="absolute top-0 left-0 bg-red-600 px-6 py-2 font-black italic transform -translate-x-1 -translate-y-1">
                    {project.id}
                  </div>
                </div>
                {/* Visual Decoration */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-white/5 pointer-events-none"></div>
              </div>

              {/* Text Column */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-red-600 font-black italic uppercase tracking-widest text-sm">{project.category}</span>
                  <div className="h-[1px] flex-grow bg-white/10"></div>
                </div>
                <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-lg font-medium leading-relaxed italic">
                  "{project.description}"
                </p>
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] border border-white/20 px-3 py-1 uppercase font-bold tracking-widest bg-white/5">{tag}</span>
                  ))}
                </div>
                <div className="pt-6">
                  <button className="flex items-center gap-2 group/btn bg-white text-black px-8 py-3 font-black italic uppercase tracking-widest transform -skew-x-12 hover:bg-red-600 hover:text-white transition-all">
                    View Project <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section / Finish Line */}
      <section id="contact" className="bg-red-600 py-32 relative overflow-hidden">
        {/* Checkered Flag Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Flag className="mx-auto mb-8 w-20 h-20" />
          <h2 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-8 leading-none">
            REACH THE<br />FINISH LINE
          </h2>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-12 italic">
            สนใจดึงตัวเข้าทีม? ติดต่อเพื่อเริ่มการแข่งขันครั้งใหม่ได้ที่นี่
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="bg-black text-white px-12 py-6 text-lg font-black italic uppercase tracking-widest hover:bg-white hover:text-black transition-all transform -skew-x-12 shadow-2xl">
              Hire Me Now
            </button>
            <button className="border-4 border-black text-black px-12 py-6 text-lg font-black italic uppercase tracking-widest hover:bg-black hover:text-white transition-all transform -skew-x-12">
              Get Telemetry (CV)
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black italic transform -skew-x-12 text-lg">F1</div>
            <div>
              <span className="block font-black tracking-tighter text-2xl italic leading-none">THANAKORN_2024</span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Digital Driver License: #TRK-9922</span>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.5em] font-bold text-center md:text-right">
              Built with precision for high-speed browsing.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-red-500 transition-colors uppercase font-black text-sm tracking-widest italic underline decoration-2 underline-offset-4">LinkedIn</a>
              <a href="#" className="hover:text-red-500 transition-colors uppercase font-black text-sm tracking-widest italic underline decoration-2 underline-offset-4">Github</a>
              <a href="#" className="hover:text-red-500 transition-colors uppercase font-black text-sm tracking-widest italic underline decoration-2 underline-offset-4">Instagram</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Style Extension */}
      <style dangerouslySetInnerHTML={{
        __html: `
        html {
          scroll-behavior: smooth;
        }
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
        @keyframes scan {
          0% { top: 0% }
          100% { top: 100% }
        }
      `}} />
    </div>
  );
};

export default App;