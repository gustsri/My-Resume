"use client";
import React from 'react';
import { Gauge, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface Skill {
    name: string;
    level: number;
    icon: React.ReactNode;
}

interface SkillsSectionProps {
    skills: Skill[];
    scrollToNext: (e: React.MouseEvent, currentId: string) => void;
}

const SkillsSection = ({ skills, scrollToNext }: SkillsSectionProps) => {
    const { t } = useLanguage();

    return (
        <section id="skills" className="bg-black py-20 sm:py-24 cursor-pointer" onClick={(e) => scrollToNext(e, 'skills')}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6">
                    <div>
                        <p className="text-rose-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-2 italic flex items-center gap-2">
                            <Gauge size={14} /> {t("skills.sectionLabel")}
                        </p>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black italic uppercase tracking-tighter">{t("skills.heading")}</h2>
                    </div>
                    <div className="font-mono text-[10px] text-zinc-500 hidden sm:block">
                        {t("skills.systemCheck")}
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
                            className="bg-[#111] border border-white/10 p-6 sm:p-8 relative overflow-hidden group hover:border-rose-500 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-10 sm:mb-12">
                                <div className="p-3 sm:p-4 bg-rose-500 transform -skew-x-12 group-hover:bg-white group-hover:text-rose-500 transition-colors">
                                    {skill.icon}
                                </div>
                                <div className="text-right">
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="block font-mono text-xl sm:text-2xl font-black text-white"
                                    >{skill.level}</motion.span>
                                    <span className="block font-mono text-[10px] text-gray-500 uppercase tracking-tighter italic">{t("skills.precisionScore")}</span>
                                </div>
                            </div>
                            <h3 className="font-black text-lg sm:text-xl italic uppercase tracking-tighter mb-4">{skill.name}</h3>
                            <div className="w-full h-1.5 bg-white/5 relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="h-full bg-rose-500 relative z-10"
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
    );
};

export default SkillsSection;
