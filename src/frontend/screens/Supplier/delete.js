import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';

// Forms
import SupplierContainer from 'containers/SupplierContainer';

const DeleteSupplier = React.createClass({
	render() {
		const { supplierId } = this.props.params;

		return (
			<Screen title="Subjekty">
				<Grid>
					<GridColumn>
						<Box title="Smazání dodavatele">
							<SupplierContainer action="delete" supplierId={supplierId} />
						</Box>
					</GridColumn>
				</Grid>
			</Screen>
		);
	},
});

export default DeleteSupplier;
