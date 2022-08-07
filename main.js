import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper();

window.onload = () => {
	const bannerSwiper = new Swiper(".swiper", {
		// Optional parameters
		direction: "horizontal",

		// If we need pagination
		// pagination: {
		// 	el: ".swiper-pagination",
		// },

		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		// And if we need scrollbar
		// scrollbar: {
		// 	el: ".swiper-scrollbar",
		// },
	});
};
