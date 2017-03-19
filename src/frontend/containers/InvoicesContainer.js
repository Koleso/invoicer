import React from 'react';
import { connect } from 'react-redux';

import Invoices from 'screens/Invoices';

const mapStateToProps = (state) => {
	const invoicesPaid = state.invoices.filter((value) => { return value.paid === true; });
	const invoicesUnpaid = state.invoices.filter((value) => { return value.paid === false; });

	return {
		subjects: state.customers,
		invoicesPaid,
		invoicesUnpaid,
	};
};

export default connect(
  mapStateToProps,
  null,
)(Invoices);
