import React from 'react';
import NumberFormat from 'react-number-format';
import dateFormat from 'dateformat';
import overdue from 'helpers/overdue';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';
import Table from 'components/Table';
import TableRow from 'components/TableRow';
import TableCell from 'components/TableCell';
import Link from 'components/Link';

const actions = [
	<Button key="add-invoice" to={'/faktury/nova-faktura'} modifiers={['primary', 'big']}>Nová faktura</Button>,
];

const Invoices = React.createClass({
	render() {
		const { invoices } = this.props;
		const invoicesPaid = invoices.filter((value) => { return value.paid === true });
		const invoicesUnpaid = invoices.filter((value) => { return value.paid === false });

		return (
			<Screen title="Faktury" actions={actions}>
				<Grid>
					<GridColumn>
						<Box title="Neuhrazené faktury">
							<Table>
								{invoicesUnpaid.map(invoice =>
									<TableRow key={invoice.id}>
										<TableCell>
											<div className="TableCell--primary">
												<Link to={`/faktury/${invoice.id}`} modifiers={['tableLink']}>{invoice.customer}</Link>
											</div>
											<div className="TableCell--secondary">č. {invoice.id}</div>
										</TableCell>
										<TableCell>
											<div className="TableCell--primary">{dateFormat(invoice.date, "dd. mm. yyyy")}</div>
											<div className="TableCell--secondary">{invoice.description}</div>
										</TableCell>
										{overdue(invoice.date, invoice.due)}
										<TableCell>
											<div className="TableCell--price">
												<NumberFormat value={invoice.price} displayType={'text'} thousandSeparator={' '} />
												&nbsp;
												{invoice.currency}
											</div>
										</TableCell>
										<TableCell modifiers={['actions']}>
											<Button
												to={`/faktury/upravit-fakturu/${invoice.id}`}
												modifiers={['tableBtn', 'iconBtn', 'edit']}
											/>
											<Button
												to={`/faktury/smazat-fakturu/${invoice.id}`}
												modifiers={['tableBtn', 'iconBtn', 'delete']}
											/>
										</TableCell>
									</TableRow>
								)}
							</Table>
						</Box>

						<Box title="Uhrazené faktury">
							<Table>
								{invoicesPaid.map(invoice =>
									<TableRow key={invoice.id}>
										<TableCell>
											<div className="TableCell--primary">
												<Link to={`/faktury/${invoice.id}`} modifiers={['tableLink']}>{invoice.customer}</Link>
											</div>
											<div className="TableCell--secondary">č. {invoice.id}</div>
										</TableCell>
										<TableCell>
											<div className="TableCell--primary">{dateFormat(invoice.date, "dd. mm. yyyy")}</div>
											<div className="TableCell--secondary">{invoice.description}</div>
										</TableCell>
										<TableCell>
											<div className="TableCell--price">
												<NumberFormat value={invoice.price} displayType={'text'} thousandSeparator={' '} />
												&nbsp;
												{invoice.currency}
											</div>
										</TableCell>
										<TableCell modifiers={['actions']}>
											<Button
												to={`/faktury/${invoice.id}`}
												modifiers={['tableBtn', 'iconBtn', 'print']}
											/>
										</TableCell>
									</TableRow>
								)}
							</Table>
						</Box>
					</GridColumn>
				</Grid>
			</Screen>
		);
	},
});

export default Invoices;
