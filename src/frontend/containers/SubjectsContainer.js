import React from 'react';
import { connect } from 'react-redux';
import Subjects from 'screens/Subjects';

class SubjectsContainer extends React.Component {
	render() {
		return (
			<Subjects {...this.props} />
		);
	}
}

const mapStateToProps = (state) => {
	return {
		customers: state.customers,
		suppliers: state.suppliers,
	};
};

export default connect(
  mapStateToProps,
  null
)(SubjectsContainer);
