import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	header: {
		background: `linear-gradient(135deg, #212121, #0D47A1)`,
	},
	logo: {
		fontWeight: 900,
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
