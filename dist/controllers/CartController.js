import { Order } from "../models/Order.js";

const CartController = (cart) => {
	const element = document.getElementById("cart-items-list");
	const total = document.getElementById("total");
	const orderLink = document.getElementById("order-link");
	const order = Order();

	const setEvents = () => {
		const removeButtons = Array.from(document.querySelectorAll(".remove"));

		for (let button of removeButtons) {
			button.addEventListener("click", () => {
				cart.removeItem(button.id);
				createList(cart.getItemsList());
			});
		}
	};

	const createList = () => {
		element.innerHTML = "";
		total.innerHTML = "";
		const list = cart.getItemsList();

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

			img.src = item.img_url;
			name.innerText = item.name;
			price.innerText = item.price.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			});

			button.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
			button.id = item.id;

			li.appendChild(img);

			description.appendChild(name);
			description.appendChild(price);

			li.appendChild(description);
			li.appendChild(button);

			element.appendChild(li);
		});

		createTotal();

		setEvents();
	};

	const createTotal = () => {
		if (cart.getItemsList().length > 0) {
			const totalPriceElement = document.createElement("span");
			totalPriceElement.innerText = order.totalPrice(cart.getItemsList());

			total.innerHTML = `<span id="total-price" class="total">Preço total:</span>`;
			total.appendChild(totalPriceElement);

			orderLink.href = order.createOrder(cart.getItemsList());
			return;
		}
		total.innerHTML = `<span id="total-price" class="total -empty">Carrinho vazio</span>`;
	};

	return {
		createList,
	};
};

export { CartController };
