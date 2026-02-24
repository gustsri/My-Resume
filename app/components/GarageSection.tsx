"use client";
import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../projects/projectData';
import Reveal from './Reveal';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from './ProjectModal';

const GarageSection = () => {
    const { locale, t } = useLanguage();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="garage" className="py-20 sm:py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="mb-16 sm:mb-20">
                        <p className="text-[#dc0000] font-bold tracking-[0.2em] uppercase text-[10px] mb-2 italic">{t("garage.sectionLabel")}</p>
                        <h2 className="text-4xl sm:text-6xl font-black italic uppercase tracking-tighter text-[#040a18]">{t("garage.heading")}</h2>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-gray-50 border border-gray-200 p-8 sm:p-10 relative group hover:border-[#dc0000]/30 transition-all flex flex-col justify-between"
                        >
                            <div className="absolute top-0 left-0 w-1 h-0 bg-[#dc0000] group-hover:h-full transition-all duration-300"></div>

                            <div className="space-y-4 sm:space-y-6 flex-grow">
                                <div className="flex items-center gap-3">
                                    <div className="bg-[#ffc906] text-[#040a18] px-3 py-1 font-black italic transform -skew-x-12 text-sm">{project.id}</div>
                                    <span className="text-[#dc0000] font-black italic uppercase tracking-widest text-xs sm:text-sm">{project.category}</span>
                                    <div className="h-[1px] flex-grow bg-gray-300 hidden sm:block"></div>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter leading-none text-[#040a18] group-hover:text-[#dc0000] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed italic line-clamp-3">
                                    &quot;{project.description[locale]}&quot;
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[9px] sm:text-[10px] border border-gray-300 px-2 sm:px-3 py-1 uppercase font-bold tracking-widest bg-white text-gray-700">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 mt-auto">
                                <button onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }} className="w-full">
                                    <span className="flex items-center justify-center gap-2 group/btn bg-[#040a18] text-white w-full py-3 font-black italic uppercase tracking-widest transform -skew-x-12 hover:bg-[#dc0000] hover:text-white transition-all active:scale-95">
                                        {t("garage.viewProject")} <ArrowUpRight size={18} />
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default GarageSection;
