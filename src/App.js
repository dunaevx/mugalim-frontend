import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import { Welcome, Login, Signup, Notfound } from './pages'

function App() {
  return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>} />
          <Route path='welcom' element={<Welcome />} />
          <Route path='signup' element={<Signup />} />
          <Route path='login' element={<Login />} />
          
          <Route path='*' element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
