import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { blue, deepPurple } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
	palette: {
		// type: 'dark',
		primary: {
			main: blue['900'], // #0d47a1
		},
		secondary: {
			main: deepPurple['700'], // #512da8
		},
	},
});

// GlobalStyles is a component that wraps the entire application, providing
// access to the theme object and applying a global CSS reset / normalizer.
export const GlobalStyles = ({ children }) => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		{children}
	</ThemeProvider>
);

GlobalStyles.propTypes = {
	children: PropTypes.node.isRequired,
};
