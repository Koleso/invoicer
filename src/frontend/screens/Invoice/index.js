import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';

// Forms
import InvoiceContainer from 'containers/InvoiceContainer';

const actions = [
	<Button
		key="print"
		onClick={() => window.print()}
		modifiers={['primary', 'big']}
	>
		Vytisknout fakturu
	</Button>,
];

const Invoice = (props) => (
	<Screen title="Faktury" pageTitle={`Faktura č.${props.params.invoiceId}`} actions={actions}>
		<Grid>
			<GridColumn>
				<Box title="Detail faktury">
					<InvoiceContainer action="detail" invoiceId={props.params.invoiceId} />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default Invoice;
