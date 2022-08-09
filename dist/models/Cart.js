import { CartController } from "../controllers/CartController.js";
import { ShowElementController } from "../controllers/ShowElementController.js";

const Cart = () => {
	let itemsList = [];

	const addItem = (item) => {
		if (!itemsList.find((i) => i.id === +item.id)) itemsList.push(item);
	};

	const removeItem = (id) => {
		itemsList = itemsList.filter((item) => item.id !== +id);
	};

	const { open, close } = ShowElementController(
		"cart-button-open",
		"cart-button-close",
		"cart-container"
	);

	const startEvents = () => {
		open();
		close();
	};

	return {
		addItem,
		removeItem,
		startEvents,
		getItemsList: () => itemsList,
	};
};

export { Cart };
