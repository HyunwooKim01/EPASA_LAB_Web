import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { LAB_DATA } from './labData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import PublicationsSection from './components/PublicationsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import MembersHubPage from './pages/MembersHubPage'; 
import MemberDetailPage from './pages/MemberDetailPage'; 

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* 🌟 1. Home 페이지 (Contact 섹션을 맨 아래에 추가) */}
            <Route 
              path="/" 
              element={
                <div className="flex flex-col">
                  {/* 대문 이미지 */}
                  <Hero data={LAB_DATA} />
                  
                  {/* 최신 뉴스 */}
                  <section className="py-8 bg-white border-b border-slate-100 shadow-sm relative z-10">
                    <div className="max-w-7xl mx-auto px-6">
                      <div className="flex items-center space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                        <div className="flex-shrink-0 flex items-center space-x-2 px-4 py-1.5 bg-navy/5 text-navy rounded-full font-bold text-sm">
                          <Calendar size={16} />
                          <span>LATEST NEWS</span>
                        </div>
                        {LAB_DATA.news.map(item => (
                          <div key={item.id} className="flex-shrink-0 flex items-center space-x-3 text-sm">
                            <span className="text-slate-400 font-mono">{item.date}</span>
                            <span className="text-slate-700 font-medium">{item.content}</span>
                            <span className="text-slate-200">|</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* 간단한 랩실 소개 */}
                  <section className="py-24 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">About EPASA LAB</h2>
                      <div className="w-20 h-1 bg-navy mx-auto mb-8" />
                      <p className="text-xl text-slate-600 leading-relaxed font-light">
                        {LAB_DATA.missionStatement}
                      </p>
                    </div>
                  </section>

                  {/* 핵심 연구 분야 미리보기 */}
                  <ResearchSection areas={LAB_DATA.researchAreas} />

                  {/* 다른 페이지 바로가기 카드 */}
                  <section className="py-24 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Publications Link */}
                        <Link to="/publications" className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-navy/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-navy-light transition-colors">Publications</h3>
                          <p className="text-slate-600 mb-8 leading-relaxed">Discover our latest research papers, journals, and contributions to the field of Edge AI.</p>
                          <div className="flex items-center text-navy font-semibold">
                            Read More <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </Link>

                        {/* Members Link */}
                        <Link to="/members" className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-navy/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-navy-light transition-colors">Our Team</h3>
                          <p className="text-slate-600 mb-8 leading-relaxed">Meet the dedicated researchers, students, and alumni driving our innovative projects.</p>
                          <div className="flex items-center text-navy font-semibold">
                            Meet the Team <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </Link>

                        {/* Projects Link */}
                        <Link to="/projects" className="group p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-navy/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                          <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-navy-light transition-colors">Projects</h3>
                          <p className="text-slate-600 mb-8 leading-relaxed">Explore the ongoing and completed research projects happening at EPASA LAB.</p>
                          <div className="flex items-center text-navy font-semibold">
                            Explore Projects <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </Link>

                      </div>
                    </div>
                  </section>

                  {/* 🌟 2. Contact 섹션을 메인 홈 화면의 가장 아래에 위치하게 합니다. */}
                  {/* 🌟 id="contact"를 추가해서 네비게이션 버튼이 이 위치를 찾아오도록 만듭니다. */}
                  <div id="contact" className="py-24 bg-slate-100/50 border-t border-slate-200">
                    <ContactSection data={LAB_DATA} />
                  </div>
                </div>
              } 
            />

            {/* 3. Research 페이지 (상세) */}
            <Route 
              path="/research" 
              element={
                <div className="pt-24 pb-12">
                  <ResearchSection 
                    areas={LAB_DATA.researchAreas} 
                    details={LAB_DATA.detailedResearch} 
                  />
                </div>
              } 
            />
            
            {/* 4. Publications 페이지 */}
            <Route path="/publications" element={<div className="pt-24 pb-12"><PublicationsSection publications={LAB_DATA.publications} /></div>} />

            {/* 5. Members 허브 페이지 */}
            <Route path="/members" element={<MembersHubPage members={LAB_DATA.members} />} />

            {/* 6. Member 상세 페이지 */}
            <Route path="/members/:id" element={<MemberDetailPage members={LAB_DATA.members} publications={LAB_DATA.publications} />} />

            {/* 7. Projects 페이지 */}
            <Route path="/projects" element={<div className="pt-24 pb-12"><ProjectsSection projects={LAB_DATA.projects} /></div>} />
            
            {/* 🌟 기존의 독립된 Contact 페이지 라우트는 삭제했습니다. */}
          </Routes>
        </main>

        <Footer data={LAB_DATA} />
      </div>
    </Router>
  );
}
