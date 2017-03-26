import React from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Spinner = ({ modifiers }) => {
	const bm = 'Spinner';

	return (
		<div className={cx(bm, '', modifiers)}>
			<div className={cx(bm, 'spinner')}></div>
		</div>
	);
};

export default Spinner;
