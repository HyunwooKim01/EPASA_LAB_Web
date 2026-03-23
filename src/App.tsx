// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { LAB_DATA } from './labData'; // 실제 데이터가 있는 곳 경로에 맞게 수정하세요.

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import PublicationsSection from './components/PublicationsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// 페이지 컴포넌트 임포트
import MemberDetailPage from './pages/MemberDetailPage'; 
// 🌟 멤버 허브 페이지를 불러옵니다. (기존 MembersPage.tsx 파일 이름을 변경해서 사용합니다.)
import MembersHubPage from './pages/MembersHubPage'; 

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        
        <main>
          <Routes>
            {/* 1. 메인 홈 페이지: 기존의 모든 섹션 유지 */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero data={LAB_DATA} />
                  
                  {/* ... (뉴스 영역 생략: 기존 코드 그대로 유지) ... */}
                  <ResearchSection areas={LAB_DATA.researchAreas} />
                  <PublicationsSection publications={LAB_DATA.publications} />
                  
                  {/* 메인 화면의 팀 소개는 '전체 멤버 보기'로 연결하는 간략한 링크로 대체할 수 있습니다. */}
                  {/* 여기서는 이전 디자인의 MembersSection을 그대로 보여주거나 생략할 수 있습니다. 생략하는 경우 아래 주석 처리 */}
                  {/* <MembersSection members={LAB_DATA.members} publications={LAB_DATA.publications} /> */}
                  
                  <ProjectsSection projects={LAB_DATA.projects} />
                  <ContactSection data={LAB_DATA} />
                </>
              } 
            />

            {/* 2. 전체 멤버 허브 페이지 (새로운 양식) */}
            <Route 
              path="/members" 
              element={
                <MembersHubPage 
                  members={LAB_DATA.members} 
                />
              } 
            />

            {/* 3. 특정 멤버 상세 페이지 (포트폴리오 양식) */}
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

        <Footer data={LAB_DATA} />
      </div>
    </Router>
  );
}
