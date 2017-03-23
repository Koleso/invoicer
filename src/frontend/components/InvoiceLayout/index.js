import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const InvoiceLayout = ({ children }) => {
	const bm = 'Invoice';

	return (
		<div className={cx(bm, '')}>
			{children}
		</div>
	);
};

InvoiceLayout.propTypes = {
	children: T.node.isRequired,
};

export default InvoiceLayout;
