// pages/MemberDetailPage.tsx
import React, { useEffect } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
// 🌟 새롭게 사용할 아이콘(BriefcaseBusiness)을 추가했습니다.
import { ArrowLeft, Mail, GraduationCap, Linkedin, Github, ExternalLink, ScrollText, BriefcaseBusiness } from 'lucide-react';
import { Member, Publication } from '../types/lab';

export default function MemberDetailPage({ members, publications }: { members: Member[], publications: Publication[] }) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // id와 일치하는 멤버 찾기
  const selectedMember = members.find(m => m.id === id);

  // 페이지 진입 시 스크롤을 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 멤버가 없으면 메인으로
  if (!selectedMember) {
    return <Navigate to="/" replace />;
  }

  // 해당 멤버의 출판물 필터링
  const memberPubs = publications.filter(pub => 
    selectedMember.publicationIds?.includes(pub.id) || 
    pub.authors.includes(selectedMember.name)
  );

  return (
    // 네비게이션 바 여백 pt-24
    <div className="min-h-screen pt-24 pb-16 bg-slate-50 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* 뒤로 가기 버튼 */}
        <button
          onClick={() => navigate('/members')} // 전체 멤버 허브로 돌아가기
          className="flex items-center text-slate-500 hover:text-navy transition-colors mb-10 font-medium group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to All Members
        </button>

        {/* 🌟 사용자 요청 양식: 포트폴리오처럼 상세 정보 소개 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* 왼쪽 컬럼: 핵심 프로필 및 소셜 링크 */}
          <div className="md:col-span-1 bg-white p-8 rounded-3xl shadow-lg flex flex-col items-center border border-slate-100">
            
            {/* 🌟 수정된 이미지 영역: 경로 자동 보정 및 기본 이미지 방어 코드 추가 */}
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 shadow-xl border-4 border-white ring-4 ring-slate-100/50 bg-slate-100 flex items-center justify-center">
              {selectedMember.image ? (
                <img 
                  // http로 시작하거나 /로 시작하면 그대로 쓰고, 아니면 강제로 앞에 /를 붙여서 절대 경로로 만듭니다.
                  src={
                    selectedMember.image.startsWith('http') || selectedMember.image.startsWith('/') 
                      ? selectedMember.image 
                      : `/${selectedMember.image}`
                  } 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer" 
                />
              ) : (
                // 사진이 없을 때 표시될 기본 화면 (이름의 첫 글자)
                <span className="text-6xl text-slate-300 font-bold">
                  {selectedMember.name.charAt(0)}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl font-bold text-center mb-3 text-slate-900 tracking-tight">{selectedMember.name}</h1>
            <p className="text-2xl text-navy font-semibold text-center mb-10">{selectedMember.role}</p>

            {/* 소셜 및 연구 링크 섹션 */}
            <div className="w-full flex justify-center space-x-5 mb-10">
              {selectedMember.email && (
                <a href={`mailto:${selectedMember.email}`} title="Email" className="p-4 bg-white rounded-full shadow-md text-slate-500 hover:text-navy hover:shadow-lg transition-all border border-slate-100">
                  <Mail size={24} />
                </a>
              )}
              {selectedMember.links?.scholar && (
                <a href={selectedMember.links.scholar} target="_blank" rel="noreferrer" title="Google Scholar" className="p-4 bg-white rounded-full shadow-md text-slate-500 hover:text-navy hover:shadow-lg transition-all border border-slate-100">
                  <GraduationCap size={24} />
                </a>
              )}
              {selectedMember.links?.linkedin && (
                <a href={selectedMember.links.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="p-4 bg-white rounded-full shadow-md text-slate-500 hover:text-navy hover:shadow-lg transition-all border border-slate-100">
                  <Linkedin size={24} />
                </a>
              )}
              {selectedMember.links?.github && (
                <a href={selectedMember.links.github} target="_blank" rel="noreferrer" title="GitHub" className="p-4 bg-white rounded-full shadow-md text-slate-500 hover:text-navy hover:shadow-lg transition-all border border-slate-100">
                  <Github size={24} />
                </a>
              )}
            </div>

            {/* Contact Information (간단 연락처) */}
            <div className="w-full border-t border-slate-100 pt-8 mt-auto text-left">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Contact Info</h4>
              <div className="space-y-3">
                {selectedMember.email && (
                  <p className="text-slate-700 font-medium flex items-center">
                    <Mail size={16} className="text-slate-400 mr-2.5 flex-shrink-0" />
                    {selectedMember.email}
                  </p>
                )}
                {/* 필요시 전화번호, 연구실 번호 등 추가 가능 */}
              </div>
            </div>
          </div>

          {/* 오른쪽 컬럼: 자기소개, 학력, 경력, 논문 실적 */}
          <div className="md:col-span-2 space-y-12">
            
            {/* 1. 간단한 자기소개 (About) */}
            <section className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <h2 className="text-3xl font-bold text-navy mb-8 flex items-center space-x-3 border-b border-slate-100 pb-5">
                <ScrollText size={32} className="text-navy-light mr-1" />
                About Me
              </h2>
              <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-line">
                {selectedMember.bio}
              </p>
            </section>

            {/* 🌟 2. 학력 (Education) - labData에 데이터가 있을 때만 렌더링 */}
            {selectedMember.education && selectedMember.education.length > 0 && (
              <section className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
                <h2 className="text-3xl font-bold text-navy mb-8 flex items-center space-x-3 border-b border-slate-100 pb-5">
                  <GraduationCap size={32} className="text-navy-light mr-1" />
                  Education
                </h2>
                <ul className="space-y-6">
                  {selectedMember.education.map((edu, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-navy rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      <div>
                        <p className="font-bold text-slate-900 text-lg">{edu.degree}</p>
                        <p className="text-base text-slate-600 font-medium">{edu.institution}</p>
                        <p className="text-sm text-slate-400 mt-1">{edu.period}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 🌟 3. 경력 (Experience) - labData에 데이터가 있을 때만 렌더링 */}
            {selectedMember.experience && selectedMember.experience.length > 0 && (
              <section className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
                <h2 className="text-3xl font-bold text-navy mb-8 flex items-center space-x-3 border-b border-slate-100 pb-5">
                  <BriefcaseBusiness size={32} className="text-navy-light mr-1" />
                  Experience
                </h2>
                <ul className="space-y-3">
                  {selectedMember.experience.map((exp, index) => (
                    <li key={index} className="flex items-start text-slate-700 text-lg">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 4. 논문 실적 (Selected Publications) */}
            <section className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
              <h2 className="text-3xl font-bold text-navy mb-8 flex items-center space-x-3 border-b border-slate-100 pb-5">
                <ScrollText size={32} className="text-navy-light mr-1" />
                Selected Publications
              </h2>
              
              <div className="space-y-5">
                {memberPubs.length === 0 ? (
                  <div className="text-center py-16 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                    <p className="text-slate-500 italic text-lg">No publications listed yet.</p>
                  </div>
                ) : (
                  memberPubs.map(pub => (
                    <div key={pub.id} className="p-6 border border-slate-100 rounded-2xl hover:border-navy/30 hover:shadow-md transition-all bg-slate-50/50 flex space-x-5">
                      {/* 출판물 아이콘 */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center border border-navy/10">
                        <ScrollText size={24} />
                      </div>
                      
                      {/* 출판물 상세 정보 */}
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-3">
                          <h5 className="font-bold text-slate-800 text-lg leading-tight pr-4">{pub.title}</h5>
                          {pub.link && (
                            <a href={pub.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-navy flex-shrink-0 bg-white p-2 rounded-md shadow-sm transition-colors">
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                        <p className="text-base text-slate-600 mb-3 leading-relaxed">{pub.authors}</p>
                        <div className="flex items-center space-x-2 text-base text-slate-500">
                          <span className="font-bold text-navy-dark">{pub.venue}</span>
                          <span>•</span>
                          <span>{pub.year}</span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
