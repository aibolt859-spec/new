import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import News from './pages/News';
import Careers from './pages/Careers';
import Subscribe from './pages/Subscribe';
import Unsubscribe from './pages/Unsubscribe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavigationProvider } from './context/NavigationContext';

// Component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const location = window.location;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

function App() {
  return (
    <NavigationProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/news" element={<News />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/unsubscribe" element={<Unsubscribe />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </NavigationProvider>
  );
}

export default App;