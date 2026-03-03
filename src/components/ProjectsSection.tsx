import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Project } from '../types/lab';

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Active Projects</h2>
          <div className="w-20 h-1 bg-navy mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 ${project.status === 'ongoing' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                  {project.status}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>
                <button className="text-navy font-bold flex items-center space-x-1 hover:space-x-2 transition-all">
                  <span>Learn More</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
