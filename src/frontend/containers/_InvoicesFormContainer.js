import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';

import InvoicesForm from 'forms/Invoices/form';
import { addInvoice } from 'actions/invoices';

const mapStateToProps = (state) => {
	return {
		invoice: state.form.invoice,
		customers: state.customers,
		suppliers: state.suppliers,
		//initialValues: state.form.invoice.initialValues,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addInvoice: () => dispatch(addInvoice()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InvoicesForm);
