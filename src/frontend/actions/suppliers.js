import app from 'config/firebase';

export function addSupplier(form) {
	const supplier = {
		id: new Date().valueOf(),
		name: form.name,
		ic: form.ic || null,
		dic: form.dic || '',
		payer: form.payer,
		city: form.city,
		street: form.street,
		zip: form.zip,
		contact_person: form.contact_person,
		title: form.title || '',
		vat: form.vat || null,
		currency: form.currency || '',
		due: form.due || null,
		bank: form.bank,
		account: form.account,
		iban: form.iban || null,
		swift: form.swift || '',
		email: form.email,
		phone: form.phone || '',
	};

	return ({
		type: 'ADD_SUPPLIER',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/suppliers/${form.id}`).set(supplier)
			.then(() => {
				resolve(supplier);
			});
		}),
	});
}

export function updateSupplier(form) {
	const supplier = {
		id: form.id,
		name: form.name,
		ic: form.ic,
		dic: form.dic,
		payer: form.payer,
		city: form.city,
		street: form.street,
		zip: form.zip,
		contact_person: form.contact_person,
		title: form.title,
		vat: form.vat,
		currency: form.currency,
		due: form.due,
		bank: form.bank,
		account: form.account,
		iban: form.iban,
		swift: form.swift,
		email: form.email,
		phone: form.phone,
	};

	return ({
		type: 'UPDATE_SUPPLIER',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/suppliers/${form.id}`).update(supplier)
			.then(() => {
				resolve(supplier);
			});
		}),
	});
}

export function deleteSupplier(form) {
	return ({
		type: 'DELETE_SUPPLIER',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/suppliers/${form.id}`).remove()
			.then(() => {
				resolve(form.id);
			});
		}),
	});
}
