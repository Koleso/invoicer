import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';
import defaultTitle from 'helpers/defaultTitle';

// CSS
import './index.less';

const Screen = ({
	children,
	title,
	modifiers,
	actions,
	pageTitle,
}) => {
	const bm = 'Screen';

	if (pageTitle) {
		document.title = pageTitle + defaultTitle;
	}

	return (
		<div className={cx(bm, '', modifiers)}>
			<div className={cx(bm, 'header')}>
				<div className={cx(bm, 'title')}>
					<h1>{title}</h1>
				</div>
				<div className={cx(bm, 'actions')}>
					{actions}
				</div>
			</div>
			<div className={cx(bm, 'content')}>
				{children}
			</div>
		</div>
	);
};

Screen.propTypes = {
	children: T.node.isRequired,
	title: T.string.isRequired,
	modifiers: T.array,
	actions: T.array,
	pageTitle: T.string,
};

export default Screen;
