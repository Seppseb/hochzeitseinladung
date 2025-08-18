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
    // Load saved password on mount
    const savedPassword = localStorage.getItem("wedding_admin_password");
    if (savedPassword) {
      setPassword(savedPassword);
      fetchSignups();
    }
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
      localStorage.setItem("wedding_admin_password", password);
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

  const statusTranslation = {
    "new": "neu",
    "accepted": "angenommen",
    "declined": "abgelehnt",
    "outdated": "alt",
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
    <div className="min-h-screen bg-lavender-light flex items-start justify-center p-6">
  <div className="w-full max-w-6xl bg-white shadow-2xl rounded-2xl p-8">
    <h2 className="text-3xl font-heading text-lavender-dark mb-6 text-center">Admin Dashboard</h2>

    {!authorized && (
      <div className="mb-6 text-center">
        <p className="mb-4 text-gray-600">Bitte Passwort eingeben, um die Anmeldungen abzurufen:</p>
        <div className="flex gap-2 justify-center">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Passwort"
            className="w-64 px-4 py-2 border border-lavender rounded-full focus:outline-none focus:ring-2 focus:ring-lavender-dark"
          />
          <button
            onClick={() => fetchSignups()}
            className="bg-lavender hover:bg-lavender-dark text-white px-6 py-2 rounded-full transition-colors"
          >
            Login
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
      </div>
    )}

    {authorized && (
      <div>
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <button
            onClick={() => fetchSignups()}
            className="px-4 py-2 border border-lavender rounded-full text-lavender-dark hover:bg-lavender-light"
          >
            Neu laden
          </button>

          <label className="flex items-center gap-2">
            <span className="text-gray-600">Filter:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as FilterStatus)}
              className="border border-lavender rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lavender-dark"
            >
              <option value="all">Alle</option>
              <option value="new">Neu</option>
              <option value="accepted">Angenommen</option>
              <option value="declined">Abgelehnt</option>
            </select>
          </label>

          <label className="flex items-center gap-2">
            <span className="text-gray-600">Sortierung:</span>
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="border border-lavender rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lavender-dark"
            >
              <option value="none">Keine</option>
              <option value="new">Neu zuerst</option>
              <option value="accepted">Angenommen zuerst</option>
              <option value="declined">Abgelehnt zuerst</option>
              <option value="alphabet">Nach Nachname</option>
            </select>
          </label>
        </div>

        {loading ? (
          <p className="text-gray-600">Lädt…</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-lavender-light shadow">
            <table className="w-full table-auto border-collapse">
              <thead className="bg-lavender-light">
                <tr className="text-left text-lavender-dark">
                  <th className="p-3">Vorname</th>
                  <th className="p-3">Nachname</th>
                  <th className="p-3">Attendance</th>
                  <th className="p-3">Bemerkung</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Aktionen</th>
                  <th className="p-3">Anzahl: {visible.length}</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((s) => (
                  <tr key={s.id} className="border-t hover:bg-lavender-light/30">
                    <td className="p-3">{s.firstName}</td>
                    <td className="p-3">{s.lastName}</td>
                    <td className="p-3">{s.attendance ? 'Kommt' : 'Kommt nicht'}</td>
                    <td className="p-3">{s.annotation || '-'}</td>
                    <td className="p-3">{statusTranslation[s.status]}</td>
                    <td className="p-3 space-x-2">
                      {s.status !== 'outdated' && s.attendance && (
                        <>
                          <button
                            onClick={() => updateStatus(s.id, 'accepted')}
                            className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-full"
                          >
                            Annehmen
                          </button>
                          <button
                            onClick={() => updateStatus(s.id, 'declined')}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full"
                          >
                            Ablehnen
                          </button>
                        </>
                      )}
                      {s.status !== 'outdated' && !s.attendance && (
                        <button
                          onClick={() => updateStatus(s.id, 'declined')}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full"
                        >
                          Ablehnen
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {visible.length === 0 && <p className="mt-4 text-center text-gray-600">Keine Einträge angezeigt.</p>}
          </div>
        )}

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    )}
  </div>
</div>

  );
}
