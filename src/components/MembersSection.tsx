import React from 'react';
import { motion } from 'motion/react';
import { Mail, GraduationCap, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Member, Publication } from '../types/lab';

export default function MembersSection({ members, publications }: { members: Member[], publications: Publication[] }) {
  const navigate = useNavigate();

  const handleMemberClick = (memberId: string) => {
    navigate(`/members/${memberId}`);
  };

  return (
    <section id="members" className="section-padding bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-navy mx-auto mb-6" />
          
          {/* 🌟 여기에 간략한 설명이 추가되었습니다! */}
          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
            We are a passionate team of researchers and engineers working together to solve complex problems. Click on any member to view their detailed profile and publications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <motion.div 
              key={member.id}
              whileHover={{ y: -10 }}
              onClick={() => handleMemberClick(member.id)}
              className="card overflow-hidden group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-xl transition-all"
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
                <h3 className="text-lg font-bold mb-1 group-hover:text-navy transition-colors">{member.name}</h3>
                <p className="text-navy text-sm font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{member.bio}</p>
                
                <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-navy transition-colors">
                      <Mail size={18} />
                    </a>
                  )}
                  {member.links?.scholar && (
                    <a href={member.links.scholar} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-navy transition-colors">
                      <GraduationCap size={18} />
                    </a>
                  )}
                  {member.links?.linkedin && (
                    <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-navy transition-colors">
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
