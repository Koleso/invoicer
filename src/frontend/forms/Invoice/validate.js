const validate = (values) => {
	const errors = {};

	if (!values.supplierId) {
		errors.supplierId = 'Vyberete dodavatele';
	}

	if (!values.customerId) {
		errors.customerId = 'Vyberte zákazníka';
	}

	return errors;
};

export default validate;
