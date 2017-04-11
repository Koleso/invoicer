import React from 'react';

import LoginLayout from 'screens/LoginLayout';
import SignupContainer from 'containers/SignupContainer';

const Signup = () => (
	<LoginLayout page="signup">
		<div>
			<h1 className="introTitle">Registrace</h1>
			<p>Taky je už slyšíte cinkat?</p>
			<SignupContainer action="register" />
		</div>
	</LoginLayout>
);

export default Signup;
