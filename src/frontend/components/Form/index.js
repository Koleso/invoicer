import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Form = ({
	children,
}) => {
	const bm = 'Form';

	return (
		<div className={cx(bm, '')}>
			{children}
		</div>
	);
};

Form.propTypes = {
	children: T.node,
};

export default Form;
