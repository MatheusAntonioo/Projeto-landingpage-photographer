let contador = 1;

setInterval(function(){
  document.getElementById('item-' + contador).checked = true;
  contador ++;

  if(contador > 5){
    contador = '1';
  }
}, 3000);