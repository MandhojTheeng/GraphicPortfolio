import { DefaultTheme } from 'styled-components';

const baseTheme = {
  transitions: {
    default: '0.3s ease-in-out',
  },
  shadows: {
    primary: '0 10px 20px rgba(99, 102, 241, 0.3)',
    primaryHover: '0 15px 25px rgba(99, 102, 241, 0.4)',
    card: '0 5px 20px rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: '#6366f1',
    secondary: '#4f46e5',
    yellow: '#ffd15c',
    background: '#ffffff',
    backgroundGradient: 'linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
    text: '#1f2937',
    textSecondary: '#4b5563',
    textLight: 'rgba(31, 41, 55, 0.8)',
    card: '#ffffff',
    cardBackground: '#ffffff',
    border: '#e5e7eb',
    shadow: 'rgba(0, 0, 0, 0.1)',
    navBackground: 'rgba(255, 255, 255, 0.95)',
    button: {
      background: '#6366f1',
      text: '#ffffff',
      hover: '#4f46e5',
    },
    social: {
      background: '#f3f4f6',
      hover: '#e5e7eb',
    },
  },
  ...baseTheme,
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primary: '#818cf8',
    secondary: '#6366f1',
    yellow: '#ffd15c',
    background: '#111827',
    backgroundGradient: 'linear-gradient(180deg, rgba(129, 140, 248, 0.1) 0%, rgba(17, 24, 39, 0) 100%)',
    text: '#f9fafb',
    textSecondary: '#d1d5db',
    textLight: 'rgba(249, 250, 251, 0.8)',
    card: '#1f2937',
    cardBackground: '#1f2937',
    border: '#374151',
    shadow: 'rgba(0, 0, 0, 0.3)',
    navBackground: 'rgba(17, 24, 39, 0.95)',
    button: {
      background: '#818cf8',
      text: '#ffffff',
      hover: '#6366f1',
    },
    social: {
      background: '#1f2937',
      hover: '#374151',
    },
  },
  ...baseTheme,
}; 