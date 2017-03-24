import { reset } from 'redux-form';
import { browserHistory } from 'react-router';

export function addInvoice() {
	return (dispatch, getState) => {
		const form = getState().form.invoice.values;
		const invoice = {
			id: form.id,
			customer: parseInt(form.customerId, 10),
			supplier: parseInt(form.supplierId, 10),
			currency: form.currency,
			date: form.date,
			due: form.due,
			paid: false,
		};

		dispatch({
			type: 'ADD_INVOICE',
			payload: invoice,
		});
	};
}
