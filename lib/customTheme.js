import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
  //breakpoints: ["25em", "30rem", "85em", "120em"],
  fonts: {
    heading: "'Jost-VF', sans-serif;",
    body: "'Jost-VF',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,'Helvetica Neue', sans-serif;",
  },
  colors: {
    ...theme.colors,
    white: "#fff",
    primary: {
      100: "#7b6e90",
      200: "#6f6382",
      300: "#625873",
      400: "#564d65",
      500: "#4a4257",
      600: "#3d3748",
      700: "#312c3a",
    },
    secondary: {
      100: "#fff6e6",
      200: "#ffeecc",
      300: "#ffe5b3",
      400: "#ffdc99",
      500: "#ffd380",
      600: "#ffcb66",
      700: "#ffc24d",
    },
    gray: {
      100: "#99aaa4",
      200: "#8b9f98",
      300: "#7d938c",
      400: "#70877f",
      500: "#647972",
      600: "#596b65",
      700: "#4d5d58",
    },
    dark: {
      100: "#525568",
      200: "#46495a",
      300: "#3b3e4b",
      400: "#30323d",
      500: "#25262f",
      600: "#1a1b20",
      700: "#0e0f12",
    },
  },
  icons: {
    ...theme.icons,
    // ...customIcons,
  },
};

export default customTheme;
