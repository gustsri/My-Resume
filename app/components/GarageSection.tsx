"use client";
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { projects } from '../projects/projectData';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';

const GarageSection = () => {
    const { locale, t } = useLanguage();

    return (
        <section id="garage" className="py-20 sm:py-24 px-6 bg-[#f8f9fa] overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="mb-12 sm:mb-16">
                        <p className="text-[#dc0000] font-bold tracking-widest uppercase text-xs mb-3">{t("garage.sectionLabel") || "PROJECTS"}</p>
                        <h2 className="text-4xl sm:text-5xl font-black uppercase text-[#040a18]">{t("garage.heading") || "Latest Works"}</h2>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full"
                        >
                            <div className="absolute top-0 left-0 w-0 h-1 bg-[#dc0000] group-hover:w-full transition-all duration-500 rounded-t-2xl"></div>

                            <div className="space-y-4 sm:space-y-5 flex-grow">
                                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight text-[#040a18] group-hover:text-[#dc0000] transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {project.description[locale]}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-1">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-[10px] sm:text-xs bg-gray-50 border border-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-semibold">{tech}</span>
                                    ))}
                                </div>

                                <div className="pt-2">
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#dc0000]">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="pt-6 mt-auto border-t border-gray-50">
                                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#040a18] hover:text-[#dc0000] transition-colors group/link">
                                    {t("garage.viewProject") || "View project"}
                                    <ArrowUpRight size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GarageSection;
