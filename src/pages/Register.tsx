// src/pages/Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE } from '../config.js';

export default function Register() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [annotation, setAnnotation] = useState('');
  const [attendance, setAttendance] = useState<'yes' | 'no'>('yes');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) {
      alert('Bitte Vorname und Nachname ausfüllen.');
      return;
    }
    setStatus('sending');
    try {
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        annotation: annotation.trim(),
        attendance: attendance === 'yes',
      };
      const res = await fetch(`${API_BASE}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
        setTimeout(() => navigate('/'), 1500);
      } else {
        console.error('Server error', await res.text());
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f4fb] flex items-start justify-center p-6 pt-12">
  <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl p-8">
    <h2 className="text-3xl font-bodoni text-brownNew mb-6 text-center">Rückmeldung</h2>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Vorname</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mt-2 w-full border border-lavender rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender-dark"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nachname</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mt-2 w-full border border-lavender rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender-dark"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Bemerkung (z. B. Lebensmittelunverträglichkeiten)</label>
        <textarea
          value={annotation}
          onChange={(e) => setAnnotation(e.target.value)}
          className="mt-2 w-full border border-lavender rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-lavender-dark"
        />
      </div>

      <fieldset className="flex gap-6 items-center">
        <legend className="text-sm font-medium text-gray-700">Teilnahme</legend>
        <label className="flex items-center gap-2">
          <input type="radio" name="attendance" checked={attendance === 'yes'} onChange={() => setAttendance('yes')} />
          <span>Ja, ich komme</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="attendance" checked={attendance === 'no'} onChange={() => setAttendance('no')} />
          <span>Nein, ich kann leider nicht kommen</span>
        </label>
      </fieldset>

      <div className="flex items-center gap-4">
        <button
          disabled={status === 'sending'}
          className="bg-lavender hover:bg-lavender-dark text-white px-6 py-2 rounded-full transition-colors"
        >
          {status === 'sending' ? 'Sende...' : 'Absenden'}
        </button>
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-6 py-2 border border-lavender text-lavender-dark rounded-full hover:bg-lavender-light"
        >
          Zurück
        </button>
      </div>

      {status === 'success' && <p className="text-green-600 text-center">Danke! Deine Rückmeldung wurde gesendet.</p>}
      {status === 'error' && <p className="text-red-500 text-center">Fehler beim Senden. Bitte später erneut versuchen.</p>}
    </form>
  </div>
</div>
  );
}
