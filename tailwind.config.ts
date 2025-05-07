
import type { Config } from "tailwindcss";

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
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'serif'],
			},
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
				horizop: {
					yellow: '#FFC700',
					black: '#000000',
					white: '#FFFFFF',
					lightYellow: '#FEF7CD',
					darkYellow: '#E6B400',
					navy: '#1A2B40',
					green: '#0D8A6F',
					lightBlue: '#E3F6FF',
					lightGray: '#F8F9FA',
					charcoal: '#2C3E50',
					ivory: '#FFFFF0',
					slate: '#708090',
					gold: '#D4AF37',
					emerald: '#2ECC71',
					burgundy: '#800020',
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
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px 5px rgba(255, 199, 0, 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 20px 10px rgba(255, 199, 0, 0.8)' 
					},
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					},
				},
				'spin-slow': {
					'0%': { 
						transform: 'rotate(0deg)' 
					},
					'100%': { 
						transform: 'rotate(360deg)' 
					},
				},
				'bounce-subtle': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-5px)' 
					},
				},
				'background-pan': {
					'0%': { 
						backgroundPosition: '0% 50%' 
					},
					'100%': { 
						backgroundPosition: '100% 50%' 
					},
				},
				'particle-move': {
					'0%': { 
						transform: 'translate(0, 0)' 
					},
					'25%': { 
						transform: 'translate(10px, -10px)' 
					},
					'50%': { 
						transform: 'translate(0, -20px)' 
					},
					'75%': { 
						transform: 'translate(-10px, -10px)' 
					},
					'100%': { 
						transform: 'translate(0, 0)' 
					},
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'pulse-glow': 'pulse-glow 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'spin-slow': 'spin-slow 15s linear infinite',
				'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
				'background-pan': 'background-pan 15s ease infinite alternate',
				'particle-1': 'particle-move 12s ease-in-out infinite',
				'particle-2': 'particle-move 15s ease-in-out infinite reverse',
				'particle-3': 'particle-move 18s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
