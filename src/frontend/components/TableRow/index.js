import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const TableRow = ({
	children,
	modifiers,
}) => {
	const bm = 'TableRow';

	return (
		<tr className={cx(bm, '', modifiers)}>{children}</tr>
	);
};

TableRow.propTypes = {
	children: T.node,
	modifiers: T.array,
};

export default TableRow;
