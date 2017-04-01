import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as customerCreators from 'actions/customers';
import * as supplierCreators from 'actions/suppliers';
import * as invoicesCreators from 'actions/invoices';

class AppContainer extends React.Component {
	render() {
		return this.props.children;
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.user.loggedIn,
		redirectUrl: state.redirectUrl,
	};
};

const mapDispatchToProps = (dispatch) => ({
	actions: {
		customerActions: bindActionCreators(customerCreators, dispatch),
		supplierActions: bindActionCreators(supplierCreators, dispatch),
		invoicesActions: bindActionCreators(invoicesCreators, dispatch),
	},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
