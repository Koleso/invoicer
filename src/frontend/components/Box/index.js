import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Box = ({
	children,
	title,
	modifiers,
}) => {
	const bm = 'Box';

	let boxTitle = '';
	if (title) {
		boxTitle = (
			<div className={cx(bm, 'title')}>
				<h2>{title}</h2>
			</div>
		);
	}

	return (
		<div className={cx(bm, '', modifiers)}>
			{boxTitle}
			<div className={cx(bm, 'content')}>
				{children}
			</div>
		</div>
	);
};

Box.propTypes = {
	children: T.node.isRequired,
	title: T.string,
	modifiers: T.array,
};

export default Box;
