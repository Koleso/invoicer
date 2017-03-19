import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Notification = ({
	children,
	type,
	modifiers,
}) => {
	const bm = 'Notification';

	let typeIcon = 'success';
	if (type === 'error') {
		typeIcon = type;
	}

	return (
		<div className={cx(bm, '')}>
			<div className={cx(bm, 'item', modifiers)}>
				<div className={cx(bm, 'icon', [typeIcon])}></div>
				<div className={cx(bm, 'content')}>
					{children}
				</div>
				<div className={cx(bm, 'close')}></div>
			</div>
		</div>
	);
};

Notification.propTypes = {
	children: T.node.isRequired,
	type: T.string,
	modifiers: T.array,
};

export default Notification;
