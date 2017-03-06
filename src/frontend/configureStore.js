import { compose, applyMiddleware, createStore } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { reducers } from './modules';

// Firebase
import * as firebase from 'firebase';
const firebaseConfig = {
	apiKey: 'AIzaSyDhzrJr50qFiRCVPxGxMyjPLR5px75HeYA',
	authDomain: 'invoicer-ff1f7.firebaseapp.com',
	databaseURL: 'https://invoicer-ff1f7.firebaseio.com',
	storageBucket: 'invoicer-ff1f7.appspot.com',
	messagingSenderId: '150210881222',
};
let app = firebase.initializeApp(firebaseConfig);
window.db = firebase.database();

const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
	routerMiddleware(browserHistory),
];

const configureStore = () => {
	const store = createStore(
		reducers,
		typeof window !== 'undefined' && window.__INITIAL_STATE__ || {},
		composeEnhancers(applyMiddleware(...middleware))
	);

	return store;
};

export default configureStore;
