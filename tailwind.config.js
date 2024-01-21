import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},

				one: {
					50: '#fdf6f3',
					100: '#fceae4',
					200: '#fad6ca',
					300: '#f6beab',
					400: '#ef977a',
					500: '#e37550',
					600: '#cf5a33',
					700: '#ae4927',
					800: '#903f24',
					900: '#783924',
					950: '#411b0e'
				},
				two: {
					50: '#f0f7fe',
					100: '#ddebfc',
					200: '#c3ddfa',
					300: '#9ac8f6',
					400: '#6aabf0',
					500: '#478bea',
					600: '#316fdf',
					700: '#295acc',
					800: '#2a4fb2',
					900: '#254183',
					950: '#1b2950'
				},
				three: {
					50: '#f0f9ff',
					100: '#e1f2fd',
					200: '#bee7fc',
					300: '#7fd3fa',
					400: '#3bbdf5',
					500: '#12a5e5',
					600: '#0584c4',
					700: '#06699e',
					800: '#095983',
					900: '#0e4a6c',
					950: '#092f48'
				},
				four: {
					50: '#fdf6f3',
					100: '#fceae4',
					200: '#fbd9cd',
					300: '#f7beaa',
					400: '#f09575',
					500: '#e5754e',
					600: '#d25a30',
					700: '#b04925',
					800: '#923f22',
					900: '#793923',
					950: '#421b0d'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	}
};

export default config;
