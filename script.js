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

// MOVIMENTAÇÃO DO SCROLL
const menuItens = document.querySelectorAll('.menu-img a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target);
  nativeScroll(distanceFromTheTop);
}

menuItens.forEach((link) => {
  link.addEventListener("click", scrollToSection);
})

// BOTÃO SUBIR
const btn = document.getElementById("btnTop");

btn.addEventListener("click", function(){
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
})

document.addEventListener('scroll', hide)

function hide(){
  if(window.scrollY > 10){
    btn.style.display = "flex"
  } else {
    btn.style.display = "none"
  }
}

hide();