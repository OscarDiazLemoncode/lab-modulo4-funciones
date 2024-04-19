import './style.css';

// Valor inicial
let numeroInicial = 1;

// Btn siguiente turno
const bntNext = document.querySelector('.btn_next');
// Btn anterior turno
const bntPrev = document.querySelector('.btn_prev');
// Btn resetear turno
const btnReset = document.querySelector('.btn_reset');
// Btn turno personalizado
const btnTurnoPersonalizado = document.querySelector('.btn_turnoPersonalizado');
btnTurnoPersonalizado?.setAttribute('disabled', 'true');

const mostrarTexto = () => {
  let texto = document.querySelector('.texto-turno');
  texto !== null && texto !== undefined && texto instanceof HTMLParagraphElement
    ? (texto.textContent = 'Por favor, acérquese al mostrador')
    : console.error('No se puede mostrar el texto');
};

let turno = document.querySelector('.numero-turno');
const pintarTurno = () => {
  turno !== null && turno !== undefined && turno instanceof HTMLHeadingElement
    ? (turno.textContent = numeroInicial.toString().padStart(2, '0'))
    : console.error('No se ha podido mostrar el turno');
};

const añadirTurno = () => {
  numeroInicial++;
  pintarTurno();
};

const restarTurno = () => {
  numeroInicial--;
  numeroInicial > 0
    ? pintarTurno()
    : alert('No se puede poner un turno menor que 0');
};

const resetearTurno = () => {
  numeroInicial = 1;
  pintarTurno();
};

let valorTurnoPersonalizado = document.querySelector('#numPersonalizado');
const turnoPersonalizado = () => {
  if (
    valorTurnoPersonalizado !== null &&
    valorTurnoPersonalizado !== undefined &&
    valorTurnoPersonalizado instanceof HTMLInputElement &&
    turno !== null &&
    turno !== undefined &&
    turno instanceof HTMLHeadingElement
  ) {
    numeroInicial = parseInt(valorTurnoPersonalizado.value);
    if (!isNaN(numeroInicial)) {
      turno.textContent = numeroInicial.toString().padStart(2, '0');
      valorTurnoPersonalizado.value = '';
    } else {
      console.log('no es numero');
    }
  } else {
    console.log('no hay turno personalizado');
  }
};

// Funcion eventos
const eventos = () => {
  // Btn next
  bntNext !== null &&
  bntNext !== undefined &&
  bntNext instanceof HTMLButtonElement
    ? bntNext?.addEventListener('click', añadirTurno)
    : console.error('No se ha encontrado el botón de añadir turno');

  //Btn Prev
  bntPrev !== null &&
  bntPrev !== undefined &&
  bntPrev instanceof HTMLButtonElement
    ? bntPrev?.addEventListener('click', restarTurno)
    : console.error('No se ha encontrado el botón de anterior turno');

  //Btn reset
  btnReset !== null &&
  btnReset !== undefined &&
  btnReset instanceof HTMLButtonElement
    ? btnReset?.addEventListener('click', resetearTurno)
    : console.error('No se ha encontrado el botón de resetear turno');

  //Btn turno personalizado
  btnTurnoPersonalizado !== null &&
  btnTurnoPersonalizado !== undefined &&
  btnTurnoPersonalizado instanceof HTMLButtonElement
    ? btnTurnoPersonalizado?.addEventListener('click', turnoPersonalizado)
    : console.error('No se ha encontrado el botón personalizado');

  //Btn disabled hasta evento keyup en input turno personalizado
  valorTurnoPersonalizado?.addEventListener('keyup', () => {
    btnTurnoPersonalizado?.removeAttribute('disabled');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  mostrarTexto();
  eventos();
  pintarTurno();
});
