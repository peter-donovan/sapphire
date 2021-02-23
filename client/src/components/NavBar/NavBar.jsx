import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from 'theme/variables';

// TODO: Move the routes to a `constants` file to keep all magic strings and such in one place
const NavBar = () => {
	return (
		<Nav>
			<Brand to="/">
				<h1>Sapphire</h1>
			</Brand>
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

export default NavBar;

const Nav = styled.nav`
	align-items: center;
	background-image: linear-gradient(${colors.brand.secondary}, ${colors.brand.dark});
	border-bottom: 2px solid ${colors.element.border};
	display: flex;
	flex-direction: row;
	height: 3.5rem;
	padding: 1.25rem;
`;

const NavItems = styled.ul`
	align-items: center;
	display: flex;
	flex-direction: row;
`;

const Brand = styled(Link)`
	text-decoration: none;
`;
