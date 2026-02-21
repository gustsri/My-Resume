"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Reveal = ({ children, width = "100%", delay = 0.2 }: { children: React.ReactNode; width?: string; delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
