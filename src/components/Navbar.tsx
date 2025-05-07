import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Nav = styled.nav<{ isScrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background: ${({ theme, isScrolled }) => 
    isScrolled ? theme.colors.navBackground : 'transparent'};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: ${({ theme }) => theme.transitions.default};
  backdrop-filter: ${({ isScrolled }) => 
    isScrolled ? 'blur(10px)' : 'none'};

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 968px) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  
  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const NavLink = styled.a<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => 
    isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitions.default};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
`;

const DownloadButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.primary};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.primaryHover};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 968px) {
    display: block;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.default};
  margin-left: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Service' },
    { id: 'clients', label: 'Clients' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <Nav isScrolled={isScrolled}>
        <Logo to="/" onClick={(e) => handleNavClick(e, 'home')}>DizMe</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              isActive={activeSection === item.id}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </NavLink>
          ))}
          <DownloadButton href="/cv.pdf" download>
            Download CV
          </DownloadButton>
          <ThemeToggle onClick={toggleTheme}>
            <i className={`fas fa-${isDark ? 'sun' : 'moon'}`}></i>
          </ThemeToggle>
        </NavLinks>
        <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
        </MenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                isActive={activeSection === item.id}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </NavLink>
            ))}
            <DownloadButton href="/cv.pdf" download>
              Download CV
            </DownloadButton>
            <ThemeToggle onClick={toggleTheme}>
              <i className={`fas fa-${isDark ? 'sun' : 'moon'}`}></i>
            </ThemeToggle>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 