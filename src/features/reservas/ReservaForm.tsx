import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Reserva } from '../../types/reserva';

interface ReservaFormProps {
  onGuardar: (nueva: Reserva) => void;
}

export function ReservaForm({ onGuardar }: ReservaFormProps) {
  const [cliente, setCliente] = useState<string>('');
  const [fecha, setFecha] = useState<string>('2026-10-03');
  const [personas, setPersonas] = useState<number>(2);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cliente.trim()) return;

    onGuardar({
      id: Date.now(),
      cliente,
      fecha,
      personas,
      estado: 'pendiente',
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Cliente
        <input
          type="text"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          required
        />
      </label>
      <label>
        Fecha
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </label>
      <label>
        Personas
        <input
          type="number"
          min={1}
          value={personas}
          onChange={(e) => setPersonas(Number(e.target.value))}
          required
        />
      </label>
      <button type="submit" className="btn">
        Guardar reserva
      </button>
    </form>
  );
}
