import { Order } from "../models/Order.js";

const CartController = (cart) => {
	const element = document.getElementById("cart-items-list");
	const total = document.getElementById("total");
	const orderLink = document.getElementById("order-link");

	const order = Order(cart.getItemsList());

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
		// setOrderLink();
		setEvents();
	};

	const createTotal = () => {
		const totalPrice = document.createElement("span");
		const totalAmount = document.createElement("span");
		totalPrice.innerText = order.totalPrice();
		totalAmount.innerHTML = order.totalAmount();

		total.appendChild(totalPrice);
		total.appendChild(totalAmount);
	};

	// const setOrderLink = () => {
	// 	cart.getItemsList.map((item) => `- ${item.name} / `);
	// 	const sentence = `Pedido de orçamento via site, sobre os seguintes produtos: ${items}`;

	// 	const whatsappLink = `https://api.whatsapp.com/send?phone=5532988555409&text=${sentence}`;
	// 	orderLink.href = whatsappLink;
	// };

	return {
		createList,
	};
};

export { CartController };
