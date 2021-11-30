import { createTheme } from "@mui/material";

const font = "Quicksand, Heebo, sans-serif, Roboto, Arial";

export default createTheme({
  palette: {
    action: {
      disabled: "#7b8cac",
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
        },
      },
    },
  },

  typography: {
    allVariants: {
      fontFamily: font,
    },
  },
});
