const simbolos = {
  blancas: { peon: '♙', torre: '♖', caballo: '♘', alfil: '♗', dama: '♕', rey: '♔' },
  negras: { peon: '♟', torre: '♜', caballo: '♞', alfil: '♝', dama: '♛', rey: '♚' },
}

function Ficha({ pieza, seleccionada, seleccionable, onSeleccionarFicha }) {
  return (
    <button
      type="button"
      className="ficha"
      aria-label={`${pieza.nombre}, ${pieza.color}, ${pieza.posicion}`}
      aria-pressed={seleccionada}
      disabled={!seleccionable}
      onClick={() => onSeleccionarFicha(pieza.id)}
      title={`${pieza.nombre} (${pieza.color})`}
    >
      {simbolos[pieza.color][pieza.tipo]}
    </button>
  )
}

export default Ficha
