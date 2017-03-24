const invoices = [{
	id: 1,
	supplier: 1,
	customer: 1,
	date: '2017-03-14',
	due: 14,
	price: 12500,
	currency: 'Kč',
	description: 'Microsita pro Gorillu',
	paid: false,
	items: [{
		text: 'Polozka faktury',
		quantity: 1,
		price: 10000,
	},{
		text: 'Dalsi polozka faktury',
		quantity: 1,
		price: 500,
	},{
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
	price: 17000,
	currency: 'Kč',
	description: 'Webhosting + prodlouzeni domeny',
	paid: false,
	items: [{
		text: 'Polozka faktury',
		quantity: 1,
		vat: 0.21,
		price: 10000,
	},{
		text: 'Dalsi polozka faktury',
		quantity: 1,
		vat: 0.21,
		price: 5000,
	},{
		text: 'A jeste jedna polozka faktury',
		quantity: 1,
		vat: 0.21,
		price: 2000,
	}],
}, {
	id: 3,
	supplier: 2,
	customer: 3,
	date: '2017-01-14',
	due: 14,
	price: 1280,
	currency: 'Kč',
	description: 'Webhosting + prodlouzeni domeny',
	paid: true,
	items: {},
}];

export default invoices;
