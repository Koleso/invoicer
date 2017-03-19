import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Components
import Invoice from 'components/Invoice';
import Button from 'components/Button';
import InputField from 'components/Input';
import Dropdown from 'components/Dropdown';

import validate from './validate';

const InvoiceForm = (props) => {
	const { addInvoice, submitting, handleSubmit, action, initialValues, suppliers, customers } = props;
	let supplierId;

	function submit() {
		if (action === 'add') {
			return handleSubmit(addInvoice);
		}
	}

	function changed() {
		console.log('SelectingFormValuesForm');
	}

	function supplierChanged(newId) {
		supplierId = newId;
	}

	return (
		<form onSubmit={submit()} onChange={changed()}>
			<Field name="id" type="hidden" component={InputField} />
			<Field name="supplierId" type="hidden" component={InputField} />
			<Field name="customerId" type="hidden" component={InputField} />

			<Invoice id={initialValues.id} suppliers={suppliers} customers={customers} supplierId={supplierId}>
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
