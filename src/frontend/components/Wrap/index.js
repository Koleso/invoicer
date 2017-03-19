import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Wrap = ({
	children,
	modifiers,
}) => {
	const bm = 'Wrap';

	return (
		<div
			className={cx(bm, '', modifiers)}
		>
			{children}
		</div>
	);
};

Wrap.propTypes = {
	children: T.node,
	modifiers: T.array,
};

export default Wrap;
