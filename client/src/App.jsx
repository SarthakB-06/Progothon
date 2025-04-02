import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/landing-page";
import ChatUI from "./components/Chat/Chat-ui";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatUI />} />
      </Routes>
    </Router>
  );
};

export default App;
