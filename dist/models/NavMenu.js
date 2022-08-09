import { ShowElementController } from "../controllers/ShowElementController.js";

const NavMenu = () => {
	const { open, close } = ShowElementController(
		"nav-button-open",
		"nav-button-close",
		"navmenu-mobile"
	);

	const startEvents = () => {
		open();
		close();
	};

	return { startEvents };
};

export { NavMenu };
