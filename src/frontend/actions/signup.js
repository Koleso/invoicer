import app from 'config/firebase';
import { browserHistory } from 'react-router';
import { SubmissionError } from 'redux-form';

export function register(form) {
	return ({
		type: 'REGISTER',
		payload: new Promise((resolve, reject) => {
			app.auth().createUserWithEmailAndPassword(form.email, form.password)
			.then(() => {
				resolve(form.email, form.password);
			})
			.catch(error => {
				reject({ password: 'Wrong password', _error: 'Login failed!' });
			});
		}),
	});
}


export function login(form) {
	return ({
		type: 'LOGIN',
		payload: new Promise((resolve, reject) => {
			app.auth().signInWithEmailAndPassword(form.email, form.password)
			.then(() => {
				resolve(form.email, form.password);
			})
			.catch(error => {
				reject({ password: 'Wrong password', _error: 'Login failed!' });
			});
		}),
	});
}

export function logout() {
	return ({
		type: 'LOGOUT',
		payload: new Promise((resolve, reject) => {
			app.auth().signOut()
			.then(() => {
				resolve('signout');
				browserHistory.replace('/prihlaseni');
			})
			.catch(error => {
				reject({ password: 'Wrong password', _error: 'Login failed!' });
			});
		}),
	});
}
