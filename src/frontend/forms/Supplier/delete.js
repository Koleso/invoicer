import React from 'react';
import { reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Components
import Button from 'components/Button';

const SupplierDelete = (props) => {
	const { deleteSupplier, submitting, handleSubmit, initialValues } = props;

	if (initialValues === undefined) {
		// TODO: 404 page
		browserHistory.push('/subjekty/');
	}

	return (
		<form onSubmit={handleSubmit(deleteSupplier)} className="Form">
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
		</form>
	);
};

export default reduxForm({
	form: 'supplier',
})(SupplierDelete);
