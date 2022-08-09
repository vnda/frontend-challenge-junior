import { NavMenu } from "./src/models/NavMenu.js";
import { Cart } from "./src/models/Cart.js";
import { SwiperController } from "./dist/controllers/SwiperController-min.js";
import { FormEmailController } from "./src/controllers/FormEmailController.js";
import { ProductsGalleryController } from "./src/controllers/ProductsGalleryController.js";
import { items } from "./src/services/db.js";

window.onload = () => {
	const cart = Cart();
	cart.startEvents();

	const productsGallery = ProductsGalleryController(items, cart);
	const navMenu = NavMenu();
	navMenu.startEvents();

	const email = FormEmailController();
	const swiper = SwiperController();
};
