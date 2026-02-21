"use client";
import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

interface ProfileSectionProps {
    scrollToNext: (e: React.MouseEvent, currentId: string) => void;
}

const ProfileSection = ({ scrollToNext }: ProfileSectionProps) => {
    const { t } = useLanguage();

    const infoItems = [
        { label: t("profile.currentTeam"), value: t("profile.currentTeamValue") },
        { label: t("profile.specialization"), value: t("profile.specializationValue") },
        { label: t("profile.baseOps"), value: t("profile.baseOpsValue") },
    ];

    return (
        <section id="profile" className="py-20 sm:py-24 px-6 border-y border-gray-200 bg-white cursor-pointer" onClick={(e) => scrollToNext(e, 'profile')}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:grid md:grid-cols-4 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full sm:max-w-sm md:col-span-1 relative mx-auto md:mx-0"
                    >
                        <div className="aspect-[3/4] overflow-hidden border-2 border-rose-500 relative group">
                            <img
                                src="/Kanitphong.gif"
                                // src="/GUS.png"
                                // src="/Gemini_Generated_Image_mtdlv0mtdlv0mtdl.png"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-rose-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-l-2 border-rose-500"></div>
                    </motion.div>

                    <div className="md:col-span-3 space-y-8">
                        <Reveal>
                            <div className="flex items-center gap-4 opacity-50">
                                <User size={16} className="text-gray-500" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase italic text-gray-500">{t("profile.sectionLabel")}</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight text-center md:text-left text-gray-900">
                                {t("profile.heading")} <span className="text-rose-500 text-shadow-rose">{t("profile.headingAccent")}</span> {t("profile.headingEnd")}
                            </h2>
                        </Reveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <Reveal delay={0.4}>
                                    <p className="text-gray-600 font-medium text-base sm:text-lg leading-relaxed">
                                        {t("profile.bio")}
                                    </p>
                                </Reveal>
                            </div>
                            <div className="border-l-2 md:border-l border-rose-500/30 md:border-gray-200 pl-6 md:pl-8 space-y-6">
                                {infoItems.map((item, i) => (
                                    <Reveal key={item.label} delay={0.5 + (i * 0.1)}>
                                        <div>
                                            <h4 className="text-rose-500 font-bold uppercase text-[10px] sm:text-xs tracking-widest mb-1 italic">{item.label}</h4>
                                            <p className="text-lg sm:text-xl font-bold italic uppercase tracking-tight text-gray-900">
                                                {item.value}
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
    );
};

export default ProfileSection;
