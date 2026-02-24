"use client";
import React from 'react';
import { Flag } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const ContactSection = () => {
    const { t } = useLanguage();

    return (
        <section id="contact" className="bg-[#0a122c] py-24 sm:py-32 relative overflow-hidden mb-8">
            <div className="absolute inset-0 opacity-5 pointer-events-none checkered-bg"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                    <Flag className="mx-auto mb-6 sm:mb-8 w-16 h-16 sm:w-20 sm:h-20 text-[#ffc906]" />
                </motion.div>
                <h2 className="text-4xl sm:text-7xl md:text-9xl font-black italic uppercase tracking-tighter mb-6 sm:mb-8 leading-none text-white">
                    {t("contact.heading1")}<br />{t("contact.heading2")}
                </h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                    <Link href="/contact" className="w-full sm:w-auto">
                        <span className="bg-[#dc0000] text-white px-10 py-5 text-base sm:text-lg font-black italic uppercase tracking-widest hover:bg-[#ffc906] hover:text-[#040a18] transition-all transform -skew-x-12 shadow-[0_0_20px_rgba(220,0,0,0.3)] active:scale-95 inline-block text-center w-full sm:w-[280px]">
                            {t("contact.hireMeBtn")}
                        </span>
                    </Link>
                    <a href="/Kanitphong Sricharoen Resume.pdf" download className="border-4 border-[#ffc906] text-[#ffc906] px-10 py-5 text-base sm:text-lg font-black italic uppercase tracking-widest hover:bg-[#ffc906] hover:text-[#040a18] transition-all transform -skew-x-12 active:scale-95 inline-block text-center w-full sm:w-[280px]">
                        {t("contact.resumeBtn")}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
