import React from 'react';
import { connect } from 'react-redux';
import cx from 'helpers/classes';
import app from 'config/firebase';

import Button from 'components/Button';
import { logout } from 'actions/signup';

// CSS
import './index.less';

const UserWidget = (props) => {
	const bm = 'UserWidget';

	return (
		<div className={cx(bm, '')}>
			<span className={cx(bm, 'user')}>
				{app.auth().currentUser.email}
			</span>
			<Button
				onClick={() => { return props.logout(); }}
				modifiers={['iconBtn', 'logout']}
				title="Odhlásit se"
			/>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	logout: () => dispatch(logout()),
});

export default connect(
	null,
	mapDispatchToProps
)(UserWidget);
