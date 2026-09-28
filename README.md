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

## Decisiones técnicas

- **Vite + React + React Router.** Las vistas cuelgan de una ruta de layout (`Layout` con `<Outlet />`), así el
  header con el `<nav>` y el footer se escriben una sola vez y cada página solo aporta su contenido. Las rutas
  que no existen muestran una página 404 propia (`NoEncontrada`).
- **CSS modular sin frameworks.** Cada componente importa su propio `.css` con clases BEM (`landing__card`,
  `nosotros__grid`), para que los estilos de una vista no afecten a otra. Colores, espaciados y radios son
  variables globales en `src/styles/reset.css`. No hay estilos inline.
- **Layout con Flexbox y Grid.** Las grillas de tarjetas usan `repeat(auto-fit, minmax(...))`: se reparten en
  tantas columnas como quepan sin necesitar media queries.
- **Sesión simulada con estado de React.** El usuario conectado vive en un `useState` de `App.jsx` y baja por
  props al Navbar, Login, Landing y Juego. Así el `<nav>` y la Landing cambian al iniciar o cerrar sesión. La
  navegación interna usa `<Link>`/`NavLink` y no `<a href>`, porque recargar la página borraría ese estado.
- **Mocks con el formato del protocolo.** Mientras no existe el backend, los datos salen de `src/mocks/`, con la
  misma forma que tendrán las respuestas del servidor (campos en inglés y snake_case, como en la Entrega 1).
  Al conectar el backend solo cambia de dónde vienen los datos, no los componentes.
- **HTML semántico.** La estructura usa `header`, `nav`, `main`, `section`, `article` y `footer`; los `div` quedan
  solo como contenedores de diseño (por ejemplo, los campos de un formulario).

## Deploy

**Sitio publicado:** https://eduwebfrontend.netlify.app/

Desplegado en Netlify. El plan gratuito no permite conectar repos privados de una organización, así que Netlify
está conectado a una copia pública del repo ([Joaquinvialf/EduWEB-FRONTEND-PUBLIC](https://github.com/Joaquinvialf/EduWEB-FRONTEND-PUBLIC)),
como se recomendó en clases. Netlify vuelve a desplegar solo con cada push a `main` de esa copia.

Para actualizar el sitio con lo último de `develop`:

```bash
git remote add publico https://github.com/Joaquinvialf/EduWEB-FRONTEND-PUBLIC.git   # solo la primera vez
git checkout develop
git pull
git push publico develop:main
```

Configuración en Netlify: build command `npm run build`, publish directory `dist`.
`public/_redirects` contiene `/* /index.html 200`: como es una SPA, sin esa regla recargar la página en una
ruta como `/nosotros` da error 404 (Netlify busca un archivo `nosotros.html` que no existe).

## Uso de IA

Herramienta: Claude. Registro por sesión de cada integrante.

### Joaquín Vial 

### Uso de IA — Primera parte

Usé Claude para entender mejor qué había que hacer en esta entrega y cómo enfrentarla: me ayudó
a ordenar el enunciado, a decidir cómo estructurar el router y las carpetas del proyecto, y a
generar un primer esqueleto base (React Router con layout + navbar, y placeholders de las 5
vistas). En esta sesión solo se armó el esqueleto inicial — sin contenido real todavía en
ninguna página.

Las decisiones de fondo (cómo dividir el trabajo, qué estructura usar, qué mantener y qué
descartar del template de Vite) fueron mías; la IA propuso opciones y yo elegí y ajusté según lo
que necesitábamos.

### Uso de IA — Segunda parte

Usé Claude principalmente para dos cosas. Primero, para unificar los mocks del equipo: cada uno
había armado sus datos con un formato distinto, así que me ayudó a revisarlos contra el protocolo
de la Entrega 1 y a dejar una convención común (campos en inglés y snake_case, como en el PDF),
documentada en `docs/protocolo.md`, con todos los mocks juntos en `src/mocks/`.

Segundo, para todo lo relacionado con Netlify: entender por qué una SPA necesita el archivo
`_redirects`, resolver que el plan gratuito no permite desplegar el repo privado de la
organización (usando una copia pública, como se recomendó en clases), y dejar el sitio con
visibilidad pública.

Lo usé también para parte del código: me propuso la estructura de las páginas Landing y Nosotros y me corrigió errores puntuales del resto del equipo que encontramos al
revisar el repo antes de la entrega (el login no guardaba la sesión, links con `<a href>` que
recargaban la página y la borraban, y rarezas "épica"/"legendaria" que ya no existen en el
catálogo).
