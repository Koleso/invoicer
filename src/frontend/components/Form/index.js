import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Form = ({
	children,
	...props,
}) => {
	const bm = 'Form';

	return (
		<form className={cx(bm, '')} {...props}>
			{children}
		</form>
	);
};

Form.propTypes = {
	children: T.node,
};

export default Form;
