function user(state = { loggedIn: false }, action) {
	switch (action.type) {
		case 'LOGIN_FULFILLED' : {
			return Object.assign({}, state.user, { loggedIn: true });
		}

		case 'LOGOUT_FULFILLED' : {
			return Object.assign({}, state.user, { loggedIn: false });
		}

		default:
			return state;
	}
}

export default user;
