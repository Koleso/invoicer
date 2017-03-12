import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from 'containers/AppContainer';

import Login from 'screens/Login';
import Signup from 'screens/Signup';

import Dashboard from 'screens/Dashboard';
import Invoices from 'screens/Invoices';
import SubjectsContainer from 'containers/SubjectsContainer';
import CustomerContainer from 'containers/CustomerContainer';
import Settings from 'screens/Settings';

import NewInvoice from 'screens/NewInvoice';
import AddCustomer from 'screens/Customer/add';
import EditCustomer from 'screens/Customer/edit';
import DeleteCustomer from 'screens/Customer/delete';
import NewSupplier from 'screens/NewSupplier';

const errorLoading = (err) => console.error('Dynamic screen loading failed', err);
const loadRoute = (callback) => (module) => callback(null, module.default);

// TODO: Iakov to the rescue, fokin activeClassName not working
const configureRoutes = () => ([
	<Route path="/" component={AppContainer}>
		<IndexRoute component={Dashboard} />

		<Route path="faktury" component={Invoices} />
		<Route path="faktury/nova-faktura" component={NewInvoice} />

		<Route path="subjekty" component={SubjectsContainer} />
		<Route path="subjekty/novy-odberatel" component={AddCustomer} />
		<Route path="subjekty/upravit-odberatele/:customerId" component={EditCustomer} />
		<Route path="subjekty/smazat-odberatele/:customerId" component={DeleteCustomer} />
		<Route path="subjekty/novy-dodavatel" component={NewSupplier} />

		<Route path="nastaveni" component={Settings} />

	</Route>,
	<Route path="/login" component={Login} />,
	<Route path="/registrace" component={Signup} />,
]);

export default configureRoutes;
