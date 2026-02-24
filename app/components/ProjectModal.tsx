"use client";
import React, { useState, useEffect } from "react";
import {
    X,
    ChevronUp,
    Gauge,
    Radio,
    Flag,
    CheckCircle2,
    Cpu,
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Project } from "../projects/projectData";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const { locale, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    // Create a ref for the scrollable container
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        container: scrollContainerRef
    });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                setScrolled(scrollContainerRef.current.scrollTop > 50);
            }
        };
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, [project]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    const statusColor =
        project.status === "COMPLETED" || project.status === "Completed"
            ? "bg-green-500"
            : project.status === "IN DEVELOPMENT" || project.status === "Ongoing"
                ? "bg-yellow-500"
                : "bg-red-500";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 md:p-12"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 50, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="bg-[#040a18] text-white w-full max-w-6xl max-h-full rounded-2xl overflow-hidden relative shadow-2xl flex flex-col border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Progress Bar */}
                <motion.div
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dc0000] via-[#ffc906] to-[#ffc906] z-[100] origin-left"
                    style={{ scaleX }}
                />

                {/* Header with Close Button */}
                <div className="flex justify-between items-center p-6 border-b border-white/10 relative z-[100] bg-[#040a18]">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#dc0000] px-4 py-1.5 font-black italic transform -skew-x-12 text-sm sm:text-base">
                            {project.id}
                        </div>
                        <span className="text-[#dc0000] font-black italic uppercase tracking-widest text-xs sm:text-sm">
                            {project.category}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 bg-white/10 hover:bg-[#dc0000] flex items-center justify-center transform -skew-x-12 group transition-all"
                    >
                        <X size={20} className="transform skew-x-12 group-hover:rotate-90 transition-transform" />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div
                    ref={scrollContainerRef}
                    className="flex-1 overflow-y-auto overflow-x-hidden relative"
                >
                    {/* Screen Effects */}
                    <div className="absolute inset-0 pointer-events-none z-[90] opacity-[0.03] overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>
                    </div>

                    {/* Hero Section (No Image) */}
                    <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 px-6 sm:px-10 overflow-hidden">
                        <div className="relative z-10">
                            {/* Title */}
                            <motion.h1
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none mb-8"
                            >
                                {project.title}
                            </motion.h1>

                            {/* Metadata Row */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-wrap gap-6 sm:gap-10"
                            >
                                {[
                                    { label: t("projectDetail.roleLabel") || "Role", value: project.role[locale] },
                                    { label: t("projectDetail.durationLabel") || "Duration", value: project.duration[locale] },
                                    { label: t("projectDetail.statusLabel") || "Status", value: project.status },
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
                        </div>
                    </section>

                    {/* Description Section */}
                    <section className="py-12 sm:py-16 px-6 sm:px-10 border-y border-white/10 bg-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            <div className="md:col-span-1">
                                <div className="flex items-center gap-3 mb-4 opacity-70">
                                    <Radio size={14} className="text-[#ffc906]" />
                                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase italic text-[#ffc906]">
                                        {t("projectDetail.raceBrief") || "BRIEF"}
                                    </span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-white">
                                    {t("projectDetail.projectOverview") || "PROJECT OVERVIEW"}<br />
                                    <span className="text-[#dc0000]">{t("projectDetail.overviewAccent") || "."}</span>
                                </h2>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-white/80 text-lg sm:text-xl leading-relaxed font-medium">
                                    {project.longDescription[locale]}
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Features Section */}
                    <section className="py-12 sm:py-16 px-6 sm:px-10 bg-[#0a122c] relative overflow-hidden border-t border-white/5">
                        <div className="relative z-10">
                            <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div>
                                    <p className="text-[#ffc906] font-bold tracking-[0.3em] uppercase text-[10px] mb-2 italic flex items-center gap-2">
                                        <Gauge size={14} /> {t("projectDetail.performanceSpecs") || "SPECS"}
                                    </p>
                                    <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter">
                                        {t("projectDetail.keyFeatures") || "KEY FEATURES"}
                                    </h2>
                                </div>
                                <div className="flex gap-2 opacity-80 mb-2">
                                    <div className="w-8 h-2 bg-[#dc0000] transform -skew-x-12"></div>
                                    <div className="w-8 h-2 bg-[#0a122c] border border-white/10 transform -skew-x-12"></div>
                                    <div className="w-4 h-2 bg-[#ffc906] transform -skew-x-12"></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {project.features[locale].map((feature: string, index: number) => (
                                    <div
                                        key={index}
                                        className="bg-[#040a18] border border-white/5 p-6 relative overflow-hidden group hover:border-[#ffc906]/30 transition-all shadow-lg"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-[#dc0000] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                        <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                                            <div className="w-10 h-10 bg-[#040a18] border border-white/10 flex-shrink-0 flex items-center justify-center transform -skew-x-12 group-hover:bg-[#dc0000] group-hover:border-[#dc0000] transition-colors text-white/50 group-hover:text-white mt-1 shadow-sm">
                                                <CheckCircle2 size={18} className="transform skew-x-12" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] text-[#ffc906] font-mono uppercase tracking-widest block mb-1">
                                                    SPEC_{String(index + 1).padStart(2, "0")}
                                                </span>
                                                <p className="text-sm sm:text-base font-medium text-white/80 group-hover:text-white transition-colors leading-relaxed">
                                                    {feature}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack Section */}
                    <section className="py-12 sm:py-16 px-6 sm:px-10 bg-white border-y border-gray-200 relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="mb-10 sm:mb-12">
                                <p className="text-[#dc0000] font-bold tracking-[0.3em] uppercase text-[10px] mb-2 italic flex items-center gap-2">
                                    <Cpu size={14} /> {t("projectDetail.engineComponents") || "COMPONENTS"}
                                </p>
                                <div className="flex items-center gap-6">
                                    <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter text-[#040a18]">
                                        {t("projectDetail.techStack") || "TECH STACK"}
                                    </h2>
                                    <div className="hidden sm:block flex-grow h-[1px] bg-gradient-to-r from-black/10 to-transparent"></div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 sm:gap-4">
                                {project.techStack.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white border border-gray-200 hover:border-[#dc0000] text-[#040a18] hover:text-[#040a18] px-5 py-2.5 font-black italic text-sm transform -skew-x-12 transition-all cursor-default relative overflow-hidden shadow-sm"
                                    >
                                        <div className="absolute top-0 left-0 w-1 h-full bg-[#ffc906] transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                                        <span className="inline-block transform skew-x-12 relative z-10 tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#dc0000] opacity-50 group-hover:opacity-100 group-hover:bg-[#ffc906] transition-colors"></span>
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-[#0a122c] py-16 relative overflow-hidden">
                        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                            <Flag className="mx-auto mb-6 w-12 h-12 text-white" />
                            <h2 className="text-3xl sm:text-4xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                                {t("projectDetail.interestedHeading1") || "INTERESTED IN"}<br />{t("projectDetail.interestedHeading2") || "THIS PROJECT?"}
                            </h2>
                            <button
                                onClick={() => {
                                    onClose();
                                    // A short delay to allow modal to close before navigating
                                    setTimeout(() => {
                                        window.location.href = "/contact";
                                    }, 300);
                                }}
                                className="bg-[#dc0000] text-white px-8 py-4 text-base font-black italic uppercase tracking-widest hover:bg-[#ffc906] hover:text-[#040a18] transition-all transform -skew-x-12 shadow-2xl active:scale-95"
                            >
                                {t("projectDetail.contactMe") || "CONTACT ME"}
                            </button>
                        </div>
                    </section>
                </div>

                {/* Scroll to Top Button for Modal container */}
                {scrolled && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={() => {
                            if (scrollContainerRef.current) {
                                scrollContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }}
                        className="absolute bottom-6 right-6 z-[99] w-12 h-12 bg-[#dc0000] hover:bg-[#ffc906] hover:text-[#040a18] text-white flex items-center justify-center transform -skew-x-12 shadow-lg transition-all active:scale-90 group"
                    >
                        <ChevronUp size={24} className="transform skew-x-12 group-hover:animate-bounce" />
                    </motion.button>
                )}
            </motion.div>
        </motion.div>
    );
}
