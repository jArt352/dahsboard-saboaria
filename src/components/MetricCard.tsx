interface MetricCardProps {
  titulo: string;
  valor: number;
  detalle?: string;
}

export function MetricCard({ titulo, valor, detalle }: MetricCardProps) {
  return (
    <article className="metric-card">
      <p>{titulo}</p>
      <strong>{valor}</strong>
      {detalle && <small>{detalle}</small>}
    </article>
  );
}
