import React from 'react';
import { Field, reduxForm } from 'redux-form';

// Components
import Button from 'components/Button';
import InputField from 'components/Input';

import validate from 'forms/NewCustomerFormValidate';

const NewCustomerForm = (props) => {
	const { addCustomer, pristine, submitting, handleSubmit} = props;

	return (
		<form onSubmit={handleSubmit(addCustomer)} className="Form">
			<div className="Form-col">
				<div className="Form-line">
					<div className="Form-cell">
						<Field 
							name="name" 
							id="name" 
							type="text" 
							label="Jméno / Název" 
							required={true}
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
							name="street" 
							id="street" 
							type="text" 
							label="Ulice" 
							required={true}
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
							required={true}
							component={InputField}
						/>
					</div>
					<div className="Form-cell Form-cell--30">
						<Field 
							name="zip" 
							id="zip" 
							type="text" 
							label="PSČ" 
							required={true}
							component={InputField}
						/>
					</div>
				</div>
			</div>

			<div className="Form-col">
				<div className="Form-line">
					<div className="Form-cell">
						<Field 
							name="contact_person" 
							id="contact_person" 
							type="text" 
							label="Kontaktní osoba" 
							required={true}
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

				<div className="Form-line">
					<div className="Form-cell">
						<Field 
							name="email" 
							id="email" 
							type="email" 
							label="E-mail" 
							required={true}
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
				<Button type="submit" disabled={pristine || submitting} modifiers={['primary', 'big', 'formRight', 'tabletLeft', 'mobileFull']}>
					Vytvořit odběratele
				</Button>
			</div>
		</form>
	)
};

export default reduxForm({
	form: 'addCustomer',
	fields: ['name', 'ic', 'dic'],
	validate,
})(NewCustomerForm);
