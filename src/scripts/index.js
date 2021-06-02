const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const btnMobile = document.querySelector('#btn-mobile');

  function toggleMenu() {
      const nav = document.querySelector('#nav');
      nav.classList.toggle('active');
  }
  
  btnMobile.addEventListener('click', toggleMenu);

  const imgBanner = document.querySelectorAll('.banner-img img');
  const imgInsta = document.querySelectorAll('.instagram img');

  
  function scaleImage(images) {
    images.forEach((img) => {
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1, 1.1)';
      })
  
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1, 1)';
      })
    })
  }

  scaleImage(imgBanner);
  scaleImage(imgInsta);

  ScrollOut({
    targets: '.banner-text h1, .banner-text p, .banner-img img'
  });