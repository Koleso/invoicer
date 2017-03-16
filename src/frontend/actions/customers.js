import { reset } from 'redux-form';
import { browserHistory } from 'react-router';

export function addCustomer() {
/*
	function afterSubmit() {
		reset('supplier');
		browserHistory.push('/subjekty/');
	}
*/

	return (dispatch, getState) => {
		const form = getState().form.customer.values;
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

		/*
		return new Promise((resolve) => {
			dispatch({
				type: 'ADD_SUPPLIER',
				payload: supplier,
			});

			resolve();
		});
		*/

		// dispatch(afterSubmit());
		// TODO: Iakov kamarad mi pomuze
	};
}

export function updateCustomer() {
/*
	function afterSubmit() {
		reset('supplier');
		browserHistory.push('/subjekty/');
	}
*/

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

		// dispatch(afterSubmit());
		// TODO: Iakov kamarad mi pomuze
	};
}

export function deleteCustomer() {
	return (dispatch, getState) => {
		const customerId = getState().form.customer.values.id;

		dispatch({
			type: 'DELETE_CUSTOMER',
			payload: customerId,
		});

		// dispatch(afterSubmit());
		// TODO: Iakov kamarad mi pomuze
	};
}
