// Partida de demostración reducida. Las posiciones usan notación del tablero.
// No se incluyen descripciones de poderes ni rareza, nivel o costo del rey:
// esos datos no están definidos en el catálogo proporcionado.
const partidaMock = {
  game_id: 'partida-demo-1',
  estado: 'en_curso',
  turno_actual: 1,
  jugador_actual: 'jugador-1',
  jugadores: [
    { id: 'jugador-1', nombre: 'Edu', color: 'blancas', energia: 5 },
    { id: 'jugador-2', nombre: 'Ignacio', color: 'negras', energia: 5 },
  ],
  piezas: [
    {
      id: 'peon-blanco', propietario: 'jugador-1', color: 'blancas',
      tipo: 'peon', nombre: 'Recluta', rareza: 'comun', nivel: 1,
      posicion: 'a2',
      poder: { nombre: 'Avance Extra', costo_energia: 1 },
    },
    {
      id: 'torre-blanca', propietario: 'jugador-1', color: 'blancas',
      tipo: 'torre', nombre: 'Muralla', rareza: 'comun', nivel: 1,
      posicion: 'a1',
      poder: { nombre: 'Bastión', costo_energia: 2 },
    },
    {
      id: 'caballo-blanco', propietario: 'jugador-1', color: 'blancas',
      tipo: 'caballo', nombre: 'Jinete', rareza: 'comun', nivel: 1,
      posicion: 'b1',
      poder: { nombre: 'Cabalgata', costo_energia: 2 },
    },
    {
      id: 'alfil-blanco', propietario: 'jugador-1', color: 'blancas',
      tipo: 'alfil', nombre: 'Alquimista', rareza: 'comun', nivel: 1,
      posicion: 'c1',
      poder: { nombre: 'Transmutación', costo_energia: 2 },
    },
    {
      id: 'dama-blanca', propietario: 'jugador-1', color: 'blancas',
      tipo: 'dama', nombre: 'Vigía', rareza: 'comun', nivel: 1,
      posicion: 'd1',
      poder: { nombre: 'Alerta', costo_energia: 2 },
    },
    {
      id: 'rey-blanco', propietario: 'jugador-1', color: 'blancas',
      tipo: 'rey', nombre: 'Rey Custodio',
      posicion: 'e1',
      poder: { nombre: 'Retroceso Temporal' },
    },
    {
      id: 'peon-negro', propietario: 'jugador-2', color: 'negras',
      tipo: 'peon', nombre: 'Explorador', rareza: 'rara', nivel: 1,
      posicion: 'a7',
      poder: { nombre: 'Reconocimiento', costo_energia: 2 },
    },
    {
      id: 'torre-negra', propietario: 'jugador-2', color: 'negras',
      tipo: 'torre', nombre: 'Torre Saltarina', rareza: 'rara', nivel: 1,
      posicion: 'a8',
      poder: { nombre: 'Reposicionamiento', costo_energia: 2 },
    },
    {
      id: 'caballo-negro', propietario: 'jugador-2', color: 'negras',
      tipo: 'caballo', nombre: 'Fantasma', rareza: 'rara', nivel: 1,
      posicion: 'b8',
      poder: { nombre: 'Desvanecimiento', costo_energia: 3 },
    },
    {
      id: 'alfil-negro', propietario: 'jugador-2', color: 'negras',
      tipo: 'alfil', nombre: 'Sanador', rareza: 'rara', nivel: 1,
      posicion: 'c8',
      poder: { nombre: 'Curación', costo_energia: 3 },
    },
    {
      id: 'dama-negra', propietario: 'jugador-2', color: 'negras',
      tipo: 'dama', nombre: 'Estratega', rareza: 'rara', nivel: 1,
      posicion: 'd8',
      poder: { nombre: 'Inspiración', costo_energia: 3 },
    },
    {
      id: 'rey-negro', propietario: 'jugador-2', color: 'negras',
      tipo: 'rey', nombre: 'Rey Custodio',
      posicion: 'e8',
      poder: { nombre: 'Retroceso Temporal' },
    },
  ],
  casillas_especiales: [
    { posicion: 'd4', tipo: 'energia' },
    { posicion: 'e5', tipo: 'energia' },
  ],
  historial: [
    { id: 'accion-1', turno: 1, jugador_id: 'jugador-1', descripcion: 'Comienza la partida. Es el turno de Edu.' },
  ],
}

export default partidaMock
