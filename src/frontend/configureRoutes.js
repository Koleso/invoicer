import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'frontend/containers/App';

import Login from 'frontend/screens/Login';
import Signup from 'frontend/screens/Signup';

import Dashboard from 'frontend/screens/Dashboard';
import Invoices from 'frontend/screens/Invoices';
import Subjects from 'frontend/screens/Subjects';
import Settings from 'frontend/screens/Settings';

import NewInvoice from 'frontend/screens/NewInvoice';
import NewCustomer from 'frontend/screens/NewCustomer';
import NewSupplier from 'frontend/screens/NewSupplier';

const errorLoading = (err) => console.error('Dynamic screen loading failed', err);
const loadRoute = (callback) => (module) => callback(null, module.default);

const configureRoutes = () => ([
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />

		<Route path="/faktury" component={Invoices} />
		<Route path="/faktury/nova-faktura" component={NewInvoice} />

		<Route path="/subjekty" component={Subjects} />
		<Route path="/subjekty/novy-odberatel" component={NewCustomer} />
		<Route path="/subjekty/novy-dodavatel" component={NewSupplier} />

		<Route path="/nastaveni" component={Settings} />

	</Route>,
	<Route path="/login" component={Login} />,
	<Route path="/registrace" component={Signup} />,
]);

export default configureRoutes;

/*
<Route path="projects">
	<IndexRoute component={Projects} />
	<Route path=":id" component={Project} />
</Route>
*/
