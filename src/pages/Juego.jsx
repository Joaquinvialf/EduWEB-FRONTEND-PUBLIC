import { useState } from 'react'
import partidaMock from '../mocks/partida.js'
import Tablero from '../components/juego/Tablero.jsx'
import PanelControlJugador from '../components/juego/PanelControlJugador.jsx'
import Bitacora from '../components/juego/Bitacora.jsx'
import './Juego.css'

function Juego() {
  const [partida, setPartida] = useState(partidaMock)
  const [fichaSeleccionadaId, setFichaSeleccionadaId] = useState(null)
  const fichaSeleccionada = partida.piezas.find(
    (pieza) => pieza.id === fichaSeleccionadaId,
  )
  const jugadorActual = partida.jugadores.find(
    (jugador) => jugador.id === partida.jugador_actual,
  )

  function seleccionarFicha(id) {
    const pieza = partida.piezas.find((pieza) => pieza.id === id)
    if (!pieza || pieza.propietario !== partida.jugador_actual) return

    setFichaSeleccionadaId((idActual) => idActual === id ? null : id)
  }

  function moverFicha(posicionFinal) {
    if (!fichaSeleccionada || fichaSeleccionada.propietario !== partida.jugador_actual) return
    if (partida.piezas.some((pieza) => pieza.posicion === posicionFinal)) return

    setPartida((partidaAnterior) => {
      const pieza = partidaAnterior.piezas.find((pieza) => pieza.id === fichaSeleccionadaId)
      if (!pieza || pieza.propietario !== partidaAnterior.jugador_actual) return partidaAnterior
      if (partidaAnterior.piezas.some((pieza) => pieza.posicion === posicionFinal)) return partidaAnterior

      const accion = {
        id: `accion-${partidaAnterior.historial.length + 1}`,
        turno: partidaAnterior.turno_actual,
        jugador_id: partidaAnterior.jugador_actual,
        ficha_id: pieza.id,
        posicion_inicial: pieza.posicion,
        posicion_final: posicionFinal,
        descripcion: `${pieza.nombre}: ${pieza.posicion} → ${posicionFinal}.`,
      }

      return {
        ...partidaAnterior,
        piezas: partidaAnterior.piezas.map((ficha) => (
          ficha.id === pieza.id ? { ...ficha, posicion: posicionFinal } : ficha
        )),
        historial: [...partidaAnterior.historial, accion],
      }
    })
    setFichaSeleccionadaId(null)
  }

  function finalizarTurno() {
    setPartida((partidaAnterior) => {
      const siguienteJugador = partidaAnterior.jugadores.find(
        (jugador) => jugador.id !== partidaAnterior.jugador_actual,
      )
      const nuevoTurno = partidaAnterior.turno_actual + 1
      const accion = {
        id: `accion-${partidaAnterior.historial.length + 1}`,
        turno: nuevoTurno,
        jugador_id: siguienteJugador.id,
        descripcion: `Comienza el turno de ${siguienteJugador.nombre}.`,
      }

      return {
        ...partidaAnterior,
        jugador_actual: siguienteJugador.id,
        turno_actual: nuevoTurno,
        jugadores: partidaAnterior.jugadores.map((jugador) => (
          jugador.id === siguienteJugador.id
            ? { ...jugador, energia: Math.min(jugador.energia + 1, 10) }
            : jugador
        )),
        historial: [...partidaAnterior.historial, accion],
      }
    })
    setFichaSeleccionadaId(null)
  }

  return (
    <section className="juego">
      <header className="juego__encabezado">
        <div className="juego__resumen">
          <h1>Partida</h1>
          <p>Turno <strong>{partida.turno_actual}</strong></p>
          <p>Jugador activo: <strong>{jugadorActual.nombre}</strong></p>
        </div>
        <ul className="juego__jugadores" aria-label="Jugadores y energía">
          {partida.jugadores.map((jugador) => (
            <li key={jugador.id}>
              {jugador.nombre} ({jugador.color}) · Energía: {jugador.energia}
            </li>
          ))}
        </ul>
      </header>

      <div className="juego__contenido">
        <Tablero
          piezas={partida.piezas}
          casillasEspeciales={partida.casillas_especiales}
          jugadorActualId={partida.jugador_actual}
          fichaSeleccionadaId={fichaSeleccionadaId}
          onSeleccionarFicha={seleccionarFicha}
          onMoverFicha={moverFicha}
        />
        <PanelControlJugador
          jugadorActivo={jugadorActual}
          turno={partida.turno_actual}
          fichaSeleccionada={fichaSeleccionada}
          onFinalizarTurno={finalizarTurno}
        />
        <Bitacora historial={partida.historial} />
      </div>
    </section>
  )
}

export default Juego
