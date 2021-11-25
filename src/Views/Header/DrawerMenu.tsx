import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import BluetoothConnectedOutlinedIcon from "@mui/icons-material/BluetoothConnectedOutlined";
import { Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

type Anchor = "left";

export default function DrawerMenu() {
  const matches = useMediaQuery("(min-height:600px)");

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ color: "white" }}>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"My name"} />
        </ListItem>
      </List>
      <Divider variant="middle" sx={{ backgroundColor: "#acc7fe" }} />
      <List
        sx={{
          marginTop: 2,
          color: "white",
          height: "auto",
          marginBottom: "auto",
        }}
      >
        {["Home", "Contact me", "About me", "My Curriculum"].map(
          (text, index) => (
            <React.Fragment>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon sx={{ color: "#acc7fe" }} />
                  ) : (
                    <MailIcon sx={{ color: "#acc7fe" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </React.Fragment>
          )
        )}
      </List>

      <List
        component={Stack}
        sx={{
          color: "white",
          position: "absolute",
          bottom: 0,
          marginLeft: 5,
        }}
        direction="row"
      >
        {matches && (
          <React.Fragment>
            <ListItemIcon
              sx={{
                color: "#acc7fe",
                minWidth: "0px",
                padding: "8px 16px",
                "&:hover": { color: "#042057" },
              }}
            >
              <InstagramIcon />
            </ListItemIcon>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ backgroundColor: "#acc7fe" }}
            />

            <ListItemIcon
              sx={{
                color: "#acc7fe",
                minWidth: "0px",
                padding: "8px 16px",
                "&:hover": { color: "#042057" },
              }}
            >
              <FacebookOutlinedIcon />
            </ListItemIcon>

            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ backgroundColor: "#acc7fe" }}
            />
            <ListItemIcon
              sx={{
                color: "#acc7fe",
                minWidth: "0px",
                padding: "8px 16px",
                "&:hover": { color: "#042057" },
              }}
            >
              <BluetoothConnectedOutlinedIcon />
            </ListItemIcon>
          </React.Fragment>
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            color="inherit"
            startIcon={<MenuIcon />}
            onClick={toggleDrawer(anchor, true)}
            sx={{
              display: { sm: "none", md: "none" },
            }}
          >
            Menu
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            PaperProps={{
              sx: {
                backgroundColor: "rgb(13,83,178)",
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                height: "100%",
              },
            }}
            sx={{ display: { sm: "none", md: "none" } }}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
