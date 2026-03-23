import React from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { ArrowLeft, Mail, GraduationCap, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Member, Publication } from '../types/lab'; // 타입 경로 확인 필요

export default function MemberDetailPage({ members, publications }: { members: Member[], publications: Publication[] }) {
  const { id } = useParams<{ id: string }>(); // URL에서 id 추출
  const navigate = useNavigate();

  // id와 일치하는 멤버 찾기
  const selectedMember = members.find(m => m.id === id);

  // 멤버가 없으면 메인으로 돌려보내거나 에러 처리
  if (!selectedMember) {
    return <Navigate to="/" replace />;
  }

  // 해당 멤버의 출판물 필터링
  const memberPubs = publications.filter(pub => 
    selectedMember.publicationIds?.includes(pub.id) || 
    pub.authors.includes(selectedMember.name)
  );

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Profile Info */}
        <div className="w-full md:w-2/5 bg-slate-50 p-8 flex flex-col items-center border-b md:border-b-0 md:border-r border-slate-200 relative">
          
          <button
            onClick={() => navigate(-1)} // 이전 페이지로 돌아가기
            className="self-start flex items-center text-slate-500 hover:text-navy transition-colors mb-8 font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Team
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
            {/* ... (기존 sns 아이콘들 동일하게 삽입) ... */}
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
            {memberPubs.length === 0 ? (
              <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                <p className="text-slate-500 italic">No publications listed yet.</p>
              </div>
            ) : (
              memberPubs.map(pub => (
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
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
