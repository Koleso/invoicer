import app from 'config/firebase';

export function addInvoice(form) {
	const invoice = {
		id: form.id,
		customer: parseInt(form.customerId, 10),
		supplier: parseInt(form.supplierId, 10),
		description: form.description,
		currency: form.currency,
		date: form.date,
		due: form.due,
		price_total: parseFloat(form.price_total.replace(/\s/g, '')),
		vat_total: parseFloat(form.vat_total.replace(/\s/g, '')),
		paid: false,
		items: form.items,
	};

	return ({
		type: 'ADD_INVOICE',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/invoices/${form.id}`).set(invoice)
			.then(() => {
				resolve(invoice);
			});
		}),
	});
}

export function payInvoice(form) {
	const invoice = {
		id: form.id,
		paid: true,
	};

	return ({
		type: 'PAY_INVOICE',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/invoices/${form.id}`).update(invoice)
			.then(() => {
				resolve(invoice);
			});
		}),
	});
}

export function deleteInvoice(form) {
	return ({
		type: 'DELETE_INVOICE',
		payload: new Promise(resolve => {
			app.database().ref(`${app.auth().currentUser.uid}/invoices/${form.id}`).remove()
			.then(() => {
				resolve(form.id);
			});
		}),
	});
}
