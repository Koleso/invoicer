export function addCustomer() {
	return (dispatch, getState) => {
		const form = getState().form.customer.values;
		const customer = {
			id: new Date().valueOf(),
			name: form.name,
			ic: form.ic,
			dic: form.dic || '',
			city: form.city,
			street: form.street,
			zip: form.zip,
			contact_person: form.contact_person,
			title: form.title || '',
			email: form.email,
			phone: form.phone || '',
		};

		dispatch({
			type: 'ADD_CUSTOMER',
			payload: customer,
		});
	};
}

export function updateCustomer() {
	return (dispatch, getState) => {
		const form = getState().form.customer.values;

		const customer = {
			id: form.id,
			name: form.name,
			ic: form.ic,
			dic: form.dic,
			city: form.city,
			street: form.street,
			zip: form.zip,
			contact_person: form.contact_person,
			title: form.title,
			email: form.email,
			phone: form.phone,
		};

		dispatch({
			type: 'UPDATE_CUSTOMER',
			payload: customer,
		});
	};
}

export function deleteCustomer() {
	return (dispatch, getState) => {
		const customerId = getState().form.customer.values.id;

		dispatch({
			type: 'DELETE_CUSTOMER',
			payload: customerId,
		});
	};
}
