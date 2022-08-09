const FormEmailController = () => {
	const emailField = document.getElementById("email-input");
	const messageField = document.getElementById("email-textarea");
	const sendButton = document.getElementById("send-email-button");

	const emailIsValid = (email) => {
		const emailRegex = new RegExp(/\S+@\S+\.\S+/);
		if (!emailRegex.test(email)) {
			return false;
		}
		return true;
	};

	const isValidFields = () => {
		if (element.classList.contains("error-text")) alert("tem");

		if (!emailField.value) {
			createElementError(emailField, "Este campo não pode ficar vazio");
			return;
		}

		if (!emailIsValid(emailField.value)) {
			createElementError(emailField, "Digite um email válido");
			return;
		}

		const errorMessages = document.querySelectorAll(".error-field");

		if (errorMessages.length === 0) return true;

		return false;
	};

	const createElementError = (element, message) => {
		if (element) {
			const div = document.createElement("div");
			div.innerText = message;
			div.classList.add("error-text");
			element.insertAdjacentElement("afterend", div);
			element.classList.add("error-field");
		}
	};

	const events = () => {
		sendButton.addEventListener("click", (event) => {
			event.preventDefault();

			if (isValidFields()) {
				alert("Email enviado!");
				if (element.classList.contains("error-field")) {
					element.classList.remove("error-field");
					element.parentNode.removechild(element);
				}
			}
		});
	};

	events();
};

export { FormEmailController };
