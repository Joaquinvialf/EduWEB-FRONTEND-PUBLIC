# Gambito de Edu — Frontend

Proyecto semestral IIC2513 – Tecnologías y Aplicaciones Web (Sección 2, 2º semestre 2026, prof. Hernán Cabrera).

**Equipo:** José Ignacio Arancibia, Eduardo Vial, Joaquín Vial.

Gambito de Edu es un juego de estrategia por turnos para 2 jugadores basado en el ajedrez, donde cada jugador arma su
propio ejército de fichas con poderes especiales, energía, casillas especiales y eventos aleatorios.
La propuesta completa (Entrega 1) está en `docs/Entrega 1 Propuesta.pdf`, junto con los diagramas.

## Instalación y ejecución

Requisitos: Node.js y npm.

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run lint     # revisión con ESLint
```

## Estructura

```
src/
  components/   componentes compartidos (Layout, Navbar)
  pages/        una vista por archivo (Landing, Instrucciones, Nosotros, Login, Juego)
  mocks/        datos mock (.json / .js)
  styles/       reset.css con box-sizing y variables globales
docs/           Entrega 1 y diagramas
```

## Deploy

<!-- TODO: agregar link al deploy -->

Pendiente para el deploy en Netlify: agregar `public/_redirects` con la línea `/* /index.html 200`.
Como es una SPA, sin esa regla recargar la página en una ruta como `/nosotros` da error 404 (Netlify busca un
archivo `nosotros.html` que no existe).

## Uso de IA

Herramienta: Claude Code (modelo Claude Opus 5.5). Registro por sesión de cada integrante.

### Joaquín Vial — Sesión 1 (22/09/2026): Router, Navbar y placeholders

**Prompt (resumen):** contexto completo del proyecto y de la Entrega 2. Se pidió armar `App.jsx` con React Router,
rutas placeholder para las 5 vistas, un `Navbar` global e importar `reset.css`.

**Qué generó la IA:**
- `src/main.jsx`: importa `reset.css` y envuelve la app en `<BrowserRouter>`.
- `src/App.jsx`: rutas `/`, `/instrucciones`, `/nosotros`, `/login`, `/juego` y `*` (404), anidadas en una
  ruta de layout; estado `usuario` para simular la sesión (`iniciarSesion` / `cerrarSesion`).
- `src/components/Layout.jsx` + `.css`: `<header>`, `<main>` con `<Outlet />` y `<footer>`, con el footer pegado abajo usando Flexbox.
- `src/components/Navbar.jsx` + `.css`: links con `NavLink` (clase `active`), botón de sesión según `usuario`,
  responsivo con `flex-wrap` + media query.
- Placeholders con solo un `<h1>` en `src/pages/`.
- `index.html`: `lang="es"` y título "Gambito de Edu".

**Decisiones / análisis crítico:**
- Se eligió la "ruta de layout" + `<Outlet />` para no repetir el nav en cada página.
- La sesión vive en `App` y se pasa por props (más simple de explicar que Context para este tamaño de app).
- CSS plano por componente con prefijos tipo BEM (`navbar__link`) para evitar choques de clases entre integrantes.
- <!-- completar: qué modifiqué / qué entendí / qué cambiaría -->

**Cambios posteriores en la misma sesión (pedidos por mí):**
- Se borraron los archivos de demo del template de Vite (`App.css`, `index.css`, `src/assets/*`, `public/icons.svg`),
  que ya no se usaban y chocaban con `reset.css`.
- Se reemplazó el README del template por este README del proyecto.
- Se sacaron `docs/README.md` y el registro de IA de `docs/`; el registro quedó dentro de este README.
- La IA detectó que el PDF de la Entrega 1 aún menciona rarezas épica/legendaria, mientras que el catálogo
  corregido solo tiene común y rara (+ real para reyes). Se actualizará el PDF.
- La IA explicó cada archivo/carpeta del proyecto y el flujo de trabajo con ramas y Pull Requests.
