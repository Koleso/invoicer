import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Components
import Form from 'components/Form';
import Button from 'components/Button';
import InputField from 'components/Input';
import Checkbox from 'components/Checkbox';

import validate from './validate';

const SupplierForm = ({
	addSupplier,
	updateSupplier,
	submitting,
	handleSubmit,
	action,
	initialValues,
}) => {
	function submit() {
		if (action === 'add') {
			return handleSubmit(addSupplier);
		}
		return handleSubmit(updateSupplier);
	}

	if (action === 'edit' && initialValues === undefined) {
		// Subjekt nenalezen
		browserHistory.push('/subjekty/nenalezeno');
	} else {
		return (
			<Form onSubmit={submit()}>
				<div className="Form-col">
					<input name="id" id="id" type="hidden" />

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="name"
								id="name"
								type="text"
								label="Jméno / Název"
								required={Boolean(true)}
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell Form-cell--50">
							<Field
								name="ic"
								id="ic"
								type="text"
								label="IČ"
								component={InputField}
							/>
						</div>
						<div className="Form-cell Form-cell--50">
							<Field
								name="dic"
								id="dic"
								type="text"
								label="DIČ"
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="payer"
								id="payer"
								type="text"
								label="Plátce DPH"
								component={Checkbox}
							/>
						</div>
					</div>

					<div className="Form-line"></div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="street"
								id="street"
								type="text"
								label="Ulice"
								required={Boolean(true)}
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell Form-cell--70">
							<Field
								name="city"
								id="city"
								type="text"
								label="Město"
								required={Boolean(true)}
								component={InputField}
							/>
						</div>
						<div className="Form-cell Form-cell--30">
							<Field
								name="zip"
								id="zip"
								type="text"
								label="PSČ"
								required={Boolean(true)}
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="contact_person"
								id="contact_person"
								type="text"
								label="Kontaktní osoba"
								required={Boolean(true)}
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="title"
								id="title"
								type="text"
								label="Funkce"
								component={InputField}
							/>
						</div>
					</div>
				</div>

				<div className="Form-col">
					<div className="Form-line">
						<div className="Form-cell Form-cell--33">
							<Field
								name="vat"
								id="vat"
								type="number"
								label="Sazba"
								component={InputField}
							/>
						</div>

						<div className="Form-cell Form-cell--33">
							<Field
								name="currency"
								id="currency"
								type="text"
								label="Měna"
								component={InputField}
							/>
						</div>

						<div className="Form-cell Form-cell--33">
							<Field
								name="due"
								id="due"
								type="number"
								label="Splatnost"
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="bank"
								id="bank"
								type="text"
								label="Bankovní spojení"
								required={Boolean(true)}
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="account"
								id="account"
								type="text"
								label="Číslo účtu"
								required={Boolean(true)}
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="iban"
								id="iban"
								type="text"
								label="IBAN"
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="swift"
								id="swift"
								type="text"
								label="SWIFT"
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="email"
								id="email"
								type="email"
								label="E-mail"
								required={Boolean(true)}
								component={InputField}
							/>
						</div>
					</div>

					<div className="Form-line">
						<div className="Form-cell">
							<Field
								name="phone"
								id="phone"
								type="phone"
								label="Telefon"
								component={InputField}
							/>
						</div>
					</div>
				</div>

				<div className="Form-footer">
					<Button
						type="submit"
						disabled={submitting}
						modifiers={['primary', 'big', 'formRight', 'tabletLeft']}
					>
						{action === 'add' && 'Vytvořit dodavatele'}
						{action === 'edit' && 'Uložit změny'}
					</Button>

					{action === 'edit' &&
						<Button to={'/subjekty'} modifiers={['big', 'formRight', 'tabletLeft']}>Zpět na přehled</Button>
					}
				</div>
			</Form>
		);
	}

	return null;
};

export default reduxForm({
	form: 'supplier',
	validate,
	onSubmitSuccess: () => {
		// TODO: Notifications
		browserHistory.push('/subjekty');
	},
})(SupplierForm);
