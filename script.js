//  ***********************************
//               VARIABLES
//  ***********************************

let inputJuegos = document.querySelector('#juegos');
let nJuegos;
let btnPiedra = document.querySelector('#btnPiedra');
let btnPapel = document.querySelector('#btnPapel');
let btnTijera = document.querySelector('#btnTijera');
let tablaResultados = document.querySelector('#resultados');
let ganador = document.querySelector('#ganador');
let jugadas = 0;
let nombreJugador = prompt('ingrese nombre del jugador', 'Jugador');
let ganadasJugador = 0;
let ganadasMaquina = 0;

// piedra = 1
// papel = 2
// tijera = 3

//  ***********************************
//             FUNCIONES
//  ***********************************
// funcion para obtener numero aleatorio
function aleatorio(minimo, maximo) {
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

function cachipun(valorElegido) {
  let eleccionMaquina = aleatorio(1, 3);

  // PIEDRA
  if (valorElegido === 1) {
    // el usuario elige piedra
    if (eleccionMaquina === 1) {
      // la maquina elige piedra
      imprimir('piedra', 'piedra', 'empate');
    } else if (eleccionMaquina === 2) {
      // la maquina elige papel
      imprimir('piedra', 'papel', 'maquina');
      ganadasMaquina++;
    } else if (eleccionMaquina === 3) {
      // la maquina elige tijeras
      imprimir('piedra', 'tijera', nombreJugador);
      ganadasJugador++;
    }
  }

  // PAPEL
  if (valorElegido === 2) {
    // el usuario elige piedra
    if (eleccionMaquina === 1) {
      // la maquina elige piedra
      imprimir('papel', 'piedra', nombreJugador);
      ganadasJugador++;
    } else if (eleccionMaquina === 2) {
      imprimir('papel', 'papel', 'empate');
      // la maquina elige papel
    } else if (eleccionMaquina === 3) {
      imprimir('papel', 'piedra', 'maquina');
      ganadasMaquina++;
      // la maquina elige tijeras
    }
  }

  // TIJERAS
  if (valorElegido === 3) {
    // el usuario elige piedra
    if (eleccionMaquina === 1) {
      // la maquina elige piedra
      imprimir('tijeras', 'piedra', 'maquina');
      ganadasMaquina++;
    } else if (eleccionMaquina === 2) {
      // la maquina elige papel
      imprimir('tijeras', 'papel', nombreJugador);
      ganadasJugador++;
    } else if (eleccionMaquina === 3) {
      // la maquina elige tijeras
      imprimir('tijeras', 'tijeras', 'empate');
    }
  }
}
// funcion para imprimir cada jugada
// en pantalla como un list item (li)
function imprimir(jugador, maquina, resultado) {
  let li = document.createElement('li');
  let text = document.createTextNode(
    `${nombreJugador}: ${jugador} - Maquina: ${maquina} 
     ganador : ${resultado} 🏆`
  );

  li.appendChild(text);
  tablaResultados.appendChild(li);
}
// funcion para calcular ganador, bloquear
// botones y volver numero de juegos a 0
function calcularGanador() {
  let text;
  if (ganadasJugador === ganadasMaquina) {
    text = document.createTextNode('🤝 EMPATE');
  } else {
    if (ganadasJugador > ganadasMaquina) {
      text = document.createTextNode(`🏆 ${nombreJugador}`);
    }
    if (ganadasJugador < ganadasMaquina) {
      text = document.createTextNode('🏆 MÁQUINA');
    }
  }
  inputJuegos.value = 0;
  ganadasJugador = 0;
  ganadasMaquina = 0;
  alternarBloqueoBtns(true);
  ganador.appendChild(text);
}

// funcion para alternar bloqueo de botones (true, false)
function alternarBloqueoBtns(bloquear) {
  if (bloquear) {
    btnPiedra.setAttribute('disabled', true);
    btnPapel.setAttribute('disabled', true);
    btnTijera.setAttribute('disabled', true);
  } else {
    btnPiedra.removeAttribute('disabled');
    btnPapel.removeAttribute('disabled');
    btnTijera.removeAttribute('disabled');
  }
}
//  ***********************************
//               EVENTOS
//  ***********************************

// Evento para actualizar el numero de juegos
inputJuegos.addEventListener('change', function () {
  nJuegos = document.querySelector('#juegos').value;
  nJuegos = parseInt(nJuegos);
  //si el numero de juegos es 0 bloquear btns
  if (nJuegos > 0) {
    alternarBloqueoBtns(false);
  } else {
    alternarBloqueoBtns(true);
  }
});

// Eventos de los botones
// evento btn piedraElias
btnPiedra.addEventListener('click', function () {
  jugadas++;
  console.log(
    `ganadasJugador: ${ganadasJugador}  ganadasMaquina:${ganadasMaquina}`
  );
  if (jugadas <= nJuegos) {
    cachipun(1);
    if (jugadas === nJuegos) {
      calcularGanador();
      jugadas = 0;
    }
  }
});
// evento btn papel
btnPapel.addEventListener('click', function () {
  jugadas++;
  console.log(
    `ganadasJugador: ${ganadasJugador}  ganadasMaquina:${ganadasMaquina}`
  );
  if (jugadas <= nJuegos) {
    cachipun(2);
    if (jugadas === nJuegos) {
      calcularGanador();
      jugadas = 0;
    }
  }
});

// evento btn tijera
btnTijera.addEventListener('click', function () {
  jugadas++;
  console.log(
    `ganadasJugador: ${ganadasJugador}  ganadasMaquina:${ganadasMaquina}`
  );
  if (jugadas <= nJuegos) {
    cachipun(3);
    if (jugadas === nJuegos) {
      calcularGanador();
      jugadas = 0;
    }
  }
});
