import type { Reserva } from '../types/reserva';

export function totalPersonas(reservas: Reserva[]): number {
  return reservas.reduce((acc, reserva) => acc + reserva.personas, 0);
}
