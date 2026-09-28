import "./Instrucciones.css";

function Instrucciones() {
  return (
    <div className="instructions-page">
      <header className="instructions-header">
        <h1>Gambito de Edu</h1>
        <p>Instrucciones del juego</p>
      </header>

      <main className="instructions-main">

        <section className="instructions-section">
          <h2>Objetivo del juego</h2>

          <div className="objective">
            <strong>
              Derrota al rey rival haciendo jaque mate, como en el ajedrez.
            </strong>
          </div>

          <p>
            Para conseguirlo tendrás que construir tu ejército, mover tus
            fichas, administrar tu energía y utilizar los poderes especiales
            de tus unidades.
          </p>
        </section>

        <section className="instructions-section">
          <h2>1. Prepara tu ejército</h2>

          <p>Antes de comenzar, arma tu ejército con 16 fichas:</p>

          <ul>
            <li>8 peones</li>
            <li>2 torres</li>
            <li>2 caballos</li>
            <li>2 alfiles</li>
            <li>1 dama</li>
            <li>1 rey</li>
          </ul>

          <p>
            Puedes elegir las fichas que tengas desbloqueadas. Cada ficha
            puede tener un movimiento y un poder especial diferente.
          </p>
        </section>

        <section className="instructions-section">
          <h2>2. Comienza la partida</h2>

          <p>
            Una vez que ambos jugadores hayan confirmado sus ejércitos,
            el juego sortea quién jugará con blancas.
          </p>

          <p>
            El jugador que tenga las piezas blancas comienza la partida.
          </p>
        </section>

        <section className="instructions-section">
          <h2>3. En tu turno</h2>

          <p>
            Cada jugador dispone de 2 minutos para completar su turno.
          </p>

          <p>Durante tu turno puedes:</p>

          <ol>
            <li>Mover una ficha.</li>
            <li>Usar un poder especial si tienes suficiente energía.</li>
            <li>Revivir una ficha capturada.</li>
            <li>Invocar un refuerzo.</li>
          </ol>

          <p>
            Cuando termines tus acciones, presiona{" "}
            <strong>“Finalizar turno”</strong>.
          </p>
        </section>

        <section className="instructions-section">
          <h2>4. Usa tu energía</h2>

          <p>Al comenzar tu turno recibes:</p>

          <ul>
            <li>1 punto de energía automáticamente.</li>
            <li>
              1 punto adicional por cada casilla de energía que controles.
            </li>
            <li>
              1 punto adicional por cada captura realizada en tu turno
              anterior.
            </li>
          </ul>

          <p>
            Puedes acumular un máximo de 10 puntos de energía. Utiliza esta
            energía para activar los poderes especiales de tus fichas,
            revivir unidades o invocar refuerzos.
          </p>
        </section>

        <section className="instructions-section">
          <h2>5. Casillas especiales</h2>

          <p>
            Al comenzar cada partida aparecen 6 casillas especiales
            distribuidas simétricamente en el tablero.
          </p>

          <h3>Casillas de energía</h3>
          <p>
            Otorgan 1 punto de energía adicional al jugador que las controle
            al comenzar su turno.
          </p>

          <h3>Casillas trampa</h3>
          <p>
            La primera ficha rival que caiga en una casilla trampa queda
            aturdida durante un turno.
          </p>

          <h3>Casilla bloqueada</h3>
          <p>
            No puede ser ocupada por ninguna ficha durante los primeros
            5 turnos de la partida.
          </p>
        </section>

        <section className="instructions-section">
          <h2>6. Captura fichas</h2>

          <p>
            Si una ficha puede moverse hasta una casilla ocupada por una
            ficha rival, puedes capturarla.
          </p>

          <p>
            La ficha capturada sale del tablero y queda disponible para ser
            revivida posteriormente. Además, realizar una captura otorga
            energía adicional.
          </p>
        </section>

        <section className="instructions-section">
          <h2>7. Revive tus fichas</h2>

          <p>
            Puedes revivir una ficha propia que haya sido capturada pagando
            energía según su rareza.
          </p>

          <table>
            <thead>
              <tr>
                <th>Rareza</th>
                <th>Costo de energía</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Común</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Rara</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>

          <p>
            La ficha revivida aparece en una casilla vacía de la fila
            inicial de su jugador. El rey no puede ser revivido.
          </p>
        </section>

        <section className="instructions-section">
          <h2>8. Usa los poderes especiales</h2>

          <p>
            Cada ficha tiene un poder especial que puede activarse pagando
            su costo de energía.
          </p>

          <p>
            Puedes mover una ficha y utilizar un poder durante el mismo
            turno, siempre que tengas suficiente energía y cumplas las
            condiciones del poder.
          </p>

          <p>
            Los poderes pueden servir para atacar, defender, moverte,
            obtener energía o alterar la posición de otras fichas.
          </p>
        </section>

        <section className="instructions-section">
          <h2>9. Eventos aleatorios</h2>

          <p>
            Cada 5 turnos completados se activa automáticamente un evento
            aleatorio que puede cambiar temporalmente las condiciones de
            la partida.
          </p>

          <ul>
            <li>
              <strong>Tormenta arcana:</strong> aumenta temporalmente el
              costo de los poderes.
            </li>

            <li>
              <strong>Sobrecarga energética:</strong> ambos jugadores
              reciben energía adicional.
            </li>

            <li>
              <strong>Casilla bloqueada:</strong> una casilla vacía queda
              bloqueada temporalmente.
            </li>

            <li>
              <strong>Regeneración:</strong> elimina ciertos efectos de
              aturdimiento.
            </li>

            <li>
              <strong>Eclipse:</strong> impide temporalmente el uso de
              poderes especiales.
            </li>

            <li>
              <strong>Terremoto:</strong> cambia de posición una casilla
              de energía.
            </li>

            <li>
              <strong>Viento favorable:</strong> entrega energía adicional
              al jugador con menos fichas.
            </li>

            <li>
              <strong>Niebla de guerra:</strong> aumenta temporalmente el
              costo de revivir fichas.
            </li>

            <li>
              <strong>Purga:</strong> elimina aleatoriamente fichas de
              ambos jugadores.
            </li>
          </ul>
        </section>

        <section className="instructions-section">
          <h2>10. Refuerzos</h2>

          <p>
            Si tienes suficiente energía, puedes invocar una ficha adicional
            de tu colección que no haya formado parte de tu ejército inicial.
          </p>

          <p>
            Para invocarla debes pagar el costo de energía de la ficha más
            2 puntos adicionales de invocación.
          </p>

          <p>
            El refuerzo aparece en una casilla vacía de tu fila inicial.
            Puedes tener un máximo de 20 fichas propias en el tablero al
            mismo tiempo.
          </p>
        </section>

        <section className="instructions-section">
          <h2>11. Jaque y jaque mate</h2>

          <p>
            Tu rey está en jaque cuando puede ser capturado en el siguiente
            movimiento del rival.
          </p>

          <p>
            Si estás en jaque, debes realizar una acción que permita sacar
            a tu rey de esa situación. Puedes hacerlo moviendo el rey,
            bloqueando el ataque, capturando la ficha atacante o utilizando
            el poder del rey si todavía está disponible.
          </p>

          <p>
            Si no existe ninguna forma de escapar del jaque, es{" "}
            <strong>jaque mate</strong> y pierdes la partida.
          </p>
        </section>

        <section className="instructions-section">
          <h2>12. Cómo termina la partida</h2>

          <h3>Victoria</h3>
          <p>
            Ganas al conseguir jaque mate al rey rival.
          </p>

          <h3>Rendición</h3>
          <p>
            Un jugador puede rendirse durante su turno. Al hacerlo, el rival
            gana inmediatamente.
          </p>

          <h3>Abandono por tiempo</h3>
          <p>
            Cada turno dura como máximo 2 minutos. Si el tiempo se acaba,
            el turno pasa al rival y se registra una advertencia. Con 3
            advertencias consecutivas, el jugador pierde por abandono.
          </p>

          <h3>Empate</h3>
          <p>
            Si un jugador no está en jaque pero no tiene ningún movimiento
            legal disponible, la partida termina en empate por ahogado.
          </p>
        </section>

        <div className="summary">
          <strong>En resumen:</strong>
          <br />
          Arma tu ejército, mueve tus fichas, consigue energía, usa tus
          poderes, captura y revive fichas, protege a tu rey y consigue
          el jaque mate.
        </div>

      </main>

      <footer className="instructions-footer">
        Gambito de Edu
      </footer>
    </div>
  );
}

export default Instrucciones
