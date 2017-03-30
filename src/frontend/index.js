import React from 'react';
import { compose } from 'recompose';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Notifs } from 'redux-notifications';

import configureRoutes from './configureRoutes';

import Notification from 'components/Notification';

// Assets
import 'frontend/static/favicon.png';
import './styles/style.less';

const withStore = Component => ({ ...props, store }) => (
	<Provider store={store}>
		<div>
			<Component {...props} />
			<Notifs CustomComponent={Notification} componentClassName="NotificationsList" />
		</div>
	</Provider>
);

const renderApp = ({ store }) => (
	<Router
		history={syncHistoryWithStore(browserHistory, store)}
		routes={configureRoutes()}
	/>
);

export default compose(
	withStore,
)(renderApp);
