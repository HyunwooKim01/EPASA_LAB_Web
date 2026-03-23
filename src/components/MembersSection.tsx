import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, GraduationCap, Linkedin, X, ExternalLink, Github } from 'lucide-react';
import { Member, Publication } from '../types/lab';

export default function MembersSection({ members, publications }: { members: Member[], publications: Publication[] }) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

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
              onClick={() => setSelectedMember(member)}
              className="card overflow-hidden group cursor-pointer"
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

      {/* Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-slate-100 rounded-full transition-colors z-20"
              >
                <X size={20} className="text-slate-600" />
              </button>

              {/* Left Side: Profile Info */}
              <div className="w-full md:w-2/5 bg-slate-50 p-8 flex flex-col items-center border-r border-slate-100 overflow-y-auto">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-1 text-slate-900">{selectedMember.name}</h3>
                <p className="text-navy font-medium text-center mb-6">{selectedMember.role}</p>

                <div className="flex space-x-4 mb-8">
                  {selectedMember.email && (
                    <a href={`mailto:${selectedMember.email}`} className="p-2 bg-white rounded-full shadow-sm text-slate-400 hover:text-navy hover:shadow transition-all">
                      <Mail size={20} />
                    </a>
                  )}
                  {selectedMember.links?.scholar && (
                    <a href={selectedMember.links.scholar} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full shadow-sm text-slate-400 hover:text-navy hover:shadow transition-all">
                      <GraduationCap size={20} />
                    </a>
                  )}
                  {selectedMember.links?.linkedin && (
                    <a href={selectedMember.links.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full shadow-sm text-slate-400 hover:text-navy hover:shadow transition-all">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {selectedMember.links?.github && (
                    <a href={selectedMember.links.github} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full shadow-sm text-slate-400 hover:text-navy hover:shadow transition-all">
                      <Github size={20} />
                    </a>
                  )}
                </div>

                <div className="w-full text-left">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">About</h4>
                  <p className="text-slate-600 leading-relaxed text-sm whitespace-pre-line">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>

              {/* Right Side: Publications */}
              <div className="w-full md:w-3/5 p-8 overflow-y-auto bg-white">
                <h4 className="text-xl font-bold text-navy mb-6 flex items-center space-x-2">
                  <span>Selected Publications</span>
                </h4>
                <div className="space-y-4">
                  {(() => {
                    // Filter publications by IDs if provided, otherwise fallback to matching author name
                    const memberPubs = publications.filter(pub => 
                      selectedMember.publicationIds?.includes(pub.id) || 
                      pub.authors.includes(selectedMember.name)
                    );

                    if (memberPubs.length === 0) {
                      return (
                        <div className="text-center py-10 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                          <p className="text-slate-500 italic">No publications listed yet.</p>
                        </div>
                      );
                    }

                    return memberPubs.map(pub => (
                      <div key={pub.id} className="p-4 border border-slate-100 rounded-xl hover:border-navy/30 hover:shadow-sm transition-all bg-slate-50/50">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-bold text-slate-800 text-sm leading-tight pr-4">{pub.title}</h5>
                          {pub.link && (
                            <a href={pub.link} target="_blank" rel="noreferrer" className="text-navy hover:text-navy-dark flex-shrink-0 bg-white p-1.5 rounded-md shadow-sm">
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 mb-2">{pub.authors}</p>
                        <div className="flex items-center space-x-2 text-xs text-slate-500">
                          <span className="font-semibold text-navy">{pub.venue}</span>
                          <span>•</span>
                          <span>{pub.year}</span>
                        </div>
                      </div>
                    ));
                  })()}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
