import { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import users from "../mocks/usuarios.json";

function Signin() {
  const [nombre_usuario, setUsuarioNombre] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro,

    const user = users.find(usuario => usuario.username === nombre_usuario);

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    else if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    else if (user) {
        alert("El nombre de usuario ya está en uso");
        return;
    }
  };

  return (
    <section className="signin">
      <div className="signin__card">
        <header className="signin__header">
          <h1 className="signin__title">Registrarse</h1>
          <p className="signin__subtitle">Crea una nueva cuenta</p>
        </header>

        <form className="signin__form" onSubmit={handleSubmit}>
          <div className="signin__field">
            <label className="signin__label" htmlFor="nombre_usuario">
              Nombre de usuario
            </label>
            <input
              className="signin__input"
              id="nombre_usuario"
              type="text"
              placeholder="Nombre de usuario"
              value={nombre_usuario}
              onChange={(e) => setUsuarioNombre(e.target.value)}
              required
            />
          </div>

          <div className="signin__field">
            <label className="signin__label" htmlFor="password">
              Contraseña
            </label>
            <input
              className="signin__input"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="signin__field">
            <label className="signin__label" htmlFor="confirmPassword">
              Confirmar contraseña
            </label>
            <input
              className="signin__input"
              id="confirmPassword"
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button className="signin__button" type="submit">
            Registrarse
          </button>
        </form>

        <p className="signin__login">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </section>
  );
}

export default Signin;