import React from 'react';
import ReactDOM from 'react-dom';

import App from 'frontend';
import configureStore from 'frontend/configureStore';

const store = configureStore();

if (DEVSERVER) {
	const AppContainer = require('react-hot-loader').AppContainer;

	ReactDOM.render(
		<AppContainer>
			<App store={store} />
		</AppContainer>,
		document.getElementById('root')
	);

	if (module.hot) {
		module.hot.accept('frontend', () => {
			const NextApp = require('frontend').default;
			ReactDOM.render(
				<AppContainer>
					<NextApp store={store} />
				</AppContainer>,
				document.getElementById('root')
			);
		});
	}
} else {
	ReactDOM.render(<App store={store} />, document.getElementById('root'));
}
