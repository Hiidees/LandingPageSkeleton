import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: "#aa00ff",
    },
    secondary: {
      main: "#8e24aa",
    },
    action: {
      disabled: "#ffffff",
      disabledBackground: "#ffffff",
      disabledOpacity: 1,
    },
  },

  components: {
    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          sx: {
            width: 240,
            backgroundColor: "#6d5e6e",
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#302b30",
        },
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
