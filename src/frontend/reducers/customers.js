function customers(state = [], action) {
	switch (action.type) {
		case 'ADD_CUSTOMER' :
			return [].concat(state).concat([action.payload]);
			break;
		default:
			return state;
	}
}

export default customers;
