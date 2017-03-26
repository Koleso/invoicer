import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import InvoiceContainer from 'containers/InvoiceContainer';

const AddInvoice = () => (
	<Screen title="Faktury">
		<Grid>
			<GridColumn>
				<Box title="Vystavení nové faktury">
					<InvoiceContainer action="add" />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default AddInvoice;
