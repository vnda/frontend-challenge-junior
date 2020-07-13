var slides = document.getElementsByClassName("slide");
var index = 0;

function abrirModal(){
    document.getElementById('popup').style.display = 'block';
  }
  
  function fecharModal(){
    document.getElementById('popup').style.display = 'none';
  }
  
  function setaEsquerda() {
    if(index == 0) index = slides.length - 1;
    else index--;
  
    slides[0].style.marginLeft = "-" + index * 600 + "px";
  }
  function setaDireita() {
    if(index == slides.length -1) index = 0;
    else index++;
  
    slides[0].style.marginLeft = "-" + index * 600 + "px";
  }