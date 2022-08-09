import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const SwiperController = () => {
	const bannerSwiper = new Swiper(".banner-swiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	const productsSwiper = new Swiper(".products-swiper", {
		slidesPerView: 6,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			// when window width is >= 640px
			640: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
			1280: {
				slidesPerView: 6,
				spaceBetween: 30,
			},
		},
	});

	const featureProductSwiper = new Swiper(".feature-swiper", {
		autoHeight: true,
		pagination: {
			el: ".swiper-pagination",
			type: "fraction",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});
};

export { SwiperController };
