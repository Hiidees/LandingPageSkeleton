import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactsIcon from "@mui/icons-material/Contacts";
import LayersIcon from "@mui/icons-material/Layers";
import LooksIcon from "@mui/icons-material/Looks";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  MyBox,
  MyDivider,
  MyIconButton,
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
            disableRipple
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
                      onClick={() => handleDrawerClick(text)}
                      disableRipple
                      disabled={
                        window.location.pathname ===
                        "/" +
                          text
                            .replace(/\s+/g, "")
                            .toLowerCase()
                            .replace("home", "")
                      }
                    >
                      <ListItemIcon sx={{ color: "#011230" }}>
                        {text === "Home" && <HomeIcon />}
                        {text === "Digital Marketing" && <CloudDoneIcon />}
                        {text === "Mica Macho" && <LooksIcon />}
                        {text === "Altri Progetti" && <LayersIcon />}
                        {text === "Contatti" && <ContactsIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </MyListItemButton>
                  </React.Fragment>
                ))}
              </MyListLink>

              <MyListSocial component={Stack} direction="row">
                {matches && (
                  <React.Fragment>
                    <MyIconButton disableRipple>
                      <InstagramIcon />
                    </MyIconButton>

                    <MyDivider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />

                    <MyIconButton disableRipple>
                      <FacebookOutlinedIcon />
                    </MyIconButton>

                    <MyDivider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                    <MyIconButton disableRipple>
                      <LinkedInIcon />
                    </MyIconButton>
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
