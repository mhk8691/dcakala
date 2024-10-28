"use client";
import { createTheme, ThemeProvider } from "@mui/material";
declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sp: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xll:true
    xxxl: true;
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
      sp: 600,
      sm: 641,
      md: 769,
      lg: 990,
      xl: 1024,
      xxl: 1200,
      xll: 1280,
      xxxl: 1550,
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
