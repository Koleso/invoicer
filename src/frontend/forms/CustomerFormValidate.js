const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Vyplňte jméno zákazníka';
	}

	if (!values.street) {
		errors.street = 'Vyplňte ulici';
	}

	if (!values.city) {
		errors.city = 'Vyplňte město';
	}

	if (!values.zip) {
		errors.zip = 'Vyplňte PSČ';
	}

	if (!values.contact_person) {
		errors.contact_person = 'Vyplňte kontaktní osobu';
	}

	if (!values.email) {
		errors.email = 'Vyplňte kontaktní e-mail';
	}

	return errors;
};

export default validate;
