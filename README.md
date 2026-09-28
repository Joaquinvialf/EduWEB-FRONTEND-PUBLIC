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
  pages/        una vista por archivo (Landing, Instrucciones, Nosotros, Login, Registro, Juego)
  mocks/        datos mock (.json / .js) con el formato del protocolo
  styles/       reset.css con box-sizing y variables globales
docs/           Entrega 1, diagramas y protocolo JSON
```

El formato de los datos que intercambian cliente y servidor está en [`docs/protocolo.md`](docs/protocolo.md).

## Deploy

<!-- TODO: agregar link al deploy -->

Pendiente para el deploy en Netlify: agregar `public/_redirects` con la línea `/* /index.html 200`.
Como es una SPA, sin esa regla recargar la página en una ruta como `/nosotros` da error 404 (Netlify busca un
archivo `nosotros.html` que no existe).

## Uso de IA

Herramienta: Claude. Registro por sesión de cada integrante.

### Joaquín Vial — Sesión 1 (22/09/2026): Router, Navbar y placeholders

### Uso de IA — Sesión 1 (22/09/2026)

Usé Claude para entender mejor qué había que hacer en esta entrega y cómo enfrentarla: me ayudó
a ordenar el enunciado, a decidir cómo estructurar el router y las carpetas del proyecto, y a
generar un primer esqueleto base (React Router con layout + navbar, y placeholders de las 5
vistas). En esta sesión solo se armó el esqueleto inicial — sin contenido real todavía en
ninguna página.

Las decisiones de fondo (cómo dividir el trabajo, qué estructura usar, qué mantener y qué
descartar del template de Vite) fueron mías; la IA propuso opciones y yo elegí y ajusté según lo
que necesitábamos.