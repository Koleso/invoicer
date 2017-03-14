import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import customers from './customers';
import suppliers from './suppliers';
import invoices from './invoices';

const rootReducer = combineReducers({
	customers,
	suppliers,
	invoices,
	form: formReducer,
	routing: routerReducer,
});

export default rootReducer;
