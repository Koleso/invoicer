import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import EmptyState from 'components/EmptyState';

const Invoice = () => (
	<Screen title="Faktury">
		<Grid>
			<GridColumn>
				<Box>
					<EmptyState title="Tato faktura neexistuje" modifiers={['invoice', 'big']}>
						Nevím co se stalo, ale faktura tu už není. Bureš byl informován.
					</EmptyState>
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default Invoice;
