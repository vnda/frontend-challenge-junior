import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
// import "swiper/swiper-bundle.css";

const swiper = new Swiper();

window.onload = () => {
	const bannerSwiper = new Swiper(".banner-swiper", {
		// Optional parameters
		direction: "horizontal",

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	// const productGallerySwiper = new Swiper(".procuts-swiper", {
	// 	slidesPerView: 3,
	// 	spaceBetween: 30,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		clickable: true,
	// 	},
	// });
};
