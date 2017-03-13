import React from 'react';
import cx from 'helpers/classes';

// CSS
import './index.less';

const Checkbox = ({
	input,
	label,
	id,
	name,
	modifiers,
}) => {
	const bm = 'Checkbox';

	return (
		<label className={cx(bm, '', modifiers)}>
			<input
				type="checkbox"
				id={id}
				name={name}
				className={cx(bm, 'checkbox')}
				{...input}
			/>
			<div className={cx(bm, 'label')}>
				{label}
			</div>
		</label>
	);
};

export default Checkbox;
