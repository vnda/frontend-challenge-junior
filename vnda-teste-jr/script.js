const btnScrollTo = document.querySelector('.btn-scroll-to');
const section = document.querySelector('#product-scroll');

btnScrollTo.addEventListener('click', function (e) {
  const sectionCoords = section.getBoundingClientRect();

  window.scrollTo({
    left: sectionCoords.left + window.pageXOffset,
    top: sectionCoords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});