import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import SupplierContainer from 'containers/SupplierContainer';

const EditSupplier = (props) => (
	<Screen title="Subjekty" pageTitle="Upravit dodavatele">
		<Grid>
			<GridColumn>
				<Box title="Upravit dodavatele">
					<SupplierContainer action="edit" supplierId={props.params.supplierId} />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default EditSupplier;
