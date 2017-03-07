import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Form extends React.Component {

	static propTypes = {
		children: T.node,
	};

	render() {
		const bm = 'Form';
		const {
			children,
		} = this.props;

		return (
			<div className={cx(bm, '')}>
				{children}
			</div>
		);
	}
}
