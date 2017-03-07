import React from 'react';

// CSS
import '../../styles/reset.less';
import '../../styles/utils.less';
import '../../styles/app.less';

// Components
import Wrap from 'components/Wrap';
import Header from 'components/Header';

const AppLayout = ({ children }) => (
	<div>
		<Header />
		<Wrap>
			{children}
		</Wrap>
	</div>
);

export default AppLayout;
