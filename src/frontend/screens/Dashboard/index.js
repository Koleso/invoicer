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
import WidgetSummary from 'components/WidgetSummary';
import Table from 'components/Table';
import TableRow from 'components/TableRow';
import TableCell from 'components/TableCell';
import Link from 'components/Link';
import EmptyState from 'components/EmptyState';

const actions = [
	<Button
		key="add-invoice"
		to={'/faktury/nova-faktura'}
		modifiers={['primary', 'big']}
	>
		Nová faktura
	</Button>,
];

const Dashboard = ({
	subjects,
	invoicesUnpaid,
	paidTotal,
	unpaidTotal,
}) => (
	<Screen title="Dashboard" pageTitle="Dashboard" actions={actions}>
		<Grid size={2}>
			<GridColumn>
				<Box title="Pohledávky" modifiers={['smallMargin']}>
					<WidgetSummary paid={paidTotal} notPaid={unpaidTotal} />
				</Box>

				<Box title="Neuhrazené faktury" modifiers={['smallMargin']}>
					{invoicesUnpaid.length ?
						<Table>
							{invoicesUnpaid.map(invoice =>
								<TableRow key={invoice.id}>
									<TableCell modifiers={[overdue(invoice.date, invoice.due) > 0 && 'overdue']}>
										<div className="TableCell--primary">
											<Link to={`/faktury/${invoice.id}`} modifiers={['tableLink']}>
												{subjectNameById(subjects, invoice.customer)}
											</Link>
										</div>
										<div className="TableCell--secondary">
											{dateFormat(dueDate(invoice.date, invoice.due), 'dd. mm. yyyy')}&nbsp;
											{overdue(invoice.date, invoice.due) > 0 &&
												<span>({overdue(invoice.date, invoice.due)} dní po splatnosti)</span>
											}
										</div>
									</TableCell>
									<TableCell>
										<div className="TableCell--price">
											<NumberFormat value={invoice.price_total} displayType={'text'} thousandSeparator={' '} />
											&nbsp;
											{invoice.currency}
										</div>
									</TableCell>
									<TableCell modifiers={['actions']}>
										<Button
											to={`/faktury/detail/${invoice.id}`}
											modifiers={['tableBtn', 'iconBtn', 'print']}
										/>
									</TableCell>
								</TableRow>
							)}
						</Table>
						:
						<EmptyState title="Nemáte žádné nezaplacené faktury" modifiers={['small', 'invoice']}>
							Sice ti nikdo nic nedluží, ale ani ti nikdo nic nepošle.
						</EmptyState>
					}
				</Box>
			</GridColumn>

			<GridColumn>
				<Box title="Příjem za posledních 6 měsíců" modifiers={['smallMargin']} />
			</GridColumn>
		</Grid>
	</Screen>
);

export default Dashboard;
