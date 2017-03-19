import React from 'react';

// Components
import { Grid, GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Box from 'components/Box';
import Button from 'components/Button';
import WidgetSummary from 'components/WidgetSummary';

const actions = props => [
	<Button modifiers={['primary', 'big']} onClick={() => props.handleSubmit(mockCustomer)} >Nová faktura</Button>,
];

const Dashboard = (props) => (
	<Screen title="Dashboard" actions={actions(props)}>
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

const mockCustomer = ({
	name: 'Test',
	address: 'Praha Huyaga',
});

// const mapDispatchToProps = (dispatch) => ({
// 	handleSubmit: (customer) => dispatch({ type: "NEW_CUSTOMER", payload: customer }),
// })

//const Dashboard = connect(null, mapDispatchToProps)(renderDashboard);

export default Dashboard;

/*
<div className="NotificationsList">
			<Notification>Faktura cislo <strong>20160601</strong> byla uspesne vytvorena</Notification>
			<Notification>Faktura cislo 20160601 byla uspesne vytvorena</Notification>
			<Notification type="error">Neco se posralo</Notification>
		</div>
 */
