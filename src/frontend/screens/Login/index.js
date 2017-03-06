import React from 'react';

// Screens
import LoginLayout from 'screens/LoginLayout';

// Components
import Button from 'components/Button';
import Input from 'components/Input';

const Login = () => (
	<LoginLayout page="login">
		<div>
			<h1>Vítejte!</h1>
			<p>Taky je už slyšíte cinkat?</p>
			<Input label="E-mail" type="mail" modifiers={['paddingBottom']} />
			<Button to={'xxx'} modifiers={['primary', 'big']}>
				Přihlásit se
			</Button>
		</div>
	</LoginLayout>
);

export default Login;
