import { Link } from 'react-router-dom'
import './Landing.css'

const diferencias = [
  {
    titulo: 'Ejército personalizable',
    descripcion:
      'Antes de cada partida armas tu ejército con fichas comunes y raras de tu colección, más un rey real con su propio poder.',
  },
  {
    titulo: 'Sistema de energía',
    descripcion:
      'Ganas energía cada turno, al controlar casillas especiales y al capturar fichas rivales.',
  },
  {
    titulo: 'Poderes especiales',
    descripcion:
      'Cada ficha tiene, además de su movimiento, un poder único que se activa consumiendo energía.',
  },
  {
    titulo: 'Eventos aleatorios',
    descripcion:
      'Cada cierto número de turnos ocurre un evento que cambia el tablero, así ninguna partida es igual a otra.',
  },
]

function Landing({ usuario }) {
  return (
    <section className="landing">
      <header className="landing__hero">
        <h1>Gambito de Edu</h1>
        <p className="landing__lema">Ajedrez con tu propio ejército</p>
        <p>
          Un juego de estrategia por turnos para dos jugadores que toma la base del ajedrez
          clásico, el tablero de 8x8 y sus piezas, y le agrega una capa de personalización
          inspirada en los juegos de cartas coleccionables. El objetivo sigue siendo el mismo:
          dar jaque mate al rey rival.
        </p>

        {/* Visitante: invitar a registrarse; jugador con sesión: ir directo a jugar */}
        {usuario ? (
          <div className="landing__acciones">
            <p className="landing__saludo">Hola, {usuario.username}</p>
            <Link to="/juego" className="landing__boton landing__boton--principal">
              Ir a partidas
            </Link>
          </div>
        ) : (
          <div className="landing__acciones">
            <Link to="/register" className="landing__boton landing__boton--principal">
              Registrarse
            </Link>
            <Link to="/login" className="landing__boton landing__boton--secundario">
              Iniciar sesión
            </Link>
            <Link to="/juego" className="landing__link">
              Ir a partidas
            </Link>
          </div>
        )}
      </header>

      <section className="landing__diferencias">
        <h2>¿Qué lo hace distinto?</h2>
        <ul className="landing__grid">
          {diferencias.map((diferencia) => (
            <li key={diferencia.titulo}>
              <article className="landing__card">
                <h3>{diferencia.titulo}</h3>
                <p>{diferencia.descripcion}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Landing
