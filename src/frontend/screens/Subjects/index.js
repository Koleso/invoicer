import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Button from 'components/Button';
import Box from 'components/Box';
import Table from 'components/Table';
import TableRow from 'components/TableRow';
import TableCell from 'components/TableCell';

const actions = [
	<Button to={'/subjekty/novy-odberatel'} modifiers={['primary', 'big']}>Nový odběratel</Button>,
	<Button to={'/subjekty/novy-dodavatel'} modifiers={['big']}>Nový dodavatel</Button>,
];

const Subjects = ({ customers, suppliers }) => (
	<Screen title="Subjekty" actions={actions}>
		<Grid>
			<GridColumn>
				<Box title="Odběratelé">
					<Table>
						{customers.map(customer =>
							<TableRow>
								<TableCell>
									<div className="TableCell-primary">{customer.name}</div>
									<div className="TableCell-secondary">{customer.ic}</div>
								</TableCell>
								<TableCell>
									<div className="TableCell-primary">{customer.city}</div>
									<div className="TableCell-secondary">{customer.street}, {customer.zip}</div>
								</TableCell>
								<TableCell>
									<div className="TableCell-primary">{customer.contact_person}</div>
									<div className="TableCell-secondary">{customer.email}</div>
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
