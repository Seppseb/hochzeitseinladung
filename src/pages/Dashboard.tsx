// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { API_BASE } from '../config.js';
import { Signup } from '../types.js';

type FilterState = 'alle' | 'neu' | 'angenommen' | 'abgelehnt' | 'kommt nicht';
type SortMode = 'none' | 'neu' | 'angenommen' | 'abgelehnt' | 'kommt nicht' | 'alphabet';

export default function Dashboard() {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterState>('alle');
  const [sortMode, setSortMode] = useState<SortMode>('none');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // optionally restore token from localStorage
    const stored = localStorage.getItem('admin_token');
    if (stored) {
      setToken(stored);
      fetchSignups(stored);
    }
  }, []);

  const login = async () => {
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError('Login fehlgeschlagen');
        return;
      }
      const data = await res.json();
      if (data.token) {
        setToken(data.token);
        localStorage.setItem('admin_token', data.token);
        fetchSignups(data.token);
      } else {
        setError('Keine Token erhalten');
      }
    } catch (err) {
      console.error(err);
      setError('Netzwerkfehler');
    }
  };

  const fetchSignups = async (tok?: string) => {
    setLoading(true);
    setError(null);
    try {
      const used = tok ?? token;
      const res = await fetch(`${API_BASE}/signups`, {
        headers: { Authorization: `Bearer ${used}` },
      });
      if (!res.ok) throw new Error('Fehler beim Laden');
      const data = await res.json();
      setSignups(data);
    } catch (err) {
      console.error(err);
      setError('Konnte Einträge nicht laden');
    } finally {
      setLoading(false);
    }
  };

  const updateState = async (id: string, newState: Signup['state']) => {
    if (!token) return setError('Nicht eingeloggt');
    try {
      const res = await fetch(`${API_BASE}/signups/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ state: newState }),
      });
      if (!res.ok) throw new Error('Update fehlgeschlagen');
      // Optimistisch lokal updaten
      setSignups((prev) => prev.map((s) => (s.id === id ? { ...s, state: newState } : s)));
    } catch (err) {
      console.error(err);
      setError('Update fehlgeschlagen');
    }
  };

  // Filter + Sort
  const stateOrder: Record<string, number> = { neu: 0, angenommen: 1, abgelehnt: 2, 'kommt nicht': 3 };

  const visible = signups
    .filter((s) => (filter === 'alle' ? true : s.state === filter))
    .sort((a, b) => {
      if (sortMode === 'alphabet') return a.lastName.localeCompare(b.lastName);
      if (sortMode === 'none') return 0;
      return (stateOrder[a.state] ?? 99) - (stateOrder[b.state] ?? 99);
    });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>

        {!token && (
          <div className="mb-6">
            <p className="mb-2">Bitte Passwort eingeben, um die Anmeldungen abzurufen:</p>
            <div className="flex gap-2">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-3 py-2 rounded" />
              <button onClick={login} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
            </div>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
        )}

        {token && (
          <div>
            <div className="flex items-center gap-4 mb-4">
              <button onClick={() => fetchSignups()} className="px-3 py-1 border rounded">Neu laden</button>
              <label>
                Filter:
                <select value={filter} onChange={(e) => setFilter(e.target.value as FilterState)} className="ml-2 border rounded px-2 py-1">
                  <option value="alle">Alle</option>
                  <option value="neu">Neu</option>
                  <option value="angenommen">Angenommen</option>
                  <option value="abgelehnt">Abgelehnt</option>
                  <option value="kommt nicht">Kommt nicht</option>
                </select>
              </label>

              <label>
                Sortierung:
                <select value={sortMode} onChange={(e) => setSortMode(e.target.value as SortMode)} className="ml-2 border rounded px-2 py-1">
                  <option value="none">Keine</option>
                  <option value="neu">Neu zuerst (state order)</option>
                  <option value="angenommen">Angenommen zuerst</option>
                  <option value="abgelehnt">Abgelehnt zuerst</option>
                  <option value="kommt nicht">Kommt nicht zuerst</option>
                  <option value="alphabet">Nach Nachname</option>
                </select>
              </label>
            </div>

            {loading ? (
              <p>Lädt…</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="text-left">
                      <th className="p-2">Vorname</th>
                      <th className="p-2">Nachname</th>
                      <th className="p-2">Partner</th>
                      <th className="p-2">Attendance</th>
                      <th className="p-2">Bemerkung</th>
                      <th className="p-2">State</th>
                      <th className="p-2">Aktionen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visible.map((s) => (
                      <tr key={s.id} className="border-t">
                        <td className="p-2">{s.firstName}</td>
                        <td className="p-2">{s.lastName}</td>
                        <td className="p-2">{s.partner ? 'Ja' : 'Nein'}</td>
                        <td className="p-2">{s.attendance ? 'Kommt' : 'Kommt nicht'}</td>
                        <td className="p-2">{s.annotation || '-'}</td>
                        <td className="p-2">{s.state}</td>
                        <td className="p-2 space-x-2">
                          {s.state === 'neu' && s.attendance && (
                            <>
                              <button onClick={() => updateState(s.id, 'angenommen')} className="px-2 py-1 bg-green-600 text-white rounded">Annehmen</button>
                              <button onClick={() => updateState(s.id, 'abgelehnt')} className="px-2 py-1 bg-red-600 text-white rounded">Ablehnen</button>
                            </>
                          )}

                          {s.state === 'neu' && !s.attendance && (
                            <button onClick={() => updateState(s.id, 'kommt nicht')} className="px-2 py-1 bg-red-600 text-white rounded">Ablehnen</button>
                          )}

                          {/* allow state change for others as well if needed */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {visible.length === 0 && <p className="mt-4">Keine Einträge angezeigt.</p>}
              </div>
            )}

            {error && <p className="text-red-600 mt-3">{error}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
