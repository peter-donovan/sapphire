import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// TODO: Move the routes to a `constants` file to keep all magic strings and such in one place
const NavigationBar = () => {
	return (
		<Nav>
			<NavItems>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/chat">Chat</NavLink>
				</li>
				<li>
					<NavLink to="/404-route-test">404 Route</NavLink>
				</li>
			</NavItems>
		</Nav>
	);
};

export default NavigationBar;

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	height: 3.5rem;
	left: 0;
	top: 0;
	position: fixed;
`;

const NavItems = styled.ul`
	display: flex;
	flex-direction: row;
`;
