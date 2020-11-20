import { swiss, deep } from '@theme-ui/presets';

export default {
  ...swiss,
  useCustomProperties: true,
  useColorSchemeMediaQuery: true,
  colors: {
    // ...swiss.colors,
    text: "#121212",
    light: "#fff",
    background: "#eef0f4",
    primary: "#409eff",
    primaryLight: "#87D4FF",
    muted: "#909399",
    mutedLight: "#b7b9bd",
    dark: "#565656",
    highlight: "#eee",
    modes: {
      dark: {
        ...deep.colors,
      },
    },
  },
  fonts: {
    body: "Rubik,system-ui, sans-serif",
    heading: 'Rubik, "Avenir Next", sans-serif',
  },
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 500,
  },
  breakpoints: ["768px", "1280px", "1600px"],
  layout: {
    container: {
      maxWidth: 1480,
      mx: 'auto',
      py: 3,
      px: 4,
    },
  },
  buttons: {
    primary: {
      cursor: 'pointer',
    },
  },
  links: {
    nav: {
      fontFamily: 'body',
    },
  },
};
