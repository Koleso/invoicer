import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as customerCreators from 'actions/customers';
import * as supplierCreators from 'actions/suppliers';
import * as invoicesCreators from 'actions/invoices';
import { loadData } from 'actions/loadData';

import AppLayout from 'screens/AppLayout';
import Spinner from 'components/Spinner';

class AppContainer extends React.Component {
	componentWillMount() {
		this.props.loadData();
	}

	render() {
		if (this.props.customers[0] !== undefined) {
			return (
				<AppLayout {...this.props} />
			);
		}
		return (
			<Spinner modifiers={['intro']} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		customers: state.customers,
		suppliers: state.suppliers,
		invoices: state.invoices,
	};
};

const mapDispatchToProps = (dispatch) => ({
	actions: {
		customerActions: bindActionCreators(customerCreators, dispatch),
		supplierActions: bindActionCreators(supplierCreators, dispatch),
		invoicesActions: bindActionCreators(invoicesCreators, dispatch),
	},
	loadData: () => loadData(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
