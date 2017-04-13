import React from 'react';
import { connect } from 'react-redux';

import Dashboard from 'components/Dashboard';

const mapStateToProps = (state) => {
	const invoicesPaid = state.invoices.filter((value) => { return value.paid === true; });
	const invoicesUnpaid = state.invoices.filter((value) => { return value.paid === false; });

	let paidTotal = null;
	invoicesPaid.map(invoice => (paidTotal += invoice.price_total));

	let unpaidTotal = null;
	invoicesUnpaid.map(invoice => (unpaidTotal += invoice.price_total));

	return {
		subjects: state.customers,
		invoicesUnpaid,
		invoicesPaid,
		paidTotal,
		unpaidTotal,
	};
};

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
