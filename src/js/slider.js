const containerThreebaner = document.querySelector(".threebaner-container.-two"),
      bannersThreebaner = document.querySelectorAll(".threebaner-container [class*='-banner']"),
      containerInsta = document.querySelector(".insta-slides"),
      bannersInsta = document.querySelectorAll(".banner.-insta")

    if (window.matchMedia("(max-width: 1100px)").matches) {
        containerThreebaner.classList.add('swiper-container')
        let divWrapper = document.createElement('div');
        divWrapper.className = 'swiper-wrapper';
        bannersThreebaner.forEach(e => {
            if (e.querySelector(".banner").classList.contains("-small")) {
                e.querySelector(".banner").classList.remove("-small")
                e.querySelector(".banner").classList.add("-big")
            }
            divWrapper.insertBefore(e, divWrapper.lastChild)
            containerThreebaner.insertBefore(divWrapper, containerThreebaner.lastChild);
        });

        bannersInsta.forEach(e => {
            let div = document.createElement('div');
            div.className = 'swiper-slide';
            div.insertBefore(e, div.lastChild)
            containerInsta.insertBefore(div, containerInsta.lastChild);
        });
        const globSlider = document.querySelectorAll('.glob-slider')
        globSlider.forEach(e => {
            var swiper = new Swiper(e, {
                slidesPerView: 1,
                spaceBetween: 25,
                loop: true,
                grabCursor: true,
                centeredSlides:true,
                navigation: {
                    nextEl: '.glob-slider .swiper-button-next',
                    prevEl: '.glob-slider .swiper-button-prev',
                },
                breakpoints: {
                    800: {
                      slidesPerView: 2
                    }
                  }
            })
        });
    } else {
        console.log('slides normais');
    }




