"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '../projects/projectData';
import Reveal from './Reveal';

interface GarageSectionProps {
    scrollToNext: (e: React.MouseEvent, currentId: string) => void;
}

const GarageSection = ({ scrollToNext }: GarageSectionProps) => {
    return (
        <section id="garage" className="py-20 sm:py-24 px-6 bg-white overflow-hidden cursor-pointer" onClick={(e) => scrollToNext(e, 'garage')}>
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="mb-16 sm:mb-20">
                        <p className="text-rose-500 font-bold tracking-[0.2em] uppercase text-[10px] mb-2 italic">Pit Stop / Stall Records</p>
                        <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-gray-900">THE_GARAGE</h2>
                    </div>
                </Reveal>

                <div className="space-y-24 sm:space-y-32">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row gap-8 sm:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Image Column */}
                            <motion.div
                                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-1/2 relative group"
                            >
                                <div className="aspect-[16/9] overflow-hidden border border-gray-200 relative">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                                    />
                                    <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute top-0 left-0 bg-rose-500 text-white px-4 sm:px-6 py-1 sm:py-2 font-black italic transform -translate-x-1 -translate-y-1">
                                        {project.id}
                                    </div>
                                </div>
                                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-gray-200 pointer-events-none group-hover:border-rose-500/20 transition-colors"></div>
                            </motion.div>

                            {/* Text Column */}
                            <motion.div
                                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-1/2 space-y-4 sm:space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-rose-500 font-black italic uppercase tracking-widest text-xs sm:text-sm">{project.category}</span>
                                    <div className="h-[1px] flex-grow bg-gray-300"></div>
                                </div>
                                <h3 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-gray-900 hover:text-rose-500 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-base sm:text-lg font-medium leading-relaxed italic">
                                    &quot;{project.description}&quot;
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[9px] sm:text-[10px] border border-gray-300 px-2 sm:px-3 py-1 uppercase font-bold tracking-widest bg-gray-100 text-gray-700">{tag}</span>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <Link href={`/projects/${project.id}`}>
                                        <span className="flex items-center gap-2 group/btn bg-gray-900 text-white px-6 sm:px-8 py-2.5 sm:py-3 font-black italic uppercase tracking-widest transform -skew-x-12 hover:bg-rose-500 hover:text-white transition-all active:scale-95 inline-flex">
                                            View Project <ArrowUpRight size={18} />
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GarageSection;
