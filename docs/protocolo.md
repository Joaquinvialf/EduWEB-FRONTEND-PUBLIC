# Protocolo JSON cliente-servidor — Gambito de Edu

Formaliza el protocolo de la sección 10 de `Entrega 1 Propuesta.pdf`. Todos los mocks del frontend
(`src/mocks/`) siguen este formato, para que al conectar el backend solo cambie de dónde vienen los datos.

## Convenciones

- Cada mensaje es un objeto JSON con un campo `type` en MAYÚSCULAS_CON_GUION_BAJO (ej: `LOGIN`, `MOVE_RESULT`).
- Los nombres de campos van en **inglés y snake_case** (ej: `game_id`, `piece_id`, `troop_type`).
- Los valores fijos (estados, colores, códigos de error) van en MAYÚSCULAS: `WAITING`, `WHITE`, `INVALID_CREDENTIALS`.
- Los identificadores de fichas del catálogo van en minúscula, sin tildes y con guion bajo: `torre_saltarina`, `rey_custodio`.
- Las posiciones usan notación de ajedrez: columna `a`–`h` + fila `1`–`8` (ej: `"e4"`).
- Toda respuesta incluye `success`. Si es `false`, incluye `error` con un código en MAYÚSCULAS.

## Entidades comunes

### Usuario (`user`)

```json
{ "id": 1, "username": "eduardo" }
```

El mock `src/mocks/usuarios.json` agrega los campos que el servidor guarda de cada cuenta
(`password`, `ranking`, `experience`, `army_id`). La contraseña **nunca** viaja en una respuesta
ni se guarda en la sesión del frontend.

### Ficha (`piece`)

```json
{
  "id": "piece-01",
  "troop_type": "pawn",
  "piece_type": "recluta",
  "rarity": "common",
  "level": 4,
  "position": "a2"
}
```

| Campo | Valores posibles |
|---|---|
| `troop_type` | `pawn`, `rook`, `knight`, `bishop`, `queen`, `king` |
| `piece_type` | ver catálogo abajo |
| `rarity` | `common`, `rare`, `royal` (solo reyes) |
| `level` | número entero; los reyes no tienen `level` |
| `position` | casilla (`"e4"`), o `null` si la ficha está capturada |

### Catálogo de `piece_type`

| `troop_type` | Común (`common`) | Rara (`rare`) |
|---|---|---|
| `pawn` | `recluta` | `explorador` |
| `rook` | `muralla` | `torre_saltarina` |
| `knight` | `jinete` | `fantasma` |
| `bishop` | `alquimista` | `sanador` |
| `queen` | `vigia` | `estratega` |

Reyes (`king`, rareza `royal`): `rey_custodio`, `rey_fortaleza`, `rey_errante`, `rey_vengador`.

### Estado de partida (`status`)

`WAITING` (esperando rival) → `ARMY_SELECTION` → `IN_PROGRESS` → `FINISHED`.

## Mensajes

### Autenticación

**Login**

```json
{ "type": "LOGIN", "username": "eduardo", "password": "12345678" }
```

```json
{ "type": "LOGIN_RESPONSE", "success": true, "user": { "id": 1, "username": "eduardo" } }
```

```json
{ "type": "LOGIN_RESPONSE", "success": false, "error": "INVALID_CREDENTIALS" }
```

**Registro**

```json
{ "type": "REGISTER", "username": "maria", "password": "87654321" }
```

```json
{ "type": "REGISTER_RESPONSE", "success": true, "user": { "id": 2, "username": "maria" } }
```

Errores posibles: `USERNAME_TAKEN`, `PASSWORD_TOO_SHORT` (mínimo 8 caracteres). La confirmación de
contraseña se valida solo en el cliente.

### Crear y unirse a una partida

```json
{ "type": "CREATE_GAME", "mode": "PUBLIC" }
```

```json
{
  "type": "GAME_CREATED",
  "success": true,
  "game": { "id": 99, "status": "WAITING", "creator": { "id": 1, "username": "eduardo" } }
}
```

Aviso a los demás jugadores que buscan partida:

```json
{ "type": "GAME_STATUS", "game_id": 99, "status": "WAITING" }
```

```json
{ "type": "JOIN_GAME", "game_id": 99 }
```

```json
{
  "type": "JOIN_GAME_RESPONSE",
  "success": true,
  "game_id": 99,
  "players": [
    { "id": 1, "username": "eduardo" },
    { "id": 2, "username": "maria" }
  ]
}
```

### Selección de ejército

```json
{
  "type": "SELECT_ARMY",
  "game_id": 99,
  "army": {
    "pawns": ["recluta", "recluta", "explorador", "explorador", "recluta", "recluta", "explorador", "recluta"],
    "rooks": ["muralla", "torre_saltarina"],
    "knights": ["jinete", "fantasma"],
    "bishops": ["alquimista", "sanador"],
    "queen": "estratega",
    "king": "rey_custodio"
  }
}
```

```json
{ "type": "ARMY_SELECTED", "success": true, "game_id": 99 }
```

### Inicio de partida

El servidor lo envía cuando ambos jugadores eligieron su ejército. Es el estado inicial que usa la
pantalla de juego (tablero, panel de control y bitácora).

```json
{
  "type": "GAME_STARTED",
  "game_id": 99,
  "player": {
    "id": 1,
    "username": "eduardo",
    "color": "WHITE",
    "energy": 0,
    "army": [
      { "id": "piece-01", "troop_type": "pawn", "piece_type": "recluta", "rarity": "common", "level": 4, "position": "a2" },
      { "id": "king-01", "troop_type": "king", "piece_type": "rey_custodio", "rarity": "royal", "position": "e1" }
    ]
  },
  "opponent": {
    "id": 2,
    "username": "maria",
    "color": "BLACK",
    "energy": 0,
    "army": [
      { "id": "enemy-01", "troop_type": "pawn", "piece_type": "recluta", "rarity": "common", "level": 5, "position": "a7" },
      { "id": "enemy-16", "troop_type": "king", "piece_type": "rey_fortaleza", "rarity": "royal", "position": "e8" }
    ]
  },
  "board": {
    "size": "8x8",
    "special_squares": {
      "energy": ["b3", "g6", "c5"],
      "trap": ["f2", "d7"],
      "blocked": ["e4"]
    }
  },
  "current_turn": 1,
  "current_player": 1
}
```

En el ejemplo cada `army` muestra solo 2 fichas; en una partida real trae las 16 fichas de cada jugador.

### Durante el turno

**Movimiento**

```json
{ "type": "MOVE", "game_id": 99, "piece_id": "piece-18", "destination": "e5" }
```

```json
{
  "type": "MOVE_RESULT",
  "success": true,
  "piece": { "id": "piece-18", "from": "d4", "to": "e5" },
  "capture": { "captured": true, "piece_id": "enemy-11" },
  "state": { "current_turn": 12, "current_player": 2 }
}
```

Si el movimiento no captura nada: `"capture": { "captured": false }`.

**Activar poder**

```json
{ "type": "USE_POWER", "game_id": 99, "piece_id": "piece-02", "target": "enemy-03" }
```

```json
{
  "type": "POWER_RESULT",
  "success": true,
  "piece_id": "piece-02",
  "power": "reconocimiento",
  "target": "enemy-03",
  "energy_spent": 2
}
```

**Revivir ficha** (cuesta 3 de energía si es común y 5 si es rara)

```json
{ "type": "REVIVE", "game_id": 99, "piece_id": "piece-11", "position": "a2" }
```

```json
{
  "type": "REVIVE_RESULT",
  "success": true,
  "piece": { "id": "piece-11", "position": "a2", "level": 7 },
  "energy_spent": 5
}
```

**Rendirse**

```json
{ "type": "SURRENDER", "game_id": 99 }
```

```json
{ "type": "GAME_OVER", "game_id": 99, "reason": "SURRENDER", "winner": { "id": 2, "username": "maria" }, "loser": { "id": 1, "username": "eduardo" } }
```

Otros valores de `reason`: `CHECKMATE`, `TIMEOUT`, `DRAW`.

## Cambios respecto al PDF de la Entrega 1

- Se corrigió el JSON de los ejemplos (comillas y comas faltantes).
- `SELECT_ARMY` y `USE_POWER` usaban fichas eliminadas del catálogo (saltarín, centinela, catapulta, poder
  "bombardeo"); ahora usan solo fichas actuales.
- `creator`, `winner` y `loser` pasan de texto a objeto `user` (`{ id, username }`), igual que `players`.
- En `MOVE_RESULT`, el campo `capture.capture` se renombró a `capture.captured` para que no repita el nombre.
- Se agregaron `REGISTER`/`REGISTER_RESPONSE`, el campo `rarity` en las fichas, `energy` y `username` en
  cada jugador de `GAME_STARTED`, y `current_player` al inicio de la partida (la pantalla de juego los necesita).

## Mocks del frontend

| Archivo | Qué representa |
|---|---|
| `src/mocks/usuarios.json` | Cuentas guardadas por el servidor (formato `user` + datos de la cuenta) |
| `src/mocks/equipo.js` | Contenido de la página Nosotros; no es parte del protocolo del juego |

Pendiente: mock de una partida con el formato de `GAME_STARTED`, para la pantalla de juego.
