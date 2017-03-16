import { reset } from 'redux-form';
import { browserHistory } from 'react-router';

export function addInvoice() {
	return (dispatch, getState) => {
		dispatch({
			type: 'ADD_INVOICE',
			payload: null,
		});
	};
}

