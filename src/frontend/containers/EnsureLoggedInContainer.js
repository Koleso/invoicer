import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { loadData } from 'actions/loadData';

import AppLayout from 'screens/AppLayout';
import Spinner from 'components/Spinner';

class EnsureLoggedInContainer extends React.Component {
	componentDidMount() {
		if (!this.props.isLoggedIn) {
			browserHistory.replace('/prihlaseni');
		} else {
			this.props.loadData();
		}
	}

	render() {
		if (this.props.isLoggedIn) {
			if (this.props.customers[0] !== undefined) {
				return (
					<AppLayout {...this.props} />
				);
			}

			return (
				<Spinner modifiers={['intro']} />
			);
		}

		return null;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		customers: state.customers,
		suppliers: state.suppliers,
		invoices: state.invoices,
		isLoggedIn: state.user.loggedIn,
		currentURL: ownProps.location.pathname,
	};
};

const mapDispatchToProps = (dispatch) => ({
	loadData: () => loadData(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnsureLoggedInContainer);
