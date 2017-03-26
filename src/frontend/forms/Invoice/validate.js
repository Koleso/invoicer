const validate = (values) => {
	const errors = {};

	if (!values.supplierId) {
		errors.supplierId = 'Vyberete dodavatele';
	}

	if (!values.customerId) {
		errors.customerId = 'Vyberte zákazníka';
	}

	if (!values.description) {
		errors.description = 'Zadejte popis faktury';
	}

	if (!values.due) {
		errors.due = 'Zadejte splatnost';
	}

	if (!values.items || !values.items.length) {
		errors.items = {
			_error: 'Přidejte alespoň jednu položku faktury',
		};
	} else {
		const itemsArrayErrors = [];
		values.items.forEach((item, itemIndex) => {
			const itemErrors = {};
			if (!item || !item.text) {
				itemErrors.text = 'Zadejte položku';
				itemsArrayErrors[itemIndex] = itemErrors;
			}
			if (!item || !item.quantity) {
				itemErrors.quantity = 'Zadejte množství';
				itemsArrayErrors[itemIndex] = itemErrors;
			}
			if (!item || !item.price) {
				itemErrors.price = 'Zadejte cenu';
				itemsArrayErrors[itemIndex] = itemErrors;
			}
			return itemErrors;
		});

		if (itemsArrayErrors.length) {
			errors.items = itemsArrayErrors;
		}
	}

	return errors;
};

export default validate;
