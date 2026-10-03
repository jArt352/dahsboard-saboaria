import type { EstadoReserva } from '../../types/reserva';

export type FiltroEstado = EstadoReserva | 'todas';

interface FiltrosProps {
  valor: FiltroEstado;
  onCambiar: (nuevoFiltro: FiltroEstado) => void;
}

const OPCIONES: FiltroEstado[] = ['todas', 'pendiente', 'confirmada', 'cancelada'];

export function Filtros({ valor, onCambiar }: FiltrosProps) {
  return (
    <div className="filtros">
      {OPCIONES.map((opcion) => (
        <button
          key={opcion}
          type="button"
          className={`chip ${valor === opcion ? 'activo' : ''}`}
          onClick={() => onCambiar(opcion)}
        >
          {opcion}
        </button>
      ))}
    </div>
  );
}
