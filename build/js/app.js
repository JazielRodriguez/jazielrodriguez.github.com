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
// Copyright dependiendo el año actual
function copy() {
   const html = document.querySelector('.pfooter span')
   const yearActual = new Date().getFullYear();
   html.textContent = yearActual;
}
function cambiarColorHTML() {
   const html = document.querySelector('.html div');
   const fill = document.querySelector('.html div svg path');
   const p = document.querySelector('.html div p');
   html.addEventListener('mouseover', () => {
      fill.classList.add('htmlfill');
      p.classList.add('htmlchange');
   });
   html.addEventListener('mouseout', () => {
      fill.classList.remove('htmlfill')
      p.classList.remove('htmlchange');
   })
}
function cambiarColorCSS() {
   const html = document.querySelector('.css div');
   const fill = document.querySelector('.css div svg path');
   const p = document.querySelector('.css div p');
   html.addEventListener('mouseover', () => {
      fill.classList.add('cssfill');
      p.classList.add('csschange');
   });
   html.addEventListener('mouseout', () => {
      fill.classList.remove('cssfill')
      p.classList.remove('csschange');
   })
}
function cambiarColorjs() {
   const html = document.querySelector('.js div');
   const fill = document.querySelector('.js div svg path');
   const p = document.querySelector('.js div p');
   html.addEventListener('mouseover', () => {
      fill.classList.add('jsfill');
      p.classList.add('jschange');
   });
   html.addEventListener('mouseout', () => {
      fill.classList.remove('jsfill')
      p.classList.remove('jschange');
   })
}
function cambiarColorSCSS() {
   const html = document.querySelector('.scss div');
   const fill = document.querySelector('.scss div svg path');
   const p = document.querySelector('.scss div p');
   html.addEventListener('mouseover', () => {
      fill.classList.add('scssfill');
      p.classList.add('scsschange');
   });
   html.addEventListener('mouseout', () => {
      fill.classList.remove('scssfill')
      p.classList.remove('scsschange');
   })
}
function cambiarColorPython() {
   const html = document.querySelector('.python div');
   const fill = document.querySelector('.python div svg path');
   const p = document.querySelector('.python div p');
   html.addEventListener('mouseover', () => {
      fill.classList.add('pythonfill');
      p.classList.add('pythonchange');
   });
   html.addEventListener('mouseout', () => {
      fill.classList.remove('pythonfill')
      p.classList.remove('pythonchange');
   })
}
function cambiarcolorNODEJS() {
   const html = document.querySelector('.nodejs div');
   const fill = document.querySelector('.nodejs div svg path');
   const p = document.querySelector('.nodejs div p');
   html.addEventListener('mouseover', () => {
      fill.classList.add('nodejsfill');
      p.classList.add('nodejschange');
   });
   html.addEventListener('mouseout', () => {
      fill.classList.remove('nodejsfill')
      p.classList.remove('nodejschange');
   })
}
cambiarColorHTML();
cambiarColorCSS();
cambiarColorjs();
cambiarColorSCSS();
cambiarColorPython();
cambiarcolorNODEJS();
requerirEdadActual();
activarPulse();
copy();