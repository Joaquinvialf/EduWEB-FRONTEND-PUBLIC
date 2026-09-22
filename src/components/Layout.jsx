import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import './Layout.css'

function Layout({ usuario, onLogout }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <Navbar usuario={usuario} onLogout={onLogout} />
      </header>

      <main className="layout__main">
        {/* Aquí React Router renderiza la página de la ruta actual */}
        <Outlet />
      </main>

      <footer className="layout__footer">
        <p>Gambito de Edu · IIC2513 Tecnologías y Aplicaciones Web · 2026</p>
      </footer>
    </div>
  )
}

export default Layout
