import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import users from "../mocks/usuarios.json";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [nombre_usuario, setUsuarioNombre] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión,
    const user = users.find(usuario => usuario.username === nombre_usuario
      && usuario.password === password
    );

    if (!user) {
      alert("Nombre de usuario o contraseña incorrectos");
      return;
    }

    // Igual que LOGIN_RESPONSE del protocolo: solo id y username, nunca la contraseña
    onLogin({ id: user.id, username: user.username });
    navigate("/");
  };

  return (
    <section className="login">
      <div className="login__card">
        <header className="login__header">
          <h1 className="login__title">Iniciar sesión</h1>
          <p className="login__subtitle">Ingresa tus datos para continuar</p>
        </header>

        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__field">
            <label className="login__label" htmlFor="nombre_usuario">
              Nombre de usuario
            </label>
            <input
              className="login__input"
              id="nombre_usuario"
              type="text"
              placeholder="Nombre de usuario"
              value={nombre_usuario}
              onChange={(e) => setUsuarioNombre(e.target.value)}
              required
            />
          </div>

          <div className="login__field">
            <label className="login__label" htmlFor="password">
              Contraseña
            </label>
            <input
              className="login__input"
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login__button" type="submit">
            Ingresar
          </button>
        </form>

        <p className="login__register">
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
