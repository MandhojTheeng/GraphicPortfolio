import { DefaultTheme } from 'styled-components';

const baseTheme = {
  transitions: {
    default: 'all 0.3s ease',
  },
  shadows: {
    primary: '0 10px 20px rgba(255, 76, 96, 0.3)',
    primaryHover: '0 15px 25px rgba(255, 76, 96, 0.4)',
    card: '0 5px 20px rgba(0, 0, 0, 0.2)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

export const darkTheme: DefaultTheme = {
  name: 'dark',
  colors: {
    primary: '#ff4c60',
    secondary: '#6c6ce5',
    yellow: '#ffd15c',
    background: '#1F2235',
    backgroundGradient: 'linear-gradient(135deg, #23263a 0%, #181a20 100%)',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)',
    textLight: 'rgba(255, 255, 255, 0.8)',
    card: '#2A2D3E',
    cardBackground: '#2A2D3E',
    border: 'rgba(255, 255, 255, 0.1)',
    shadow: 'rgba(0, 0, 0, 0.3)',
    navBackground: 'rgba(42, 45, 62, 0.95)',
    button: {
      background: '#ff4c60',
      text: '#ffffff',
      hover: '#ff3d53',
    },
    social: {
      background: '#2A2D3E',
      hover: '#373b52',
    },
  },
  ...baseTheme,
};

export const lightTheme: DefaultTheme = {
  name: 'light',
  colors: {
    primary: '#ff4c60',
    secondary: '#6c6ce5',
    yellow: '#ffd15c',
    background: '#f9f9ff',
    backgroundGradient: 'linear-gradient(135deg, #f3f6fd 0%, #e9eafc 100%)',
    text: '#2a2a2a',
    textSecondary: 'rgba(42, 42, 42, 0.8)',
    textLight: 'rgba(42, 42, 42, 0.8)',
    card: '#ffffff',
    cardBackground: '#ffffff',
    border: 'rgba(0, 0, 0, 0.1)',
    shadow: 'rgba(0, 0, 0, 0.1)',
    navBackground: 'rgba(255, 255, 255, 0.95)',
    button: {
      background: '#ff4c60',
      text: '#ffffff',
      hover: '#ff3d53',
    },
    social: {
      background: '#f3f4f6',
      hover: '#e5e7eb',
    },
  },
  ...baseTheme,
}; 