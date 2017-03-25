import React from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const InputField = ({
	input,
	label,
	id,
	type,
	modifiers,
	placeholder,
	disabled,
	defaultValue,
	required = false,
	meta: { touched, error },
}) => {
	const bm = 'Input';

	return (
		<div className={cx(bm, '', modifiers)}>
			<label className={cx(bm, 'label')} htmlFor={id}>
				{label}
				{required && <span className={cx(bm, 'required')}>*</span>}
			</label>
			<input
				value={defaultValue}
				className={cx(bm, 'input', touched && error && ['error'])}
				id={id}
				disabled={disabled}
				placeholder={placeholder}
				type={type}
				{...input}
			/>
			{touched && error && <div className={cx(bm, 'errorMessage')}>{error}</div>}
		</div>
	);
};

export default InputField;
