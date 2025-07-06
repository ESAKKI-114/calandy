import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/resources/NavBar';
import Footer from './components/resources/Footer';
import Home from './pages/Home';
import Design from './pages/Design';
import CalendarSummary from './pages/CalendarSummary';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Location from './pages/Location';
import PDFPage from './components/resources/PDFPage';

import './App.css'; // Optional for global styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/design" element={<Design />} />
            <Route path="/calendar-summary" element={<CalendarSummary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pdf-viewer" element={<PDFPage />} />
            <Route path="/location" element={<Location />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
