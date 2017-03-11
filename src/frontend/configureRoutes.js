import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from 'containers/AppContainer';

import Login from 'screens/Login';
import Signup from 'screens/Signup';

import Dashboard from 'screens/Dashboard';
import Invoices from 'screens/Invoices';
import SubjectsContainer from 'containers/SubjectsContainer';
import Settings from 'screens/Settings';

import NewInvoice from 'screens/NewInvoice';
import NewCustomer from 'screens/NewCustomer';
import NewSupplier from 'screens/NewSupplier';

const errorLoading = (err) => console.error('Dynamic screen loading failed', err);
const loadRoute = (callback) => (module) => callback(null, module.default);

const configureRoutes = () => ([
	<Route path="/" component={AppContainer}>
		<IndexRoute component={Dashboard} />

		<Route path="/faktury" component={Invoices} />
		<Route path="/faktury/nova-faktura" component={NewInvoice} />

		<Route path="/subjekty" component={SubjectsContainer} />
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
