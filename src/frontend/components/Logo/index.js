import React from 'react';
import { IndexLink } from 'react-router';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Logo = () => {
	const bm = 'Logo';

	return (
		<IndexLink to="/" className={cx(bm, '')} />
	);
};

export default Logo;
