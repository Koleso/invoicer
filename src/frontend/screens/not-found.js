import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import EmptyState from 'components/EmptyState';

const NotFound = () => (
	<Screen title="Stránka nenalezena">
		<Grid>
			<GridColumn>
				<Box>
					<EmptyState title="Tato stránka neexistuje" modifiers={['page', 'big']}>
						Nevím co se stalo, ale tato stránka tu už není. Asi ji někdo smazal.
					</EmptyState>
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default NotFound;
