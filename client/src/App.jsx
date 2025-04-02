import React from 'react';
// import ModernEmergencyGuideLP from './components/landing-page';
import Home from './components/Landing-page';
import { Routes, Route } from "react-router-dom";
import FirstAidGuide from './pages/FirstAidGuide';
import ChatUI from './components/Chat/Chat-ui';
// import LandingPage from './components/Landing-page'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first-aid" element={<FirstAidGuide />} />
      <Route path="/chat" element={<ChatUI />} />
    </Routes>
  );
};

export default App;
