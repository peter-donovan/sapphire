import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { GlobalStyles } from 'theme';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles>
			<Router>
				<App />
			</Router>
		</GlobalStyles>
	</React.StrictMode>,
	document.getElementById('root')
);
