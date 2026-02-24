"use client";
import React from 'react';
import { ChevronDown, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
    scrollTo: (id: string) => void;
}

const HeroSection = ({ scrollTo }: HeroSectionProps) => {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden px-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-[#ffc906]/30 transform -rotate-12"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#ffc906]/30 transform rotate-6"></div>
            </motion.div>

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block border border-[#ffc906]/30 bg-[#0a122c]/50 px-4 py-1 mb-4 sm:mb-6 transform -skew-x-12"
                >
                    <p className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] font-bold uppercase flex items-center gap-2 text-[#ffc906]">
                        <Radio size={10} className="animate-pulse text-[#dc0000]" /> {t("hero.badge")}
                    </p>
                </motion.div>
                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-[10rem] font-black italic tracking-tighter leading-none uppercase select-none">
                    <motion.span
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="inline-block text-white"
                    >{t("hero.title1")}</motion.span>&#32;<motion.span
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="text-[#ffc906] drop-shadow-[0_0_15px_rgba(255,201,6,0.3)]"
                    >{t("hero.title2")}</motion.span><br />
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="inline-block glitch-text text-white"
                        data-text={t("hero.title3")}
                    >{t("hero.title3")}</motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-12"
                >
                    <div className="flex items-center gap-2 sm:gap-4 border-l-4 border-[#ffc906] pl-3 sm:pl-4 text-left">
                        <span className="text-[9px] sm:text-sm font-bold opacity-50 uppercase text-white">{t("hero.driverLabel")}</span>
                        <span className="text-base sm:text-2xl font-black tracking-tight text-white">{t("hero.driverName")}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 border-l-4 border-[#dc0000] pl-3 sm:pl-4 text-left">
                        <span className="text-[9px] sm:text-sm font-bold opacity-50 uppercase text-white">{t("hero.positionLabel")}</span>
                        <span className="text-base sm:text-2xl font-black tracking-tight uppercase text-white">{t("hero.position1")}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 border-l-4 border-[#dc0000] pl-3 sm:pl-4 text-left">
                        <span className="text-[9px] sm:text-sm font-bold opacity-50 uppercase text-white">{t("hero.positionLabel")}</span>
                        <span className="text-base sm:text-2xl font-black tracking-tight uppercase text-white">{t("hero.position2")}</span>
                    </div>
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollTo('profile')}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center group active:scale-95 transition-transform"
            >
                <span className="text-[8px] sm:text-[10px] uppercase font-black tracking-widest mb-2 opacity-50 group-hover:opacity-100 transition-opacity text-white">{t("hero.pushToStart")}</span>
                <ChevronDown className="text-[#ffc906] w-6 h-6 sm:w-8 sm:h-8 drop-shadow-[0_0_10px_rgba(255,201,6,0.5)]" />
            </motion.button>
        </section>
    );
};

export default HeroSection;
