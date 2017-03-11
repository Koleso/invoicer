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
		keyId: T.any,
		keyLabel: T.any,
		disabled: T.bool,
	};

	render() {
		const bm = 'Dropdown';
		const {
			label,
			multiple,
			options,
			keyId,
			keyLabel,
			onChange,
			disabled = false,
			modifiers,
		} = this.props;

		return (
			<div className={cx(bm, '', modifiers)}>
				<label className={cx(bm, 'label')}>{label}</label>
				<select
					onChange={e => onChange(e.target.value)}
					multiple={multiple}
					className={cx(bm, 'trigger')}
					disabled={disabled}
				>
					{
						options.map((item, index) =>
							<option key={index} value={item[keyId]}>
								{item[keyLabel]}
							</option>
						)
					}
				</select>
			</div>
		);
	}
}
