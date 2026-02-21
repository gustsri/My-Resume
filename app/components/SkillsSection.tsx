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
        <section id="skills" className="bg-black py-20 sm:py-24 border-b border-white/5 cursor-pointer" onClick={(e) => scrollToNext(e, 'skills')}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-20 gap-6">
                    <div>
                        <p className="text-red-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-2 italic flex items-center gap-2">
                            <Gauge size={14} /> {t("skills.sectionLabel")}
                        </p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter">{t("skills.heading")}</h2>
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 hidden sm:block uppercase">
                        // {t("skills.systemCheck")}
                    </div>
                </div>

                <div className="space-y-12">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={group.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                {/* Category Identifier */}
                                <div className="flex-shrink-0 flex items-center gap-4 w-full md:w-80">
                                    <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors transform -skew-x-12">
                                        {group.icon}
                                    </div>
                                    <div>
                                        <span className="block font-mono text-[10px] text-zinc-500 italic leading-none mb-1">{group.id}</span>
                                        <h3 className="text-2xl font-black italic uppercase tracking-tight group-hover:text-red-600 transition-colors">{group.category}</h3>
                                    </div>
                                </div>

                                {/* Skills List */}
                                <div className="flex-grow flex flex-wrap gap-2 sm:gap-4 border-l-2 md:border-l border-white/10 md:pl-8 py-2">
                                    {group.items.map((skill, sIdx) => (
                                        <div key={sIdx} className="relative overflow-hidden group/item">
                                            <span className="text-lg sm:text-xl font-bold italic uppercase tracking-tighter text-zinc-400 group-hover/item:text-white transition-colors cursor-default">
                                                {skill}
                                                {sIdx < group.items.length - 1 && <span className="mx-2 text-red-600 opacity-50">/</span>}
                                            </span>
                                            {/* Underline animation */}
                                            <motion.div
                                                className="absolute bottom-0 left-0 h-[2px] bg-red-600"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                transition={{ delay: 0.5 + (sIdx * 0.1) }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Performance Data */}
                                <div className="hidden lg:block text-right w-32">
                                    <span className="block font-mono text-xs text-zinc-600 uppercase">Perf. Map</span>
                                    <span className="block font-black text-2xl italic text-red-600">{group.performance}</span>
                                </div>
                            </div>

                            {/* Visual Background Decoration */}
                            <div className="absolute -z-10 top-0 left-0 w-full h-full bg-white/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
