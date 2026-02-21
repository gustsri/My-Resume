"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const F1Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [lights, setLights] = useState(0);
    const { t } = useLanguage();

    useEffect(() => {
        const interval = setInterval(() => {
            setLights(prev => (prev < 5 ? prev + 1 : prev));
        }, 600);

        if (lights === 5) {
            setTimeout(() => {
                onComplete();
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [lights, onComplete]);

    return (
        <div className="fixed inset-0 bg-[#040a18] z-[200] flex flex-col items-center justify-center">
            <div className="flex gap-2 sm:gap-4 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-[#0a122c] ${lights >= i ? 'bg-[#dc0000] shadow-[0_0_30px_rgba(220,0,0,0.8)]' : 'bg-[#040a18]'}`}></div>
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-[#0a122c] ${lights >= i ? 'bg-[#dc0000] shadow-[0_0_30px_rgba(220,0,0,0.8)]' : 'bg-[#040a18]'}`}></div>
                    </div>
                ))}
            </div>
            <p className="font-black italic tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-sm animate-pulse text-[#ffc906]">{t("preloader.warming")}</p>
        </div>
    );
};

export default F1Preloader;
