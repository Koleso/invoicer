import React from 'react';

// Components
import Grid, { GridColumn } from 'components/Grid';
import Screen from 'components/Screen';
import Button from 'components/Button';
import Box from 'components/Box';
import Table from 'components/Table';

const data = [
	{
		'name': 'Ernest Howard',
		'email': 'ehoward0@squidoo.com',
		'phone': '420-(658)363-7388'
	}, {
		'name': 'Peter Sims',
		'email': 'psims1@marketwatch.com',
		'phone': '60-(522)964-3271'
	}, {
		'name': 'Anne Ferguson',
		'email': 'aferguson2@delicious.com',
		'phone': '856-(122)992-5649'
	}, {
		'name': 'Fred Hanson',
		'email': 'fhanson3@unesco.org',
		'phone': '249-(988)551-0751'
	}, {
		'name': 'Todd Phillips',
		'email': 'tphillips4@purevolume.com',
		'phone': '33-(429)581-8715'
	}, {
		'name': 'Carlos Arnold',
		'email': 'carnold5@liveinternet.ru',
		'phone': '63-(760)486-7772'
	}, {
		'name': 'Emily Reed',
		'email': 'ereed6@hugedomains.com',
		'phone': '86-(590)883-4576'
	}, {
		'name': 'Dennis Lewis',
		'email': 'dlewis7@ucla.edu',
		'phone': '81-(306)504-0457'
	}, {
		'name': 'Pamela Graham',
		'email': 'pgraham8@networkadvertising.org',
		'phone': '84-(926)249-3733'
	}, {
		'name': 'Anna Pierce',
		'email': 'apierce9@yellowbook.com',
		'phone': '351-(224)580-1730'
	}, {
		'name': 'Anne Kelly',
		'email': 'akellya@tripod.com',
		'phone': '7-(162)186-2484'
	}, {
		'name': 'Joyce Ray',
		'email': 'jrayb@jalbum.net',
		'phone': '33-(480)440-7156'
	}, {
		'name': 'Antonio Mendoza',
		'email': 'amendozac@infoseek.co.jp',
		'phone': '685-(460)646-3853'
	}, {
		'name': 'Lois Bennett',
		'email': 'lbennettd@jigsy.com',
		'phone': '63-(772)700-8284'
	}, {
		'name': 'Mary Burns',
		'email': 'mburnse@eventbrite.com',
		'phone': '86-(942)475-8934'
	}
];

let actions = [
	<Button to={'/subjekty/novy-odberatel'} modifiers={['primary', 'big']}>Nový odběratel</Button>,
	<Button to={'/subjekty/novy-dodavatel'} modifiers={['big']}>Nový dodavatel</Button>,
];

const Subjects = () => (
	<Screen title="Subjekty" actions={actions}>
		<Grid>
			<GridColumn>
				<Box title='Dodavatelé'>
					<Table data={data} />
				</Box>
			</GridColumn>
		</Grid>
	</Screen>
);

export default Subjects;
