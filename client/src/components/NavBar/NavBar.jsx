import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Gem } from '@styled-icons/fa-regular/Gem';

import { colors, fonts } from 'theme/variables';

const NavBar = () => {
	return (
		<Nav>
			<Logo to="/">
				<Gem size="22.5" title="application logo" />
				<h1>Sapphire</h1>
			</Logo>
			<HamburgerIcon>
				<span />
				<span />
				<span />
			</HamburgerIcon>
			<Menu role="navigation">
				<MenuItem>
					<NavLink to="/chat">Chat</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/register">Register</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/login">Login</NavLink>
				</MenuItem>
			</Menu>
		</Nav>
	);
};

export default NavBar;

const Nav = styled.nav`
	align-items: center;
	background-image: linear-gradient(${colors.brand.secondary}, ${colors.brand.dark});
	border-bottom: 2px solid ${colors.element.border};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 0 1.25rem;
`;

const Logo = styled(Link)`
	align-items: center;
	display: flex;
	text-decoration: none;

	svg {
		color: ${colors.brand.primary};
		margin: 0.35rem 0.25rem 0 0;
	}

	h1 {
		font-weight: ${fonts.weight.black};
		padding: 0.5rem 0;
		text-transform: uppercase;
	}
`;

const HamburgerIcon = styled.div`
	span {
		color: white;
		height: 2px;
		width: 1rem;
	}
`;

const Menu = styled.ul`
	display: flex;
	flex-direction: row;
	margin: 0;
	padding: 0;
`;

const MenuItem = styled.li`
	font-size: 0.95em;
`;
