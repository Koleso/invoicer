import { reset } from 'redux-form';
import { browserHistory } from 'react-router';

export function updateSupplier() {
	return (dispatch, getState) => {
		const supplierObject = {
			supplierId: getState().form.invoice.values.id,
		};

		dispatch({
			type: 'UPDATE_SUPPLIER',
			payload: supplierObject,
		});
	};
}

export function addInvoice() {
	return (dispatch, getState) => {
		dispatch({
			type: 'ADD_INVOICE',
			payload: null,
		});
	};
}
