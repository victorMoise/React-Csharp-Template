import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4caf50",
      light: "#a5d6a7",
    },
    secondary: {
      main: "#81c784",
    },
    background: {
      default: "#dcefe0",
      paper: "#c5dfcb",
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
      main: "#3a3a3a",
      light: "#505050",
    },
    secondary: {
      main: "#5a5a5a",
    },
    background: {
      default: "#2e2e2e",
      paper: "#626262",
    },
    text: {
      primary: "#dcefe0",
      secondary: "#a8a8a8",
    },
  },
});

