import { reset } from 'redux-form';

export function test(data) {
	return {
		type: 'TEST',
		payload: data,
	};
}

export function addSupplier(supplier) {
	return {
		type: 'ADD_SUPPLIER',
		payload: supplier,
	};
}

export function addCustomer() {
	return (dispatch, getState) => {
		const form = getState().form.addCustomer.values;
		const customer = {
			id: new Date().valueOf(),
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
			type: 'ADD_CUSTOMER',
			payload: customer,
		});

		// Reset form
		dispatch(reset('addCustomer'));
	};
}

