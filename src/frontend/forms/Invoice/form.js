import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import cx from 'helpers/classes';
import { subjectsForDropdown } from 'helpers/subjects';

import NumberFormat from 'react-number-format';
import dateFormat from 'dateformat';
import { dueDate } from 'helpers/overdue';
import { subjectById } from 'helpers/subjects';

// Components
import InvoiceLayout from 'components/InvoiceLayout';
import Spinner from 'components/Spinner';
import Button from 'components/Button';
import InputField from 'components/Input';
import Link from 'components/Link';
import Dropdown from 'components/Dropdown';

import validate from './validate';

const InvoiceForm = ({ 
	id,
	invoice,
	customers,
	suppliers,
	addInvoice,
	changeFieldValue,
	...otherProps,
}) => {

	if (!invoice) {
		return (
			<Spinner modifiers={['fullpage']} />
		)
	}

	let customer, supplier = undefined;
	if (invoice.customerId && invoice.customerId != "0") {
		customer = subjectById(customers, parseInt(invoice.customerId, 10));
	}
	if (invoice.supplierId && invoice.supplierId != "0") {
		supplier = subjectById(suppliers, parseInt(invoice.supplierId, 10));
	}

	const customersArray = subjectsForDropdown(customers);
	const suppliersArray = subjectsForDropdown(suppliers);
	console.log(invoice);

	function submit() {
		console.log('submit');
		//return handleSubmit(addInvoice);
	}

	const bm = 'Invoice';
	return (
		<InvoiceLayout>
			<form onSubmit={submit()}>
				<Field name="id" type="hidden" value={invoice.id} component={InputField} />

				<div className={cx(bm, 'header')}>Faktura č. {id}</div>
				<div className={cx(bm, 'section')}>
					<div className={cx(bm, 'col')}>
						<h3>
							Odběratel
							{invoice.customerId && 
								<Link onClick={() => changeFieldValue('customerId', '')} modifiers={['small', 'headerRight']}>Změnit</Link>
							}
						</h3>
						{invoice.customerId ?
							<ul className={cx(bm, 'list')}>
								<li><strong>{customer.name}</strong></li>
								<li>{customer.street}</li>
								<li>{customer.city}, {customer.zip}</li>
								{customer.ic && <li>IČ: {customer.ic}</li>}
								{customer.dic && <li>DIČ: {customer.dic}</li>}
							</ul>
							:
							<Field
								defaultValue="Vyberte"
								name="customerId"
								modifiers={['inlineBlock']}
								options={customersArray}
								component={Dropdown}
							/>
						}
					</div>
					<div className={cx(bm, 'col')}>
						<h3>Korespondenční adresa</h3>
						{invoice.customerId &&
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
							{invoice.supplierId && 
								<Link onClick={() => changeFieldValue('supplierId', '')} modifiers={['small', 'headerRight']}>Změnit</Link>
							}
						</h3>
						{invoice.supplierId ?
							<ul className={cx(bm, 'list')}>
								<li><strong>{supplier.name}</strong></li>
								<li>{supplier.street}</li>
								<li>{supplier.city}, {supplier.zip}</li>
								{supplier.ic && <li>IČ: {supplier.ic}</li>}
								{supplier.dic && <li>DIČ: {supplier.dic}</li>}
							</ul>
							:
							<Field
								defaultValue="Vyberte"
								name="supplierId"
								modifiers={['inlineBlock']}
								options={suppliersArray}
								component={Dropdown}
							/>
						}
					</div>
					<div className={cx(bm, 'col')}>
						<h3>Informace pro platbu</h3>
						{invoice.supplierId &&
							<table className={cx(bm, 'table')}>
								<tbody>
									<tr>
										<td>Variabilní symbol:</td>
										<td>{invoice.id}</td>
									</tr>
									<tr>
										<td>Datum vystavení:</td>
										<td>{dateFormat(new Date(), 'dd. mm. yyyy')}</td>
									</tr>
									<tr>
										<td><strong>Datum splatnosti:</strong></td>
										<td><strong>{dateFormat(dueDate(new Date(), supplier.due), 'dd. mm. yyyy')}</strong></td>
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
				{invoice.supplierId &&
					<table className={cx(bm, 'invoiceItems')}>
						<thead>
							<tr>
								<th>Položka</th>
								<th className="right">Mn.</th>
								{supplier.payer &&  <th className="right">DPH</th> }
								<th className="right">Cena</th>
								<th></th>
							</tr>
						</thead>
						<FieldArray name="item" component={invoiceItems} />
					</table>
				}
			</div>

				<div className="Invoice-footer">
					<Button
						type="submit"
						modifiers={['primary', 'big', 'formRight', 'tabletLeft']}
					>
						Vystavit fakturu
					</Button>
				</div>
			</form>
		</InvoiceLayout>
	);
};

const invoiceItems = ({ fields }) => {
	console.log(fields);
	return (
		<tbody>
			{fields.map((item, index) =>
					<tr key={index}>
						<td className={cx(bm, 'itemText')}>
							<Field
								name={`${item}.text`}
								type="text"
								placeholder="Položka faktury"
								component={InputField}
							/>
						</td>
						<td className={cx(bm, 'itemQuantity')}>
							<Field
								name={`${item}.quantity`}
								type="number"
								value="1"
								component={InputField}
							/>
						</td>
						{supplier.payer &&
							<td className={cx(bm, 'itemVat')}>
								{supplier.vat*100}%
							</td>
						}
						<td className={cx(bm, 'itemPrice')}>
							<Field
								name={`${item}.price`}
								type="number"
								placeholder="Cena za kus"
								component={InputField}
							/>
						</td>
						<td className={cx(bm, 'itemDelete')}>
							<Button
								onClick={() => fields.remove(index)}
								modifiers={['tableBtn', 'iconBtn', 'delete']}
							/>
						</td>
					</tr>
				)}
			</tbody>
	);
};

export default reduxForm({
	form: 'invoice',
	validate,
	initialValues: {
		id: new Date().valueOf(), // TODO: Iakov to the rescue
	},
})(InvoiceForm);
