import { CartController } from "../controllers/CartController.js";
import { ShowElementController } from "../controllers/ShowElementController.js";

const Cart = (items = []) => {
	let itemsList = items;

	const getItems = () => {
		return [...items];
	};

	const clear = () => {
		itemsList = [];
	};

	const addItem = (item) => {
		itemsList = [...itemsList, item];
	};

	const removeItem = (id) => {
		const newList = itemsList.filter((item) => item.id !== id);
		console.log("Newlist", newList);
		itemsList = [...newList];
		console.log("items list", itemsList);
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

	console.log("Lista carrinho", itemsList);

	return {
		startEvents,
		removeItem,
		getItemsList: () => itemsList,
	};
};

export { Cart };
