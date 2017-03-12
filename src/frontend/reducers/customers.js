import updateObject from 'helpers/updateObject';

function customers(state = [], action) {
	switch (action.type) {
		case 'ADD_CUSTOMER' :
			return [].concat(state).concat([action.payload]);

		case 'UPDATE_CUSTOMER' :
			let newState = [].concat(state);
			const customerIndex = newState.findIndex((obj => obj.id === parseInt(action.payload.id, 10)));
			Object.assign(newState[customerIndex], action.payload); // TODO: Iakov approves?
			return newState;

		case 'DELETE_CUSTOMER' :
			let newState2 = [].concat(state);
			const customerIndex2 = newState2.findIndex((obj => obj.id === parseInt(action.payload, 10)));
			newState2.splice(customerIndex2, 1); // TODO: Iakov approves?
			return newState2;

		default:
			return state;
	}
}

export default customers;
