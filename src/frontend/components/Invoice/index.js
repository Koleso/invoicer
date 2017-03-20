import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

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
	console.log(invoice);
	const bm = 'Invoice';

	const supplier = subjectById(suppliers, invoice.supplier);
	const customer = subjectById(customers, invoice.customer);

	return (
		<div className={cx(bm, '')}>
			<div className={cx(bm, 'header')}>
				Faktura č. {id}
			</div>
			
			<div className={cx(bm, 'section')}>
				<div className={cx(bm, 'col')}>
					<h3>
						Odběratel
						{view.detail && <Link onClick={() => {return}} modifiers={['small', 'headerRight']}>Změnit</Link>}
					</h3>
					<ul className={cx(bm, 'list')}>
						<li><strong>{customer.name}</strong></li>
						<li>{customer.street}</li>
						<li>{customer.city}, {customer.zip}</li>
						{customer.ic && <li>IČ: {customer.ic}</li>}
						{customer.dic && <li>DIČ: {customer.dic}</li>}
					</ul>
				</div>
				<div className={cx(bm, 'col')}>
					<h3>Korespondenční adresa</h3>
					<ul className={cx(bm, 'list')}>
						<li><strong>{customer.name}</strong></li>
						<li>{customer.street}</li>
						<li>{customer.city}, {customer.zip}</li>
					</ul>
				</div>
			</div>

			<div className={cx(bm, 'section')}>
				<div className={cx(bm, 'col')}>
					<h3>
						Dodavatel
						{view.detail && <Link onClick={() => {return}} modifiers={['small', 'headerRight']}>Změnit</Link>}
					</h3>
					<ul className={cx(bm, 'list')}>
						<li><strong>{supplier.name}</strong></li>
						<li>{supplier.street}</li>
						<li>{supplier.city}, {supplier.zip}</li>
						{supplier.ic && <li>IČ: {supplier.ic}</li>}
						{supplier.dic && <li>DIČ: {supplier.dic}</li>}
					</ul>
				</div>
				<div className={cx(bm, 'col')}>
					<h3>Informace pro platbu</h3>
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
				</div>
			</div>

			<div className={cx(bm, 'items')}>
				{children}
			</div>

			<div className={cx(bm, 'info')}>
				Vystavil {supplier.contact_person}
			</div>
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
