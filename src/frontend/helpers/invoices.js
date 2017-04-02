const monthNames = ["Leden", "Úbor", "Březen", "Duben", "Květen", "Červen",
  "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
];

const monthIndex = (index) => {
	if (index < 0) {
		return index + 12;
	}

	return index;
}

const invoiceById = (invoices, id) => {
	return invoices[invoices.findIndex((obj => obj.id === id))];
};

const getNextInvoiceId = (invoices) => {
	if (!invoices.length) {
		return parseInt(new Date().getFullYear() + '0001', 10); // eslint-disable-line
	}

	return (invoices[invoices.length - 1].id + 1);
};

const last6Months = (invoices) => {
	const today = new Date();
	const months = [new Array(), new Array(), new Array(), new Array(), new Array(), new Array()];
	const breakPoints = [
		new Date(today.getFullYear(), today.getMonth(), 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 1, 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 2, 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 3, 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 4, 0).getTime(),
		new Date(today.getFullYear(), today.getMonth() - 5, 0).getTime(),
	];

	let last = false;
	for (let i = invoices.length - 1; i >= 0; i--) {
		for (let k = 0; k < breakPoints.length; k++) {
			if (breakPoints[k] < new Date(invoices[i].date).getTime()) {
				months[k].push(invoices[i]);
				break;
			}
			// if (k === breakPoints.length - 1) {
			// 	last = true;
			// 	break;
			// }
		}

		// if (last) {
		// 	break;
		// }
	}

	console.log(months);

	const data = [];
	data.push({
		month: monthNames[monthIndex(today.getMonth() - 5)],
		amount: 0,
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth() - 4)],
		amount: 0,
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth() - 3)],
		amount: 0,
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth() - 2)],
		amount: 0,
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth() - 1)],
		amount: 0,
	});

	data.push({
		month: monthNames[monthIndex(today.getMonth())],
		amount: 0,
	});

	return data;
};

export { invoiceById, getNextInvoiceId, last6Months };
