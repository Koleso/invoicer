import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import SupplierContainer from 'containers/SupplierContainer';

const EditSupplier = (props) => {
	const supplierId = props.params.supplierId;

	return (
		<Screen title="Subjekty">
			<Grid>
				<GridColumn>
					<Box title="Upravit dodavatele">
						<SupplierContainer action="edit" supplierId={supplierId} />
					</Box>
				</GridColumn>
			</Grid>
		</Screen>
	);
};

export default EditSupplier;
