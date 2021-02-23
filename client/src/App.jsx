import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// Routes
import Home from 'routes/Home';
import Chat from 'routes/Chat';
import NotFound from 'routes/NotFound';

import { NavBar } from 'components/NavBar';

const App = () => {
	return (
		<MainContainer>
			<NavBar />
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
	);
};

export default App;

const MainContainer = styled.main`
	height: 100vh;
`;
