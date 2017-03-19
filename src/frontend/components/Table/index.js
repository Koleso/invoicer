import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Table = ({
	children,
	modifiers,
}) => {
	const bm = 'Table';

	return (
		<table className={cx(bm, '', modifiers)}>
			<tbody>
				{children}
			</tbody>
		</table>
	);
};

Table.propTypes = {
	children: T.node,
	modifiers: T.array,
};

export default Table;
