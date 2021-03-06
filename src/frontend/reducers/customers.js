function customers(state = [], action) {
	switch (action.type) {
		case 'LOAD_CUSTOMERS' : {
			const array = Object.keys(action.payload).map(key => action.payload[key]);
			return [].concat(state).concat(array);
		}

		case 'ADD_CUSTOMER_FULFILLED' : {
			return [].concat(state).concat([action.payload]);
		}

		case 'UPDATE_CUSTOMER_FULFILLED' : {
			const newState = [].concat(state);
			const customerIndex = newState.findIndex((obj => obj.id === parseInt(action.payload.id, 10)));
			Object.assign(newState[customerIndex], action.payload);
			return newState;
		}

		case 'DELETE_CUSTOMER_FULFILLED' : {
			const newState = [].concat(state);
			const customerIndex = newState.findIndex((obj => obj.id === parseInt(action.payload, 10)));
			newState.splice(customerIndex, 1);
			return newState;
		}

		default:
			return state;
	}
}

export default customers;
