import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// Component
import Wrap from 'components/Wrap';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';

// CSS
import './index.less';

const Header = ({
	modifiers,
}) => {
	const bm = 'Header';

	return (
		<div className={cx(bm, '', modifiers)}>
			<Wrap>
				<Logo />
				<Navigation />
			</Wrap>
		</div>
	);
};

Header.propTypes = {
	modifiers: T.array,
};

export default Header;
