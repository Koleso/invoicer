import React from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';

import cx from 'helpers/classes';
import { subjectsForDropdown, subjectById } from 'helpers/subjects';
import dateFormat from 'dateformat';

// Notifications
import { actions as notifActions } from 'redux-notifications';
const { notifSend } = notifActions;

// Components
import InvoiceLayout from 'components/InvoiceLayout';
import Spinner from 'components/Spinner';
import Button from 'components/Button';
import InputField from 'components/Input';
import Dropdown from 'components/Dropdown';

import validate from './validate';

const calculateVatTotal = (vat, price, changeFieldValue) => {
	changeFieldValue('vat_total', parseFloat(vat).toLocaleString('cs-CZ'));
	changeFieldValue('price_total_sum', parseFloat(price + vat).toLocaleString('cs-CZ'));
};

const calculatePriceTotal = (items, changeFieldValue, payer) => {
	let price = 0;
	let vat = 0;

	items.map((item) => {
		if (items[0].vat) {
			if (Number.isInteger(parseInt(item.quantity, 10))
				&& Number.isInteger(parseInt(item.vat, 10))
				&& Number.isInteger(parseInt(item.price, 10))) {
				vat += (parseFloat(item.price) * parseFloat(item.vat) / 100 * parseInt(item.quantity, 10));
			}
		}
		if (Number.isInteger(parseInt(item.quantity, 10))
			&& Number.isInteger(parseInt(item.price, 10))) {
			price += (parseFloat(item.price) * parseInt(item.quantity, 10));
		}
		return null;
	});

	if (payer) {
		calculateVatTotal(vat, price, changeFieldValue);
	}
	changeFieldValue('price_total', parseFloat(price).toLocaleString('cs-CZ'));
};

const invoiceItems = ({ fields, payer, invoice, changeFieldValue }) => {
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
							onBlur={() => calculatePriceTotal(invoice.items, changeFieldValue, payer)}
						/>
					</td>
					{payer &&
						<td className={cx(bm, 'itemVat')}>
							<Field
								name={`${item}.vat`}
								type="number"
								component={InputField}
								onBlur={() => calculatePriceTotal(invoice.items, changeFieldValue, payer)}
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
							onBlur={() => calculatePriceTotal(invoice.items, changeFieldValue, payer)}
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

const InvoiceForm = ({
	invoice,
	customers,
	suppliers,
	submitting,
	handleSubmit,
	addInvoice,
	changeFieldValue,
}) => {
	if (!invoice) {
		return (
			<Spinner modifiers={['fullpage']} />
		);
	}

	let customer = undefined;
	let supplier = undefined;
	if (invoice.customerId && invoice.customerId !== '0') {
		customer = subjectById(customers, parseInt(invoice.customerId, 10));
	}
	if (invoice.supplierId && invoice.supplierId !== '0') {
		supplier = subjectById(suppliers, parseInt(invoice.supplierId, 10));
	}

	const customersArray = subjectsForDropdown(customers);
	const suppliersArray = subjectsForDropdown(suppliers);

	const submit = () => {
		return handleSubmit(addInvoice);
	};

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

				{invoice.supplierId &&
					<table className={cx(bm, 'price')}>
						<tbody>
							<tr>
								<td>Cena celkem{supplier.payer && ' bez DPH'}:</td>
								<td className="pricePreview">
									<Field
										name="price_total"
										type="text"
										modifiers={['fakeInput', 'pricePreview']}
										disabled={Boolean(true)}
										component={InputField}
									/>
									<Field
										name="currency"
										type="text"
										modifiers={['fakeInput', 'currencyPreview']}
										disabled={Boolean(true)}
										component={InputField}
									/>
								</td>
							</tr>
							{supplier.payer &&
								<tr>
									<td>DPH:</td>
									<td className="pricePreview">
										<Field
											name="vat_total"
											type="text"
											modifiers={['fakeInput', 'pricePreview']}
											disabled={Boolean(true)}
											component={InputField}
										/>
										<Field
											name="currency"
											type="text"
											modifiers={['fakeInput', 'currencyPreview']}
											disabled={Boolean(true)}
											component={InputField}
										/>
									</td>
								</tr>
							}
							{supplier.payer &&
								<tr>
									<td>Cena celkem s DPH:</td>
									<td className="pricePreview">
										<Field
											name="price_total_sum"
											type="text"
											modifiers={['fakeInput', 'pricePreview']}
											disabled={Boolean(true)}
											component={InputField}
										/>
										<Field
											name="currency"
											type="text"
											modifiers={['fakeInput', 'currencyPreview']}
											disabled={Boolean(true)}
											component={InputField}
										/>
									</td>
								</tr>
							}
						</tbody>
					</table>
				}

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

export default reduxForm({
	form: 'invoice',
	validate,
	onSubmitSuccess: (result, dispatch, props) => {
		browserHistory.push('/faktury');
		dispatch(notifSend({
			message: `Faktura ${props.values.name} byl úspěšně vytvořena`,
			kind: 'success',
			dismissAfter: 3000,
		}));
	},
	onSubmitFail: (result, dispatch) => {
		dispatch(notifSend({
			message: 'Fakturu se nepodařilo vytvořit',
			kind: 'error',
			dismissAfter: 3000,
		}));
	},
})(InvoiceForm);
