"use client";
import React from 'react';
import { Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface SkillGroup {
    id: string;
    category: string;
    icon: React.ReactNode;
    items: string[];
    performance: string;
}

interface SkillsSectionProps {
    skillGroups: SkillGroup[];
    scrollToNext: (e: React.MouseEvent, currentId: string) => void;
}

const SkillsSection = ({ skillGroups, scrollToNext }: SkillsSectionProps) => {
    const { t } = useLanguage();

    return (
        <section id="skills" className="bg-[#040a18] py-20 sm:py-28 border-b border-white/5 cursor-pointer" onClick={(e) => scrollToNext(e, 'skills')}>
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-14 sm:mb-20">
                    <p className="text-[#ffc906] font-bold tracking-[0.3em] uppercase text-[10px] mb-3 italic flex items-center gap-2">
                        <Gauge size={14} className="text-[#ffc906]" /> {t("skills.sectionLabel")}
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
                        {t("skills.heading")}
                    </h2>
                    {/* Red underline accent */}
                    <div className="mt-4 h-1 w-24 bg-[#dc0000]" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={group.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white border border-gray-200 hover:border-[#ffc906]/60 transition-all duration-300 overflow-hidden shadow-sm"
                        >
                            {/* Card top stripe */}
                            <div className="h-1 w-full bg-gradient-to-r from-[#dc0000] to-[#ffc906] opacity-60 group-hover:opacity-100 transition-opacity" />

                            <div className="p-6">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 flex-shrink-0 bg-[#040a18] border border-[#040a18]/10 flex items-center justify-center text-[#ffc906] group-hover:bg-[#dc0000] group-hover:text-white group-hover:border-[#dc0000] transition-all transform -skew-x-6">
                                        <span className="transform skew-x-6">
                                            {group.icon}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="block font-mono text-[9px] text-zinc-400 uppercase tracking-widest leading-none mb-0.5">{group.id}</span>
                                        <h3 className="text-base font-black italic uppercase tracking-tight text-[#040a18] group-hover:text-[#dc0000] transition-colors leading-tight">
                                            {group.category}
                                        </h3>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100 mb-5" />

                                {/* Skill Chips */}
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((skill, sIdx) => (
                                        <motion.span
                                            key={sIdx}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + idx * 0.1 + sIdx * 0.05 }}
                                            className="inline-block px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-gray-50 border border-gray-200 text-gray-600 hover:border-[#ffc906]/60 hover:text-[#dc0000] hover:bg-[#ffc906]/10 transition-all cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover glow effect */}
                            <div className="absolute inset-0 bg-[#ffc906]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
