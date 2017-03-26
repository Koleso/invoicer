const invoices = [{
	id: 1,
	supplier: 1,
	customer: 1,
	date: '2017-03-14',
	due: 14,
	price_total: 12500,
	vat_total: 0,
	currency: 'Kč',
	description: 'Microsita pro Gorillu',
	paid: false,
	items: [{
		text: 'Polozka faktury',
		quantity: 1,
		price: 10000,
	}, {
		text: 'Dalsi polozka faktury',
		quantity: 1,
		price: 500,
	}, {
		text: 'A jeste jedna faktury',
		quantity: 1,
		price: 2000,
	}],
}, {
	id: 2,
	supplier: 2,
	customer: 2,
	date: '2017-01-14',
	due: 14,
	price_total: 17000,
	vat_total: 3570,
	currency: 'Kč',
	description: 'Webhosting + prodlouzeni domeny',
	paid: false,
	items: [{
		text: 'Polozka faktury',
		quantity: 1,
		vat: 0.21,
		price: 10000,
	}, {
		text: 'Dalsi polozka faktury',
		quantity: 1,
		vat: 0.21,
		price: 5000,
	}, {
		text: 'A jeste jedna polozka faktury',
		quantity: 1,
		vat: 0.21,
		price: 2000,
	}],
}, {
	id: 3,
	supplier: 1,
	customer: 4,
	date: '2017-01-14',
	due: 14,
	price_total: 12500,
	vat_total: 0,
	currency: 'Kč',
	description: 'Microsita pro Gorillu',
	paid: true,
	items: [{
		text: 'Polozka faktury',
		quantity: 1,
		price: 10000,
	}, {
		text: 'Dalsi polozka faktury',
		quantity: 1,
		price: 500,
	}, {
		text: 'A jeste jedna faktury',
		quantity: 1,
		price: 2000,
	}],
}];

export default invoices;
