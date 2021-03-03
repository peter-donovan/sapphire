import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Gem } from '@styled-icons/fa-regular/Gem';

import { breakpoints, colors, fonts } from 'theme/variables';

const NavBar = () => {
	const [open, setOpen] = useState(false);

	return (
		<Nav>
			<Logo to="/">
				<Gem size="25" title="application logo" />
				<h1>Sapphire</h1>
			</Logo>
			<HamburgerIcon open={open} onClick={() => setOpen(!open)}>
				<span />
				<span />
				<span />
			</HamburgerIcon>
			<Menu role="navigation" open={open}>
				<MenuItem onClick={() => setOpen(!open)}>
					<NavLink to="/chat">Chat</NavLink>
				</MenuItem>
				<MenuItem onClick={() => setOpen(!open)}>
					<NavLink to="/register">Register</NavLink>
				</MenuItem>
				<MenuItem onClick={() => setOpen(!open)}>
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
	padding: 0 1.5rem;
`;

const Logo = styled(Link)`
	align-items: center;
	display: flex;
	text-decoration: none;

	svg {
		color: ${colors.brand.primary};
		margin: 0.25rem 0.25rem 0 0;
	}

	h1 {
		color: ${colors.white};
		font-weight: ${fonts.weight.black};
		padding: 0.5rem 0;
		text-shadow: 2px 2px 2px ${colors.element.black};
	}
`;

const HamburgerIcon = styled.div`
	cursor: pointer;
	display: none;
	flex-direction: column;
	height: 2rem;
	width: 2rem;
	position: fixed;
	top: 0.65rem;
	right: 1.75rem;

	@media (max-width: ${breakpoints.md}) {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-around;
	}

	span {
		background-color: ${colors.brand.light};
		border-radius: 10px;
		height: 0.25rem;
		width: 2rem;
		transform-origin: 1px;
		transition: all 200ms linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
		}

		&:nth-child(2) {
			transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
		}
	}
`;

const Menu = styled.ul`
	display: flex;
	flex-direction: row;
	margin: 0;
	padding: 0;
	position: relative;

	@media (max-width: ${breakpoints.md}) {
		flex-direction: column;
		justify-content: space-around;
		height: ${({ open }) => (open ? '20vh' : '0px')};
		overflow: hidden;
		transition: height 300ms ease-in;
		width: 100%;
	}
`;

const MenuItem = styled.li`
	font-size: 0.9em;

	a {
		color: ${colors.brand.light};
		margin: 2rem;
		text-align: left;
		text-decoration: none;
		text-transform: uppercase;
		text-shadow: 2px 2px 1px ${colors.element.black};
		transition: all 300ms ease-in;

		&:active,
		&:focus,
		&:hover {
			color: ${colors.brand.primary};
		}
	}
`;
