import React from 'react';
import NumberFormat from 'react-number-format';
import dateFormat from 'dateformat';
import { overdue, dueDate } from 'helpers/overdue';
import { subjectNameById } from 'helpers/subjects';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';
import Table from 'components/Table';
import TableRow from 'components/TableRow';
import TableCell from 'components/TableCell';
import Link from 'components/Link';

const actions = [
	<Button
		key="add-invoice"
		to={'/faktury/nova-faktura'}
		modifiers={['primary', 'big']}
	>
		Nová faktura
	</Button>,
];

const Invoices = ({
	invoicesPaid,
	invoicesUnpaid,
	subjects,
}) => (
	<Screen title="Faktury" actions={actions}>
		<Grid>
			<GridColumn>
				<Box title="Neuhrazené faktury">
					<Table>
						{invoicesUnpaid.map(invoice =>
							<TableRow key={invoice.id}>
								<TableCell>
									<div className="TableCell--primary">
										<Link to={`/faktury/${invoice.id}`} modifiers={['tableLink']}>
											{subjectNameById(subjects, invoice.customer).name}
										</Link>
									</div>
									<div className="TableCell--secondary">č. {invoice.id}</div>
								</TableCell>
								<TableCell>
									<div className="TableCell--primary">{dateFormat(invoice.date, 'dd. mm. yyyy')}</div>
									<div className="TableCell--secondary">{invoice.description}</div>
								</TableCell>
								<TableCell modifiers={[overdue(invoice.date, invoice.due) > 0 && 'overdue']}>
									<div className="TableCell--primary">
										{dateFormat(dueDate(invoice.date, invoice.due), 'dd. mm. yyyy')}
									</div>
									{overdue(invoice.date, invoice.due) > 0 &&
										<div className="TableCell--secondary">{overdue(invoice.date, invoice.due)} dní po splatnosti</div>
									}
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
										<Link to={`/faktury/${invoice.id}`} modifiers={['tableLink']}>
											{subjectNameById(subjects, invoice.customer).name}
										</Link>
									</div>
									<div className="TableCell--secondary">č. {invoice.id}</div>
								</TableCell>
								<TableCell>
									<div className="TableCell--primary">{dateFormat(invoice.date, 'dd. mm. yyyy')}</div>
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

export default Invoices;
