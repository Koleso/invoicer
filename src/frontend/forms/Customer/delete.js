import React from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Components
import Button from 'components/Button';

const CustomerDelete = (props) => {
	const { deleteCustomer, submitting, handleSubmit, initialValues } = props;

	if (initialValues === undefined) {
		// TODO: 404 page
		browserHistory.push('/subjekty/');
	}

	return (
		<form onSubmit={handleSubmit(deleteCustomer)} className="Form">
			<div className="Form-content">
				<input name="id" id="id" type="hidden" />

				<p>Opravdu si přejete smazat odběratele <strong>{initialValues.name}</strong>?</p>

				<Button
					type="submit"
					disabled={submitting}
					modifiers={['negative', 'formLeft', 'big']}
				>
					Smazat odběratele
				</Button>
				<Button to={'/subjekty'} modifiers={['big', 'formLeft']}>Zpět na přehled</Button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: 'customer',
})(CustomerDelete);
