"use client";
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FooterSection = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-16 sm:py-24 px-6 border-t border-[#0a122c] bg-[#040a18]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#ffc906] text-[#040a18] flex items-center justify-center font-black italic transform -skew-x-12 text-lg">//</div>
                    <span className="block font-black tracking-tighter text-2xl italic leading-none text-white">{t("footer.name")}</span>
                </div>
                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                        {t("footer.version")}
                    </div>
                    <div className="flex flex-wrap justify-end gap-x-6 gap-y-2 mt-2">
                        {[
                            { name: "GitHub", href: "https://github.com/gustsri" },
                            { name: "LinkedIn", href: "https://www.linkedin.com/in/kanitphong-gust/" },
                            { name: "Facebook", href: "https://web.facebook.com/gus.kanitphong.sricharoen" },
                            { name: "Email", href: "mailto:gustsri@gmail.com" },
                            { name: "Line", href: "https://line.me/ti/p/gus_srii" }
                        ].map(social => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[10px] font-black italic uppercase tracking-widest text-zinc-400 hover:text-[#ffc906] transition-colors"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
