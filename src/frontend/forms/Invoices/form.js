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
	const id = new Date().valueOf();

	function submit() {
		if (action === 'add') {
			return handleSubmit(addInvoice);
		}
	}

	return (
		<form onSubmit={submit()}>
			<Invoice id={id} suppliers={suppliers} customers={customers}>
				<input name="id" id="id" type="hidden" value={id} />
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
