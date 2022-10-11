import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#1f1f2e", //This is the navbar and everything with paper background
      default: "#0a0a0f", //This is the background
    },
  },
});
