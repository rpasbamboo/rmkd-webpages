import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Shrine from './components/Shrine';
import PlanVisit from './components/PlanVisit';
import Leadership from './components/Leadership';
import Articles from './components/Articles';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shrine" element={<Shrine/>} />
        <Route path="/PlanVisit" element={<PlanVisit/>} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
