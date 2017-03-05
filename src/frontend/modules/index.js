import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
	routing: routerReducer,
	dummy: (state = { dummy: 'dummy' }, action) => state,
});

export {
	reducers,
};