import equipo from '../mocks/equipo.js'
import './Nosotros.css'

const pasosTrabajo = [
  'Cada integrante desarrolla su parte en su propia rama.',
  'Los cambios se integran mediante Pull Requests revisados por el equipo.',
  'Las tareas y su avance se registran en un tablero Kanban.',
]

function Nosotros() {
  return (
    <section className="nosotros">
      <header className="nosotros__intro">
        <h1>Nosotros</h1>
        <p>
          Somos un equipo de tres estudiantes de la Pontificia Universidad Católica de Chile
          desarrollando <strong>Gambito de Edu</strong> como proyecto semestral del curso
          IIC2513 – Tecnologías y Aplicaciones Web.
        </p>
        <p>
          Gambito de Edu es un juego de estrategia por turnos que toma la base del ajedrez y le
          agrega personalización de ejércitos, poderes especiales, energía y eventos aleatorios,
          para que cada partida sea distinta.
        </p>
      </header>

      <section className="nosotros__equipo">
        <h2>El equipo</h2>
        <ul className="nosotros__grid">
          {equipo.map((integrante) => (
            <li key={integrante.id}>
              <article className="nosotros__card">
                <span className="nosotros__avatar" aria-hidden="true">
                  {integrante.iniciales}
                </span>
                <h3>{integrante.nombre}</h3>
                <p className="nosotros__rol">{integrante.rol}</p>
                <ul className="nosotros__responsabilidades">
                  {integrante.responsabilidades.map((tarea) => (
                    <li key={tarea}>{tarea}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="nosotros__trabajo">
        <h2>Cómo trabajamos</h2>
        <ol className="nosotros__pasos">
          {pasosTrabajo.map((paso) => (
            <li key={paso}>{paso}</li>
          ))}
        </ol>
      </section>
    </section>
  )
}

export default Nosotros
