import React from 'react';
import { connect } from 'react-redux';
import Invoices from 'screens/Invoices';

class InvoicesContainer extends React.Component {
	render() {
		return (
			<Invoices {...this.props} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		invoices: state.invoices,
	};
};

export default connect(
  mapStateToProps,
  null
)(InvoicesContainer);
