// src/pages/Home.tsx
import { useEffect, useState } from 'react';
import WeddingContent from '../components/WeddingContent.js'; // Import the new component

async function sha256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}


export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const correctPasswordHash = "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08";

  const checkPassword = async (passwordp : string) => {
    setIsChecking(true);
    setError('');
    const inputHash = await sha256(passwordp);
    if (inputHash === correctPasswordHash) {
      localStorage.setItem("wedding_password", passwordp);
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("wedding_password");
      setError('Falsches Passwort. Bitte versucht es erneut.');
      setIsChecking(false);
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await checkPassword(password);
  };

  useEffect( () => {
    // Load saved password on mount
    const savedPassword = localStorage.getItem("wedding_password");
    if (savedPassword) {
      setPassword(savedPassword);
      checkPassword(savedPassword);
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
              disabled={isChecking}
              className="w-full bg-lavender hover:bg-lavender-dark text-white text-lg px-6 py-2 rounded-full transition-colors"
            >
              {isChecking ? 'Prüfe...' : 'Enter'}
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

