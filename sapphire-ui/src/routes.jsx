import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Chat from 'pages/Chat';
import NotFound from 'pages/NotFound';

const routeMetadata = [{}];

const Routes = () => {
	return (
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
	);
};

export default Routes;
