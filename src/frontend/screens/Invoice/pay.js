import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import InvoiceContainer from 'containers/InvoiceContainer';

const PayInvoice = (props) => (
	<Screen title="Faktury">
		<Grid>
			<GridColumn>
				<Box title="Změnit stav faktury">
					<InvoiceContainer action="pay" invoiceId={props.params.invoiceId} />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default PayInvoice;
