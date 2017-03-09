import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';

let actions = [
	<Button to={'/faktury/nova-faktura'} modifiers={['primary', 'big']}>Nová faktura</Button>,
];

const Invoices = () => (
	<Screen title="Faktury" actions={actions}>
		<Grid>
			<GridColumn>
				<Box title="Neuhrazené faktury">
					Faktury
				</Box>

				<Box title="Uhrazené faktury">
					Faktury
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default Invoices;
