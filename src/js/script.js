
$(document).ready(function () {
  //Slider Home
  const sliderHome = new Swiper ('.slider-home', {
    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //Slider Marcas
  const sliderMarcas = new Swiper ('.slider-marcas', {
    loop: false,
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 5,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 6,
      }
    }
  });

  //Slider Produtos
  const sliderProdutos = new Swiper ('.slider-produtos', {
    loop: true,
    slidesPerView: 1,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //Slider Insta
  const sliderInsta = new Swiper ('.slider-insta', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 3,
      },
    }
  });

  //Mostra busca
  const btnBusca = document.querySelector('.btn-busca');
  const formBusca = document.querySelector('.form-busca');
  btnBusca.addEventListener('click', function (e) {
    formBusca.classList.toggle('show');
  });

  //Abrir menu Mobile
  const btnMenu = document.querySelector('.hamburger');
  const menu = document.querySelector('.nav-menu');
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('show');
  });


});
