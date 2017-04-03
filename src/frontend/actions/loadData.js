import app from 'config/firebase';

export function loadData(dispatch) {
	return app.database().ref(app.auth().currentUser.uid).once('value')
	.then(snapshot => snapshot.val())
	.then(
		response => {
			let res = response;
			if (!response) {
				res = {};
			}
			dispatch({
				type: 'LOAD_CUSTOMERS',
				payload: res.customers || {},
			});
			dispatch({
				type: 'LOAD_SUPPLIERS',
				payload: res.suppliers || {},
			});
			dispatch({
				type: 'LOAD_INVOICES',
				payload: res.invoices || {},
			});
		}
	);
}
