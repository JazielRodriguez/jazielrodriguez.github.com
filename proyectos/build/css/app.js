function activarFlash() {
   const flash = document.querySelector('.minombre'); 
   flash.addEventListener('mouseover', () => {
      flash.classList.add('animate__animated', 'animate__pulse');
   });
   
   flash.addEventListener('mouseout', () => {
      flash.classList.remove('animate__animated', 'animate__pulse');
   });
};
activarFlash();