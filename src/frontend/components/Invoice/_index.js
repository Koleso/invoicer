import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

import NumberFormat from 'react-number-format';
import dateFormat from 'dateformat';
import { overdue, dueDate } from 'helpers/overdue';
import { subjectById } from 'helpers/subjects';

// Components
import Link from 'components/Link';
import Dropdown from 'components/Dropdown';

// CSS
import './index.less';

const Invoice = ({
	id,
	invoice,
	suppliers,
	customers,
	children,
	view,
}) => {
	const bm = 'Invoice';



	if (!invoice) {
		return (
			<div className="">Loading</div>
		)
	}

	let invoiceReal, supplier, customer = {};
	if(invoice) {
		invoiceReal = invoice;
		supplier = subjectById(suppliers, invoice.supplier);
		customer = subjectById(customers, invoice.customer);
	}

	console.log('ID: ', id);
	console.log('invoice: ', invoiceReal);
	console.log('suppliers: ', suppliers);
	console.log('customers: ', customers);
	console.log('supplier: ', supplier);
	console.log('customer: ', customer);

	return (
		<div className={cx(bm, '')}>
			<div className={cx(bm, 'header')}>Faktura č. {id}</div>

			<div className={cx(bm, 'section')}>
				<div className={cx(bm, 'col')}>
					<h3>
						Odběratel
						{view.detail && <Link onClick={() => {return}} modifiers={['small', 'headerRight']}>Změnit</Link>}
					</h3>
					{customer &&
						<ul className={cx(bm, 'list')}>
							<li><strong>{customer.name}</strong></li>
							<li>{customer.street}</li>
							<li>{customer.city}, {customer.zip}</li>
							{customer.ic && <li>IČ: {customer.ic}</li>}
							{customer.dic && <li>DIČ: {customer.dic}</li>}
						</ul>
					}
				</div>
				<div className={cx(bm, 'col')}>
					<h3>Korespondenční adresa</h3>
					{customer &&
						<ul className={cx(bm, 'list')}>
							<li><strong>{customer.name}</strong></li>
							<li>{customer.street}</li>
							<li>{customer.city}, {customer.zip}</li>
						</ul>
					}
				</div>
			</div>

			<div className={cx(bm, 'section')}>
				<div className={cx(bm, 'col')}>
					<h3>
						Dodavatel
						{view.detail && <Link onClick={() => {return}} modifiers={['small', 'headerRight']}>Změnit</Link>}
					</h3>
					{supplier &&
						<ul className={cx(bm, 'list')}>
							<li><strong>{supplier.name}</strong></li>
							<li>{supplier.street}</li>
							<li>{supplier.city}, {supplier.zip}</li>
							{supplier.ic && <li>IČ: {supplier.ic}</li>}
							{supplier.dic && <li>DIČ: {supplier.dic}</li>}
						</ul>
					}
				</div>
				<div className={cx(bm, 'col')}>
					<h3>Informace pro platbu</h3>
					{supplier &&
						<table className={cx(bm, 'table')}>
							<tbody>
								<tr>
									<td>Variabilní symbol:</td>
									<td>{invoice.id}</td>
								</tr>
								<tr>
									<td>Datum vystavení:</td>
									<td>{dateFormat(invoice.date, 'dd. mm. yyyy')}</td>
								</tr>
								<tr>
									<td><strong>Datum splatnosti:</strong></td>
									<td><strong>{dateFormat(dueDate(invoice.date, invoice.due), 'dd. mm. yyyy')}</strong></td>
								</tr>
							</tbody>
							<tbody className="smallerText">
								<tr className="spaceTop">
									<td>Bankovní spojení:</td>
									<td>{supplier.bank}</td>
								</tr>
								<tr>
									<td><strong>Číslo účtu:</strong></td>
									<td><strong>{supplier.account}</strong></td>
								</tr>
								{supplier.iban &&
									<tr>
										<td>IBAN:</td>
										<td>{supplier.iban}</td>
									</tr>
								}
								{supplier.swift &&
									<tr>
										<td>SWIFT:</td>
										<td>{supplier.swift}</td>
									</tr>
								}
							</tbody>
						</table>
					}
				</div>
			</div>

			<div className={cx(bm, 'items')}>
				{supplier &&
					<table className={cx(bm, 'invoiceItems')}>
						<tbody>
							<tr>
								<th>Položka</th>
								<th className="right">Mn.</th>
								{supplier.payer &&  <th className="right">DPH</th> }
								<th className="right">Cena</th>
							</tr>
							{invoice.items.map((item, index )=>
								<tr key={index}>
									<td>
										{item.text}
									</td>
									<td className="right">
										{item.quantity}
									</td>
									{supplier.payer &&
										<td className="right">
											{supplier.vat*100}%
										</td>
									}
									<td className="right">
										<NumberFormat value={item.price} displayType={'text'} thousandSeparator={' '} />
										&nbsp;{supplier.currency}
									</td>
								</tr>
							)}
						</tbody>
					</table>
				}
			</div>

			{supplier &&
				<table className={cx(bm, 'price')}>
					<tbody>
						<tr>
							<td>Cena celkem{supplier.payer && ' bez DPH'}:</td>
							<td className="price">
								<NumberFormat value={invoice.price} displayType={'text'} thousandSeparator={' '} />
								&nbsp;{supplier.currency}
							</td>
						</tr>
						{supplier.payer &&
							<tr>
								<td>DPH:</td>
								<td className="price">{Math.round(supplier.vat*invoice.price)}&nbsp;{supplier.currency}</td>
							</tr>
						}
						{supplier.payer &&
							<tr>
								<td>Cena celkem s DPH:</td>
								<td className="price">
									<NumberFormat value={Math.round(invoice.price*(supplier.vat+1))} displayType={'text'} thousandSeparator={' '} />
									&nbsp;{supplier.currency}
								</td>
							</tr>
						}
					</tbody>
				</table>
			}

			{supplier &&
				<div className={cx(bm, 'signature')}>
					<div className={cx(bm, 'signed')}>
						Vystavil {supplier.contact_person}
					</div>
				</div>
			}

			{supplier &&
				<div className={cx(bm, 'footer')}>
					{supplier.email}
				</div>
			}
		</div>
	);
};


/*
Invoice.propTypes = {
	children: T.node.isRequired,
	id: T.number,
	suppliers: T.array.isRequired,
	customers: T.array.isRequired,
	supplierId: T.number,
	customerid: T.number,
};
*/

export default Invoice;
