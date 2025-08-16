import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // Main page (home)
import About from './pages/About';
import Form from './pages/Form';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
