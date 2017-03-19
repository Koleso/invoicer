import React from 'react';
import { connect } from 'react-redux';

import Invoices from 'screens/Invoices';

const mapStateToProps = (state) => {
	return {
		invoices: state.invoices,
	};
};

export default connect(
  mapStateToProps,
  null,
)(Invoices);
