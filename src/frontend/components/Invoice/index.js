import React, { PropTypes as T } from 'react';
import { Field, reduxForm } from 'redux-form';
import cx from 'helpers/classes';
import { connect } from 'react-redux';
import { newInvoice, updateSupplier } from 'actions/invoices';

// Components
import Link from 'components/Link';
import Dropdown from 'components/Dropdown';

// CSS
import './index.less';

class Invoice extends React.Component {

	static propTypes = {
		children: T.node.isRequired,
		id: T.number.isRequired,
		suppliers: T.array.isRequired,
		customers: T.array.isRequired,
	};

	render() {
		const {
			children,
			id,
			suppliers,
			customers,
			supplierId,
		} = this.props;
		const bm = 'Invoice';

		const customersArray = [];
		customers.map(customer =>
			customersArray.push({
				key: customer.id,
				label: customer.name + ' (IČ: ' + customer.ic + ')',
			})
		)

		const suppliersArray = [];
		suppliers.map(supplier =>
			suppliersArray.push({
				key: supplier.id,
				label: supplier.name + ' (IČ: ' + supplier.ic + ')',
			})
		)

		console.log('supplierId', supplierId);

		return (
			<div className={cx(bm, '')}>
				<div className={cx(bm, 'header')}>
					Faktura č. {id}
				</div>
				
				<div className={cx(bm, 'section')}>
					<div className={cx(bm, 'col')}>
						<h3>
							Odběratel
							<Link onClick={() => {return}} modifiers={['small', 'headerRight']}>Změnit</Link>
						</h3>
						<ul className={cx(bm, 'list')}>
							<li><strong>David Kolinek</strong></li>
							<li>Podhorska 85</li>
							<li>Jablonec nad Nisou, 466 01</li>
							<li>IC: 40218198</li>
							<li>DIC: CZ40218198</li>
						</ul>
					</div>
					<div className={cx(bm, 'col')}>
						<h3>Korespondenční adresa</h3>
					</div>
				</div>

				<div className={cx(bm, 'section')}>
					<div className={cx(bm, 'col')}>
						<h3>
							Dodavatel
						</h3>
						{ true && 
							<Field
								defaultValue="Vyberte"
								name="supplierId"
								modifiers={['inlineBlock']}
								options={suppliersArray}
								component={Dropdown}
								onChange={event => {
									supplierChanged(event.target.value);
								}}
							/>
						}
					</div>
					<div className={cx(bm, 'col')}>
						<h3>Informace pro platbu</h3>
						<table className={cx(bm, 'table')}>
							<tbody>
								<tr>
									<td>Variabilní symbol:</td>
									<td>20160601</td>
								</tr>
								<tr>
									<td>Datum vystavení:</td>
									<td>07.06.2016</td>
								</tr>
								<tr>
									<td><strong>Datum splatnosti:</strong></td>
									<td><strong>21.06.2016</strong></td>
								</tr>
							</tbody>
							<tbody className="smallerText">
								<tr className="spaceTop">
									<td>Bankovní spojení:</td>
									<td>Raiffeisenbank a.s.</td>
								</tr>
								<tr>
									<td><strong>Číslo účtu:</strong></td>
									<td><strong>8721877001/5500</strong></td>
								</tr>
								<tr>
									<td>IBAN:</td>
									<td>CZ2455000000008721877001</td>
								</tr>
								<tr>
									<td>SWIFT:</td>
									<td>AGBACZPP</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className={cx(bm, 'items')}>
					{children}
				</div>

				<div className={cx(bm, 'info')}>
					Vystavil Jester
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {
		supplierId: state.form.invoice.supplierId,
		customerId: state.form.invoice.customerId,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addInvoice: () => dispatch(addInvoice()),
	updateSupplier: (supplierId) => dispatch(updateSupplier(supplierId)),
	supplierChanged: (newId) => dispatch(supplierChanged(newId)),
});

export default connect(
	mapStateToProps,
	null
)(Invoice);
