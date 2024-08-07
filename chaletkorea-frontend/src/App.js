import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
