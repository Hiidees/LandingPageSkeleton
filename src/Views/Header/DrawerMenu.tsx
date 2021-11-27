import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
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
import {
  MyBox,
  MyDivider,
  MyListItemIconSocial,
  MyListLink,
  MyListName,
  MyListSocial,
  MyListItemButton,
} from "./HeaderStyle";

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
    <MyBox
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MyListName>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"My name"} />
        </ListItem>
      </MyListName>
      <Divider variant="middle" sx={{ backgroundColor: "#acc7fe" }} />
      <MyListLink>
        {["Home", "Contact me", "About me", "My Curriculum"].map(
          (text, index) => (
            <React.Fragment>
              <MyListItemButton button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </MyListItemButton>
            </React.Fragment>
          )
        )}
      </MyListLink>

      <MyListSocial component={Stack} direction="row">
        {matches && (
          <React.Fragment>
            <MyListItemIconSocial>
              <InstagramIcon />
            </MyListItemIconSocial>

            <MyDivider orientation="vertical" variant="middle" flexItem />

            <MyListItemIconSocial>
              <FacebookOutlinedIcon />
            </MyListItemIconSocial>

            <MyDivider orientation="vertical" variant="middle" flexItem />
            <MyListItemIconSocial>
              <BluetoothConnectedOutlinedIcon />
            </MyListItemIconSocial>
          </React.Fragment>
        )}
      </MyListSocial>
    </MyBox>
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