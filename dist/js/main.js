$(document).ready((function(){new Swiper(".slider-home",{loop:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".slider-produtos",{loop:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".slider-insta",{loop:!0,slidesPerView:3,spaceBetween:20,centeredSlides:!0});var e=document.querySelector(".btn-busca"),t=document.querySelector(".form-busca");e.addEventListener("click",(function(e){t.classList.toggle("show")}))}));