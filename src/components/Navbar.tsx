import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
// 🌟 Link 대신 HashLink를 사용하기 위해 아래 import를 추가합니다.
import { NavHashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🌟 Contact 링크를 메인 홈 화면의 #contact 앵커로 변경했습니다.
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' },
    { name: 'Members', path: '/members' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/#contact', type: 'anchor' }, // Contact에만 anchor 타입을 표시
  ];

  const applyScrolledStyle = isScrolled || !isHomePage;

  // 🌟 DesktopNav에서 사용할 NavHashLink 스타일 함수
  const desktopNavLinkStyle = `text-sm font-medium hover:text-navy transition-colors ${applyScrolledStyle ? 'text-slate-600' : 'text-white/90'}`;

  // 🌟 MobileNav에서 사용할 NavHashLink 스타일 함수
  const mobileNavLinkStyle = "text-lg font-medium text-slate-800 hover:text-navy";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${applyScrolledStyle ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <Link to="/" className={`text-2xl font-bold tracking-tighter ${applyScrolledStyle ? 'text-navy' : 'text-white'}`}>
          EPASA <span className="font-light">LAB</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            // Contact에만 anchor 타입을 표시해서 다른 Link와 구분
            link.type === 'anchor' ? (
              // 🌟 Contact 링크에 NavHashLink를 사용합니다. smooth 속성을 추가해서 부드럽게 이동하게 만듭니다.
              <NavHashLink
                key={link.name}
                smooth // 부드러운 스크롤 이동 효과
                to={link.path}
                className={desktopNavLinkStyle}
              >
                {link.name}
              </NavHashLink>
            ) : (
              <Link 
                key={link.name} 
                to={link.path} 
                className={desktopNavLinkStyle}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-navy" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu className={applyScrolledStyle ? 'text-navy' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              link.type === 'anchor' ? (
                // 🌟 Mobile Nav의 Contact 링크에도 NavHashLink를 사용합니다.
                <NavHashLink
                  key={link.name}
                  smooth
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={mobileNavLinkStyle}
                >
                  {link.name}
                </NavHashLink>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={mobileNavLinkStyle}
                >
                  {link.name}
                </Link>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
