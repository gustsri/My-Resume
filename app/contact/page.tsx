"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    ChevronUp,
    Github,
    Facebook,
    Phone,
    Mail,
    Linkedin,
    ExternalLink,
    Radio,
    Flag,
    MessageCircle,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const contactChannels = [
    {
        name: "GITHUB",
        icon: <Github size={28} />,
        value: "github.com/yourusername",
        href: "https://github.com/yourusername",
        color: "hover:border-white hover:bg-white/5",
        description: "Source Code & Open Source Projects",
    },
    {
        name: "LINKEDIN",
        icon: <Linkedin size={28} />,
        value: "linkedin.com/in/yourusername",
        href: "https://linkedin.com/in/yourusername",
        color: "hover:border-blue-500 hover:bg-blue-500/5",
        description: "Professional Network & Experience",
    },
    {
        name: "FACEBOOK",
        icon: <Facebook size={28} />,
        value: "facebook.com/yourusername",
        href: "https://facebook.com/yourusername",
        color: "hover:border-blue-600 hover:bg-blue-600/5",
        description: "Social & Community",
    },
    {
        name: "EMAIL",
        icon: <Mail size={28} />,
        value: "your.email@example.com",
        href: "mailto:your.email@example.com",
        color: "hover:border-rose-500 hover:bg-rose-500/5",
        description: "Direct Communication Channel",
    },
    {
        name: "PHONE",
        icon: <Phone size={28} />,
        value: "+66 XX-XXX-XXXX",
        href: "tel:+66XXXXXXXX",
        color: "hover:border-green-500 hover:bg-green-500/5",
        description: "Voice Communication Line",
    },
    {
        name: "LINE",
        icon: <MessageCircle size={28} />,
        value: "@your-line-id",
        href: "https://line.me/ti/p/your-line-id",
        color: "hover:border-green-400 hover:bg-green-400/5",
        description: "Instant Messaging",
    },
];

export default function ContactPage() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleMouseMove = (e: MouseEvent) =>
            setMousePos({ x: e.clientX, y: e.clientY });

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-rose-500 selection:text-white overflow-x-hidden md:cursor-none">
            {/* Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-rose-500 rounded-full z-[9999] pointer-events-none hidden md:flex items-center justify-center"
                animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
                transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
            >
                <div className="w-1 h-1 bg-rose-500 rounded-full"></div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-rose-500 z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Screen Effects */}
            <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>

            {/* Top Navigation */}
            <nav
                className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${scrolled
                    ? "bg-black/95 border-rose-500 py-3"
                    : "bg-transparent border-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <motion.button
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        onClick={() => router.push("/")}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 bg-rose-500 flex items-center justify-center transform -skew-x-12 group-hover:bg-white group-hover:text-black transition-all">
                            <ArrowLeft size={20} className="transform skew-x-12" />
                        </div>
                        <span className="text-xs font-black tracking-[0.2em] uppercase hidden sm:inline opacity-60 group-hover:opacity-100 transition-opacity">
                            Back to Home
                        </span>
                    </motion.button>

                    <motion.div
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => router.push("/")}
                    >
                        <div className="w-8 h-8 bg-rose-500 flex items-center justify-center font-black italic transform -skew-x-12 text-sm">
                            F1
                        </div>
                        <span className="font-black tracking-tighter text-xl italic hidden sm:inline">
                            RACING_DEVEL
                        </span>
                    </motion.div>
                </div>
            </nav>

            {/* Hero */}
            <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 px-6 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.05 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white transform -rotate-6"></div>
                    <div className="absolute top-2/3 left-0 w-full h-[1px] bg-white transform rotate-3"></div>
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-block border border-white/20 px-4 py-1 mb-6 transform -skew-x-12"
                    >
                        <p className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] font-bold uppercase flex items-center gap-2">
                            <Radio size={10} className="animate-pulse text-rose-500" />{" "}
                            Communication channels online
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none mb-4"
                    >
                        HIRE <span className="text-rose-500">ME</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base sm:text-lg font-medium max-w-2xl"
                    >
                        เลือกช่องทางที่สะดวกที่สุดเพื่อติดต่อผม — ทุกสายการสื่อสารพร้อมเชื่อมต่อ
                    </motion.p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-12 sm:py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {contactChannels.map((channel, index) => (
                            <motion.a
                                key={index}
                                href={channel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className={`bg-[#111] border border-white/10 p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 block ${channel.color}`}
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 sm:p-4 bg-rose-500 transform -skew-x-12 group-hover:bg-white group-hover:text-rose-500 transition-colors">
                                        <div className="transform skew-x-12">{channel.icon}</div>
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400"
                                    />
                                </div>

                                <h3 className="font-black text-xl sm:text-2xl italic uppercase tracking-tighter mb-2">
                                    {channel.name}
                                </h3>
                                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-4 italic">
                                    {channel.description}
                                </p>
                                <div className="border-t border-white/10 pt-4">
                                    <p className="text-sm sm:text-base text-gray-300 font-mono truncate">
                                        {channel.value}
                                    </p>
                                </div>

                                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <div className="transform scale-[3]">{channel.icon}</div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Resume CTA */}
            <section className="py-16 sm:py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#111] border border-white/10 p-10 sm:p-16 relative overflow-hidden group hover:border-rose-500 transition-colors"
                    >
                        <Flag className="mx-auto mb-6 w-12 h-12 text-rose-500" />
                        <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter mb-4">
                            GET MY <span className="text-rose-500">RESUME</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
                            ดาวน์โหลด Resume ฉบับเต็มเพื่อดูประสบการณ์ ทักษะ และผลงานทั้งหมดของผม
                        </p>
                        <a
                            href="/Kanitphong Sricharoen Resume.pdf"
                            download
                            className="inline-flex items-center gap-3 bg-rose-500 text-white px-10 py-5 text-base sm:text-lg font-black italic uppercase tracking-widest hover:bg-white hover:text-black transition-all transform -skew-x-12 shadow-2xl active:scale-95"
                        >
                            <span className="transform skew-x-12">Download Resume (PDF)</span>
                        </a>
                        <div className="absolute -right-8 -bottom-8 opacity-5">
                            <Flag size={200} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll to Top */}
            {scrolled && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="fixed bottom-6 right-4 sm:right-6 z-[99] w-12 h-12 sm:w-14 sm:h-14 bg-rose-500 hover:bg-white hover:text-black text-white flex items-center justify-center transform -skew-x-12 shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all active:scale-90 group"
                    aria-label="Scroll to top"
                >
                    <ChevronUp
                        size={24}
                        className="transform skew-x-12 group-hover:animate-bounce"
                    />
                </motion.button>
            )}

            {/* Styles */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        html { scroll-behavior: smooth; }
        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
      `,
                }}
            />
        </div>
    );
}
