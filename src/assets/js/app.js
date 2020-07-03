const searchInput = document.querySelector('.search');
const searchBtn = document.getElementById('search-btn');

const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

const menuToggle = document.getElementById('menu-btn');
const mobNavWrapper = document.querySelector('.menus-wrapper');

const cats = document.querySelectorAll('.spotlight div a');
const searchResultOutput = document.getElementById('search-result-output');
const searchResultWrapper = document.getElementById('search-result-wrapper');
let html='';

menuToggle.addEventListener('click', () => mobNavWrapper.classList.toggle('hidden-xxs-xs'));

window.addEventListener('scroll', function(e) {
  if (window.scrollY > headerHeight) { 
    header.classList.add('fixed');
    if(!mobNavWrapper.classList.contains('hidden-xxs-xs')){
      mobNavWrapper.classList.add('hidden-xxs-xs');
    }
  } else {
    header.classList.remove('fixed'); 
  }
});

const mainBanner = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const showInput = (event) => {
    event.preventDefault();
    searchInput.classList.toggle('open');
    searchBtn.classList.toggle('active');
}

searchBtn.addEventListener('click', showInput);

const secondaryBanner = new Swiper('.swiper-secondary', {
  navigation: {
    nextEl: '.swiper-button-next.sec',
    prevEl: '.swiper-button-prev.sec',
  },
});


for(let i=0; i<cats.length; i++) {
  html += '<li><a href="#">'+cats[i].innerText+'</a></li>';
}
searchResultOutput.innerHTML = html;

searchInput.addEventListener('keyup', () => {
      let filter, li, a, txtVal;
      filter = String(searchInput.value);
      li = searchResultOutput.getElementsByTagName('li');
      
      if(filter.length > 0){
        for (let i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtVal = a.textContent || a.innerText;
          if (txtVal.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
            li[i].style.display = "";
              searchResultWrapper.classList.remove('hidden');
          } else {
            li[i].style.display = "none";
          }
        }
      } else {
        searchResultWrapper.classList.add('hidden');
      }

})

searchInput.addEventListener('blur', () => {
  searchResultWrapper.classList.add('hidden');
  searchInput.classList.toggle('open');
  searchBtn.classList.toggle('active');
  searchInput.value='';
});

