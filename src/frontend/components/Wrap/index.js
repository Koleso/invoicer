import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Wrap extends React.Component {

	static propTypes = {
		children: T.node,
		modifiers: T.array,
	};

	render() {
		const bm = 'Wrap';
		const {
			children,
			modifiers,
		} = this.props;

		return (
			<div
				className={cx(bm, '', modifiers)}
			>
				{children}
			</div>
		);
	}
}
