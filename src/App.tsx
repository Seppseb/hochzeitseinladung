// src/App.tsx
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard.js';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}
