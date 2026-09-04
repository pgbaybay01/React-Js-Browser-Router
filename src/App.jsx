import { useCallback, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell">
        <a className="skip-link" href="#main">
          Skip to content
        </a>

        <Navigation
          isMenuOpen={isMenuOpen}
          onOpenMenu={openMenu}
          onCloseMenu={closeMenu}
        />

        {/* `inert` while the menu is open is a complete focus trap — no
            hand-rolled Tab cycling needed. undefined, not false, so React
            omits the attribute entirely. */}
        <main
          id="main"
          className="main-content"
          tabIndex={-1}
          inert={isMenuOpen || undefined}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <div inert={isMenuOpen || undefined}>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
