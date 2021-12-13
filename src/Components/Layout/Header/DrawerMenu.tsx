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
  ButtonDrawerStyle,
  DrawerStyle,
  PaperDrawerStyle,
  BoxDrawerStyle,
  ListNameDrawerStyle,
  DividerRowDrawerStyle,
  ListLinkDrawerStyle,
  ListButtonDrawerStyle,
  ListItemIconDrawerStyle,
  IconButtonDrawerStyle,
  ListSocialDrawerStyle,
  DividerColomnDrawerStyle,
} from "./MyHeaderStyle";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";

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
            sx={ButtonDrawerStyle}
          >
            Menu
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state}
            PaperProps={{
              sx: PaperDrawerStyle,
            }}
            sx={DrawerStyle}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
              role="presentation"
              sx={BoxDrawerStyle}
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List sx={ListNameDrawerStyle}>
                <ListItem>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary={"My name"} />
                </ListItem>
              </List>
              <Divider variant="middle" sx={DividerRowDrawerStyle} />
              <List sx={ListLinkDrawerStyle}>
                {[
                  "Home",
                  "Digital Marketing",
                  "Mica Macho",
                  "Altri Progetti",
                  "Contatti",
                ].map((text) => (
                  <React.Fragment>
                    <ListItemButton
                      sx={ListButtonDrawerStyle}
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
                      <ListItemIcon sx={ListItemIconDrawerStyle}>
                        {text === "Home" && <HomeIcon />}
                        {text === "Digital Marketing" && <CloudDoneIcon />}
                        {text === "Mica Macho" && <LooksIcon />}
                        {text === "Altri Progetti" && <LayersIcon />}
                        {text === "Contatti" && <ContactsIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </React.Fragment>
                ))}
              </List>

              <List
                sx={ListSocialDrawerStyle}
                component={Stack}
                direction="row"
              >
                {matches && (
                  <React.Fragment>
                    <IconButton sx={IconButtonDrawerStyle} disableRipple>
                      <InstagramIcon />
                    </IconButton>

                    <Divider
                      sx={DividerColomnDrawerStyle}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />

                    <IconButton sx={IconButtonDrawerStyle} disableRipple>
                      <FacebookOutlinedIcon />
                    </IconButton>

                    <Divider
                      sx={DividerColomnDrawerStyle}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                    <IconButton sx={IconButtonDrawerStyle} disableRipple>
                      <LinkedInIcon />
                    </IconButton>
                  </React.Fragment>
                )}
              </List>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
