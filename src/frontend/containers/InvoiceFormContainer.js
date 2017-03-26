import React from 'react';
import { connect } from 'react-redux';
import { getFormValues, change } from 'redux-form';
import dateFormat from 'dateformat';
import { getNextInvoiceId } from 'helpers/invoices';

import InvoiceForm from 'forms/Invoice/form';
import { addInvoice } from 'actions/invoices';

const mapStateToProps = (state, props) => {
	return {
		invoice: getFormValues('invoice')(state),
		customers: state.customers,
		suppliers: state.suppliers,
		view: props.action,
		initialValues: {
			id: getNextInvoiceId(state.invoices),
			date: dateFormat(new Date(), 'yyyy-mm-dd'),
			price_total: 0,
			vat_total: '0',
			price_total_sum: 0,
			items: [{ text: '', quantity: 1, price: '', vat: '' }],
		},
	};
};

const mapDispatchToProps = (dispatch) => ({
	addInvoice: () => dispatch(addInvoice()),
	changeFieldValue: (field, value) => dispatch(change('invoice', field, value)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvoiceForm);
