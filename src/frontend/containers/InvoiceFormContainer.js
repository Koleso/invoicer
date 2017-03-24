import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { getFormValues, change } from 'redux-form';

import InvoiceForm from 'forms/Invoice/form';
import { addInvoice } from 'actions/invoices';

const mapStateToProps = (state, props) => {
	return {
		invoice: getFormValues('invoice')(state),
		customers: state.customers,
		suppliers: state.suppliers,
		id: new Date().valueOf(),
		view: props.action,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addInvoice: () => 
		dispatch(addInvoice()),
	changeFieldValue: (field, value) => 
		dispatch(change('invoice', field, value)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvoiceForm);
