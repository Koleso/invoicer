import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';
import WidgetSummary from 'components/WidgetSummary';

let actions = [
	<Button to={'/faktury/nova-faktura'} modifiers={['primary', 'big']}>Nová faktura</Button>,
];

const Dashboard = () => (
	<Screen title="Dashboard" actions={actions}>
		<Grid size={2}>
			<GridColumn>
				<Box title="Pohledávky" modifiers={['smallMargin']}>
					<WidgetSummary paid={1234} notPaid={12345} />
				</Box>

				<Box title="Neuhrazené faktury" modifiers={['smallMargin']} />
			</GridColumn>

			<GridColumn>
				<Box title="Příjem za posledních 6 měsíců" modifiers={['smallMargin']} />
			</GridColumn>
		</Grid>
	</Screen>
);

export default Dashboard;

/*
<div className="NotificationsList">
			<Notification>Faktura cislo <strong>20160601</strong> byla uspesne vytvorena</Notification>
			<Notification>Faktura cislo 20160601 byla uspesne vytvorena</Notification>
			<Notification type="error">Neco se posralo</Notification>
		</div>
 */
