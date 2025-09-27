'use client';
import { useRouter } from 'next/navigation';
import { getUser, clearUser } from '@/lib/session';

export default function DashboardPage() {
  const router = useRouter();
  const user = getUser();

  if (!user) return <p>No hay sesión activa</p>;

  function logout() {
    clearUser();
    router.replace('/login');
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Bienvenido, {user.rut}</h1>
      <h2 className="mt-2">Carreras:</h2>
      <ul>
        {user.carreras.map((c) => (
          <li key={c.codigo}>{c.nombre} ({c.catalogo})</li>
        ))}
      </ul>
      <button
        className="mt-6 rounded bg-red-600 px-3 py-1 text-white"
        onClick={logout}
      >
        Cerrar sesión
      </button>
    </main>
  );
}
