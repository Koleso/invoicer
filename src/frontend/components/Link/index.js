import React, { PropTypes as T } from 'react';
import { Link as ReactLink } from 'react-router';
import cx from 'helpers/classes';
import isFunction from 'helpers/isfunction';

// CSS
import './index.less';

const Link = ({
	to,
	children,
	modifiers,
	onClick,
	...props,
}) => {
	const bm = 'Link';
	if (isFunction(onClick)) {
		return (
			<ReactLink
				onClick={onClick}
				className={cx(bm, '', modifiers)}
				activeClassName="isActive"
				{...props}
			>
				{children}
			</ReactLink>
		);
	}

	return (
		<ReactLink
			className={cx(bm, '', modifiers)}
			activeClassName="isActive"
			to={to}
			{...props}
		>
			{children}
		</ReactLink>
	);
};

Link.propTypes = {
	children: T.node,
	modifiers: T.array,
};

export default Link;
