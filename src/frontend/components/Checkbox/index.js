import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Input extends React.Component {

	static propTypes = {
		value: T.any,
		indeterminate: T.bool,
		onChange: T.func,
		children: T.node,
	};

	render() {
		const bm = 'Checkbox';
		const {
			value,
			indeterminate = false,
			onChange,
			children,
			modifiers,
		} = this.props;

		return (
			<label className={cx(bm, '', modifiers)}>
				<input
					type="checkbox"
					value={value}
					onChange={onChange}
					className={cx(bm, 'checkbox', [indeterminate])}
				/>
				<div className={cx(bm, 'label')}>
					{children}
				</div>
			</label>
		);
	}
}

