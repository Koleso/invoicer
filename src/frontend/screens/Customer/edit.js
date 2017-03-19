import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import CustomerContainer from 'containers/CustomerContainer';

const EditCustomer = (props) => {
	const customerId = props.params.customerId;

	return (
		<Screen title="Subjekty">
			<Grid>
				<GridColumn>
					<Box title="Upravit odběratele">
						<CustomerContainer action="edit" customerId={customerId} />
					</Box>
				</GridColumn>
			</Grid>
		</Screen>
	);
};

export default EditCustomer;
