// pages/MembersHubPage.tsx
import React from 'react';
import { motion } from 'motion/react';
import { Mail, GraduationCap, Linkedin, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Member } from '../types/lab';

export default function MembersHubPage({ members }: { members: Member[] }) {
  return (
    // 네비게이션 바에 가려지지 않도록 상단 여백(pt-24)
    <div className="min-h-screen pt-24 pb-16 bg-slate-50"> 
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-5">Our Team</h2>
          <div className="w-24 h-1 bg-navy mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
            Welcome to the EPASA LAB team. We are a diverse group of researchers dedicated to advancing robotic technology. Click on a member to view their full portfolio.
          </p>
        </div>

        {/* 🌟 사용자 요청 양식: 사진과 간략한 설명이 옆에 있는 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex items-start space-x-6 group"
            >
              {/* 왼쪽: 사진 */}
              <div className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden shadow-inner border-2 border-slate-50">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* 오른쪽: 이름 및 간략 설명 */}
              <div className="flex-grow flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-1 text-slate-900 group-hover:text-navy transition-colors">{member.name}</h3>
                  <p className="text-navy text-sm font-semibold mb-3">{member.role}</p>
                  
                  {/* 간략한 bio (여기서는 truncated bio를 사용) */}
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                
                {/* 하단 링크 및 소셜 아이콘 */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                  <Link to={`/members/${member.id}`} className="text-sm font-medium text-navy-dark hover:text-navy flex items-center group-hover:underline">
                    <BriefcaseBusiness size={16} className="mr-1.5" />
                    View Portfolio
                  </Link>
                  <div className="flex space-x-3">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-navy transition-colors">
                        <Mail size={16} />
                      </a>
                    )}
                    {member.links?.scholar && (
                      <a href={member.links.scholar} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-navy transition-colors">
                        <GraduationCap size={16} />
                      </a>
                    )}
                    {member.links?.linkedin && (
                      <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-navy transition-colors">
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
