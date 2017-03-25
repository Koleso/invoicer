import React from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Components
import Form from 'components/Form';
import Button from 'components/Button';

const InvoiceDelete = ({
	deleteInvoice,
	submitting,
	handleSubmit,
	initialValues,
}) => {
	if (initialValues === undefined) {
		// Faktura nenalezena
		browserHistory.push('/faktury/nenalezeno');
	} else {
		return (
			<Form onSubmit={handleSubmit(deleteInvoice)}>
				<div className="Form-content">
					<input name="id" id="id" type="hidden" />

					<p>Opravdu si přejete smazat fakturu č. <strong>{initialValues.id}</strong>?</p>

					<Button
						type="submit"
						disabled={submitting}
						modifiers={['negative', 'formLeft', 'big']}
					>
						Smazat fakturu
					</Button>
					<Button to={'/faktury'} modifiers={['big', 'formLeft']}>Zpět na přehled</Button>
				</div>
			</Form>
		);
	}

	return null;
};

export default reduxForm({
	form: 'invoice',
	onSubmitSuccess: () => {
		// TODO: Notifications
		browserHistory.push('/faktury');
	},
})(InvoiceDelete);
