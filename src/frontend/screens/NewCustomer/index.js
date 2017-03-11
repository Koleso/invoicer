import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import NewCustomerContainer from 'containers/NewCustomerContainer';

const NewCustomer = () => (
	<Screen title="Subjekty">
		<Grid>
			<GridColumn>
				<Box title="Vytvoření nového odběratele">
					<NewCustomerContainer />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default NewCustomer;
