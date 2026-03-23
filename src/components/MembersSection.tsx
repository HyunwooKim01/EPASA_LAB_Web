import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, GraduationCap, Linkedin, ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Member, Publication } from '../types/lab';

export default function MembersSection({ members, publications }: { members: Member[], publications: Publication[] }) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <section id="members" className="section-padding bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-navy mx-auto" />
        </div>

        <AnimatePresence mode="wait">
          {!selectedMember ? (
            /* 멤버 목록 그리드 화면 */
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {members.map((member) => (
                <motion.div 
                  key={member.id}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedMember(member)}
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
            </motion.div>
          ) : (
            /* 멤버 상세 정보 화면 (페이지 내 렌더링) */
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Profile Info */}
              <div className="w-full md:w-2/5 bg-slate-50 p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-slate-200 relative">
                
                {/* 뒤로가기 버튼 */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="self-start flex items-center text-slate-500 hover:text-navy transition-colors mb-8 font-medium"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Back to Members
                </button>

                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-md border-4 border-white">
                  <img src={selectedMember.image} alt={selectedMember.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-3xl font-bold text-center mb-2 text-slate-900">{selectedMember.name}</h3>
                <p className="text-navy font-medium text-lg text-center mb-8">{selectedMember.role}</p>

                <div className="flex space-x-4 mb-10">
                  {selectedMember.email && (
                    <a href={`mailto:${selectedMember.email}`} className="p-3 bg-white rounded-full shadow-sm text-slate-500 hover:text-navy hover:shadow-md transition-all">
                      <Mail size={22} />
                    </a>
                  )}
                  {selectedMember.links?.scholar && (
                    <a href={selectedMember.links.scholar} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full shadow-sm text-slate-500 hover:text-navy hover:shadow-md transition-all">
                      <GraduationCap size={22} />
                    </a>
                  )}
                  {selectedMember.links?.linkedin && (
                    <a href={selectedMember.links.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full shadow-sm text-slate-500 hover:text-navy hover:shadow-md transition-all">
                      <Linkedin size={22} />
                    </a>
                  )}
                  {selectedMember.links?.github && (
                    <a href={selectedMember.links.github} target="_blank" rel="noreferrer" className="p-3 bg-white rounded-full shadow-sm text-slate-500 hover:text-navy hover:shadow-md transition-all">
                      <Github size={22} />
                    </a>
                  )}
                </div>

                <div className="w-full text-left">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">About</h4>
                  <p className="text-slate-600 leading-relaxed text-base whitespace-pre-line">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>

              {/* Right Side: Publications */}
              <div className="w-full md:w-3/5 p-8 bg-white">
                <h4 className="text-2xl font-bold text-navy mb-8 flex items-center space-x-2">
                  <span>Selected Publications</span>
                </h4>
                <div className="space-y-4">
                  {(() => {
                    const memberPubs = publications.filter(pub => 
                      selectedMember.publicationIds?.includes(pub.id) || 
                      pub.authors.includes(selectedMember.name)
                    );

                    if (memberPubs.length === 0) {
                      return (
                        <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                          <p className="text-slate-500 italic">No publications listed yet.</p>
                        </div>
                      );
                    }

                    return memberPubs.map(pub => (
                      <div key={pub.id} className="p-5 border border-slate-100 rounded-xl hover:border-navy/30 hover:shadow-md transition-all bg-slate-50/30">
                        <div className="flex justify-between items-start mb-3">
                          <h5 className="font-bold text-slate-800 text-base leading-tight pr-4">{pub.title}</h5>
                          {pub.link && (
                            <a href={pub.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-navy flex-shrink-0 bg-white p-2 rounded-md shadow-sm transition-colors">
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 mb-3 leading-relaxed">{pub.authors}</p>
                        <div className="flex items-center space-x-2 text-sm text-slate-500">
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
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
