
$(document).ready(function () {
  //Slider Home
  var sliderHome = new Swiper ('.slider-home', {
    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //Slider Produtos
  var sliderProdutos = new Swiper ('.slider-produtos', {
    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //Slider Insta
  var sliderInsta = new Swiper ('.slider-insta', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
  });

  //Mostra busca
  var btnBusca = document.querySelector('.btn-busca');
  var formBusca = document.querySelector('.form-busca');
  btnBusca.addEventListener('click', function (e) {
    formBusca.classList.toggle('show');
  });

});
