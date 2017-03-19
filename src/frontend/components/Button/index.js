import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Button = ({
	children,
	href,
	to,
	modifiers,
	type,
	...other,
}) => {
	const bm = 'Button';

	let BtnTag = 'button';
	if (href) {
		BtnTag = 'a';
	}

	if (to) {
		return (
			<Link
				className={cx(bm, '', modifiers)}
				to={to}
				activeClassName="isActive"
			>
				{children}
			</Link>
		);
	}

	let finalType = type;
	if (!finalType) {
		finalType = 'button';
	}

	return (
		<BtnTag
			className={cx(bm, '', modifiers)}
			{...other}
			href={href}
			type={finalType}
		>
			{children}
		</BtnTag>
	);
};

Button.propTypes = {
	children: T.node,
	href: T.any,
	to: T.any,
	modifiers: T.array,
};

export default Button;

