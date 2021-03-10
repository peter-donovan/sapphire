import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const [open, setOpen] = useState(false);

	return (
		<nav>
			<Link to="/">
				<h1>Sapphire</h1>
			</Link>
		</nav>
	);
};

export default Header;
