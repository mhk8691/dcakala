"use client";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
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
});
export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
