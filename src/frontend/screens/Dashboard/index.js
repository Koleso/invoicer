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
	invoicesOverdue,
	paidTotal,
	unpaidTotal,
}) => (
	<Screen title="Dashboard" actions={actions}>
		<Grid size={2}>
			<GridColumn>
				<Box title="Pohledávky" modifiers={['smallMargin']}>
					<WidgetSummary paid={paidTotal} notPaid={unpaidTotal} />
				</Box>

				<Box title="Neuhrazené faktury" modifiers={['smallMargin']}>
					<Table>
						{invoicesOverdue.map(invoice =>
							<TableRow key={invoice.id}>
								<TableCell modifiers={['overdue']}>
									<div className="TableCell--primary">
										<Link to={`/faktury/${invoice.id}`} modifiers={['tableLink']}>
											{subjectNameById(subjects, invoice.customer).name}
										</Link>
									</div>
									<div className="TableCell--secondary">
										{dateFormat(dueDate(invoice.date, invoice.due), 'dd. mm. yyyy')}&nbsp;
										({overdue(invoice.date, invoice.due)} dní po splatnosti)
									</div>
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

			<GridColumn>
				<Box title="Příjem za posledních 6 měsíců" modifiers={['smallMargin']} />
			</GridColumn>
		</Grid>
	</Screen>
);

export default Dashboard;

/*
<div className="NotificationsList">
			<Notification>Faktura cislo <strong>20160601</strong> byla uspesne vytvorena</Notification>
			<Notification>Faktura cislo 20160601 byla uspesne vytvorena</Notification>
			<Notification type="error">Neco se posralo</Notification>
		</div>
 */
