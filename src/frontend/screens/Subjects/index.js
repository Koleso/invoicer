import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Button from 'components/Button';
import Box from 'components/Box';
import Table from 'components/Table';
import TableRow from 'components/TableRow';
import TableCell from 'components/TableCell';
import Link from 'components/Link';

const actions = [
	<Button
		key="add-customer"
		to={'/subjekty/novy-odberatel'}
		modifiers={['primary', 'big']}
	>
		Nový odběratel
	</Button>,
	<Button
		key="add-suppliers"
		to={'/subjekty/novy-dodavatel'}
		modifiers={['big']}
	>
		Nový dodavatel
	</Button>,
];

const Subjects = ({ customers, suppliers }) => (
	<Screen title="Subjekty" actions={actions}>
		<Grid>
			<GridColumn>
				<Box title="Odběratelé">
					<Table>
						{customers.map(customer =>
							<TableRow key={customer.id}>
								<TableCell>
									<div className="TableCell--primary">
										<Link to={`/subjekty/${customer.id}`} modifiers={['tableLink']}>{customer.name}</Link>
									</div>
									<div className="TableCell--secondary">IČ: {customer.ic}</div>
								</TableCell>
								<TableCell>
									<div className="TableCell--primary">{customer.city}</div>
									<div className="TableCell--secondary">{customer.street}, {customer.zip}</div>
								</TableCell>
								<TableCell>
									<div className="TableCell--primary">{customer.contact_person}</div>
									<div className="TableCell--secondary">{customer.email}</div>
								</TableCell>
								<TableCell modifiers={['actions']}>
									<Button
										to={`/subjekty/upravit-odberatele/${customer.id}`}
										modifiers={['tableBtn', 'iconBtn', 'edit']}
									/>
									<Button
										to={`/subjekty/smazat-odberatele/${customer.id}`}
										modifiers={['tableBtn', 'iconBtn', 'delete']}
									/>
								</TableCell>
							</TableRow>
						)}
					</Table>
				</Box>

				<Box title="Dodavatelé">
					<Table>
						{suppliers.map(supplier =>
							<TableRow key={supplier.id}>
								<TableCell>
									<div className="TableCell--primary">
										<Link to={`/subjekty/${supplier.id}`} modifiers={['tableLink']}>{supplier.name}</Link>
									</div>
									<div className="TableCell--secondary">IČ: {supplier.ic}</div>
								</TableCell>
								<TableCell>
									<div className="TableCell--primary">{supplier.city}</div>
									<div className="TableCell--secondary">{supplier.street}, {supplier.zip}</div>
								</TableCell>
								<TableCell>
									<div className="TableCell--primary">{supplier.payer ? 'Plátce DPH' : 'Neplátce DPH'}</div>
									<div className="TableCell--secondary">{supplier.currency && `Měna ${supplier.currency}`}</div>
								</TableCell>
								<TableCell modifiers={['actions']}>
									<Button
										to={`/subjekty/upravit-dodavatele/${supplier.id}`}
										modifiers={['tableBtn', 'iconBtn', 'edit']}
									/>
									<Button
										to={`/subjekty/smazat-dodavatele/${supplier.id}`}
										modifiers={['tableBtn', 'iconBtn', 'delete']}
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

export default Subjects;
