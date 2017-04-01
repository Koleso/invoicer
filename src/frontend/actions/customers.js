import app from 'config/firebase';

export function addCustomer(form) {
	const customer = {
		id: new Date().valueOf(),
		name: form.name,
		ic: form.ic,
		dic: form.dic || '',
		city: form.city,
		street: form.street,
		zip: form.zip,
		contact_person: form.contact_person,
		title: form.title || '',
		email: form.email,
		phone: form.phone || '',
	};

	return ({
		type: 'ADD_CUSTOMER',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/customers/${form.id}`).set(customer)
			.then(() => {
				resolve(customer);
			});
		}),
	});
}

export function updateCustomer(form) {
	const customer = {
		id: form.id,
		name: form.name,
		ic: form.ic,
		dic: form.dic,
		city: form.city,
		street: form.street,
		zip: form.zip,
		contact_person: form.contact_person,
		title: form.title,
		email: form.email,
		phone: form.phone,
	};

	return ({
		type: 'UPDATE_CUSTOMER',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/customers/${form.id}`).update(customer)
			.then(() => {
				resolve(customer);
			});
		}),
	});
}

export function deleteCustomer(form) {
	return ({
		type: 'DELETE_CUSTOMER',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/customers/${form.id}`).remove()
			.then(() => {
				resolve(form.id);
			});
		}),
	});
}
