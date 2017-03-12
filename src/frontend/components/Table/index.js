import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Table extends React.Component {

	static propTypes = {
		children: T.node,
		modifiers: T.array,
	};

	render() {
		const bm = 'Table';
		const {
			children,
			modifiers,
		} = this.props;

		return (
			<table className={cx(bm, '', modifiers)}>
				<tbody>
					{children}
				</tbody>
			</table>
		);
	}
}
