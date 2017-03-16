import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';

import SupplierForm from 'forms/Supplier/form';
import SupplierDelete from 'forms/Supplier/delete';
import { addSupplier, updateSupplier, deleteSupplier } from 'actions/suppliers';

class Supplier extends React.Component {
	static propTypes = {
		action: T.string.isRequired,
	};

	// TODO: Iakov approves?
	render() {
		if (this.props.action === 'delete') {
			return (
				<SupplierDelete {...this.props} />
			);
		}

		return (
			<SupplierForm {...this.props} />
		);
	}
}

const mapStateToProps = (state, props) => {
	const item = state.suppliers.find((d) => {
		return d.id === parseInt(props.supplierId, 10);
	});

	return {
		initialValues: item,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addSupplier: () => dispatch(addSupplier()),
	updateSupplier: () => dispatch(updateSupplier()),
	deleteSupplier: () => dispatch(deleteSupplier()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Supplier);
