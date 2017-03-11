import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class TableRow extends React.Component {

	static propTypes = {
		children: T.node,
		modifiers: T.array,
	};

	render() {
		const bm = 'TableRow';
		const {
			children,
			modifiers,
		} = this.props;

		return (
			<tr className={cx(bm, '', modifiers)}>{children}</tr>
		);
	}
}
