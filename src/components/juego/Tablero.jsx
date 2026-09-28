import Casilla from './Casilla.jsx'
import './Tablero.css'

const columnas = 'abcdefgh'

function Tablero({ piezas, casillasEspeciales, jugadorActualId, fichaSeleccionadaId, onSeleccionarFicha, onMoverFicha }) {
  const casillas = Array.from({ length: 64 }, (_, indice) => {
    const fila = 8 - Math.floor(indice / 8)
    const columna = indice % 8
    const posicion = `${columnas[columna]}${fila}`
    const pieza = piezas.find((pieza) => pieza.posicion === posicion)

    return (
      <Casilla
        key={posicion}
        posicion={posicion}
        oscura={(columna + fila) % 2 === 1}
        pieza={pieza}
        seleccionada={pieza?.id === fichaSeleccionadaId}
        seleccionable={pieza?.propietario === jugadorActualId}
        onSeleccionarFicha={onSeleccionarFicha}
        onMoverFicha={onMoverFicha}
        especial={casillasEspeciales.find((casilla) => casilla.posicion === posicion)}
      />
    )
  })

  return (
    <section className="tablero-seccion" aria-labelledby="titulo-tablero">
      <h2 id="titulo-tablero">Tablero</h2>
      <ul className="tablero" aria-label="Tablero de 8 por 8, desde a8 hasta h1">
        {casillas}
      </ul>
      <p>Las casillas con borde violeta y ◆ son especiales.</p>
    </section>
  )
}

export default Tablero
