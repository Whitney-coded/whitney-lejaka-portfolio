
import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				cyber: {
					"black": "#000000",
					"dark-blue": "#111111", 
					"blue": "#222222",
					"neon": "#00FF66",
					"neon-light": "#00C852", // Slightly darker for light mode
					"magenta": "#ffffff",
					"yellow": "#ffffff"
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'scanline': {
					'0%': { transform: 'translateY(0%)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'text-flicker': {
					'0%': { opacity: '0.8' },
					'10%': { opacity: '0.1' },
					'20%': { opacity: '0.8' },
					'30%': { opacity: '1' },
					'40%': { opacity: '0.8' },
					'50%': { opacity: '0.4' },
					'60%': { opacity: '1' },
					'70%': { opacity: '0.8' },
					'80%': { opacity: '0.2' },
					'90%': { opacity: '0.8' },
					'100%': { opacity: '1' }
				},
			'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'gradientShift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch': 'glitch 0.5s linear infinite',
				'scanline': 'scanline 8s linear infinite',
				'text-flicker': 'text-flicker 2s linear infinite',
				'float': 'float 6s ease-in-out infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(to right, rgba(0, 255, 102, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 102, 0.05) 1px, transparent 1px)',
				'cyber-grid-light': 'linear-gradient(to right, rgba(0, 200, 82, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 200, 82, 0.05) 1px, transparent 1px)',
				'cyber-glow': 'radial-gradient(circle, rgba(0, 255, 102, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
				'cyber-glow-light': 'radial-gradient(circle, rgba(0, 200, 82, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
				'web3-gradient': 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 255, 102, 0.1) 100%)',
				'web3-gradient-light': 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(0, 200, 82, 0.1) 100%)'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function ({ addVariant }) {
			// Add a 'light' variant
			addVariant('light', '.light &');
		}),
	],
} satisfies Config;
