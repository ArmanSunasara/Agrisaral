import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Upload from './pages/Upload';
import Diagnosis from './pages/Diagnosis';
import FarmerStories from './pages/FarmerStories';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import DiseaseInfo from './pages/DiseaseInfo';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/diagnosis" element={<Diagnosis />} />
        <Route path="/stories" element={<FarmerStories />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/disease-info" element={<DiseaseInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
