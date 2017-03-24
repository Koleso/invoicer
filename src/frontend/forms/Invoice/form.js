import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

import cx from 'helpers/classes';
import { subjectsForDropdown } from 'helpers/subjects';
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
	invoice,
	customers,
	suppliers,
	submitting,
	handleSubmit,
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

	const submit = () => {
		return handleSubmit(addInvoice);
	}

	const bm = 'Invoice';
	return (
		<InvoiceLayout>
			<form onSubmit={submit()}>
				<Field name="id" type="hidden" component={InputField} />

				<div className={cx(bm, 'header')}>Faktura č. {invoice.id}</div>
				<div className={cx(bm, 'section')}>
					<div className={cx(bm, 'col')}>
						<h3>Odběratel</h3>
						<Field
							defaultValue="Vyberte"
							name="customerId"
							modifiers={['inlineBlock']}
							options={customersArray}
							component={Dropdown}
						/>
						{invoice.customerId &&
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
						<h3>Dodavatel</h3>
						<Field
							defaultValue="Vyberte"
							name="supplierId"
							modifiers={['inlineBlock']}
							options={suppliersArray}
							component={Dropdown}
							onBlur={() => {
								changeFieldValue('due', supplier.due);
								changeFieldValue('currency', supplier.currency);
							}}
						/>
						{invoice.supplierId &&
							<div>
								<ul className={cx(bm, 'list')}>
									<li><strong>{supplier.name}</strong></li>
									<li>{supplier.street}</li>
									<li>{supplier.city}, {supplier.zip}</li>
									{supplier.ic && <li>IČ: {supplier.ic}</li>}
									{supplier.dic && <li>DIČ: {supplier.dic}</li>}
								</ul>
							</div>
						}
					</div>
					<div className={cx(bm, 'col')}>
						<h3>Informace pro platbu</h3>
						{invoice.supplierId &&
							<div>
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
									</tbody>
								</table>
								<table className={cx(bm, 'table')}>
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
						}
					</div>

					{invoice.supplierId &&
						<table className={cx(bm, 'additionalInfo')}>
							<tbody>
								<tr>
									<td>
										<Field
											id="description"
											name="description"
											type="text"
											label="Popis faktury"
											required={Boolean(true)}
											component={InputField}
										/>
									</td>
									<td>
										<Field
											id="due"
											name="due"
											type="number"
											modifiers={['due']}
											label="Splatnost"
											required={Boolean(true)}
											component={InputField}
										/>
									</td>
									<td>
										<Field
											id="currency"
											name="currency"
											type="text"
											modifiers={['currency']}
											label="Měna"
											required={Boolean(true)}
											component={InputField}
										/>
									</td>
								</tr>
							</tbody>
						</table>
					}
				</div>

				<div className={cx(bm, 'items')}>
					{invoice.supplierId &&
						<table className={cx(bm, 'invoiceItems', ['form'])}>
							<thead>
								<tr>
									<th>Položka</th>
									<th className="right">Mn.</th>
									{supplier.payer && <th className="right">DPH</th>}
									<th className="right">Cena</th>
									<th></th>
								</tr>
							</thead>
							<FieldArray
								name="items"
								payer={supplier.payer}
								vat={supplier.vat}
								currency={supplier.currency}
								component={invoiceItems}
								invoice={invoice}
								changeFieldValue={changeFieldValue}
							/>
						</table>
					}
				</div>

				<Field
					name="price"
					type="text"
					component={InputField}
					modifiers={['fakeInput']}
					disabled={Boolean(true)}
				/>

				<div className="Invoice-footer noBorder">
					<Button
						type="submit"
						disabled={submitting}
						modifiers={['primary', 'big', 'formRight', 'tabletLeft']}
					>
						Vystavit fakturu
					</Button>
				</div>
			</form>
		</InvoiceLayout>
	);
};

const invoiceItems = ({ fields, payer, vat, currency, invoice, changeFieldValue }) => {
	const bm = 'Invoice';

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
							component={InputField}
							onBlur={() => calculatePriceTotal(invoice.items, changeFieldValue)}
						/>
					</td>
					{payer && 
						<td className={cx(bm, 'itemVat')}>
							<Field
								name={`${item}.vat`}
								type="number"
								component={InputField}
								onBlur={() => calculatePriceTotal(invoice.items, changeFieldValue)}
							/>
							<span>%</span>
						</td>
					}
					<td className={cx(bm, 'itemPrice')}>
						<Field
							name={`${item}.price`}
							type="number"
							placeholder="Cena za kus"
							component={InputField}
							onBlur={() => calculatePriceTotal(invoice.items, changeFieldValue)}
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
			<tr>
				<td>
					<Button
						onClick={() => fields.push({})}
						modifiers={['addItem']}
					>
						Přidat položku
					</Button>
				</td>
			</tr>
		</tbody>
	);
};

const calculatePriceTotal = (items, changeFieldValue) => {
	let price = 0;
	let vat = 0;

	items.map((item, index) => {
		if (items[0].vat) {
			if (Number.isInteger(parseInt(item.quantity, 10))
				&& Number.isInteger(parseInt(item.vat, 10))
				&& Number.isInteger(parseInt(item.price, 10))) {
				vat += (parseFloat(item.price) * parseFloat(item.vat)/100 * parseInt(item.quantity, 10));
			}
		}
		if (Number.isInteger(parseInt(item.quantity, 10))
			&& Number.isInteger(parseInt(item.price, 10))) {
			price += (parseFloat(item.price) * parseInt(item.quantity, 10));
		}
	});

	changeFieldValue('price', parseFloat(price+vat).toLocaleString('cs-CZ'));
}

export default reduxForm({
	form: 'invoice',
	validate,
	initialValues: {
		id: new Date().valueOf(),
		date: dateFormat(new Date(), 'yyyy-mm-dd'),
		items: [{ text: '', quantity: 1, price: '', vat: '' }]
	},
})(InvoiceForm);
