import React from 'react';
import { connect } from 'react-redux';
import { overdue } from 'helpers/overdue';

import Dashboard from 'screens/Dashboard';

const mapStateToProps = (state) => {
	const invoicesPaid = state.invoices.filter((value) => { return value.paid === true; });
	const invoicesUnpaid = state.invoices.filter((value) => { return value.paid === false; });
	const invoicesOverdue = invoicesUnpaid.filter((value) => { return overdue(value.date, value.due) > 0; });

	let paidTotal = 0;
	invoicesPaid.map(invoice => (paidTotal += invoice.price));
	let unpaidTotal = 0;
	invoicesUnpaid.map(invoice => (unpaidTotal += invoice.price));

	return {
		subjects: state.customers,
		invoicesOverdue,
		paidTotal,
		unpaidTotal,
	};
};

export default connect(
  mapStateToProps,
  null,
)(Dashboard);
