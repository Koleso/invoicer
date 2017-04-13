import React from 'react';

// Components
import SubjectsContainer from 'containers/SubjectsContainer';
import Screen from 'components/Screen';
import Button from 'components/Button';

const actions = [
	<Button
		key="add-customer"
		to={'/subjekty/novy-odberatel'}
		modifiers={['primary', 'big']}
	>
		Nový odběratel
	</Button>,
	<Button
		key="add-suppliers"
		to={'/subjekty/novy-dodavatel'}
		modifiers={['big']}
	>
		Nový dodavatel
	</Button>,
];

const Subjects = () => (
	<Screen title="Subjekty" pageTitle="Subjekty" actions={actions}>
		<SubjectsContainer/>
	</Screen>
);

export default Subjects;
