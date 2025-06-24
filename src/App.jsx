import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
import TopBar from './components/topBar';
import './App.css';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
