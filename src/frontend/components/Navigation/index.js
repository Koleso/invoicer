import React from 'react';
import './index.less';

import { Link } from 'react-router';

const Navigation = () => (
	<div>
		<Link to="/">Dashboard</Link>
		<Link to="/faktury">Faktury</Link>
		<Link to="/subjekty">Subjekty</Link>
    <Link to="/nastaveni">Nastaveni</Link>
    <Link to="/registrace">Login</Link>
	</div>
);

export default Navigation;