export function test(data) {
	return {
		type: 'TEST',
		data: data
	}
}

export function newSupplier(supplier) {
	return {
		type: 'NEW_SUPPLIER',
		supplier
	}
}

export function newCustomer(customer) {
	return {
		type: 'NEW_CUSTOMER',
		customer
	}
}