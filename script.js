// CARROSSEL ANIMADO
let contador = 1;

setInterval(function(){
  document.getElementById('item-' + contador).checked = true;
  contador ++;

  if(contador > 5){
    contador = '1';
  }
}, 3000);

// MENU MOBILE
function menuShow(){
  let menuMobile = document.querySelector('.mobile-menu');
  let iconBar = document.querySelector('.icon-bar');
  let iconX = document.querySelector('.icon-x');

  if (menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open');
    iconX.classList.remove('show');
    iconBar.classList.add('show');
  } else {
    menuMobile.classList.add('open');
    iconBar.classList.remove('show');
    iconX.classList.add('show');
  }
}