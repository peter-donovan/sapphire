/*
 * DarkStar Systems
 *      v0.7.2
 * Sapphire Theme
 */

const theme = {
	// Application colors
	colors: {
		// Greyscale colors
		white: '#ffffff',
		grey100: '#e4e7eb',
		grey200: '#c9d0d7',
		grey300: '#afb9c3',
		grey400: '#94a2b0',
		grey500: '#798b9c',
		grey600: '#627385',
		grey700: '#4e5c6a',
		grey800: '#3b454f',
		grey900: '#272e35',
		black: '#13171a',
		// Brand colors
		brand: {
			primary: '#6ff7f7',
			secondary: '#0f3052',
			accent: '#37deb4',
			success: '#54f07b',
			info: '#54c9f0',
			warning: '#f0c954',
			danger: '#f2ae7d',
			light: '#e4e7eb',
			dark: '#041424',
		},
		// Element colors helpers (text, foreground, background, links, borders, etc.)
		element: {
			active: '#ffffff',
			header: '#e4e7eb',
			body: '#c9d0d7',
			shadow: '#afb9c3',
			muted: '#94a2b0',
			placeholder: '#798b9c',
			border: '#627385',
			disabled: '#4e5c6a',
			dark: '#272e35',
			black: '#13171a',
			link: '#37deb4',
		},
	},
	// Fonts / Typography
	fonts: {
		baseSize: '16px',
		family: {
			main: `"Noto Sans JP", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
			code: `Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace`,
		},
		weight: {
			light: 300,
			normal: 400,
			medium: 500,
			bold: 700,
			black: 900,
		},
	},
	// Breakpoints (for use with media queries)
	breakpoints: {
		xs: '0px',
		sm: '480px',
		md: '768px',
		lg: '1280px',
		xl: '1920px',
	},
};

export const { colors, fonts, breakpoints } = theme;
