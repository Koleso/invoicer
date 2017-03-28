import React from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Notification = (props) => {
	const bm = 'Notification';

	return (
		<div className={cx(bm, '')}>
			<div key={props.id} className={cx(bm, 'item')}>
				<div className={cx(bm, 'icon', [props.kind])}></div>
				<div className={cx(bm, 'content')}>
					{props.message}
				</div>
			</div>
		</div>
	);
};

export default Notification;
