import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';

import CustomerForm from 'forms/Customer/form';
import CustomerDelete from 'forms/Customer/delete';
import { addCustomer, updateCustomer, deleteCustomer } from 'actions/customers';

const Customer = (props) => {
	if (props.action === 'delete') {
		return (
			<CustomerDelete {...props} />
		);
	}

	return (
		<CustomerForm {...props} />
	);
};

const mapStateToProps = (state, props) => {
	const item = state.customers.find((d) => {
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

Customer.propTypes = {
	action: T.string.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Customer);
