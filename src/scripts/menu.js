const body = document.querySelector('body');
const mobile = document.querySelector('.mobile-menu');
const inputCheckbox = document.querySelector('input[type=checkbox]');

inputCheckbox.onclick = function() {
    if (!mobile.classList.contains('on')) {
        mobile.classList.add('on');
        mobile.classList.remove('fade-out');
        body.style.overflowY = 'hidden'; 
        mobile.style.transform = 'translateX(100%)';
    } else {
        mobile.classList.add('fade-out');
        mobile.classList.remove('on');
        body.style.overflowY = 'auto'; 
        mobile.style.transform = 'translateX(-100%)';
    }
}