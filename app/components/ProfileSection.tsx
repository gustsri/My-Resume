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
                        <div className="aspect-[3/4] overflow-hidden border-2 border-[#dc0000] relative group shadow-[0_0_30px_rgba(220,0,0,0.1)]">
                            <img
                                src="/Kanitphong.gif"
                                alt="Profile"
                                // className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110"
                                className="w-full h-full object-cover scale transition-all duration-700 group-hover:scale-0 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-l-2 border-[#dc0000]"></div>
                        <div className="mt-4 flex gap-4">
                            <div className="bg-[#dc0000] text-white px-3 py-1 font-bold text-[10px] transform -skew-x-12 uppercase">Rank: Pro</div>
                            <div className="bg-[#040a18] text-white px-3 py-1 font-bold text-[10px] transform -skew-x-12 uppercase">Sector 1</div>
                        </div>
                    </motion.div>

                    <div className="md:col-span-3 space-y-8">
                        <Reveal>
                            <div className="flex items-center gap-4 opacity-70">
                                <User size={16} className="text-[#0a122c]" />
                                <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase italic text-[#0a122c]">{t("profile.sectionLabel")}</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-tight text-center md:text-left text-[#040a18]">
                                {t("profile.heading")} <span className="text-[#dc0000] text-shadow-red">{t("profile.headingAccent")}</span>
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
                            <div className="border-l-2 md:border-l border-[#dc0000]/30 md:border-gray-200 pl-6 md:pl-8 space-y-6">
                                {infoItems.map((item, i) => (
                                    <Reveal key={item.label} delay={0.5 + (i * 0.1)}>
                                        <div>
                                            <h4 className="text-[#dc0000] font-bold uppercase text-[10px] sm:text-xs tracking-widest mb-1 italic">{item.label}</h4>
                                            <p className="text-lg sm:text-xl font-bold italic uppercase tracking-tight text-[#040a18]">
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
