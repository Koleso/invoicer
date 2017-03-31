import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from 'containers/AppContainer';

import Login from 'screens/Login';
import Signup from 'screens/Signup';
import NotFound from 'screens/not-found';

import DashboardContainer from 'containers/DashboardContainer';
import SubjectsContainer from 'containers/SubjectsContainer';
import SubjectNotFound from 'screens/Subjects/not-found';

import InvoicesContainer from 'containers/InvoicesContainer';
import NewInvoice from 'screens/Invoice/new';
import Invoice from 'screens/Invoice';
import DeleteInvoice from 'screens/Invoice/delete';
import PayInvoice from 'screens/Invoice/pay';
import InvoiceNotFound from 'screens/Invoice/not-found';

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

		<Route path="faktury">
			<IndexRoute component={InvoicesContainer} />
			<Route path="nova-faktura" component={NewInvoice} />
			<Route path="detail/:invoiceId" component={Invoice} />
			<Route path="smazat/:invoiceId" component={DeleteInvoice} />
			<Route path="zmenit-stav/:invoiceId" component={PayInvoice} />
			<Route path="nenalezeno" component={InvoiceNotFound} />
		</Route>

		<Route path="subjekty">
			<IndexRoute component={SubjectsContainer} />
			<Route path="nenalezeno" component={SubjectNotFound} />
			<Route path="novy-odberatel" component={AddCustomer} />
			<Route path="upravit-odberatele/:customerId" component={EditCustomer} />
			<Route path="smazat-odberatele/:customerId" component={DeleteCustomer} />

			<Route path="novy-dodavatel" component={AddSupplier} />
			<Route path="upravit-dodavatele/:supplierId" component={EditSupplier} />
			<Route path="smazat-dodavatele/:supplierId" component={DeleteSupplier} />
		</Route>

		<Route path="*" component={NotFound} />
	</Route>,
	<Route path="login" component={Login} />,
	<Route path="registrace" component={Signup} />,
]);

export default configureRoutes;
