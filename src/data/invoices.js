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
		item: 'Polozka faktury',
		quntity: 1,
		price: 10000,
	},{
		item: 'Dalsi polozka faktury',
		quntity: 1,
		price: 500,
	},{
		item: 'A jeste jedna faktury',
		quntity: 1,
		price: 2000,
	}],
}, {
	id: 2,
	supplier: 1,
	customer: 2,
	date: '2017-01-14',
	due: 14,
	price: 1280,
	currency: 'Kč',
	description: 'Webhosting + prodlouzeni domeny',
	paid: false,
	items: {},
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
