import { createTheme } from "@mui/material";

export default createTheme({
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
});
