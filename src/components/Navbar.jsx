import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/', texto: 'Inicio' },
  { to: '/instrucciones', texto: 'Instrucciones' },
  { to: '/nosotros', texto: 'Nosotros' },
  { to: '/juego', texto: 'Jugar' },
]

function Navbar({ usuario, onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    onLogout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">Gambito de Edu</Link>

      <ul className="navbar__links">
        {links.map((link) => (
          <li key={link.to}>
            {/* NavLink agrega la clase "active" cuando la ruta coincide; "end" evita que "/" quede activo en todas */}
            <NavLink to={link.to} end={link.to === '/'} className="navbar__link">
              {link.texto}
            </NavLink>
          </li>
        ))}
      </ul>

      <section className="navbar__sesion">
        {usuario ? (
          <>
            <span className="navbar__usuario">Hola, {usuario.username}</span>
            <button type="button" className="navbar__boton" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link to="/login" className="navbar__boton">Iniciar sesión</Link>
        )}
      </section>
    </nav>
  )
}

export default Navbar
