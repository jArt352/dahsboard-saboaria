export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Saboria</h2>
      <nav>
        <a href="#">Resumen</a>
        <a href="#" className="activo">
          Reservas
        </a>
        <a href="#">Mensajes</a>
        <a href="#">Ajustes</a>
      </nav>
    </aside>
  );
}
