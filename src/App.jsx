import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Landing from './pages/Landing.jsx'
import Instrucciones from './pages/Instrucciones.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Login from './pages/Login.jsx'
import Juego from './pages/Juego.jsx'
import NoEncontrada from './pages/NoEncontrada.jsx'

function App() {
  // Sesión simulada: null = visitante, objeto = jugador logueado (ej: { username: 'edu' })
  const [usuario, setUsuario] = useState(null)

  const iniciarSesion = (datosUsuario) => setUsuario(datosUsuario)
  const cerrarSesion = () => setUsuario(null)

  return (
    <Routes>
      {/* Ruta de layout: Layout dibuja header/nav/footer y la página hija va en su <Outlet /> */}
      <Route element={<Layout usuario={usuario} onLogout={cerrarSesion} />}>
        <Route path="/" element={<Landing usuario={usuario} />} />
        <Route path="/instrucciones" element={<Instrucciones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login onLogin={iniciarSesion} />} />
        <Route path="/juego" element={<Juego usuario={usuario} />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default App
