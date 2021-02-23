import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from 'theme/variables';

// Routes
import Home from 'routes/Home';
import Chat from 'routes/Chat';
import NotFound from 'routes/NotFound';

import { NavigationBar } from 'components/NavigationBar';

const App = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				<NavigationBar />
				<MainContainer>
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
				</MainContainer>
			</BrowserRouter>
		</React.Fragment>
	);
};

export default App;

const MainContainer = styled.main`
	background-color: ${colors.brand.secondary};
	margin-top: 3.5rem;
	height: calc(100vh - 3.5rem);
`;
