// Styleguide data
const theme = {
  primary: {
    main: "#FF7A8A",
    dark: "#803D45",
    darker: "#592B30"
  },
  dark: {
    main: "#113A5D",
    dark: "#0E304D",
    darker: "0C2840"
  },
  light: {
    main: "#F9F9F9",
    dark: "#E6E6E6",
    darker: "#D9D9D9"
  },
  fontSize: {
    "3xs": "0.512rem",
    "2xs": "0.64rem",
    "xs": "0.8rem",
    "s": "1rem",
    "m": "1.25rem",
    "l": "1.563rem",
    "xl": "1.953rem",
    "2xl": "2.441rem",
    "3xl": "3.052rem"
  }
}

const { fontSize } = theme

// Export theme
// ? fontSize is exported to individual components, theme is set to ThemeProvider
export { theme, fontSize }