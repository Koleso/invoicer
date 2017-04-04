const monthNames = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen',
  'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec',
];

const monthIndex = (index) => {
	if (index < 0) {
		return index + 12;
	}

	return index;
};

const invoiceById = (invoices, id) => {
	return invoices[invoices.findIndex((obj => obj.id === id))];
};

const getNextInvoiceId = (invoices) => {
	if (!invoices.length) {
		return parseInt(new Date().getFullYear() + '0001', 10); // eslint-disable-line
	}

	return (invoices[0].id + 1);
};

const last6Months = (invoices) => {
	const today = new Date();
	const months = [0, 0, 0, 0, 0, 0];
	const breakPoints = [
		new Date(today.getFullYear(), today.getMonth(), 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 1, 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 2, 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 3, 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 4, 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 5, 0).getTime(),
	];

	for (let i = invoices.length - 1; i >= 0; i--) {
		for (let k = 0; k < breakPoints.length; k++) {
			if (breakPoints[k] < new Date(invoices[i].date).getTime()) {
				months[k] += invoices[i].price_total + invoices[i].vat_total;
				break;
			}
		}
	}

	const data = [];
	data.push({
		month: monthNames[monthIndex(today.getMonth() - 5)],
		amount: months[5],
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth() - 4)],
		amount: months[4],
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth() - 3)],
		amount: months[3],
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth() - 2)],
		amount: months[2],
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth() - 1)],
		amount: months[1],
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth())],
		amount: months[0],
	});

	return data;
};

export { invoiceById, getNextInvoiceId, last6Months };
