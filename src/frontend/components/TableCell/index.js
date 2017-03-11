import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class TableCell extends React.Component {

	static propTypes = {
		children: T.node,
		header: T.bool,
		modifiers: T.array,
	};

	render() {
		const bm = 'TableCell';
		const {
			children,
			modifiers,
		} = this.props;

		return (
			<td className={cx(bm, '', modifiers)}>{children}</td>
		);
	}
}
