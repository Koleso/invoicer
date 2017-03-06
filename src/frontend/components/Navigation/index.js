import React from 'react';
import { Link, IndexLink } from 'react-router';
import cx from 'helpers/classes';

// CSS
import './index.less';

export default class Navigation extends React.Component {

	render() {
		const bm = 'Navigation';

		return (
			<div className={cx(bm, '')}>
				<IndexLink to="/" className={cx(bm, 'item', ['dashboard'])} activeClassName="isActive">
					Dashboard
				</IndexLink>
				<Link to="/faktury" className={cx(bm, 'item', ['invoices'])} activeClassName="isActive">
					Faktury
				</Link>
				<Link to="/subjekty" className={cx(bm, 'item', ['subjects'])} activeClassName="isActive">
					Subjekty
				</Link>
				<Link to="/nastaveni" className={cx(bm, 'item', ['settings'])} activeClassName="isActive">
					Nastavení
				</Link>
			</div>
		);
	}
}
