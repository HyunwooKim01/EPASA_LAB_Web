import React from 'react';
import { motion } from 'motion/react';
import { Mail, GraduationCap, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 라우터 훅 추가
import { Member, Publication } from '../types/lab';

export default function MembersSection({ members, publications }: { members: Member[], publications: Publication[] }) {
  const navigate = useNavigate();

  // 클릭 시 상세 페이지 경로로 이동
  const handleMemberClick = (memberId: string) => {
    navigate(`/members/${memberId}`);
  };

  return (
    <section id="members" className="section-padding bg-slate-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-navy mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <motion.div 
              key={member.id}
              whileHover={{ y: -10 }}
              onClick={() => handleMemberClick(member.id)} // 이동 함수 연결
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
                
                {/* 아이콘 클릭 시 상세페이지로 넘어가는 것을 막기 위해 stopPropagation 유지 */}
                <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
                  {/* ... (기존 이메일, 링크드인 등의 아이콘 코드 동일) ... */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
