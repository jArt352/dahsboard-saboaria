import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Topbar } from './components/Topbar';
import { MetricCard } from './components/MetricCard';
import { Modal } from './components/Modal';
import { ReservasTable } from './features/reservas/ReservasTable';
import { ReservaForm } from './features/reservas/ReservaForm';
import { Filtros } from './features/reservas/Filtros';
import type { FiltroEstado } from './features/reservas/Filtros';
import { reservasIniciales } from './services/reservas';
import { totalPersonas } from './lib/reservas';
import type { Reserva } from './types/reserva';

const STORAGE_KEY = 'reservas';

export default function App() {
  const [modalAbierto, setModalAbierto] = useState<boolean>(false);
  const [reservas, setReservas] = useState<Reserva[]>(() => {
    const guardadas = localStorage.getItem(STORAGE_KEY);
    if (guardadas) {
      try {
        return JSON.parse(guardadas) as Reserva[];
      } catch {
        return reservasIniciales;
      }
    }
    return reservasIniciales;
  });
  const [filtro, setFiltro] = useState<FiltroEstado>('todas');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservas));
  }, [reservas]);

  const confirmadasCount = reservas.filter((r) => r.estado === 'confirmada').length;
  const pendientesCount = reservas.filter((r) => r.estado === 'pendiente').length;
  const personasCount = totalPersonas(reservas);

  const reservasVisibles =
    filtro === 'todas'
      ? reservas
      : reservas.filter((r) => r.estado === filtro);

  const agregarReserva = (nuevaReserva: Reserva) => {
    setReservas((prev) => [...prev, nuevaReserva]);
    setModalAbierto(false);
  };

  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Topbar onNueva={() => setModalAbierto(true)} />
        <section className="metrics">
          <MetricCard titulo="Reservas" valor={reservas.length} />
          <MetricCard titulo="Confirmadas" valor={confirmadasCount} />
          <MetricCard titulo="Pendientes" valor={pendientesCount} />
          <MetricCard titulo="Personas" valor={personasCount} detalle="en total" />
        </section>
        <Filtros valor={filtro} onCambiar={setFiltro} />
        <ReservasTable reservas={reservasVisibles} />

        {modalAbierto && (
          <Modal titulo="Nueva Reserva" onCerrar={() => setModalAbierto(false)}>
            <ReservaForm onGuardar={agregarReserva} />
          </Modal>
        )}
      </main>
    </div>
  );
}
