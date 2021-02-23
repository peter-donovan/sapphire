import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Apply CSS reset / normalizer and custom styles
import { GlobalStyles } from 'theme/globalStyles';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
