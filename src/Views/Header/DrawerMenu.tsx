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

interface IDrawerMenu {
  handleDrawerClick: (text: string) => void;
}

export default function DrawerMenu(props: IDrawerMenu) {
  const { handleDrawerClick } = props;
  const matches = useMediaQuery("(min-height:600px)");

  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            color="inherit"
            startIcon={<MenuIcon />}
            onClick={toggleDrawer(true)}
            sx={{
              display: { sm: "none", md: "none" },
              "&:hover": {
                background: "none",
                color: "#042057",
              },
            }}
          >
            Menu
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state}
            PaperProps={{
              sx: {
                backgroundColor: "rgb(13,83,178)",
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                height: "100%",
              },
            }}
            sx={{ display: { sm: "none", md: "none" } }}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <MyBox
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <MyListName>
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={"My name"} />
                </ListItem>
              </MyListName>
              <Divider variant="middle" sx={{ backgroundColor: "#acc7fe" }} />
              <MyListLink>
                {[
                  "Home",
                  "Digital Marketing",
                  "Mica Macho",
                  "Altri Progetti",
                  "Contatti",
                ].map((text) => (
                  <React.Fragment>
                    <MyListItemButton
                      key={text}
                      onclick={() => handleDrawerClick(text)}
                    >
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </MyListItemButton>
                  </React.Fragment>
                ))}
              </MyListLink>

              <MyListSocial component={Stack} direction="row">
                {matches && (
                  <React.Fragment>
                    <MyListItemIconSocial>
                      <InstagramIcon />
                    </MyListItemIconSocial>

                    <MyDivider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />

                    <MyListItemIconSocial>
                      <FacebookOutlinedIcon />
                    </MyListItemIconSocial>

                    <MyDivider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                    <MyListItemIconSocial>
                      <BluetoothConnectedOutlinedIcon />
                    </MyListItemIconSocial>
                  </React.Fragment>
                )}
              </MyListSocial>
            </MyBox>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
