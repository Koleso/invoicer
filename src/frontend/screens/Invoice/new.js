import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import InvoiceFormContainer from 'containers/InvoiceFormContainer';

const Invoice = () => (
	<Screen title="Faktury">
		<Grid>
			<GridColumn>
				<Box title="Vystavení nové faktury">
					<InvoiceFormContainer action="add" />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default Invoice;
