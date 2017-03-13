const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = 'Vyplňte jméno dodavatele';
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

	if (!values.bank) {
		errors.bank = 'Vyplňte bankovní spojení';
	}

	if (!values.account) {
		errors.account = 'Vyplňte číslo účtu';
	}

	return errors;
};

export default validate;
