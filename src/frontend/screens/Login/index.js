import React from 'react';

import LoginLayout from 'screens/LoginLayout';
import SignupContainer from 'containers/SignupContainer';

const Login = () => (
	<LoginLayout page="login">
		<div>
			<h1 className="introTitle">Vítejte!</h1>
			<p>Taky je už slyšíte cinkat?</p>
			<SignupContainer action="login" />
		</div>
	</LoginLayout>
);

export default Login;
