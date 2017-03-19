import React, { PropTypes as T } from 'react';
import { Link as ReactLink } from 'react-router';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Link = ({
	to,
	children,
	modifiers,
	...props,
}) => {
	const bm = 'Link';

	return (
		<ReactLink
			className={cx(bm, '', modifiers)}
			to={to}
			activeClassName="isActive"
			{...props}
		>
			{children}
		</ReactLink>
	);
};

Link.propTypes = {
	to: T.any,
	children: T.node,
	modifiers: T.array,
};

export default Link;
