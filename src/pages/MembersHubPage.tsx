import React from 'react';
import { motion } from 'motion/react';
import { Mail, GraduationCap, Linkedin, BriefcaseBusiness } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Member } from '../types/lab';

export default function MembersHubPage({ members }: { members: Member[] }) {
  // 🌟 1. 직책(Role)이 나타날 순서를 미리 정의합니다.
  // labData.ts의 role에 적힌 글자와 똑같아야 이 순서대로 정렬됩니다.
  const roleOrder = [
    "Principal Investigator",
    "Professor",
    "Postdoctoral Researcher",
    "Ph.D. Student",
    "M.S. Student",
    "Undergraduate Student",
    "Alumni"
  ];

  // 🌟 2. 멤버들을 직책(Role)별로 묶어주는 작업입니다.
  const groupedMembers = members.reduce((acc, member) => {
    const role = member.role || "Other";
    if (!acc[role]) acc[role] = [];
    acc[role].push(member);
    return acc;
  }, {} as Record<string, Member[]>);

  // 🌟 3. 미리 정의한 순서(roleOrder)에 맞게 그룹들을 정렬합니다.
  const sortedRoles = Object.keys(groupedMembers).sort((a, b) => {
    const indexA = roleOrder.indexOf(a);
    const indexB = roleOrder.indexOf(b);
    if (indexA === -1 && indexB === -1) return a.localeCompare(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 bg-slate-50"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 상단 타이틀 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-5">Our Team</h2>
          <div className="w-24 h-1 bg-navy mx-auto mb-6" />
          <p className="max-w-3xl mx-auto text-slate-600 text-lg leading-relaxed">
            Welcome to the EPASA LAB team. Click on a member to view their full portfolio and publications.
          </p>
        </div>

        {/* 🌟 4. 정렬된 직책별로 화면에 그려줍니다. */}
        {sortedRoles.map((role) => (
          <div key={role} className="mb-20 last:mb-0">
            
            {/* 직책 그룹 제목 및 구분선 */}
            <div className="flex items-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight mr-6 whitespace-nowrap">
                {role}
              </h3>
              <div className="h-px bg-slate-200 w-full"></div>
            </div>

            {/* 해당 직책의 멤버 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedMembers[role].map((member, index) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
                      
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                    
                    {/* 하단 링크 및 소셜 아이콘 */}
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                      <Link to={`/members/${member.id}`} className="text-sm font-medium text-navy-dark hover:text-navy flex items-center group-hover:underline">
                        <BriefcaseBusiness size={16} className="mr-1.5" />
                        Portfolio
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
        ))}
        
      </div>
    </div>
  );
}
