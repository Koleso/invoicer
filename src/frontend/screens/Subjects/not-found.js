import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import EmptyState from 'components/EmptyState';

const Subject = () => (
	<Screen title="Subjekty">
		<Grid>
			<GridColumn>
				<Box>
					<EmptyState title="Tento subjekt neexistuje" modifiers={['subject', 'big']}>
						Nevím co se stalo, ale subjekt tu už není. Asi ho někdo smazal.
					</EmptyState>
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default Subject;
