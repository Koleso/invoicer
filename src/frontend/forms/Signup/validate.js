const validate = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Vyplňte e-mail uživatele';
	}

	if (!values.password) {
		errors.password = 'Vyplňte heslo uživatele';
	}

	return errors;
};

export default validate;
