import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import SupplierContainer from 'containers/SupplierContainer';

const DeleteSupplier = (props) => (
	<Screen title="Subjekty" pageTitle="Smazání dodavatele">
		<Grid>
			<GridColumn>
				<Box title="Smazání dodavatele">
					<SupplierContainer action="delete" supplierId={props.params.supplierId} />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default DeleteSupplier;
