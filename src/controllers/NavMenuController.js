import { ShowElement } from "./ShowElement.js";

const NavMenuController = () => {
	const { open, close } = ShowElement(
		"nav-button-open",
		"nav-button-close",
		"navmenu-mobile"
	);

	const events = () => {
		open();
		close();
	};

	events();
};

export { NavMenuController };
