const ShowElement = (openButtonId, closeButtonId, elementId) => {
	const openButton = document.getElementById(openButtonId);
	const closeButton = document.getElementById(closeButtonId);
	const element = document.getElementById(elementId);

	const close = () => {
		closeButton.addEventListener("click", () => {
			element.style.width = "0";
			element.style.display = "none";
		});
	};

	const open = () => {
		openButton.addEventListener("click", () => {
			element.style.width = "300px";
			element.style.display = "block";
		});
	};

	return {
		close,
		open,
	};
};

export { ShowElement };
