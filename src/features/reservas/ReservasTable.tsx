import { EstadoBadge } from '../../components/EstadoBadge';
import type { Reserva } from '../../types/reserva';

interface ReservasTableProps {
  reservas: Reserva[];
}

export function ReservasTable({ reservas }: ReservasTableProps) {
  if (reservas.length === 0) {
    return <p className="vacio">No hay reservas para este filtro.</p>;
  }

  return (
    <div className="tabla-contenedor">
      <table>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Personas</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.cliente}</td>
              <td>{reserva.fecha}</td>
              <td>{reserva.personas}</td>
              <td>
                <EstadoBadge estado={reserva.estado} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
