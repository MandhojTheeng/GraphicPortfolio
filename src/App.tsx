import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Portfolio from './components/home/Portfolio';
import Skills from './components/home/Skills';
import ServicesSection from './components/home/ServicesSection';
import Testimonials from './components/home/Testimonials';
import Contact from './components/home/Contact';
import Blog from './components/home/Blog';
import Clients from './components/home/Clients';
import Loader from './components/Loader';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  button {
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.backgroundGradient};
  transition: background-color 0.3s ease;
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <GlobalStyle />
        {loading ? (
          <Loader />
        ) : (
          <AppContainer>
            <Navbar />
            <section id="home">
              <Hero />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="portfolio">
              <Portfolio />
            </section>
            <section id="skills">
              <Skills />
            </section>
            <section id="services">
              <ServicesSection />
            </section>
            <section id="testimonials">
              <Testimonials />
            </section>
            <section id="clients">
              <Clients />
            </section>
            <section id="blog">
              <Blog />
            </section>
            <section id="contact">
              <Contact />
            </section>
          </AppContainer>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
