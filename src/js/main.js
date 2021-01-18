document.querySelector('.contact-form button[type="submit"]')
    .addEventListener('click', (event) => {
        event.preventDefault();
    });

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
    })
})

document.querySelector('.contact-form form input[type="email"]').addEventListener('focus', () => {
    document.querySelector('.contact-form form').classList.add('active');
})

document.querySelector('.contact-form form input[type="email"]').addEventListener('focusout', () => {
    document.querySelector('.contact-form form').classList.remove('active');
})


const navbarToggler = document.querySelector('.site-header .navbar-toggler');
const mainNavigation = document.querySelector('.site-header__navigation');
const quickLinks = document.querySelector('.site-header .quick-links');

navbarToggler.addEventListener('click', () => {
    mainNavigation.classList.toggle('expanded');
    quickLinks.classList.toggle('expanded');
})