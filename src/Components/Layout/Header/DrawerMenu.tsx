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
  DividerVerticalDrawerStyle,
} from "../../Commons/Styleds/HeaderStyle";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import { TranslationContext } from "../../../Providers/AppProvider";
import LanguageDialogMobile from "../../Commons/Dialogs/LanguageDialogMobile";
import SupportedLangugesEnum from "../../../Commons/Enums";

interface IDrawerMenu {
  handleDrawerClick: (text: string) => void;
  onChangeTranslation: (languageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => string;
}

export default function DrawerMenu(props: IDrawerMenu) {
  const { handleDrawerClick, onChangeTranslation, getTranslationKey } = props;
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

  const translationState = React.useContext(TranslationContext);

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
                <ListItemButton
                  sx={ListButtonDrawerStyle}
                  onClick={() => handleDrawerClick("Home")}
                  disableRipple
                  disabled={window.location.pathname === "/"}
                >
                  <ListItemIcon sx={ListItemIconDrawerStyle}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>

                <ListItemButton
                  sx={ListButtonDrawerStyle}
                  onClick={() => handleDrawerClick("Digital Marketing")}
                  disableRipple
                  disabled={window.location.pathname === "/digitalmarketing"}
                >
                  <ListItemIcon sx={ListItemIconDrawerStyle}>
                    <CloudDoneIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Digital Marketing"} />
                </ListItemButton>

                <ListItemButton
                  sx={ListButtonDrawerStyle}
                  onClick={() => handleDrawerClick("Mica Macho")}
                  disableRipple
                  disabled={window.location.pathname === "/micamacho"}
                >
                  <ListItemIcon sx={ListItemIconDrawerStyle}>
                    <LooksIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Mica Macho"} />
                </ListItemButton>

                <ListItemButton
                  sx={ListButtonDrawerStyle}
                  onClick={() => handleDrawerClick("Altri Progetti")}
                  disableRipple
                  disabled={window.location.pathname === "/altriprogetti"}
                >
                  <ListItemIcon sx={ListItemIconDrawerStyle}>
                    <LayersIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={translationState.translation["Other Project"]}
                  />
                </ListItemButton>

                <ListItemButton
                  sx={ListButtonDrawerStyle}
                  onClick={() => handleDrawerClick("Contatti")}
                  disableRipple
                  disabled={window.location.pathname === "/contatti"}
                >
                  <ListItemIcon sx={ListItemIconDrawerStyle}>
                    <ContactsIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={translationState.translation["Contact"]}
                  />
                </ListItemButton>

                <LanguageDialogMobile
                  onChangeTranslation={onChangeTranslation}
                  getTranslationKey={getTranslationKey}
                />
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
                      sx={DividerVerticalDrawerStyle}
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />

                    <IconButton sx={IconButtonDrawerStyle} disableRipple>
                      <FacebookOutlinedIcon />
                    </IconButton>

                    <Divider
                      sx={DividerVerticalDrawerStyle}
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
