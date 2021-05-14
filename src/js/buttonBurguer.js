const buttonBurguer = document.getElementById('buttonBurguer')

buttonBurguer.addEventListener('click', function() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
});