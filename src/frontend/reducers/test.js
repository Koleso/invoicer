function test(state = [], action) {
	switch(action.type) {
		case 'TEST' :
			console.log('testuju');
			console.log(state, action);
		default:
			return state;
	}
}

export default test;
