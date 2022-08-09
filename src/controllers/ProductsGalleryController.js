import { Cart } from "../models/Cart.js";
import { CartController } from "./CartController.js";

const ProductsGalleryController = (items, cart) => {
	const galleryElement = document.getElementById("gallery");
	const itemsList = items;
	// const cart = Cart();
	const cartController = CartController(cart);

	const createElement = (id, name, price, img_url) => {
		return `<div class="swiper-slide">
        <article class="product-card">
            <div class="productthumb">
                <img
                    class="product"
                    src=${img_url}
                    alt=${name}
                />
            </div>
            <div class="product-label">
                <button class="buttoncart" id=${id} >
                    <i class="fa-solid fa-cart-plus"></i>
                </button>
                <h4 class="title">${name}</h4>
                <span class="price">${price.toLocaleString("pt-br", {
					style: "currency",
					currency: "BRL",
				})}</span>
            </div>
        </article>
    </div>`;
	};

	const createGallery = () => {
		for (let item of itemsList) {
			const { id, name, price, img_url } = item;
			galleryElement.innerHTML += createElement(id, name, price, img_url);
		}

		setEvents();
	};

	const setEvents = () => {
		const cartButtons = Array.from(
			document.querySelectorAll(".buttoncart")
		);

		for (let button of cartButtons) {
			button.addEventListener("click", () => {
				const item = itemsList.find((item) => item.id === +button.id);
				cart.addItem(item);
				cartController.createList(cart);
			});
		}
	};

	createGallery();

	return;
};

export { ProductsGalleryController };
