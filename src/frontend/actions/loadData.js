import app from 'config/firebase';

export function loadData(dispatch) {
	return app.database().ref().once('value')
	.then(snapshot => snapshot.val())
	.then(
		response => {
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
