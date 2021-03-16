import { createMuiTheme } from '@material-ui/core';
import { blue, indigo } from '@material-ui/core/colors';

export const theme = createMuiTheme({
	palette: {
		// type: 'dark',
		primary: {
			main: blue['900'], // #0d47a1 || blue[900]
		},
		secondary: {
			main: indigo['500'], // #512da8
		},
	},
});
