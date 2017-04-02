import app from 'config/firebase';

export function loadData(dispatch) {
	return app.database().ref(app.auth().currentUser.uid).once('value')
	.then(
		response => {
			if (!response) {
				response = {};
			}
			dispatch({
				type: 'LOAD_CUSTOMERS',
				payload: response.customers || {},
			});
			dispatch({
				type: 'LOAD_SUPPLIERS',
				payload: response.suppliers || {},
			});
			dispatch({
				type: 'LOAD_INVOICES',
				payload: response.invoices || {},
			});
		}
	);
}
