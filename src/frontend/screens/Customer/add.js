import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import CustomerContainer from 'containers/CustomerContainer';

const AddCustomer = React.createClass({
	render() {
		return (
			<Screen title="Subjekty">
				<Grid>
					<GridColumn>
						<Box title="Vytvoření nového odběratele">
							<CustomerContainer action="add" />
						</Box>
					</GridColumn>
				</Grid>
			</Screen>
		);
	}
});

export default AddCustomer;
