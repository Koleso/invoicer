import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from 'actions';

import AppLayout from 'screens/AppLayout';

function mapStateToProps(state) {
	return {
		customers: state.customers,
	};
}

function mapDispachToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

const AppContainer = connect(mapStateToProps, mapDispachToProps)(AppLayout);

export default AppContainer;
