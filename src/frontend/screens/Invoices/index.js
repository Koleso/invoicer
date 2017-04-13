import React from 'react';

// Components
import InvoicesContainer from 'containers/InvoicesContainer';
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

const Invoices = () => (
	<Screen title="Faktury" pageTitle="Faktury" actions={actions}>
		<InvoicesContainer />
	</Screen>
);

export default Invoices;
