import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from 'theme';

import Home from 'routes/Home';

function App() {
	return (
		<>
			<GlobalStyles />
			<BrowserRouter>
				<main>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
