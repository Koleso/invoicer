import React from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Dropdown = ({
	input,
	label,
	id,
	modifiers,
	options,
	defaultValue,
	disabled,
	required = false,
	meta: { touched, error },
}) => {
	const bm = 'Dropdown';

	let labelElement = '';
	if (label) {
		labelElement = (<label className={cx(bm, 'label')} htmlFor={id}>{label}</label>);
	}

	let defaultValueElement = '';
	if (defaultValue) {
		defaultValueElement = (<option>{defaultValue}</option>);
	}

	return (
		<div className={cx(bm, '', modifiers)}>
			{labelElement}
			{required && <span className={cx(bm, 'required')}>*</span>}
			<select
				className={cx(bm, 'trigger')}
				id={id}
				{...input}
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
			{touched && error && <div className={cx(bm, 'errorMessage')}>{error}</div>}
		</div>
	);
};

export default Dropdown;
