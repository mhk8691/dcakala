"use client";
import { createTheme, ThemeProvider } from "@mui/material";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}
const defaultTheme = createTheme({
  typography: {
    fontFamily: "Vazirmatn",
  },
  palette: {
    primary: {
      light: "#ffa500",
      main: "#ff9e0f",
      dark: "#ff7900",
    },
    secondary: {
      main: "#009688",
    },
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 541,
      sm: 641,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function Theme({
  children,
  theme = defaultTheme,
}: {
  children: React.ReactNode;
  theme?: any;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
