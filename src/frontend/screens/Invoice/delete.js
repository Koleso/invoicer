import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import InvoiceContainer from 'containers/InvoiceContainer';

const DeleteInvoice = (props) => (
	<Screen title="Faktury">
		<Grid>
			<GridColumn>
				<Box title="Smazání faktury">
					<InvoiceContainer action="delete" invoiceId={props.params.invoiceId} />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default DeleteInvoice;
