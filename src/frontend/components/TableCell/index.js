import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const TableCell = ({
	children,
	modifiers,
}) => {
	const bm = 'TableCell';

	return (
		<td className={cx(bm, '', modifiers)}>{children}</td>
	);
};

TableCell.propTypes = {
	children: T.node,
	modifiers: T.array,
};

export default TableCell;
