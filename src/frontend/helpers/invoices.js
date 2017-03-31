const invoiceById = (invoices, id) => {
	return invoices[invoices.findIndex((obj => obj.id === id))];
};

const getNextInvoiceId = (invoices) => {
	if (!invoices.length) {
		return parseInt(new Date().getFullYear() + '0001', 10); // eslint-disable-line
	}

	return (invoices[invoices.length - 1].id + 1);
};

export { invoiceById, getNextInvoiceId };
