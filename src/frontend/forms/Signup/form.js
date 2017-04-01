import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

// Notifications
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;

// Components
import Button from 'components/Button';
import InputField from 'components/Input';

import validate from './validate';

const SignupForm = ({
	register,
	login,
	submitting,
	handleSubmit,
	action,
}) => {
	const submit = () => {
		if (action === 'register') {
			return handleSubmit(register);
		}
		return handleSubmit(login);
	};

	return (
		<form onSubmit={submit()}>
			<Field
				name="email"
				id="email"
				type="email"
				label="E-mail"
				required={Boolean(true)}
				component={InputField}
				modifiers={['paddingBottom']}
			/>

			<Field
				name="password"
				id="password"
				type="password"
				label="Heslo"
				required={Boolean(true)}
				component={InputField}
				modifiers={['paddingBottom']}
			/>

			<Button
				type="submit"
				disabled={submitting}
				modifiers={['primary', 'big']}
			>
				{action === 'register' && 'Vytvořit účet'}
				{action === 'login' && 'Přihlásit se'}
			</Button>
		</form>
		);
};

export default reduxForm({
	form: 'register',
	validate,
	onSubmitSuccess: (result, dispatch, props) => {
		if (props.action === 'register') {
			browserHistory.push('/prihlaseni');
			dispatch(notifSend({
				message: `Uživatel ${props.values.email} byl úspěšně vytvořen`,
				kind: 'success',
				dismissAfter: 3000,
			}));
		} else if (props.action === 'login') {
			browserHistory.push('/');
		}
	},
	onSubmitFail: (result, dispatch) => {
		dispatch(notifSend({
			message: 'Uživatele se nepodařilo vytvořit',
			kind: 'error',
			dismissAfter: 3000,
		}));
	},
})(SignupForm);
