import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Bot, Layers } from 'lucide-react';
import { ResearchArea } from '../types/lab';

export default function ResearchSection({ areas }: { areas: ResearchArea[] }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu size={40} />;
      case 'Bot': return <Bot size={40} />;
      case 'Layers': return <Layers size={40} />;
      default: return <Cpu size={40} />;
    }
  };

  return (
    <section id="research" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Research Areas</h2>
          <div className="w-20 h-1 bg-navy mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, idx) => (
            <motion.div 
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="text-navy mb-6 flex justify-center">{getIcon(area.icon)}</div>
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <p className="text-slate-600 leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
