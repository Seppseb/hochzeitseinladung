// src/pages/Home.tsx
import { CalendarHeart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full shadow-2xl rounded-2xl p-6 bg-white text-center space-y-6">
        <h1 className="text-4xl font-bold text-pink-700">Einladung zur Hochzeit</h1>
        <p className="text-xl text-gray-700">
          Wir, <strong>Melina Thielen</strong> &amp; <strong>Fabio Müller</strong>, laden euch herzlich ein, diesen besonderen Tag mit uns zu feiern.
        </p>

        <div className="flex items-center justify-center gap-2 text-pink-700">
          <CalendarHeart className="w-6 h-6" />
          <span className="text-lg">20. Juni 2026</span>
        </div>

        <div className="flex items-center justify-center gap-2 text-pink-700">
          <MapPin className="w-6 h-6" />
          <span className="text-lg">Ort, Rheinland-Pfalz</span>
        </div>

        <p className="text-gray-600">
          Die Zeremonie beginnt um 14:00 Uhr, gefolgt von einer festlichen Feier mit Essen, Musik und Tanz.
        </p>

        <p className="text-gray-600">
          Bitte gebt uns bis zum <strong>20. Mai 2026</strong> Bescheid, ob ihr dabei seid.
        </p>

        <br/>

        <Link to="/register">
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-lg px-6 py-2 rounded-full">
            Rückmeldung senden
          </button>
        </Link>
      </div>
    </div>
  );
}
