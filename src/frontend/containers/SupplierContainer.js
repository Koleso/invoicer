import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';

import SupplierForm from 'forms/Supplier/form';
import SupplierDelete from 'forms/Supplier/delete';
import { addSupplier, updateSupplier, deleteSupplier } from 'actions/suppliers';

const Supplier = (props) => {
	if (props.action === 'delete') {
		return (
			<SupplierDelete {...props} />
		);
	}

	return (
		<SupplierForm {...props} />
	);
};

const mapStateToProps = (state, props) => {
	const item = state.suppliers.find((d) => {
		return d.id === parseInt(props.supplierId, 10);
	});

	return {
		initialValues: item,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addSupplier: (form) => dispatch(addSupplier(form)),
	updateSupplier: (form) => dispatch(updateSupplier(form)),
	deleteSupplier: (form) => dispatch(deleteSupplier(form)),
});

Supplier.propTypes = {
	action: T.string.isRequired,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Supplier);
