import './style.css';

// Valor inicial
let numeroTurno = 0;

// Mensaje turno
let mensajeTurno = document.querySelector('.texto-turno') as HTMLElement;

// Turno display
let displayTurno = document.querySelector('.numero-turno')!;
let numeroTurnoToString = numeroTurno.toString();

// Btn prev
const bntPrev = document.querySelector('.btn_prev');
// Btn reset
const bntReset = document.querySelector('.btn_reset');
// Btn next
const bntNext = document.querySelector('.btn_next');
// Btn next
const bntTurnoPersonalizado = document.querySelector(
  '.btn_turnoPersonalizado'
)!;

//Mostramos turno
displayTurno.innerHTML = numeroTurnoToString.padStart(2, '0');

// Input turno personalizado
const numPersonalizado = (document.querySelector(
  '#numPersonalizado'
) as HTMLInputElement)!;

// Función restar turno evaluando primero el valor actual
const restarTurno = () => {
  let valorActual = displayTurno.innerHTML;
  let valorActualParse = parseInt(valorActual);

  if (valorActualParse !== 0) {
    valorActualParse--;
    let resultadoToString = valorActualParse.toString();
    displayTurno.innerHTML = resultadoToString.padStart(2, '0');
    mensajeTurno!.style.visibility = 'visible';
    numPersonalizado.value = '';
  } else {
    alert('¿Desde cuando existen turnos negativos??');
  }
};
// Función reset turno
const resetTurno = () => {
  let valorActual = displayTurno.innerHTML;
  // Valor actual display parseado
  let valorActualParse = parseInt(valorActual);
  valorActualParse = 0;
  let resultadoToString = valorActualParse.toString();
  // Mostramos resultado final con dos dígitos
  displayTurno.innerHTML = resultadoToString.padStart(2, '0');
  mensajeTurno!.style.visibility = 'hidden';
};
// Función añadir turno
const sumarTurno = () => {
  let valorActual = displayTurno.innerHTML;
  let valorActualParse = parseInt(valorActual);
  valorActualParse++;
  let resultadoToString = valorActualParse.toString();
  displayTurno.innerHTML = resultadoToString.padStart(2, '0');
  mensajeTurno!.style.visibility = 'visible';
  numPersonalizado.value = '';
};

// Activar botón añadir turno cuando se escribe en el input
numPersonalizado.addEventListener('keyup', () => {
  bntTurnoPersonalizado.removeAttribute('disabled');
});
// Funcion turno personalizado
const turnoPersonalizado = () => {
  const valTurnoPersonalizado = numPersonalizado.value;
  displayTurno!.innerHTML = valTurnoPersonalizado.padStart(2, '0');
  mensajeTurno!.style.visibility = 'visible';
  numPersonalizado.value = '';
};

// click en btn pre
bntPrev!.addEventListener('click', restarTurno);
// click en btn reset
bntReset!.addEventListener('click', resetTurno);
// click en btn next
bntNext!.addEventListener('click', sumarTurno);
// click en btn turno personalizado
bntTurnoPersonalizado!.addEventListener('click', turnoPersonalizado);
