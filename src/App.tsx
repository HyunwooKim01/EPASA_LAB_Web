import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { LAB_DATA } from './labData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import PublicationsSection from './components/PublicationsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// 멤버 페이지들
import MembersHubPage from './pages/MembersHubPage'; 
import MemberDetailPage from './pages/MemberDetailPage'; 

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        
        {/* 메인 콘텐츠 영역이 화면을 채우도록 flex-grow 추가 */}
        <main className="flex-grow">
          <Routes>
            {/* 1. Home 페이지 (대문 사진 + 뉴스만 남김) */}
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
                </>
              } 
            />

            {/* 2. Research 페이지 */}
            <Route 
              path="/research" 
              element={
                <div className="pt-24 pb-12">
                  <ResearchSection areas={LAB_DATA.researchAreas} />
                </div>
              } 
            />

            {/* 3. Publications 페이지 */}
            <Route 
              path="/publications" 
              element={
                <div className="pt-24 pb-12">
                  <PublicationsSection publications={LAB_DATA.publications} />
                </div>
              } 
            />

            {/* 4. Members 허브 페이지 */}
            <Route 
              path="/members" 
              element={<MembersHubPage members={LAB_DATA.members} />} 
            />

            {/* 5. Member 상세 페이지 */}
            <Route 
              path="/members/:id" 
              element={
                <MemberDetailPage members={LAB_DATA.members} publications={LAB_DATA.publications} />
              } 
            />

            {/* 6. Projects 페이지 */}
            <Route 
              path="/projects" 
              element={
                <div className="pt-24 pb-12">
                  <ProjectsSection projects={LAB_DATA.projects} />
                </div>
              } 
            />

            {/* 7. Contact 페이지 */}
            <Route 
              path="/contact" 
              element={
                <div className="pt-24 pb-12">
                  <ContactSection data={LAB_DATA} />
                </div>
              } 
            />
          </Routes>
        </main>

        <Footer data={LAB_DATA} />
      </div>
    </Router>
  );
}
