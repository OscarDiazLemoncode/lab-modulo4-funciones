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

// Valor inicial
let numeroTurno = 0;

// Mensaje turno
let mensajeTurno = document.querySelector('.texto-turno') as HTMLElement;

// Turno display
let displayTurno = document.querySelector('.numero-turno')!;

// Btn prev
const bntPrev = document.querySelector('.btn_prev');
// Btn reset
const bntReset = document.querySelector('.btn_reset');
// Btn next
const bntNext = document.querySelector('.btn_next');

// Función restar turno
function restarTurno() {
  //Restamos turno
  numeroTurno--;
  // Número turno parseado
  let parseNumTurno = numeroTurno.toString();
  // Invalidamos turnos negativos
  numeroTurno < 0
    ? alert('No se puede poner un turno negativo')
    : (displayTurno.innerHTML = parseNumTurno.padStart(2, '0'));
}
// Función reset turno
function resetTurno() {
  // Reseteamos turno
  numeroTurno = 0;
  // Número turno parseado
  let parseNumTurno = numeroTurno.toString();
  // Mostramos turnos
  displayTurno!.innerHTML = parseNumTurno.padStart(2, '0');
  mensajeTurno!.style.visibility = 'hidden';
}

// Función añadir turno
function sumarTurno() {
  // Incrementa turno
  numeroTurno++;
  // Número turno parseado
  let parseNumTurno = numeroTurno.toString();
  // Mostrar turno
  displayTurno!.innerHTML = parseNumTurno.padStart(2, '0');
  mensajeTurno!.style.visibility = 'visible';
}

// click en btn pre
bntPrev!.addEventListener('click', restarTurno);
// click en btn reset
bntReset!.addEventListener('click', resetTurno);
// click en btn next
bntNext!.addEventListener('click', sumarTurno);
