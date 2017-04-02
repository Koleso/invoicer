import app from 'config/firebase';
import { browserHistory } from 'react-router';

export function register(form) {
	return ({
		type: 'REGISTER',
		payload: new Promise(resolve => {
			app.auth().createUserWithEmailAndPassword(form.email, form.password)
			.then(() => {
				resolve(form.email, form.password);
			})
			.catch(error => {
				alert(error.message); // eslint-disable-line
			});
		}),
	});
}


export function login(form) {
	return ({
		type: 'LOGIN',
		payload: new Promise(resolve => {
			app.auth().signInWithEmailAndPassword(form.email, form.password)
			.then(() => {
				resolve(form.email, form.password);
			})
			.catch(error => {
				alert(error.message); // eslint-disable-line
			});
		}),
	});
}

export function logout() {
	return ({
		type: 'LOGOUT',
		payload: new Promise(resolve => {
			app.auth().signOut()
			.then(() => {
				resolve('signout');
				browserHistory.replace('/prihlaseni');
			})
			.catch(error => {
				alert(error.message); // eslint-disable-line
			});
		}),
	});
}
