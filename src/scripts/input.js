const containerInput = document.querySelector('.search');
const inputText = document.querySelector('.search input');

inputText.onblur = function() {
    if (inputText.value !== '') {
        containerInput.classList.add('active');
    } else {
        containerInput.classList.remove('active');
    }
}