import Ficha from './Ficha.jsx'

function Casilla({ posicion, oscura, pieza, especial, seleccionada, seleccionable, onSeleccionarFicha, onMoverFicha }) {
  const clases = [
    'casilla',
    oscura ? 'casilla--oscura' : 'casilla--clara',
    especial ? 'casilla--especial' : '',
    seleccionada ? 'casilla--seleccionada' : '',
  ].filter(Boolean).join(' ')

  return (
    <li className={clases}>
      {posicion[0] === 'a' && (
        <span className="casilla__coordenada casilla__coordenada--fila" aria-hidden="true">{posicion[1]}</span>
      )}
      {posicion[1] === '1' && (
        <span className="casilla__coordenada casilla__coordenada--columna" aria-hidden="true">{posicion[0]}</span>
      )}
      {especial && (
        <span className="casilla__especial" role="img" aria-label={`Casilla especial: ${especial.tipo}`} title={especial.tipo}>
          ◆
        </span>
      )}
      {pieza ? (
        <Ficha
          pieza={pieza}
          seleccionada={seleccionada}
          seleccionable={seleccionable}
          onSeleccionarFicha={onSeleccionarFicha}
        />
      ) : (
        <button
          type="button"
          className="casilla__destino"
          aria-label={`Casilla vacía ${posicion}`}
          onClick={() => onMoverFicha(posicion)}
        />
      )}
    </li>
  )
}

export default Casilla
