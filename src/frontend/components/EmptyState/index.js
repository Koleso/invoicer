import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const EmptyState = ({
	title,
	children,
	modifiers,
}) => {
	const bm = 'EmptyState';

	return (
		<div className={cx(bm, '', modifiers)}>
			<div className={cx(bm, 'title')}>{title}</div>
			{children &&
				<div className={cx(bm, 'description')}>{children}</div>
			}
		</div>
	);
};

EmptyState.propTypes = {
	title: T.string.isRequired,
	children: T.node,
	modifiers: T.array,
};

export default EmptyState;
