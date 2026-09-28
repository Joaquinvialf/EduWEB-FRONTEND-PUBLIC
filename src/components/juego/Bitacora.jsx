import './Bitacora.css'

function Bitacora({ historial }) {
  return (
    <section className="bitacora" aria-labelledby="titulo-bitacora">
      <h2 id="titulo-bitacora">Bitácora</h2>
      {historial.length > 0 ? (
        <ol tabIndex={0} aria-label="Acciones, más recientes primero" className="bitacora__acciones" aria-live="polite" aria-relevant="additions">
          {[...historial].reverse().map((accion) => (
            <li key={accion.id} className="bitacora__accion">
              <strong>Turno {accion.turno}</strong> · {accion.descripcion}
            </li>
          ))}
        </ol>
      ) : (
        <p>Todavía no hay acciones registradas.</p>
      )}
    </section>
  )
}

export default Bitacora
