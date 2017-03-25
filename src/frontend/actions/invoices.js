import { reset } from 'redux-form';
import { browserHistory } from 'react-router';

export function addInvoice() {
	return (dispatch, getState) => {
		const form = getState().form.invoice.values;
		console.log(form);
		const invoice = {
			id: form.id,
			customer: parseInt(form.customerId, 10),
			supplier: parseInt(form.supplierId, 10),
			decription: form.decription,
			currency: form.currency,
			date: form.date,
			due: form.due,
			price_total: parseFloat(form.price_total.replace(/\s/g, '')),
			vat_total: parseFloat(form.vat_total.replace(/\s/g, '')),
			paid: false,
			items: form.items,
		};

		dispatch({
			type: 'ADD_INVOICE',
			payload: invoice,
		});
	};
}

export function payInvoice() {
	return (dispatch, getState) => {
		const invoiceId = getState().form.invoice.values.id;

		const invoice = {
			id: invoiceId,
			paid: true,
		};

		dispatch({
			type: 'PAY_INVOICE',
			payload: invoice,
		});
	};
}


export function deleteInvoice() {
	return (dispatch, getState) => {
		const invoiceId = getState().form.invoice.values.id;

		dispatch({
			type: 'DELETE_INVOICE',
			payload: invoiceId,
		});
	};
}
