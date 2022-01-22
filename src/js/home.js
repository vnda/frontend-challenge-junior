home = {
  header: {
    _header: document.querySelector(".header"),
    _navBar: document.querySelector(".navbar"),
    _searchField: document.getElementById("search-field"),

    //Não sendo necessário, remove a cor do header
    removeBg: function () {
      const _this = this;
      if (window.scrollY == 0 && !_this._searchField.classList.contains("-show") && !_this._navBar.classList.contains("-open")) {
        _this._header.classList.remove("-bg");
      } else {
        _this._header.classList.add("-bg");
      }
    },
    toggleSticky: function () {
      const _this = this;
      window.addEventListener("scroll", () => {
        _this._header.classList.toggle("-sticky", window.scrollY > 0);
      });
    },
    navMobile: function () {
      const _this = this;
      const burger = document.querySelector(".burger");

      burger.addEventListener("click", () => {
        _this._navBar.classList.toggle("-open");
        burger.classList.toggle("-rotate");
        _this.removeBg()
      });
    },
    setSearchBar: function () {
      const _this = this;
      const searchIcon = document.getElementById("search-icon");

      searchIcon.addEventListener("click", () => {
        _this._searchField.classList.toggle("-show");
        _this.removeBg();
      })
    },
    init: function () {
      const _this = this;
      _this.toggleSticky();
      _this.navMobile();
      _this.setSearchBar();
      _this.removeBg();
    }
  },
  swipers: {
    setFullbanner: function () {
      const banner = document.querySelector(".fullbanner");
      const mainSwiper = new Swiper('.swiper-container-main', {
        direction: 'horizontal',
        loop: true,
        allowTouchMove: false,
        effect: 'fade',
        speed: 1300,
        autoplay: {
          delay: 1500,
          disableOnInteraction: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });

      banner.addEventListener("mouseover", () => mainSwiper.autoplay.stop())
      banner.addEventListener("mouseleave", () => mainSwiper.autoplay.start())
    },
    setSwiperCollection: function () {
      const swiperCollection = new Swiper('.swiper-container-collection', {
        grabCursor: true,
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });
    },
    setThumbs: function () {
      const swiperThumbs = new Swiper('.swiper-container-thumbnails', {
        loop: true,
        slidesPerView: 6,
        spaceBetween: 10,
        allowTouchMove: true,
        breakpoints: {
          768: {
            slidesPerView: 6,
          },
          425: {
            slidesPerView: 5,
          },
          0: {
            slidesPerView: 3,
          }
        },
        slidesPerGroup: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });
    },
    init: function () {
      const _this = this;
      _this.setFullbanner();
      _this.setSwiperCollection();
      _this.setThumbs();
    }
  },
  init: function () {
    const _this = this;
    _this.header.init();
    _this.swipers.init();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  home.init();
});