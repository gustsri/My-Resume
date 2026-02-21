"use client";
import React from 'react';
import { Flag } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ContactSectionProps {
    scrollToNext: (e: React.MouseEvent, currentId: string) => void;
}

const ContactSection = ({ scrollToNext }: ContactSectionProps) => {
    return (
        <section id="contact" className="bg-[#111] py-24 sm:py-32 relative overflow-hidden mb-8 cursor-pointer" onClick={(e) => scrollToNext(e, 'contact')}>
            <div className="absolute inset-0 opacity-5 pointer-events-none checkered-bg"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                    <Flag className="mx-auto mb-6 sm:mb-8 w-16 h-16 sm:w-20 sm:h-20 text-rose-500" />
                </motion.div>
                <h2 className="text-4xl sm:text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-6 sm:mb-8 leading-none text-white">
                    REACH THE<br />FINISH LINE
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                    <Link href="/contact">
                        <span className="bg-rose-500 text-white px-10 py-5 text-base sm:text-lg font-black italic uppercase tracking-widest hover:bg-white hover:text-black transition-all transform -skew-x-12 shadow-2xl active:scale-95 inline-block">
                            Hire Me Now
                        </span>
                    </Link>
                    <a href="/Kanitphong Sricharoen Resume.pdf" download className="border-4 border-white text-white px-10 py-5 text-base sm:text-lg font-black italic uppercase tracking-widest hover:bg-white hover:text-black transition-all transform -skew-x-12 active:scale-95 inline-block text-center">
                        Get Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
