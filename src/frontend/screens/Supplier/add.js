import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import SupplierContainer from 'containers/SupplierContainer';

const AddSupplier = () => (
	<Screen title="Subjekty">
		<Grid>
			<GridColumn>
				<Box title="Vytvoření nového dodavatele">
					<SupplierContainer action="add" />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default AddSupplier;
