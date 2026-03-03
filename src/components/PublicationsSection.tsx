import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink } from 'lucide-react';
import { Publication } from '../types/lab';

export default function PublicationsSection({ publications }: { publications: Publication[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filtered = publications.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="publications" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Publications</h2>
            <p className="text-slate-500">Our latest contributions to the scientific community.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search papers..." 
              className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/20 w-full md:w-64"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-6">
          {filtered.map((pub) => (
            <motion.div 
              key={pub.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 border-l-4 border-navy bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{pub.title}</h3>
                {pub.link && (
                  <a href={pub.link} aria-label={`Link to ${pub.title}`} className="text-navy hover:text-navy-dark">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p className="text-slate-700 mb-1">{pub.authors}</p>
              <div className="flex items-center space-x-3 text-sm text-slate-500">
                <span className="font-semibold text-navy">{pub.venue}</span>
                <span>•</span>
                <span>{pub.year}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {pub.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded uppercase tracking-wider font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
