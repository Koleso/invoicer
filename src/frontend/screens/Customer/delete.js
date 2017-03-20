import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import CustomerContainer from 'containers/CustomerContainer';

const DeleteCustomer = (props) => (
	<Screen title="Subjekty">
		<Grid>
			<GridColumn>
				<Box title="Smazání odběratele">
					<CustomerContainer action="delete" customerId={props.params.customerId} />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default DeleteCustomer;
