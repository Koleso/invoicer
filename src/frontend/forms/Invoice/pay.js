import React from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Notifications
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;

// Components
import Form from 'components/Form';
import Button from 'components/Button';

const InvoicePay = ({
	payInvoice,
	submitting,
	handleSubmit,
	initialValues,
}) => {
	if (initialValues === undefined) {
		// Faktura nenalezena
		browserHistory.push('/faktury/nenalezeno');
	} else {
		return (
			<Form onSubmit={handleSubmit(payInvoice)}>
				<div className="Form-content">
					<input name="id" id="id" type="hidden" />

					<p>Opravdu je faktura č. <strong>{initialValues.id}</strong> uhrazena?</p>

					<Button
						type="submit"
						disabled={submitting}
						modifiers={['primary', 'formLeft', 'big']}
					>
						Ano, je uhrazena
					</Button>
					<Button to={'/faktury'} modifiers={['big', 'formLeft']}>Není uhrazena</Button>
				</div>
			</Form>
		);
	}

	return null;
};

export default reduxForm({
	form: 'invoice',
	onSubmitSuccess: (result, dispatch) => {
		browserHistory.push('/faktury');
		dispatch(notifSend({
			message: 'Stav faktury byl úspěšně změněn na uhrazeno',
			kind: 'success',
			dismissAfter: 3000,
		}));
	},
	onSubmitFail: (result, dispatch) => {
		dispatch(notifSend({
			message: 'Stav faktury se nepodařilo změnit',
			kind: 'error',
			dismissAfter: 3000,
		}));
	},
})(InvoicePay);
