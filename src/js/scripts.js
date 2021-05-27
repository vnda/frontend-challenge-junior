const btnMobile = document.getElementById('btn-mobile');
const instaPicture = document.querySelectorAll('.insta-picture');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.querySelector('.navigation-content');
    nav.classList.toggle('active');

    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Close menu');
    }else {
        event.currentTarget.setAttribute('aria-label', 'Open menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

instaPicture.forEach( (picture) => {
    picture.addEventListener('mouseover', instagramHover);
    picture.addEventListener('mouseout', instagramHover);
})

function instagramHover(event) {
    event.currentTarget.classList.toggle('active');
}
