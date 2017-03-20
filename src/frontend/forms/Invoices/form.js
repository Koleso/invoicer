import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Components
import Invoice from 'components/Invoice';
import Button from 'components/Button';
import InputField from 'components/Input';
import Dropdown from 'components/Dropdown';

import validate from './validate';

const InvoiceForm = ({ 
	addInvoice,
	submitting,
	handleSubmit,
	action,
	initialValues,
	suppliers,
	customers,
	invoice,
	...otherProps,
}) => {
	// Iakov is gonna be so mad ahen he sees this
	let supplierId, customerId, id = undefined;
	if (!invoice) {
		id = new Date().valueOf();
	}
	if (invoice && invoice.values) {
		supplierId = parseInt(invoice.values.supplierId, 10);
		customerId = parseInt(invoice.values.customerId, 10);
	}

	function submit() {
		if (action === 'add') {
			return handleSubmit(addInvoice);
		}
	}

	return (
		<form onSubmit={submit()}>
			<Field name="id" type="hidden" component={InputField} />
			<Field name="supplierId" type="hidden" component={InputField} />
			<Field name="customerId" type="hidden" component={InputField} />

			<Invoice id={id} suppliers={suppliers} customers={customers} supplierId={supplierId} customerId={customerId}>
				<Field
					name="name"
					id="name"
					type="text"
					label="Jméno / Název"
					required={Boolean(true)}
					component={InputField}
				/>
			</Invoice>

			<div className="Invoice-footer">
				<Button
					type="submit"
					disabled={submitting}
					modifiers={['primary', 'big', 'formRight', 'tabletLeft']}
				>
					{action === 'add' && 'Vystavit fakturu'}
				</Button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'invoice',
	validate,
})(InvoiceForm);
