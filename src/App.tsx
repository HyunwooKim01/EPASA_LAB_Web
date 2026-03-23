import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { LAB_DATA } from './labData';

// Import refactored components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import PublicationsSection from './components/PublicationsSection';
import MembersSection from './components/MembersSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MemberDetailPage from './components/MemberDetailPage'; 
import MembersPage from './components/MembersPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar는 모든 페이지에서 상단에 유지됩니다 */}
        <Navbar />
        
        <main>
          <Routes>
            {/* 1. 메인 페이지 (기존에 있던 모든 내용) */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero data={LAB_DATA} />
                  
                  <section className="py-12 bg-white border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                      <div className="flex items-center space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 bg-navy/5 text-navy rounded-full font-bold text-sm">
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
                  
                  <ResearchSection areas={LAB_DATA.researchAreas} />
                  <PublicationsSection publications={LAB_DATA.publications} />
                  <MembersSection members={LAB_DATA.members} publications={LAB_DATA.publications} />
                  <ProjectsSection projects={LAB_DATA.projects} />
                  <ContactSection data={LAB_DATA} />
                </>
              } 
            />

            {/* 2. 전체 멤버 소개 페이지 (Navbar에서 클릭 시 이동) */}
            <Route 
              path="/members" 
              element={
                <MembersPage 
                  members={LAB_DATA.members} 
                  publications={LAB_DATA.publications} 
                />
              } 
            />  
            
            {/* 3. 특정 멤버 상세 페이지 (멤버 카드 클릭 시 이동) */}
            <Route 
              path="/members/:id" 
              element={
                <MemberDetailPage 
                  members={LAB_DATA.members} 
                  publications={LAB_DATA.publications} 
                />
              } 
            />
          </Routes>
        </main>

        {/* Footer도 모든 페이지에서 하단에 유지됩니다 */}
        <Footer data={LAB_DATA} />
      </div>
    </Router>
  );
}
