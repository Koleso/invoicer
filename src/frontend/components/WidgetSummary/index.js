import React, { PropTypes as T } from 'react';
import cx from 'helpers/classes';
import numeral from 'numeral';

// CSS
import './index.less';

export default class WidgetSummary extends React.Component {

	static propTypes = {
		notPaid: T.number.isRequired,
		paid: T.number.isRequired,
	};

	render() {
		const bm = 'WidgetSummary';
		const {
			notPaid,
			paid,
		} = this.props;

		return (
			<div className={cx(bm, '')}>
				<div className={cx(bm, 'notPaid')}>
					<p className={cx(bm, 'number')}>{numeral(notPaid).format('0,0').replace(',', ' ')} Kč</p>
					<p className={cx(bm, 'text')}>Celková výše<br /> <strong>neuhrazených</strong> pohledávek</p>
				</div>
				<div className={cx(bm, 'paid')}>
					<p className={cx(bm, 'number')}>{numeral(paid).format('0,0').replace(',', ' ')} Kč</p>
					<p className={cx(bm, 'text')}>Celková výše<br /> <strong>uhrazených</strong> pohledávek</p>
				</div>
			</div>
		);
	}
}
