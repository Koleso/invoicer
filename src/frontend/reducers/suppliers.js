import initialState from 'data/suppliers';

function suppliers(state = initialState, action) {
	switch (action.type) {
		case 'ADD_SUPPLIER' : {
			return [].concat(state).concat([action.payload]);
		}

		case 'UPDATE_SUPPLIER' : {
			const newState = [].concat(state);
			const supplierIndex = newState.findIndex((obj => obj.id === parseInt(action.payload.id, 10)));
			Object.assign(newState[supplierIndex], action.payload);
			return newState;
		}

		case 'DELETE_SUPPLIER' : {
			const newState = [].concat(state);
			const supplierIndex = newState.findIndex((obj => obj.id === parseInt(action.payload, 10)));
			newState.splice(supplierIndex, 1);
			return newState;
		}

		default:
			return state;
	}
}

export default suppliers;
