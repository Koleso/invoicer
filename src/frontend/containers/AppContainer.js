import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as customerCreators from 'actions/customers';
import * as supplierCreators from 'actions/suppliers';
import * as invoicesCreators from 'actions/invoices';

import AppLayout from 'screens/AppLayout';

function mapStateToProps(state) {
	return {
		customers: state.customers,
		suppliers: state.suppliers,
	};
}

function mapDispachToProps(dispatch) {
	return {
		actions: {
			customerActions: bindActionCreators(customerCreators, dispatch),
			supplierActions: bindActionCreators(supplierCreators, dispatch),
			invoicesActions: bindActionCreators(invoicesCreators, dispatch),
			//invoiceActions: bindActionCreators(invoiceCreators, dispatch),
		}
	};
}

export default connect(
	mapStateToProps,
	mapDispachToProps,
)(AppLayout);
