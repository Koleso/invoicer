import React from 'react';
import { connect } from 'react-redux';

import Invoice from 'components/Invoice';
import InvoicePay from 'forms/Invoice/pay';
import InvoiceDelete from 'forms/Invoice/delete';

import { payInvoice, deleteInvoice } from 'actions/invoices';

const InvoiceContainer = (props) => {
	if (props.action === 'delete') {
		return (
			<InvoiceDelete {...props} />
		);
	} else if (props.action === 'pay') {
		return (
			<InvoicePay {...props} />
		);
	}

	return (
		<Invoice {...props} />
	);
};

const mapStateToProps = (state, props) => {
	const invoice = state.invoices.find((d) => {
		return d.id === parseInt(props.invoiceId, 10);
	});

	return {
		invoice,
		customers: state.customers,
		suppliers: state.suppliers,
		id: props.id,
		view: props.action,
		initialValues: invoice,
	};
};

const mapDispatchToProps = (dispatch) => ({
	payInvoice: () => dispatch(payInvoice()),
	deleteInvoice: () => dispatch(deleteInvoice()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvoiceContainer);
