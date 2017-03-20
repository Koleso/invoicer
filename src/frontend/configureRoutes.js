import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from 'containers/AppContainer';

import Login from 'screens/Login';
import Signup from 'screens/Signup';

import DashboardContainer from 'containers/DashboardContainer';
import SubjectsContainer from 'containers/SubjectsContainer';

import InvoicesContainer from 'containers/InvoicesContainer';
import NewInvoice from 'screens/Invoices/add';
import Invoice from 'screens/Invoice';

import AddCustomer from 'screens/Customer/add';
import EditCustomer from 'screens/Customer/edit';
import DeleteCustomer from 'screens/Customer/delete';

import AddSupplier from 'screens/Supplier/add';
import EditSupplier from 'screens/Supplier/edit';
import DeleteSupplier from 'screens/Supplier/delete';

// TODO: Iakov to the rescue, fokin activeClassName not working
const configureRoutes = () => ([
	<Route path="/" component={AppContainer}>
		<IndexRoute component={DashboardContainer} />

		<Route path="faktury" component={InvoicesContainer} />
		<Route path="faktury/nova-faktura" component={NewInvoice} />
		<Route path="faktura/:invoiceId" component={Invoice} />

		<Route path="subjekty" component={SubjectsContainer} />
		<Route path="subjekty/novy-odberatel" component={AddCustomer} />
		<Route path="subjekty/upravit-odberatele/:customerId" component={EditCustomer} />
		<Route path="subjekty/smazat-odberatele/:customerId" component={DeleteCustomer} />

		<Route path="subjekty/novy-dodavatel" component={AddSupplier} />
		<Route path="subjekty/upravit-dodavatele/:supplierId" component={EditSupplier} />
		<Route path="subjekty/smazat-dodavatele/:supplierId" component={DeleteSupplier} />

	</Route>,
	<Route path="login" component={Login} />,
	<Route path="registrace" component={Signup} />,
]);

export default configureRoutes;
