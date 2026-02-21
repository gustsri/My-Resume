"use client";
import React, { useState, useEffect } from 'react';

const F1Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [lights, setLights] = useState(0);

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
        <div className="fixed inset-0 bg-black z-[200] flex flex-col items-center justify-center">
            <div className="flex gap-2 sm:gap-4 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex flex-col gap-2">
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-zinc-800 ${lights >= i ? 'bg-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.8)]' : 'bg-zinc-900'}`}></div>
                        <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full border-4 border-zinc-800 ${lights >= i ? 'bg-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.8)]' : 'bg-zinc-900'}`}></div>
                    </div>
                ))}
            </div>
            <p className="font-black italic tracking-[0.3em] sm:tracking-[0.5em] text-[10px] sm:text-sm animate-pulse">WARMING UP ENGINES...</p>
        </div>
    );
};

export default F1Preloader;
