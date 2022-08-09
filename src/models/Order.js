const Order = () => {
	const totalPrice = (items) => {
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

	const createOrder = (items) => {
		if (items) {
			const list = items.map((item) => `${item.name}%20/%20`);
			const sentence = `Pedido%20via%20site,%20para%20os%20produtos:%20${list}`;
			const link = `https://api.whatsapp.com/send?phone=5532988555409&text=${sentence}`;
			return link;
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
