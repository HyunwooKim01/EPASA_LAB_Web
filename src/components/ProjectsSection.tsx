// src/components/ProjectsSection.tsx
import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types/lab';

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-5">Research Projects</h2>
          <div className="w-24 h-1 bg-navy mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            Explore the ongoing and completed research projects at EPASA LAB.
          </p>
        </div>

        {projects && projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:border-navy/20 transition-all group flex flex-col h-full"
              >
                <div className="h-64 overflow-hidden relative">
                  {/* 상태 뱃지 (Ongoing / Completed) */}
                  <div className={`absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full text-sm font-bold shadow-md ${
                    project.status === 'ongoing' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-slate-500 text-white'
                  }`}>
                    {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                  </div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-500 text-lg">등록된 프로젝트가 없습니다.</p>
          </div>
        )}

      </div>
    </section>
  );
}
