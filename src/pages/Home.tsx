// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import WeddingContent from '../components/WeddingContent.js'; // Import the new component

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctPassword = "test"; 

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      localStorage.setItem("wedding_password", password);
      setIsAuthenticated(true);
    } else {
      setError('Falsches Passwort. Bitte versucht es erneut.');
    }
  };

  useEffect(() => {
    // Load saved password on mount
    const savedPassword = localStorage.getItem("wedding_password");
    if (savedPassword) {
      setPassword(savedPassword);
      if (savedPassword === correctPassword) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem("wedding_password");
      }
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-lavender-light flex items-center justify-center p-6">
        <div className="max-w-md w-full shadow-2xl rounded-2xl p-8 bg-white text-center">
          <h1 className="text-3xl font-heading text-lavender-dark">Einladung zur Hochzeit</h1>
          <p className="mt-4 text-gray-600">Bitte gebt das Passwort ein, um die Details zu sehen.</p>
          <form onSubmit={handlePasswordSubmit} className="mt-6 space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Passwort"
              className="w-full px-4 py-2 border border-lavender rounded-full focus:outline-none focus:ring-2 focus:ring-lavender-dark"
            />
            <button
              type="submit"
              className="w-full bg-lavender hover:bg-lavender-dark text-white text-lg px-6 py-2 rounded-full transition-colors"
            >
              Enter
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </form>
        </div>
      </div>
    );
  }

  // If authenticated, show the main wedding content
  return <WeddingContent />;
}