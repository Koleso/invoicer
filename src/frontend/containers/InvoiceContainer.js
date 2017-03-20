import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';

import Invoice from 'components/Invoice';

const mapStateToProps = (state, props) => {
	let invoice = state.form.invoice;
	if (props.action === "detail") {
		invoice = state.invoices.find((d) => {
			return d.id === parseInt(props.id, 10);
		});
	}

	return {
		invoice: invoice,
		customers: state.customers,
		suppliers: state.suppliers,
		id: props.id,
		view: props.action,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addInvoice: () => dispatch(addInvoice()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Invoice);
