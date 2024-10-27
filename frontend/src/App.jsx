import React from 'react';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
