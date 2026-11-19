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
  			background: '#0c0705',
  			card: '#160d09',
  			cardBorder: 'rgba(187, 148, 87, 0.15)',
  			luxury: {
  				wine: '#6f1d1b',
  				wineDark: '#4a1110',
  				gold: '#bb9457',
  				goldLight: '#d6b37c',
  				chocolate: '#432818',
  				chocolateDark: '#29180e',
  				bronze: '#99582a',
  				bronzeLight: '#b86d37',
  				cream: '#ffe6a7',
  				creamLight: '#fff2d4',
  				ground: '#0c0705',
  				surface: '#170e0a',
  				surfaceLight: '#241610',
  				border: '#3b2315',
  				borderLight: '#593621'
  			},
  			accent: {
  				gold: '#bb9457',
  				cream: '#ffe6a7',
  				bronze: '#99582a',
  				wine: '#6f1d1b',
  				blue: '#bb9457',
  				electric: '#99582a',
  				cyan: '#ffe6a7',
  				teal: '#bb9457'
  			},
  			brand: {
  				navy: '#0c0705',
  				charcoal: '#170e0a',
  				surface: '#1f130c',
  				surfaceLight: '#2c1b12',
  				muted: '#bfae9c'
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
