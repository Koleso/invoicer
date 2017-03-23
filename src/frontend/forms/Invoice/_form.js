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
	invoice,
	customers,
	suppliers,
	id,
	view,
	...otherProps,
}) => {

	function submit() {
		console.log('submit');
		//return handleSubmit(addInvoice);
	}

	return (
		<form onSubmit={submit()}>
			<Field name="id" type="hidden" value={id} component={InputField} />
			<Field name="supplierId" type="hidden" component={InputField} />
			<Field name="customerId" type="hidden" component={InputField} />

			<Invoice id={id} invoice={invoice} suppliers={suppliers} customers={customers} view={view}>
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
					modifiers={['primary', 'big', 'formRight', 'tabletLeft']}
				>
					Vystavit fakturu
				</Button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'invoice',
	validate,
	initialValues: {
		id: 1,
	},
})(InvoiceForm);
