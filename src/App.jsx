import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import './i18n';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/category/:categoryId' element={<ServicesPage />} />
        <Route path='/service/:serviceId' element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;