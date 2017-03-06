import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Screen extends React.Component {

	static propTypes = {
		children: T.node.isRequired,
		title: T.string.isRequired,
		modifiers: T.array,
		actions: T.array,
	};

	render() {
		const bm = 'Screen';
		const {
			children,
			title,
			modifiers,
			actions,
		} = this.props;

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
	}
}
