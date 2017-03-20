import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import InvoiceContainer from 'containers/InvoiceContainer';

const Invoice = (props) => (
	<Screen title="Faktury">
		<Grid>
			<GridColumn>
				<Box title="Detail faktury">
					<InvoiceContainer action="detail" id={props.params.invoiceId} />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default Invoice;
