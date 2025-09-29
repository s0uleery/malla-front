//app/dashboard/page.tsx
'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { getUser, clearUser } from '@/lib/session';

export default function DashboardPage() {
  const router = useRouter();
  const user = getUser();

  if (!user) {
    router.replace('/login');
    return null;
  }

  function logout() {
    clearUser();
    router.replace('/login');
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#0F758C] to-[#154D59] text-white flex flex-col justify-between p-6">
        <div>
          {/* Logos */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Image src="/logo-ucn.png" alt="Logo UCN" width={50} height={50} />
            <Image src="/logo-eic.png" alt="Logo EIC" width={100} height={50} />
          </div>

          {/* Nombre estudiante */}
          <h2 className="text-lg font-bold text-center mb-8">
            {user?.nombre ?? 'Nombre completo del estudiante'}
          </h2>

          {/* Menú */}
          <nav className="space-y-4">
            <button
              className="flex items-center gap-3 w-full text-left hover:text-[#F29544]"
              onClick={() => router.push('/dashboard/avance')}
            >
              🎓 <span>Avance curricular</span>
            </button>
            <button
              className="flex items-center gap-3 w-full text-left hover:text-[#F29544]"
              onClick={() => router.push('/dashboard/proyecciones')}
            >
              👁️ <span>Mis proyecciones</span>
            </button>
            <button
              className="flex items-center gap-3 w-full text-left hover:text-[#F29544]"
              onClick={() => router.push('/dashboard/proyecciones/nueva')}
            >
              ✏️ <span>Crear proyección</span>
            </button>
          </nav>
        </div>

        {/* Botón de logout */}
        <button
          onClick={logout}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-[#F29544] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg shadow-md transition-colors"
        >
          ← Cerrar sesión
        </button>
      </aside>

      {/* Contenido dinámico */}
      <main className="flex-1 bg-[#E5E7EB] p-8">
        <h1 className="text-2xl font-bold text-[#154D59]">
          Bienvenido/a al panel principal
        </h1>
        <p className="mt-2 text-[#7D7E80]">
          Selecciona una opción en el menú para comenzar.
        </p>
      </main>
    </div>
  );
}
