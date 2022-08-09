// import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
// import "swiper/swiper-bundle.css";

import { NavMenu } from "./src/models/NavMenu.js";
import { Cart } from "./src/models/Cart.js";
import { SwiperController } from "./dist/controllers/SwiperController-min.js";
import { CartController } from "./src/controllers/CartController.js";

window.onload = () => {
	// const bannerSwiper = new Swiper(".banner-swiper", {
	// 	slidesPerView: 1,
	// 	spaceBetween: 30,
	// 	loop: true,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		clickable: true,
	// 	},
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},
	// });

	// const swiper = new Swiper(".products-swiper", {
	// 	slidesPerView: 6,
	// 	spaceBetween: 30,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		clickable: true,
	// 	},
	// 	breakpoints: {
	// 		// when window width is >= 320px
	// 		320: {
	// 			slidesPerView: 2,
	// 			spaceBetween: 20,
	// 		},
	// 		// when window width is >= 480px
	// 		480: {
	// 			slidesPerView: 3,
	// 			spaceBetween: 30,
	// 		},
	// 		// when window width is >= 640px
	// 		640: {
	// 			slidesPerView: 4,
	// 			spaceBetween: 40,
	// 		},
	// 		1280: {
	// 			slidesPerView: 6,
	// 			spaceBetween: 30,
	// 		},
	// 	},
	// });

	// const featureProductSwiper = new Swiper(".feature-swiper", {
	// 	autoHeight: true,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		type: "fraction",
	// 	},
	// 	navigation: {
	// 		nextEl: ".swiper-button-next",
	// 		prevEl: ".swiper-button-prev",
	// 	},
	// });

	const items = [
		{
			id: 1,
			name: "Produto 1",
			url: "https://http2.mlstatic.com/D_NQ_NP_696179-MLB48892196738_012022-O.webp",
			price: 59.9,
		},
		{
			id: 2,
			name: "Produto 2",
			url: "https://http2.mlstatic.com/D_NQ_NP_696179-MLB48892196738_012022-O.webp",
			price: 46.9,
		},
		{
			id: 3,
			name: "Produto 3",
			url: "https://http2.mlstatic.com/D_NQ_NP_696179-MLB48892196738_012022-O.webp",
			price: 25.9,
		},
	];

	const swiper = SwiperController();

	const navMenu = NavMenu();
	navMenu.startEvents();

	const cart = Cart(items);
	console.log(cart.getItemsList());

	cart.removeItem(2);
	console.log(cart.getItemsList());
	cart.startEvents();

	const cartController = CartController();
	cartController.createList(cart.getItemsList());

	// cart.removeItem(3);
	// console.log(cart.getItemsList());

	// cartController.createList();
};
