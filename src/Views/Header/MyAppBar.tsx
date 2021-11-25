import { Box, Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DrawerMenu from "./DrawerMenu";

export interface IAppBarProps {}

export function MyAppBar(props: IAppBarProps) {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            background: "transparent",
            boxShadow: "none",
            color: "#d1dffb",
          }}
        >
          {matches ? (
            <Toolbar sx={{ justifyContent: "center" }}>
              <Button
                color="inherit"
                sx={{ display: { xs: "none", sm: "block", md: "block" } }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{ display: { xs: "none", sm: "block", md: "block" } }}
              >
                Contact me
              </Button>
              <Button
                color="inherit"
                sx={{ display: { xs: "none", sm: "block", md: "block" } }}
              >
                About me
              </Button>
              <Button
                color="inherit"
                sx={{ display: { xs: "none", sm: "block", md: "block" } }}
              >
                My Curriculum
              </Button>
            </Toolbar>
          ) : (
            <Toolbar sx={{ justifyContent: "right" }}>
              <DrawerMenu />
            </Toolbar>
          )}
        </AppBar>
      </Box>
    </div>
  );
}
