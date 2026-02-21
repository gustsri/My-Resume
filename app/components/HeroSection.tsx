"use client";
import React from 'react';
import { ChevronDown, Radio } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
    scrollTo: (id: string) => void;
    scrollToNext: (e: React.MouseEvent, currentId: string) => void;
}

const HeroSection = ({ scrollTo, scrollToNext }: HeroSectionProps) => {
    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden px-4 cursor-pointer" onClick={(e) => scrollToNext(e, 'hero')}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white transform -rotate-12"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white transform rotate-6"></div>
            </motion.div>

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block border border-white/20 px-4 py-1 mb-4 sm:mb-6 transform -skew-x-12"
                >
                    <p className="text-[8px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] font-bold uppercase flex items-center gap-2">
                        <Radio size={10} className="animate-pulse text-rose-500" /> Live race connection established
                    </p>
                </motion.div>
                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-[10rem] font-black italic tracking-tighter leading-none uppercase select-none">
                    <motion.span
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="inline-block"
                    >FULL</motion.span>&#32;<motion.span
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="text-rose-500"
                    >THROTTLE</motion.span><br />
                    <motion.span
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="inline-block glitch-text"
                        data-text="PROJECTS"
                    >PROJECTS</motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 sm:mt-10 flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-12"
                >
                    <div className="flex items-center gap-2 sm:gap-4 border-l-4 border-rose-500 pl-3 sm:pl-4 text-left">
                        <span className="text-[9px] sm:text-sm font-bold opacity-50 uppercase">Driver</span>
                        <span className="text-base sm:text-2xl font-black tracking-tight">Kanitphong S.</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 border-l-4 border-white/20 pl-3 sm:pl-4 text-left">
                        <span className="text-[9px] sm:text-sm font-bold opacity-50 uppercase">Position</span>
                        <span className="text-base sm:text-2xl font-black tracking-tight uppercase">Fullstack Developer</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 border-l-4 border-white/20 pl-3 sm:pl-4 text-left">
                        <span className="text-[9px] sm:text-sm font-bold opacity-50 uppercase">Position</span>
                        <span className="text-base sm:text-2xl font-black tracking-tight uppercase">System Analyst</span>
                    </div>
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollTo('profile')}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center group active:scale-95 transition-transform"
            >
                <span className="text-[8px] sm:text-[10px] uppercase font-black tracking-widest mb-2 opacity-50 group-hover:opacity-100 transition-opacity">Push to start</span>
                <ChevronDown className="text-rose-500 w-6 h-6 sm:w-8 sm:h-8" />
            </motion.button>
        </section>
    );
};

export default HeroSection;
