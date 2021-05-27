
var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',},
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("cabecalho").style.top = "0";
  } else {
    document.getElementById("cabecalho").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


function abrirMenu() {
  document.getElementById("menuLateral").style.width = "100vw";
}

function fecharMenu() {
  document.getElementById("menuLateral").style.width = "0";
}