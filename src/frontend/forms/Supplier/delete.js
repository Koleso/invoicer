import React from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Notifications
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;

// Components
import Form from 'components/Form';
import Button from 'components/Button';

const SupplierDelete = ({
	deleteSupplier,
	submitting,
	handleSubmit,
	initialValues,
}) => {
	if (initialValues === undefined) {
		// Subjekt nenalezen
		browserHistory.push('/subjekty/nenalezeno');
	} else {
		return (
			<Form onSubmit={handleSubmit(deleteSupplier)}>
				<div className="Form-content">
					<input name="id" id="id" type="hidden" />

					<p>Opravdu si přejete smazat dodavatele <strong>{initialValues.name}</strong>?</p>

					<Button
						type="submit"
						disabled={submitting}
						modifiers={['negative', 'formLeft', 'big']}
					>
						Smazat dodavatele
					</Button>
					<Button to={'/subjekty'} modifiers={['big', 'formLeft']}>Zpět na přehled</Button>
				</div>
			</Form>
		);
	}

	return null;
};

export default reduxForm({
	form: 'supplier',
	onSubmitSuccess: (result, dispatch) => {
		browserHistory.push('/subjekty');
		dispatch(notifSend({
			message: 'Dodavatel byl úspěšně smazán',
			kind: 'success',
			dismissAfter: 3000,
		}));
	},
	onSubmitFail: (result, dispatch) => {
		dispatch(notifSend({
			message: 'Dodavatele se nepodařilo smazat',
			kind: 'error',
			dismissAfter: 3000,
		}));
	},
})(SupplierDelete);
