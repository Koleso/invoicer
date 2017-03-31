function invoices(state = [], action) {
	switch (action.type) {
		case 'LOAD_INVOICES' : {
			const array = Object.keys(action.payload).map(key => action.payload[key]);
			return [].concat(state).concat(array);
		}

		case 'ADD_INVOICE_FULFILLED' : {
			return [].concat(state).concat([action.payload]);
		}

		case 'PAY_INVOICE_FULFILLED' : {
			const newState = [].concat(state);
			const invoiceIndex = newState.findIndex((obj => obj.id === parseInt(action.payload.id, 10)));
			Object.assign(newState[invoiceIndex], action.payload);
			return newState;
		}

		case 'DELETE_INVOICE_FULFILLED' : {
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
