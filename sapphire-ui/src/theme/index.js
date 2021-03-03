import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#789aff',
		},
		secondary: {
			main: '#bd93f9',
		},
		error: {
			main: '#ff7878',
		},
		warning: {
			main: '#ffb86c',
		},
		info: {
			main: '#5effc9',
		},
		success: {
			main: '#8aff80',
		},
	}
});
