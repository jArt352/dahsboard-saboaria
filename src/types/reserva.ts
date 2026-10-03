export type EstadoReserva = 'pendiente' | 'confirmada' | 'cancelada';

export interface Reserva {
  id: number;
  cliente: string;
  fecha: string;
  personas: number;
  estado: EstadoReserva;
  notas?: string;
}
