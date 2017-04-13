import React from 'react';

// Components
import DashboardContainer from 'containers/DashboardContainer';
import Screen from 'components/Screen';
import Button from 'components/Button';

const actions = [
	<Button
		key="add-invoice"
		to={'/faktury/nova-faktura'}
		modifiers={['primary', 'big']}
	>
		Nová faktura
	</Button>,
];

const Dashboard = () => (
	<Screen title="Dashboard" pageTitle="Dashboard" actions={actions}>
		<DashboardContainer/>
	</Screen>
);

export default Dashboard;
