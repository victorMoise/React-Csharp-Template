import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4caf50",
      light: "#81c784",
    },
    secondary: {
      main: "#a5d6a7",
    },
    background: {
      default: "#dcefe0",
      paper: "#ffffff",
    },
    text: {
      primary: "#0d3a10",
      secondary: "#388e3c",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1b854f",
      light: "#48a478",
    },
    secondary: {
      main: "#4f8664",
    },
    background: {
      default: "#5a5a5a", 
      paper: "#8a8a8a", 
    },
    text: {
      primary: "#f0f0f0",
      secondary: "#c0c0c0",
    },
  },
});
