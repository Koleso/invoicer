import React from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Components
import Form from 'components/Form';
import Button from 'components/Button';

const CustomerDelete = ({
	deleteCustomer,
	submitting,
	handleSubmit,
	initialValues,
}) => {
	if (initialValues === undefined) {
		// TODO: 404 page
		browserHistory.push('/subjekty/');
	}

	return (
		<Form onSubmit={handleSubmit(deleteCustomer)}>
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
		</Form>
	);
};

export default reduxForm({
	form: 'customer',
})(CustomerDelete);
