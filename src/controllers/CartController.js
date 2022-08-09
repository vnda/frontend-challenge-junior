import { Cart } from "../models/Cart.js";

const CartController = (cart) => {
	//recebe um array de Products

	const element = document.getElementById("cart-items-list");

	const setEvents = () => {
		const removeButtons = Array.from(document.querySelectorAll(".remove"));

		for (let button of removeButtons) {
			button.addEventListener("click", () => {
				console.log("CART", cart.getItemsList());
				cart.removeItem(button.id);
				console.log("CART REMOVE", cart.getItemsList());
				createList(cart.getItemsList());
			});
		}
	};

	const createList = (items) => {
		element.innerHTML = "";
		const list = items;

		list.map((item) => {
			const li = document.createElement("li");
			const img = document.createElement("img");
			const description = document.createElement("div");
			const name = document.createElement("h5");
			const price = document.createElement("span");
			const button = document.createElement("button");

			li.classList.add("carditem");
			img.classList.add("image");
			name.classList.add("name");
			price.classList.add("price");
			button.classList.add("remove");
			description.classList.add("description");

			img.src = item.url_img;
			name.innerText = item.name;
			price.innerText = item.price;

			button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
			button.id = item.id;

			li.appendChild(img);

			description.appendChild(name);
			description.appendChild(price);

			li.appendChild(description);
			li.appendChild(button);

			element.appendChild(li);
			console.log(element);
		});

		setEvents();
	};

	return {
		createList,
	};
};

export { CartController };
