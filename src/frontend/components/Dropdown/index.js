import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Dropdown extends React.Component {

	static propTypes = {
		label: T.string,
		options: T.array.isRequired,
		input: T.object,
		multiple: T.bool,
		disabled: T.bool,
	};

	render() {
		const bm = 'Dropdown';
		const {
			label,
			multiple,
			defaultValue,
			options,
			onChange,
			disabled = false,
			modifiers,
		} = this.props;

		let labelElement = '';
		if (label) {
			labelElement = (<label className={cx(bm, 'label')}>{label}</label>);
		}

		let defaultValueElement = '';
		if (defaultValue) {
			defaultValueElement = (<option>{defaultValue}</option>);
		}

		return (
			<div className={cx(bm, '', modifiers)}>
				{labelElement}
				<select
					onChange={e => onChange(e.target.value)}
					multiple={multiple}
					className={cx(bm, 'trigger')}
					disabled={disabled}
				>
					{defaultValueElement}
					{
						options.map((item, index) =>
							<option key={index} value={item['key']}>
								{item['label']}
							</option>
						)
					}
				</select>
			</div>
		);
	}
}
