export function addSupplier() {
	return (dispatch, getState) => {
		const form = getState().form.supplier.values;
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

		dispatch({
			type: 'ADD_SUPPLIER',
			payload: supplier,
		});
	};
}

export function updateSupplier() {
	return (dispatch, getState) => {
		const form = getState().form.supplier.values;

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

		dispatch({
			type: 'UPDATE_SUPPLIER',
			payload: supplier,
		});
	};
}

export function deleteSupplier() {
	return (dispatch, getState) => {
		const supplierId = getState().form.supplier.values.id;

		dispatch({
			type: 'DELETE_SUPPLIER',
			payload: supplierId,
		});
	};
}
