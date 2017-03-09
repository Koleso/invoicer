import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import customers from './customers';
import suppliers from './suppliers';
import test from './test';

const rootReducer = combineReducers({
	customers,
	suppliers,
	test,
	routing: routerReducer,
});

export default rootReducer;
