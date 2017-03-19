import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Grid = ({
	children,
	size,
}) => {
	const bm = 'Grid';

	let gridSize = '';
	if (size === 2) {
		gridSize = 'twoColumn';
	}
	if (size === 3) {
		gridSize = 'threeColumn';
	}

	return (
		<div className={cx(bm, '', [gridSize])}>
			{children}
		</div>
	);
};

Grid.propTypes = {
	children: T.node.isRequired,
};

// Grid column
const GridColumn = ({
	children,
}) => {
	const bm = 'GridColumn';

	return (
		<div className={cx(bm, '')}>
			{children}
		</div>
	);
};

Grid.GridColumn = {
	children: T.node.isRequired,
};

export { Grid, GridColumn };
