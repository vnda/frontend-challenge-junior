//Swiper banner-home
var swiper1 = new Swiper('.swiper-container2', {
  slidesPerView: 'auto',
  centeredSlides: true,
  paginationClickable: true,
  clickable: true,
  //spaceBetween: 5000,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
  //loop: true,
  // breakpoints: {
  //     // when window width is <= 320px
  //     1024: {
  //       slidesPerView: 2,
  //     },
  //     // when window width is <= 480px
  //     768: {
  //       slidesPerView: 1,
  //       spaceBetween: 20
  //     }
  //   }
});

// fim Swiper banner-home


//Swiper produtos

function setaImagem() {
  var settings = {
    primeiraImg: function () {
      elemento = document.querySelector("#slider a:first-child");
      elemento.classList.add("ativo");
      this.legenda(elemento);
    },

    slide: function () {
      elemento = document.querySelector(".ativo");

      if (elemento.nextElementSibling) {
        elemento.nextElementSibling.classList.add("ativo");
        settings.legenda(elemento.nextElementSibling);
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        settings.primeiraImg();
      }

    },

    proximo: function () {
      clearInterval(intervalo);
      elemento = document.querySelector(".ativo");

      if (elemento.nextElementSibling) {
        elemento.nextElementSibling.classList.add("ativo");
        settings.legenda(elemento.nextElementSibling);
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        settings.primeiraImg();
      }
      intervalo = setInterval(settings.slide, 4000);
    },

    anterior: function () {
      clearInterval(intervalo);
      elemento = document.querySelector(".ativo");

      if (elemento.previousElementSibling) {
        elemento.previousElementSibling.classList.add("ativo");
        settings.legenda(elemento.previousElementSibling);
        elemento.classList.remove("ativo");
      } else {
        elemento.classList.remove("ativo");
        elemento = document.querySelector("a:last-child");
        elemento.classList.add("ativo");
        this.legenda(elemento);
      }
      intervalo = setInterval(settings.slide, 4000);
    },

    legenda: function (obj) {
      var legenda = obj.querySelector("img").getAttribute("alt");
      document.querySelector("figcaption").innerHTML = legenda;
    }

  }

  settings.primeiraImg();

  settings.legenda(elemento);

  var intervalo = setInterval(settings.slide, 4000);
  document.querySelector(".next").addEventListener("click", settings.proximo, false);
  document.querySelector(".prev").addEventListener("click", settings.anterior, false);
}

window.addEventListener("load", setaImagem, false);

//fim Swiper produtos

//maquina de escrever

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  for (let i = 0; i < textoArray.length; i++) {
    setTimeout(() => elemento.innerHTML += textoArray[i], 150 * i);
  }
}

const titulo = document.querySelector('.maquina h1');
typeWriter(titulo);

//fim maquina de escrever

//animações divs




const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
  }, 200));
}


//fim animação divs

//animação header

document.addEventListener("scroll", () => {
  if (window.pageYOffset === 0) {
    var element = document.getElementById("header-principal");
    element.classList.add("header");
    element.classList.remove("header2");
  }
  else {
    var element = document.getElementById("header-principal");
    element.classList.add("header2");
    element.classList.remove("header");
  }
});

// fim animação header

