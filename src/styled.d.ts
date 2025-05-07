import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      yellow: string;
      background: string;
      backgroundGradient: string;
      text: string;
      textSecondary: string;
      textLight: string;
      card: string;
      cardBackground: string;
      border: string;
      shadow: string;
      navBackground: string;
      button: {
        background: string;
        text: string;
        hover: string;
      };
      social: {
        background: string;
        hover: string;
      };
    };
    transitions: {
      default: string;
    };
    shadows: {
      primary: string;
      primaryHover: string;
      card: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
} 