import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { LabData } from '../types/lab';

export default function Hero({ data }: { data: LabData }) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={data.heroImage} 
          alt="Hero" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-navy-dark/70 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          {data.labName}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-10 font-light leading-relaxed"
        >
          {data.missionStatement}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#research" className="btn-primary inline-flex items-center space-x-2">
            <span>Explore Research</span>
            <ChevronRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
