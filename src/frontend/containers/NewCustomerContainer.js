import React from 'react';
import { connect } from 'react-redux';

import NewCustomerForm from 'forms/NewCustomerForm';
import { addCustomer } from 'actions/index';

class NewCustomer extends React.Component {
	render() {
		return (
			<NewCustomerForm {...this.props} />
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	addCustomer: () => dispatch(addCustomer()),
});

export default connect(null, mapDispatchToProps)(NewCustomer);
