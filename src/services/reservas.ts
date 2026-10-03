import type { Reserva } from '../types/reserva';

export const reservasIniciales: Reserva[] = [
  {
    id: 1,
    cliente: 'Ana García',
    fecha: '2026-10-03',
    personas: 5,
    estado: 'confirmada',
    notas: 'Mesa cerca de la ventana',
  },
  {
    id: 2,
    cliente: 'Carlos Rodríguez',
    fecha: '2026-10-03',
    personas: 3,
    estado: 'confirmada',
  },
  {
    id: 3,
    cliente: 'María López',
    fecha: '2026-10-04',
    personas: 4,
    estado: 'pendiente',
    notas: 'Celebración de cumpleaños',
  },
  {
    id: 4,
    cliente: 'Juan Martínez',
    fecha: '2026-10-04',
    personas: 6,
    estado: 'pendiente',
  },
  {
    id: 5,
    cliente: 'Laura Gómez',
    fecha: '2026-10-05',
    personas: 2,
    estado: 'cancelada',
  },
];
