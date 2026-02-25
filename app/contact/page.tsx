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
import { useLanguage } from "../context/LanguageContext";

export default function ContactPage() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const { locale, setLocale, t } = useLanguage();

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

    const contactChannels = [
        {
            nameKey: "contactPage.github",
            icon: <Github size={28} />,
            value: "gustsri",
            href: "https://github.com/gustsri",
            color: "bg-[#181717] group-hover:text-[#181717]", // GitHub gray/black
        },
        {
            nameKey: "contactPage.linkedin",
            icon: <Linkedin size={28} />,
            value: "Kanitphong Gust",
            href: "https://www.linkedin.com/in/kanitphong-gust/",
            color: "bg-[#0A66C2] group-hover:text-[#0A66C2]", // LinkedIn blue
        },
        {
            nameKey: "contactPage.facebook",
            icon: <Facebook size={28} />,
            value: "Gus Kanitphong Sricharoen",
            href: "https://web.facebook.com/gus.kanitphong.sricharoen",
            color: "bg-[#1877F2] group-hover:text-[#1877F2]", // Facebook blue
        },
        {
            nameKey: "contactPage.email",
            icon: <Mail size={28} />,
            value: "gustsri@gmail.com",
            href: "mailto:gustsri@gmail.com",
            color: "bg-[#EA4335] group-hover:text-[#EA4335]", // Google / Gmail red
        },
        {
            nameKey: "contactPage.phone",
            icon: <Phone size={28} />,
            value: "0987623202",
            href: "tel:0987623202",
            color: "bg-[#10B981] group-hover:text-[#10B981]", // Emerald Green
        },
        {
            nameKey: "contactPage.line",
            icon: <MessageCircle size={28} />,
            value: "gus_srii",
            href: "https://line.me/ti/p/gus_srii",
            color: "bg-[#00C300] group-hover:text-[#00C300]", // LINE green
        },
    ];

    return (
        <div className="min-h-screen bg-[#040a18] text-white font-sans selection:bg-[#ffc906] selection:text-[#040a18] overflow-x-hidden md:cursor-none">
            {/* Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-[#ffc906] rounded-full z-[9999] pointer-events-none hidden md:flex items-center justify-center"
                animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
                transition={{ type: "tween", duration: 0.05, ease: "linear" }}
            >
                <div className="w-1.5 h-1.5 bg-[#dc0000] rounded-full"></div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dc0000] via-[#ffc906] to-[#ffc906] z-[100] origin-left"
                style={{ scaleX }}
            />

            {/* Screen Effects */}
            <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
            </div>

            {/* Top Navigation */}
            <nav
                className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${scrolled
                    ? "bg-[#040a18]/95 border-[#ffc906]/30 py-3 backdrop-blur-sm"
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
                        <div className="w-10 h-10 bg-[#dc0000] flex items-center justify-center transform -skew-x-12 group-hover:bg-[#ffc906] group-hover:text-[#040a18] transition-all">
                            <ArrowLeft size={20} className="transform skew-x-12" />
                        </div>
                        <span className="text-xs font-black tracking-[0.2em] uppercase hidden sm:inline opacity-60 group-hover:opacity-100 transition-opacity">
                            {t("contactPage.backToHome")}
                        </span>
                    </motion.button>

                    <div className="flex items-center gap-4">
                        {/* Language Toggle */}
                        <div className="flex items-center transform -skew-x-12 border border-white/20 overflow-hidden">
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
                        </div>

                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => router.push("/")}
                        >
                            <span className="font-black tracking-tighter text-xl italic hidden sm:inline">
                                My Resume
                            </span>
                        </motion.div>
                    </div>
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
                            <Radio size={10} className="animate-pulse text-[#dc0000]" />{" "}
                            {t("contactPage.badge")}
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic uppercase tracking-tighter leading-none mb-4"
                    >
                        {t("contactPage.heading")} <span className="text-[#ffc906]">{t("contactPage.headingAccent")}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base sm:text-lg font-medium max-w-2xl"
                    >
                        {t("contactPage.description")}
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
                                className={`bg-white border border-gray-200 p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 block hover:shadow-[0_0_20px_rgba(220,0,0,0.15)] hover:border-[#dc0000]`}
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-[#ffc906] transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className={`p-3 sm:p-4 ${channel.color.split(' ')[0]} text-white transform -skew-x-12 group-hover:bg-white border border-transparent group-hover:border-gray-200 ${channel.color.split(' ')[1]} transition-colors shadow-sm`}>
                                        <div className="transform skew-x-12">{channel.icon}</div>
                                    </div>
                                    <ExternalLink
                                        size={16}
                                        className="opacity-0 group-hover:opacity-100 transition-opacity text-[#dc0000]"
                                    />
                                </div>

                                <h3 className="font-black text-xl sm:text-2xl italic uppercase tracking-tighter mb-2 text-[#040a18] relative z-10">
                                    {t(`${channel.nameKey}.name`)}
                                </h3>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-4 italic relative z-10">
                                    {t(`${channel.nameKey}.description`)}
                                </p>
                                <div className="border-t border-gray-200 pt-4 relative z-10 group-hover:border-[#dc0000]/30 transition-colors">
                                    <p className="text-sm sm:text-base text-gray-600 group-hover:text-[#040a18] font-mono truncate transition-colors">
                                        {channel.value}
                                    </p>
                                </div>

                                <div className={`absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none group-hover:${channel.color.split(' ')[1].replace('text-', 'text-').replace('group-hover:', '')}`}>
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
                        className="bg-[#0a122c] border border-white/10 p-10 sm:p-16 relative overflow-hidden group hover:border-[#ffc906] transition-colors"
                    >
                        <Flag className="mx-auto mb-6 w-12 h-12 text-[#ffc906]" />
                        <h2 className="text-3xl sm:text-5xl font-black italic uppercase tracking-tighter mb-4">
                            {t("contactPage.resumeSection.heading")} <span className="text-[#dc0000]">{t("contactPage.resumeSection.headingAccent")}</span>
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
                            {t("contactPage.resumeSection.description")}
                        </p>
                        <a
                            href="/Kanitphong Sricharoen Resume.pdf"
                            download
                            className="inline-flex items-center gap-3 bg-[#dc0000] text-white px-10 py-5 text-base sm:text-lg font-black italic uppercase tracking-widest hover:bg-[#ffc906] hover:text-[#040a18] transition-all transform -skew-x-12 shadow-2xl active:scale-95"
                        >
                            <span className="transform skew-x-12">{t("contactPage.resumeSection.downloadBtn")}</span>
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
                    className="fixed bottom-6 right-4 sm:right-6 z-[99] w-12 h-12 sm:w-14 sm:h-14 bg-[#dc0000] hover:bg-[#ffc906] hover:text-[#040a18] text-white flex items-center justify-center transform -skew-x-12 shadow-[0_0_20px_rgba(220,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,201,6,0.3)] transition-all active:scale-90 group"
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
