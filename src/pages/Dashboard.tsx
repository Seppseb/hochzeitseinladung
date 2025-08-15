// src/pages/Dashboard.tsx
import { useEffect, useState } from 'react';
import { API_BASE } from '../config.js';
import { Signup } from '../types.js';

type FilterStatus = 'all' | 'new' | 'accepted' | 'declined';
type SortMode = 'none' | 'new' | 'accepted' | 'declined' | 'alphabet';

export default function Dashboard() {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [signups, setSignups] = useState<Signup[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [sortMode, setSortMode] = useState<SortMode>('none');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // optionally restore token from localStorage
    
  }, []);

  const fetchSignups = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/signup`, {
        headers: { 'password': password },
      });
      if (!res.ok) throw new Error('Fehler beim Laden');
      const data = await res.json();
      setAuthorized(true);
      setSignups(data);
    } catch (err) {
      console.error(err);
      setError('Konnte Einträge nicht laden');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Signup['status']) => {
    try {
      // Create URL with query parameters
      const url = new URL(`${API_BASE}/signup/status`);
      url.searchParams.append('id', id);
      url.searchParams.append('status', newStatus);

      const res = await fetch(url.toString(), {
        // 1. Method changed from 'PATCH' to 'PUT'
        method: 'PUT',
        headers: {
          // 'Content-Type' is no longer needed as there is no body
          'password': password
        },
        // 2. Body is removed, data is now in the URL
      });
      if (!res.ok) throw new Error('Update fehlgeschlagen');
      // Optimistisch lokal updaten
      setSignups((prev) => prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s)));
    } catch (err) {
      console.error(err);
      setError('Update fehlgeschlagen');
    }
  };

  // Filter + Sort
  const statusOrder: Record<string, number> = { new: 0, accepted: 1, declined: 2 };

  const visible = signups
    .filter((s) => (filter === 'all' ? true : s.status === filter))
    .sort((a, b) => {
      if (sortMode === 'alphabet') return a.lastName.localeCompare(b.lastName);
      if (sortMode === 'none') return 0;
      return (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99);
    });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>

        {!authorized && (
          <div className="mb-6">
            <p className="mb-2">Bitte Passwort eingeben, um die Anmeldungen abzurufen:</p>
            <div className="flex gap-2">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border px-3 py-2 rounded" />
              <button onClick={() => fetchSignups()} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
            </div>
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </div>
        )}

        {authorized && (
          <div>
            <div className="flex items-center gap-4 mb-4">
              <button onClick={() => fetchSignups()} className="px-3 py-1 border rounded">Neu laden</button>
              <label>
                Filter:
                <select value={filter} onChange={(e) => setFilter(e.target.value as FilterStatus)} className="ml-2 border rounded px-2 py-1">
                  <option value="all">Alle</option>
                  <option value="new">Neu</option>
                  <option value="accepted">Angenommen</option>
                  <option value="declined">Abgelehnt</option>
                </select>
              </label>

              <label>
                Sortierung:
                <select value={sortMode} onChange={(e) => setSortMode(e.target.value as SortMode)} className="ml-2 border rounded px-2 py-1">
                  <option value="none">Keine</option>
                  <option value="new">Neu zuerst (status order)</option>
                  <option value="accepted">Angenommen zuerst</option>
                  <option value="declined">Abgelehnt zuerst</option>
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
                      <th className="p-2">Attendance</th>
                      <th className="p-2">Bemerkung</th>
                      <th className="p-2">Status</th>
                      <th className="p-2">Aktionen</th>
                      <th className="p-2">Anzahl: {visible.length}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visible.map((s) => (
                      <tr key={s.id} className="border-t">
                        <td className="p-2">{s.firstName}</td>
                        <td className="p-2">{s.lastName}</td>
                        <td className="p-2">{s.attendance ? 'Kommt' : 'Kommt nicht'}</td>
                        <td className="p-2">{s.annotation || '-'}</td>
                        <td className="p-2">{s.status}</td>
                        <td className="p-2 space-x-2">
                          { s.status != 'outdated' && s.attendance && (
                            <>
                              <button onClick={() => updateStatus(s.id, 'accepted')} className="px-2 py-1 bg-green-600 text-white rounded">Annehmen</button>
                              <button onClick={() => updateStatus(s.id, 'declined')} className="px-2 py-1 bg-red-600 text-white rounded">Ablehnen</button>
                            </>
                          )}

                          { s.status != 'outdated' && !s.attendance && (
                            <button onClick={() => updateStatus(s.id, 'declined')} className="px-2 py-1 bg-red-600 text-white rounded">Ablehnen</button>
                          )}

                          {/* allow status change for others as well if needed */}
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
