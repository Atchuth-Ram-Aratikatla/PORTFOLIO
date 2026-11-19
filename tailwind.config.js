/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', "class"],
  theme: {
  	extend: {
  		colors: {
  			background: '#000000',
  			card: '#1f150c',
  			cardBorder: 'rgba(65, 45, 21, 0.6)',
  			luxury: {
  				wine: '#412d15',
  				wineDark: '#1f150c',
  				gold: '#412d15',
  				goldLight: '#e1dcc9',
  				chocolate: '#1f150c',
  				chocolateDark: '#140d07',
  				bronze: '#412d15',
  				bronzeLight: '#634724',
  				cream: '#e1dcc9',
  				creamLight: '#f2eee3',
  				ground: '#000000',
  				surface: '#1f150c',
  				surfaceLight: '#2a1d11',
  				border: '#412d15',
  				borderLight: '#5c4120',
  				muted: '#a89f91'
  			},
  			accent: {
  				gold: '#e1dcc9',
  				cream: '#e1dcc9',
  				bronze: '#412d15',
  				wine: '#412d15',
  				blue: '#e1dcc9',
  				electric: '#412d15',
  				cyan: '#e1dcc9',
  				teal: '#e1dcc9'
  			},
  			brand: {
  				navy: '#000000',
  				charcoal: '#1f150c',
  				surface: '#1f150c',
  				surfaceLight: '#2a1d11',
  				muted: '#a89f91'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'Manrope',
  				'system-ui',
  				'-apple-system',
  				'sans-serif'
  			]
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'subtle-glow': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.12) 0%, transparent 70%)'
  		},
  		boxShadow: {
  			'glow-blue': '0 0 25px -5px rgba(59, 130, 246, 0.25)',
  			'glow-teal': '0 0 25px -5px rgba(20, 184, 166, 0.25)',
  			'premium-card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(255, 255, 255, 0.06)'
  		},
  		animation: {
  			'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		}
  	}
  },
  plugins: [],
}
