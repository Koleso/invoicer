import React from 'react';
import { connect } from 'react-redux';

import SignupForm from 'forms/Signup/form';
import { register, login } from 'actions/signup';

const mapDispatchToProps = (dispatch) => ({
	register: (form) => dispatch(register(form)),
	login: (form) => dispatch(login(form)),
});

export default connect(
	null,
	mapDispatchToProps
)(SignupForm);
