import React from 'react';
import Navigation from 'components/Navigation';

// CSS
import '../../styles/reset.less';
import '../../styles/utils.less';
import '../../styles/app.less';


const AppLayout = ({ children }) => (
	<div>
		<header>
			Resummed
		</header>
		<Navigation />
		<div>
			{children}
		</div>
		<footer>
			2017 (c) Iakov Markov
		</footer>
	</div>
);

export default AppLayout;