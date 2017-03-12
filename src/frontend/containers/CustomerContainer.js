import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';

import CustomerForm from 'forms/CustomerForm';
import CustomerDelete from 'forms/CustomerDelete';
import { addCustomer, updateCustomer, deleteCustomer } from 'actions/index';

class Customer extends React.Component {
	static propTypes = {
		action: T.string.isRequired,
	};

	// TODO: Iakov approves?
	render() {
		if (this.props.action === 'delete') {
			return (
				<CustomerDelete {...this.props} />
			);
		}

		return (
			<CustomerForm {...this.props} />
		);
	}
}

const mapStateToProps = (state, props) => {
	const item = state.customers.find(function (d) {
		return d.id === parseInt(props.customerId, 10);
	});

	return {
		initialValues: item,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addCustomer: () => dispatch(addCustomer()),
	updateCustomer: () => dispatch(updateCustomer()),
	deleteCustomer: () => dispatch(deleteCustomer()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Customer);
