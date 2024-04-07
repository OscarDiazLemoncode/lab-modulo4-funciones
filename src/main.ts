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

function mostrarTurno(classTurno) {
  //Turno
  let turno1 = document.getElementById('turno1').innerHTML;

  console.log(turno6);
}
//Todos los turnos disponibles
const turno2 = document.getElementById('turno2');
const turno3 = document.getElementById('turno3');
const turno4 = document.getElementById('turno4');
const turno5 = document.getElementById('turno5');
const turno6 = document.getElementById('turno6');
const turno7 = document.getElementById('turno7');
const turno8 = document.getElementById('turno8');
const turno9 = document.getElementById('turno9');
const turno10 = document.getElementById('turno10');
mostrarTurno(turno2);

//Btn turno anterior
//const btnPrev = document.querySelector('.btn_prev');
//Btn turno posterior
//const btnNext = document.querySelector('.btn_next');
//btnNext.addEventListener('click', mostrarTurno('turno1'));
