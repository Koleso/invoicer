import React from 'react';
import { connect } from 'react-redux';
import Subjects from 'screens/Subjects';

const mapStateToProps = (state) => {
	return {
		customers: state.customers,
		suppliers: state.suppliers,
	};
};

export default connect(
  mapStateToProps,
  null
)(Subjects);
