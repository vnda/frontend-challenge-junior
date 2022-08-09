const Order = (items) => {
	const totalPrice = () => {
		return items
			.reduce((prev, cur) => cur.price + prev, 0)
			.toLocaleString("pt-br", {
				style: "currency",
				currency: "BRL",
			});
	};

	const totalAmount = () => {
		return items.length;
	};

	const createOrder = () => {
		if (items) {
			const items = items.map((item) => `- ${item.name} / `);
			const sentence = `Pedido de orçamento via site, sobre os seguintes produtos: ${items}`;
			return sentence;
		}

		return "";
	};

	return {
		totalAmount,
		totalPrice,
		createOrder,
	};
};

export { Order };
