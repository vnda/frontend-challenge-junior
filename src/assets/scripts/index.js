const menus = '/assets/output/infos.json';
Gets();
const modalConfirmClose = document.querySelector('#closeModalConfirmation');
const modalConfirm = document.querySelector('.modalBG');
const modalCadastroClose = document.querySelector('#closeModalCadastro');
const modalCadastro = document.querySelector('.modal-cadastro');
const btnSubmit = document.querySelector('#btnNews');
const btnCadastro = document.querySelector('#avatar');
const btnCadastroMobile = document.querySelector('#avatarMobile');
const menuBurger = document.querySelector('#menu-burger');
const menuBurgerList = document.querySelector('#modal-menu');

const banner = new Swiper(document.querySelector('.swiper.-banner'), {
    // Optional parameters
    speed: 400,
    effect: 'slide',
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: document.querySelector('.swiper-pagination.-banner'),
    },
    // Navigation arrows
    navigation: {
        nextEl: document.querySelector('.swiper-button-next.-banner'),
        prevEl: document.querySelector('.swiper-button-prev.-banner'),
    },
});
banner.autoplay.start();
const products = new Swiper(document.querySelector('.swiper.-product'), {
    speed: 400,
    effect: 'cards',
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
        el: document.querySelector('.swiper-pagination.-product'),
    },
    // Navigation arrows
    navigation: {
        nextEl: document.querySelector('.swiper-button-next.-product'),
        prevEl: document.querySelector('.swiper-button-prev.-product'),
    },
});
const marcas = new Swiper(document.querySelector('.swiper.-marcas'), {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 30,
    // If we need pagination
    pagination: {
        el: document.querySelector('.swiper-pagination.-marcas'),
    },
    // Navigation arrows
    navigation: {
        nextEl: document.querySelector('.swiper-button-next.-marcas'),
        prevEl: document.querySelector('.swiper-button-prev.-marcas'),
    },
    breakpoints: {
        320: {
            spaceBetween: 30
        },
        480: {
            spaceBetween: 45
        },
        640: {
            spaceBetween: 45
        }
    }
});

modalConfirmClose.addEventListener('click',(event) => {
    event.preventDefault();
    modalConfirm.style.visibility = "hidden";
});

btnSubmit.addEventListener('click',(event) => {
    event.preventDefault();
    modalConfirm.style.visibility = "visible";
    emailNews.value = '';
});

btnCadastro.addEventListener('click',(event) => {
    event.preventDefault();
    modalCadastro.style.transform = "translateY(90px)";
});
btnCadastroMobile.addEventListener('click',(event) => {
    event.preventDefault();
    modalCadastro.style = "transform:translateY(90px);";
});

modalCadastroClose.addEventListener('click',(event) => {
    event.preventDefault();
    modalCadastro.style.transform = "translateY(-1000px)";
});

menuBurger.addEventListener('click',(event) => {
    event.preventDefault();
    menuBurger.classList.toggle('change');
    if(menuBurgerList.style.transform == "translateY(-1000px)") {
        menuBurgerList.style.transform = "translateY(90px)";
    }else {
        menuBurgerList.style.transform = "translateY(-1000px)";
    }
});

window.addEventListener('scroll',()=>{
    if(menuBurger.classList.value == 'change'){
        setTimeout(function (){
            menuBurger.classList.toggle('change');
            if(menuBurgerList.style.transform == "translateY(-1000px)") {
                menuBurgerList.style.transform = "translateY(90px)";
            }else {
                menuBurgerList.style.transform = "translateY(-1000px)";
            }
        }),1000;
    }
});