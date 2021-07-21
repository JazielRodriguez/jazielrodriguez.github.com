/* FUNCION PULSE PARA ANIMACION EN EL DOM */
function activarPulse() {
   const pulse = document.querySelector('.minombre'); 
   pulse.addEventListener('mouseover', () => {
      pulse.classList.add('animate__animated', 'animate__pulse');
   });
   
   pulse.addEventListener('mouseout', () => {
      pulse.classList.remove('animate__animated', 'animate__pulse');
   });
};
activarPulse();
// Edad dinamica dependiendo del año para id="Quien soy"
function requerirEdadActual() {
   const HTML = document.querySelector('.p1 span')
   const yearActual = new Date().getFullYear();
   const edadActual = yearActual - 2005;
   const mes = new Date().getMonth();
   if (mes > 3) {
      HTML.textContent = `${edadActual} años`;
   } else {
      HTML.textContent = `${edadActual - 1} años`;
   }
}
requerirEdadActual();