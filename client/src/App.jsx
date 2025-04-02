import React from 'react';
// import ModernEmergencyGuideLP from './components/landing-page';
import Home from './components/Landing-page';
import { Routes, Route } from "react-router-dom";
import FirstAidGuide from './pages/FirstAidGuide';
// import LandingPage from './components/Landing-page'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first-aid" element={<FirstAidGuide />} />
    </Routes>
  );
};

export default App; 