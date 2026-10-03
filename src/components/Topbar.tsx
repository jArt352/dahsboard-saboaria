interface TopbarProps {
  onNueva: () => void;
}

export function Topbar({ onNueva }: TopbarProps) {
  return (
    <header className="topbar">
      <h1>Reservas</h1>
      <button className="btn" onClick={onNueva}>
        + Nueva reserva
      </button>
    </header>
  );
}
