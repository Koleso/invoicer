import { reset } from 'redux-form';
import { browserHistory } from 'react-router';

export function addSupplier() {
/*
	function afterSubmit() {
		reset('supplier');
		browserHistory.push('/subjekty/');
	}
*/

	return (dispatch, getState) => {
		const form = getState().form.supplier.values;
		const supplier = {
			id: new Date().valueOf(),
			name: form.name,
			ic: form.ic,
			dic: form.dic,
			payer: form.payer,
			city: form.city,
			street: form.street,
			zip: form.zip,
			contact_person: form.contact_person,
			title: form.title,
			vat: form.vat,
			currency: form.currency,
			due: form.due,
			bank: form.bank,
			account: form.account,
			iban: form.iban,
			swift: form.swift,
			email: form.email,
			phone: form.phone,
		};

		dispatch({
			type: 'ADD_SUPPLIER',
			payload: supplier,
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

export function updateSupplier() {
/*
	function afterSubmit() {
		reset('supplier');
		browserHistory.push('/subjekty/');
	}
*/

	return (dispatch, getState) => {
		const form = getState().form.supplier.values;

		const supplier = {
			id: form.id,
			name: form.name,
			ic: form.ic,
			dic: form.dic,
			payer: form.payer,
			city: form.city,
			street: form.street,
			zip: form.zip,
			contact_person: form.contact_person,
			title: form.title,
			vat: form.vat,
			currency: form.currency,
			due: form.due,
			bank: form.bank,
			account: form.account,
			iban: form.iban,
			swift: form.swift,
			email: form.email,
			phone: form.phone,
		};

		dispatch({
			type: 'UPDATE_SUPPLIER',
			payload: supplier,
		});

		// dispatch(afterSubmit());
		// TODO: Iakov kamarad mi pomuze
	};
}

export function deleteSupplier() {
	return (dispatch, getState) => {
		console.log(getState().form.supplier);
		const supplierId = getState().form.supplier.values.id;

		dispatch({
			type: 'DELETE_SUPPLIER',
			payload: supplierId,
		});

		// dispatch(afterSubmit());
		// TODO: Iakov kamarad mi pomuze
	};
}
