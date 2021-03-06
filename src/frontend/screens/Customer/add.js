import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import CustomerContainer from 'containers/CustomerContainer';

const AddCustomer = () => (
	<Screen title="Subjekty"pageTitle="Vytvoření nového odběratele">
		<Grid>
			<GridColumn>
				<Box title="Vytvoření nového odběratele">
					<CustomerContainer action="add" />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default AddCustomer;
