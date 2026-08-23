import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import PackageDetail from './pages/PackageDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';
import NotFound from './pages/NotFound';

/**
 * App is now routing and page chrome only.
 * All markup lives in components/ and pages/.
 */
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogues" element={<Catalogue />} />
          <Route path="/catalogues/:id" element={<PackageDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
