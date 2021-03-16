import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	header: {
		background: `linear-gradient(-135deg, #0d47a1, #09243e)`,
	},
	logo: {
		fontWeight: 900,
		textShadow: '2px 2px 4px black',
	},
}));

const Header = () => {
	const classes = useStyles();

	const brandLogo = (
		<Typography variant="h5" component="h1" className={classes.logo}>
			Sapphire
		</Typography>
	);

	const displayDesktopHeader = () => {
		return <Toolbar>{brandLogo}</Toolbar>;
	};

	return (
		<header>
			<AppBar className={classes.header}>{displayDesktopHeader()}</AppBar>
		</header>
	);
};

export default Header;
