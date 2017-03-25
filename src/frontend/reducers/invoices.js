import initialState from 'data/invoices';

function invoices(state = initialState, action) {
	switch (action.type) {
		case 'ADD_INVOICE' : {
			return [].concat(state).concat([action.payload]);
		}

		case 'PAY_INVOICE' : {
			const newState = [].concat(state);
			const invoiceIndex = newState.findIndex((obj => obj.id === parseInt(action.payload.id, 10)));
			Object.assign(newState[invoiceIndex], action.payload);
			return newState;
		}

		case 'DELETE_INVOICE' : {
			const newState = [].concat(state);
			const invoiceIndex = newState.findIndex((obj => obj.id === parseInt(action.payload, 10)));
			newState.splice(invoiceIndex, 1);
			return newState;
		}

		default:
			return state;
	}
}

export default invoices;
