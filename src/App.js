// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename="/Health-Plus">
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
