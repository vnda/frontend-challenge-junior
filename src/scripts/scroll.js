const arrowLeft = document.querySelector('.arrowleft');
const arrowRight = document.querySelector('.arrowright');
const rowList = document.querySelector('.rowlist');
const style = getComputedStyle(rowList);

arrowLeft.onclick = function() {
    let x = parseInt(style.marginLeft.replace('px', '')) + Math.round(window.innerWidth / 2);

    if (x > 0) {
        x = 0;
    }
    rowList.style.marginLeft = `${x}px`;
}

arrowRight.onclick = function() {
    let x = parseInt(style.marginLeft.replace('px', '')) - Math.round(window.innerWidth / 2); 

    if((window.innerWidth - 765) > x) {
        x = (window.innerWidth - 765) - (window.innerWidth * 3.5 / 100);
    }
    rowList.style.marginLeft = `${x}px`;
}

window.addEventListener('resize', function(e){
    if (window.innerWidth > 768) {
        rowList.style.marginLeft = '0px';
    }
}); 