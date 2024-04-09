import './style.css';

// Crear carrousel imgs
/* function cambiarFotoPrincipal(idMiniatura: string): void {
  const fotoPrincipal = document.querySelector('#foto-principal');
  const miniatura = document.getElementById(idMiniatura);
  if (
    fotoPrincipal !== null &&
    fotoPrincipal !== undefined &&
    miniatura !== null &&
    miniatura !== undefined
  ) {
    if (
      fotoPrincipal instanceof HTMLImageElement &&
      miniatura instanceof HTMLImageElement
    ) {
      fotoPrincipal.src = miniatura.src;
      fotoPrincipal.alt = miniatura.alt;
    }
  }
}

const miniatura1 = document.querySelector('#miniatura1');
const miniatura2 = document.querySelector('#miniatura2');
const miniatura3 = document.querySelector('#miniatura3');
const miniatura4 = document.querySelector('#miniatura4');
if (
  miniatura1 !== null &&
  miniatura1 !== undefined &&
  miniatura2 !== null &&
  miniatura2 !== undefined &&
  miniatura3 !== null &&
  miniatura3 !== undefined &&
  miniatura4 !== null &&
  miniatura4 !== undefined
) {
  miniatura1.addEventListener('click', () => {
    cambiarFotoPrincipal('miniatura1');
  });
  miniatura2.addEventListener('click', () => {
    cambiarFotoPrincipal('miniatura2');
  });
  miniatura3.addEventListener('click', () => {
    cambiarFotoPrincipal('miniatura3');
  });
  miniatura4.addEventListener('click', () => {
    cambiarFotoPrincipal('miniatura4');
  });
}
 */

/* ************************************************************************** */

// Valor inicial del contador
let numeroTurno = 0;

// Turno display
const displayTurno = document.querySelector('.numero-turno');

// Botones

// Btn prev
const bntPrev = document.querySelector('.btn_prev');
// Btn reset
const bntReset = document.querySelector('.btn_reset');
// Btn next
const bntNext = document.querySelector('.btn_next');

// Función restar turno
function restarTurno() {
  numeroTurno--;

  numeroTurno < 0
    ? alert('¿Desde cuando existe un turno negativo?')
    : (displayTurno.innerHTML = numeroTurno);
}
// Función reset turno
function resetTurno() {
  numeroTurno = 0;
  displayTurno.innerHTML = numeroTurno;
}

// Función añadir turno
function sumarTurno() {
  numeroTurno++;
  displayTurno.innerHTML = numeroTurno;
}

// Evento click en btn pre
bntPrev.addEventListener('click', restarTurno);

// Evento click en btn reset
bntReset.addEventListener('click', resetTurno);

// Evento click en btn next
bntNext.addEventListener('click', sumarTurno);
