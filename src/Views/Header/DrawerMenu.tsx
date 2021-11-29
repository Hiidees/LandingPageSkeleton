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
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickAltriProgetti: () => void;
  onClickContact: () => void;
}

export default function DrawerMenu(props: IDrawerMenu) {
  const {
    onClickHome,
    onClickDM,
    onClickMM,
    onClickAltriProgetti,
    onClickContact,
  } = props;
  const matches = useMediaQuery("(min-height:600px)");

  const [state, setState] = React.useState({
    left: false,
  });

  function handleDrawerClick(text: string) {
    console.log("Ciao1");
    if (text === "Home") {
      console.log("Ciao2");
      onClickHome();
    }
    if (text === "Digital Marketing") {
      onClickDM();
    }
    if (text === "Mica Macho") {
      onClickMM();
    }
    if (text === "AltriProgetti") {
      onClickAltriProgetti();
    }
    if (text === "Contatti") {
      onClickContact();
    }
  }

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
        {[
          "Home",
          "Digital Marketing",
          "Mica Macho",
          "Altri Progetti",
          "Contatti",
        ].map((text, index) => (
          <React.Fragment>
            <MyListItemButton
              key={text}
              onclick={() => handleDrawerClick(text)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
