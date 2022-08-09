const ShowElementController = (openButtonId, closeButtonId, elementId) => {
	const openButton = document.getElementById(openButtonId);
	const closeButton = document.getElementById(closeButtonId);
	const element = document.getElementById(elementId);

	console.log(element);

	const close = () => {
		closeButton.addEventListener("click", () => {
			console.log(element);
			element.style.width = "0";
			element.style.display = "none";
		});
	};

	const open = () => {
		openButton.addEventListener("click", () => {
			console.log(element);
			element.style.width = "300px";
			element.style.display = "block";
		});
	};

	return {
		close,
		open,
	};
};

export { ShowElementController };
