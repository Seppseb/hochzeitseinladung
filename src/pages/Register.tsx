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
    <div className="min-h-screen bg-gray-50 flex items-start justify-center p-6 pt-12">
      <div className="w-full max-w-xl bg-white rounded-2xl p-6 shadow">
        <h2 className="text-2xl font-semibold mb-4">Rückmeldung</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Vorname</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Nachname</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Bemerkung (z. B. Lebensmittelunverträglichkeiten)</label>
            <textarea value={annotation} onChange={(e) => setAnnotation(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
          </div>

          <fieldset className="flex gap-4 items-center">
            <legend className="text-sm font-medium">Teilnahme</legend>
            <label className="flex items-center gap-2">
              <input type="radio" name="attendance" checked={attendance === 'yes'} onChange={() => setAttendance('yes')} />
              Ja, ich komme
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="attendance" checked={attendance === 'no'} onChange={() => setAttendance('no')} />
              Nein, ich kann leider nicht kommen
            </label>
          </fieldset>

          <div className="flex items-center gap-3">
            <button disabled={status === 'sending'} className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded">
              {status === 'sending' ? 'Sende...' : 'Absenden'}
            </button>
            <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Zurück</button>
          </div>

          {status === 'success' && <p className="text-green-600">Danke! Deine Rückmeldung wurde gesendet.</p>}
          {status === 'error' && <p className="text-red-600">Fehler beim Senden. Bitte später erneut versuchen.</p>}
        </form>
      </div>
    </div>
  );
}
