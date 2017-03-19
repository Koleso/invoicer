import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';

import InvoicesForm from 'forms/Invoices/form';
import { addInvoice } from 'actions/invoices';

class InvoicesFormContainer extends React.Component {
	static propTypes = {
		action: T.string,
	};

	render() {
		return (
			<InvoicesForm {...this.props} />
		);
	}
}


const mapStateToProps = (state) => {
	return {
		customers: state.customers,
		suppliers: state.suppliers,
		initialValues: { id: new Date().valueOf() },
	};
};

const mapDispatchToProps = (dispatch) => ({
	addInvoice: () => dispatch(addInvoice()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvoicesFormContainer);
