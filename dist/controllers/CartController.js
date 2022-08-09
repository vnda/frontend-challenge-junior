import { Cart } from "../models/Cart.js";

const CartController = () => {
	//recebe um array de Products

	const element = document.getElementById("cart-items-list");
	element.innerHTML = "";

	const createList = (items) => {
		const list = items;
		console.log("Criando ...");
		console.log("Lista:", list);

		list.map((item) => {
			const li = document.createElement("li");
			const img = document.createElement("img");
			const description = document.createElement("div");
			const name = document.createElement("h5");
			const price = document.createElement("span");

			li.classList.add("item");
			img.classList.add("image");
			description.classList.add("description");

			li.id = item.id;
			img.src = item.url;
			name.innerText = item.name;
			price.innerText = item.price;

			li.appendChild(img);

			description.appendChild(name);
			description.appendChild(price);

			li.appendChild(description);

			element.appendChild(li);
			console.log(element);
		});
	};

	return {
		createList,
	};
};

export { CartController };
