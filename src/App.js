import React, { useRef, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const AppContainer = styled.div`
  .content > div {
    padding: 2rem;
  }
`;

const App = () => {
  const sectionsRef = useRef([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AppContainer>
        <Navbar onSearch={handleSearch} />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div ref={(el) => (sectionsRef.current[0] = el)}>
                    <Hero />
                  </div>
                  <div ref={(el) => (sectionsRef.current[1] = el)}>
                    <ProductList searchQuery={searchQuery} />
                  </div>
                  <div ref={(el) => (sectionsRef.current[2] = el)}>
                    <About />
                  </div>
                  <div ref={(el) => (sectionsRef.current[3] = el)}>
                    <Contact />
                  </div>
                  <div ref={(el) => (sectionsRef.current[4] = el)}>
                    <Blog />
                  </div>
                </>
              }
            />
            <Route path="/products" element={<ProductList searchQuery={searchQuery} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;