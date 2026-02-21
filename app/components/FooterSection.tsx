"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FooterSection = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-16 sm:py-24 px-6 border-t border-white/10 bg-black">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black italic transform -skew-x-12 text-lg">F1</div>
                    <span className="block font-black tracking-tighter text-2xl italic leading-none">{t("footer.name")}</span>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        {t("footer.version")}
                    </div>
                    <div className="flex gap-6 mt-2">
                        {["LinkedIn", "Github", "X"].map(social => (
                            <a key={social} href="#" className="text-[10px] font-black italic uppercase tracking-widest hover:text-rose-500 transition-colors">{social}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
