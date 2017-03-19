import initialState from 'data/invoices';

function invoices(state = initialState, action) {
	switch (action.type) {
		case 'ADD_INVOICE' : {
			return [].concat(state).concat([action.payload]);
		}

		default:
			return state;
	}
}

export default invoices;
