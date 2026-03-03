import React from 'react';
import { motion } from 'motion/react';
import { Mail, GraduationCap, Linkedin } from 'lucide-react';
import { Member } from '../types/lab';

export default function MembersSection({ members }: { members: Member[] }) {
  return (
    <section id="members" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-navy mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <motion.div 
              key={member.id}
              whileHover={{ y: -10 }}
              className="card overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-navy text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{member.bio}</p>
                <div className="flex space-x-3">
                  {member.email && (
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`} className="text-slate-400 hover:text-navy transition-colors">
                      <Mail size={18} />
                    </a>
                  )}
                  {member.links?.scholar && (
                    <a href={member.links.scholar} aria-label={`${member.name}'s Google Scholar`} className="text-slate-400 hover:text-navy transition-colors">
                      <GraduationCap size={18} />
                    </a>
                  )}
                  {member.links?.linkedin && (
                    <a href={member.links.linkedin} aria-label={`${member.name}'s LinkedIn`} className="text-slate-400 hover:text-navy transition-colors">
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
