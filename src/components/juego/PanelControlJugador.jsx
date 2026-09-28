import './PanelControlJugador.css'

function PanelControlJugador({ jugadorActivo, turno, fichaSeleccionada, onFinalizarTurno }) {
  return (
    <section className="panel-jugador" aria-labelledby="titulo-panel-jugador">
      <h2 id="titulo-panel-jugador">Jugador activo</h2>
      <p className="panel-jugador__nombre">{jugadorActivo.nombre}</p>
      <p>Color: {jugadorActivo.color}</p>
      <p className="panel-jugador__energia">Energía disponible <strong>{jugadorActivo.energia}</strong></p>
      <p>Turno: {turno}</p>

      <section className="panel-jugador__seleccion" aria-labelledby="titulo-ficha-seleccionada" aria-live="polite">
        <h3 id="titulo-ficha-seleccionada">Ficha seleccionada</h3>
        {fichaSeleccionada ? (
          <>
            <p className="panel-jugador__nombre">{fichaSeleccionada.nombre}</p>
            <p>Tipo: {fichaSeleccionada.tipo}</p>
            {fichaSeleccionada.rareza && (
              <p>Rareza: {fichaSeleccionada.rareza}</p>
            )}
            {fichaSeleccionada.nivel != null && (
              <p>Nivel: {fichaSeleccionada.nivel}</p>
            )}
            {fichaSeleccionada.poder?.nombre && (
              <p className="panel-jugador__poder">Poder: <strong>{fichaSeleccionada.poder.nombre}</strong></p>
            )}
            {fichaSeleccionada.poder?.costo_energia != null && (
              <p>Costo de energía: {fichaSeleccionada.poder.costo_energia}</p>
            )}
          </>
        ) : (
          <p>Selecciona una ficha del jugador activo para ver su información.</p>
        )}
      </section>

      <button className="panel-jugador__finalizar" type="button" onClick={onFinalizarTurno}>
        Finalizar turno
      </button>
    </section>
  )
}

export default PanelControlJugador
