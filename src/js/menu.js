const menuIcon = document.querySelector('.menu-icon'),
    closeMenu = document.querySelector('.close-menu'),
    overlay = document.querySelector('.overlay'),
    headerTag = document.querySelector('header')

const toggleFunction = () => {
    menuIcon.classList.toggle("-open");
    headerTag.classList.toggle("-menuopen");
    overlay.classList.toggle("-open");

}
const removeFunction = () => {
    menuIcon.classList.remove("-open");
    headerTag.classList.remove("-menuopen");
    overlay.classList.remove("-open");
}
// ABRE O MENU CLICANDO NO ICONE DE MENU
menuIcon.addEventListener('click', toggleFunction)
// FECHA O MENU QUANDO CLIA NO ICONE X
closeMenu.addEventListener('click', toggleFunction)
// CLI FORA DO MENU FECHA-O
overlay.addEventListener('click', removeFunction)
// TECLA ESC FECHA MENU
window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {removeFunction}
})