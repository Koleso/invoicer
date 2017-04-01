import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as notifReducer } from 'redux-notifications';

import customers from './customers';
import suppliers from './suppliers';
import invoices from './invoices';
import user from './signup';

const rootReducer = combineReducers({
	customers,
	suppliers,
	invoices,
	user,
	form: formReducer,
	notifs: notifReducer,
	routing: routerReducer,
});

export default rootReducer;
