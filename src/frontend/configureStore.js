import { compose, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import * as firebase from 'firebase';

import reducers from 'reducers/index';

const firebaseConfig = {
	apiKey: 'AIzaSyDhzrJr50qFiRCVPxGxMyjPLR5px75HeYA',
	authDomain: 'invoicer-ff1f7.firebaseapp.com',
	databaseURL: 'https://invoicer-ff1f7.firebaseio.com',
	storageBucket: 'invoicer-ff1f7.appspot.com',
	messagingSenderId: '150210881222',
};
const app = firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const fbMiddleware = store => next => action => { // eslint-disable-line
	// Note sure if this is what mighty Iakov had in mind
	switch (action.type) {
		case 'ADD_CUSTOMER':
			app.database().ref(`customers/${action.payload.id}`).set(action.payload);
			break;
		case 'UPDATE_CUSTOMER':
			app.database().ref(`customers/${action.payload.id}`).update(action.payload);
			break;
		case 'DELETE_CUSTOMER':
			app.database().ref(`customers/${action.payload}`).remove();
			break;
		case 'ADD_SUPPLIER':
			app.database().ref(`suppliers/${action.payload.id}`).set(action.payload);
			break;
		case 'UPDATE_SUPPLIER':
			app.database().ref(`suppliers/${action.payload.id}`).update(action.payload);
			break;
		case 'DELETE_SUPPLIER':
			app.database().ref(`suppliers/${action.payload}`).remove();
			break;
		case 'ADD_INVOICE':
			app.database().ref(`invoices/${action.payload.id}`).set(action.payload);
			break;
		case 'PAY_INVOICE':
			app.database().ref(`invoices/${action.payload.id}`).update(action.payload);
			break;
		case 'DELETE_INVOICE':
			app.database().ref(`invoices/${action.payload}`).remove();
			break;
		default:
			break;
	}
	const result = next(action);
	return result;
};

const middleware = [
	routerMiddleware(browserHistory),
	fbMiddleware,
	thunkMiddleware,
];

const configureStore = () => {
	const store = createStore(
		reducers,
		// eslint-disable-next-line no-underscore-dangle
		typeof window !== 'undefined' && window.__INITIAL_STATE__ || {},
		composeEnhancers(applyMiddleware(...middleware))
	);

	return store;
};

export default configureStore;
