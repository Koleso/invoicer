import { compose, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from 'reducers/index';

const composeEnhancers = (
	NODE_ENV !== 'production' &&
	typeof window !== 'undefined' && 
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
	compose
);

const middleware = [
	routerMiddleware(browserHistory),
	promiseMiddleware(),
	thunkMiddleware,
];

const configureStore = () => {
	const store = createStore(
		reducers,
		typeof window !== 'undefined' && window.__INITIAL_STATE__ || {}, // eslint-disable-line
		composeEnhancers(applyMiddleware(...middleware))
	);

	return store;
};

export default configureStore;
