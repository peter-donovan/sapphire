import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from 'theme';

// Routes / Pages
import Home from 'routes/Home';
import Chat from 'routes/Chat';
import NotFound from 'routes/NotFound';

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
						<Route exact path="/chat">
							<Chat />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</>
	);
}

export default App;
