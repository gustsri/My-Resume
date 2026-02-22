"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    ChevronUp,
    Zap,
    Gauge,
    Radio,
    Flag,
    CheckCircle2,
    Cpu,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { getProjectById } from "../projectData";
import { useLanguage } from "../../context/LanguageContext";

export default function ProjectDetail() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const project = getProjectById(id);
    const { locale, setLocale, t } = useLanguage();

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

    if (!project) {
        return (
            <div className="min-h-screen bg-[#040a18] text-white flex items-center justify-center">
                <div className="text-center space-y-6">
                    <h1 className="text-6xl font-black italic text-[#dc0000]">{t("projectDetail.dnf")}</h1>
                    <p className="text-zinc-400 text-lg uppercase tracking-widest font-bold">
                        {t("projectDetail.notFound")}
                    </p>
                    <button
                        onClick={() => router.push("/#garage")}
                        className="bg-[#dc0000] text-white px-8 py-3 font-black italic uppercase tracking-widest transform -skew-x-12 hover:bg-[#ffc906] hover:text-[#040a18] transition-all"
                    >
                        {t("projectDetail.backToGarage")}
                    </button>
                </div>
            </div>
        );
    }

    const statusColor =
        project.status === "COMPLETED"
            ? "bg-green-500"
            : project.status === "IN DEVELOPMENT"
                ? "bg-yellow-500"
                : "bg-red-500";

    return (
        <div className="min-h-screen bg-[#040a18] text-white font-sans selection:bg-[#ffc906] selection:text-[#040a18] overflow-x-hidden md:cursor-none pb-6 sm:pb-8">
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

            {/* Top Navigation Bar */}
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
                        onClick={() => router.push("/#garage")}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 bg-[#dc0000] flex items-center justify-center transform -skew-x-12 group-hover:bg-[#ffc906] group-hover:text-[#040a18] transition-all">
                            <ArrowLeft size={20} className="transform skew-x-12" />
                        </div>
                        <span className="text-xs font-black tracking-[0.2em] uppercase hidden sm:inline opacity-60 group-hover:opacity-100 transition-opacity">
                            {t("projectDetail.backToGarage")}
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
                            <div className="w-8 h-8 bg-[#ffc906] text-[#040a18] flex items-center justify-center font-black italic transform -skew-x-12 text-sm">
                                //
                            </div>
                            <span className="font-black tracking-tighter text-xl italic hidden sm:inline">
                                My Resume
                            </span>
                        </motion.div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-6 overflow-hidden">
                {/* Diagonal Accent Lines */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.05 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 pointer-events-none"
                >
                    <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white transform -rotate-6"></div>
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white transform rotate-3"></div>
                    <div className="absolute top-3/4 left-0 w-full h-[1px] bg-white transform -rotate-12"></div>
                </motion.div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Category & Number */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="bg-[#dc0000] px-4 py-1.5 font-black italic transform -skew-x-12 text-sm sm:text-base">
                            {project.id}
                        </div>
                        <span className="text-[#dc0000] font-black italic uppercase tracking-widest text-xs sm:text-sm">
                            {project.category}
                        </span>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${statusColor} animate-pulse`}></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                                {project.status}
                            </span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter leading-none mb-8"
                    >
                        {project.title}
                    </motion.h1>

                    {/* Metadata Row */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-6 sm:gap-10 mb-12"
                    >
                        {[
                            { label: t("projectDetail.roleLabel"), value: project.role[locale] },
                            { label: t("projectDetail.durationLabel"), value: project.duration[locale] },
                            { label: t("projectDetail.statusLabel"), value: project.status },
                        ].map((meta, i) => (
                            <div
                                key={i}
                                className="border-l-4 border-[#ffc906]/50 pl-4"
                            >
                                <span className="text-[9px] sm:text-[10px] font-bold opacity-40 uppercase tracking-widest block">
                                    {meta.label}
                                </span>
                                <span className="text-sm sm:text-lg font-black italic uppercase tracking-tight">
                                    {meta.value}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="aspect-[21/9] overflow-hidden border border-white/10 relative">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#040a18] via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[9px] sm:text-[10px] border border-white/30 px-3 py-1 uppercase font-bold tracking-widest bg-black/50 backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full border border-[#dc0000]/20 pointer-events-none"></div>
                    </motion.div>
                </div>
            </section>

            {/* Description Section */}
            <section className="py-16 sm:py-24 px-6 border-y border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-4 opacity-50">
                                <Radio size={14} className="text-[#040a18]" />
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase italic text-[#040a18]">
                                    {t("projectDetail.raceBrief")}
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-[#040a18]">
                                {t("projectDetail.projectOverview")}<br />
                                <span className="text-[#dc0000]">{t("projectDetail.overviewAccent")}</span>
                            </h2>
                        </motion.div>
                    </div>
                    <div className="md:col-span-2">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-600 text-lg sm:text-xl leading-relaxed font-medium"
                        >
                            {project.longDescription[locale]}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-24 px-6 bg-[#040a18]">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 sm:mb-16"
                    >
                        <p className="text-[#ffc906] font-bold tracking-[0.3em] uppercase text-[10px] mb-2 italic flex items-center gap-2">
                            <Gauge size={14} /> {t("projectDetail.performanceSpecs")}
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter">
                            {t("projectDetail.keyFeatures")}
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {project.features[locale].map((feature: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#0a122c] border border-white/10 p-6 relative overflow-hidden group hover:border-[#ffc906] transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#dc0000] flex-shrink-0 flex items-center justify-center transform -skew-x-12 group-hover:bg-[#ffc906] group-hover:text-[#040a18] transition-colors">
                                        <CheckCircle2
                                            size={18}
                                            className="transform skew-x-12"
                                        />
                                    </div>
                                    <div>
                                        <span className="text-[10px] text-zinc-500 font-mono uppercase">
                                            SPEC_{String(index + 1).padStart(2, "0")}
                                        </span>
                                        <p className="text-sm sm:text-base font-bold italic uppercase tracking-tight mt-1">
                                            {feature}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Zap size={80} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-16 sm:py-24 px-6 border-y border-gray-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 sm:mb-16"
                    >
                        <p className="text-[#dc0000] font-bold tracking-[0.3em] uppercase text-[10px] mb-2 italic flex items-center gap-2">
                            <Cpu size={14} /> {t("projectDetail.engineComponents")}
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter text-[#040a18]">
                            {t("projectDetail.techStack")}
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap gap-3">
                        {project.techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-[#dc0000] hover:bg-[#ffc906] hover:text-[#040a18] text-white px-5 py-2 font-black italic text-sm transform -skew-x-12 transition-colors cursor-default"
                            >
                                <span className="inline-block transform skew-x-12">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#0a122c] py-20 sm:py-28 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none checkered-bg"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                    >
                        <Flag className="mx-auto mb-6 w-14 h-14 sm:w-16 sm:h-16" />
                    </motion.div>
                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                        {t("projectDetail.interestedHeading1")}<br />{t("projectDetail.interestedHeading2")}
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => router.push("/contact")}
                            className="bg-[#dc0000] text-white px-10 py-5 text-base font-black italic uppercase tracking-widest hover:bg-[#ffc906] hover:text-[#040a18] transition-all transform -skew-x-12 shadow-2xl active:scale-95"
                        >
                            {t("projectDetail.contactMe")}
                        </button>
                        <button
                            onClick={() => router.push("/#garage")}
                            className="border-4 border-[#ffc906] text-[#ffc906] px-10 py-5 text-base font-black italic uppercase tracking-widest hover:bg-[#ffc906] hover:text-[#040a18] transition-all transform -skew-x-12 active:scale-95"
                        >
                            {t("projectDetail.viewOther")}
                        </button>
                    </div>
                </div>
            </section>

            {/* Scroll to Top Button */}
            {scrolled && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
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

        .checkered-bg {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E");
        }

        @media (min-width: 768px) {
          * { cursor: none !important; }
        }
      `,
                }}
            />
        </div>
    );
}
