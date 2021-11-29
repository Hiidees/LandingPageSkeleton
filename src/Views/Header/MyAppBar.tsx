import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";
import {
  AppBarStyle,
  MyBoxAppbar,
  MyToolbarLarge,
  MyToolbarSmall,
  MyButtonAppBar,
} from "./HeaderStyle";

export interface IAppBarProps {
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickAltriProgetti: () => void;
  onClickContact: () => void;
  handleDrawerClick: (text: string) => void;
}

export function MyAppBar(props: IAppBarProps) {
  const matches = useMediaQuery("(min-width:600px)");
  const {
    onClickHome,
    onClickDM,
    onClickMM,
    onClickAltriProgetti,
    onClickContact,
    handleDrawerClick,
  } = props;
  return (
    <div>
      <MyBoxAppbar>
        <AppBarStyle position="static">
          {matches ? (
            <MyToolbarLarge>
              <MyButtonAppBar
                color="inherit"
                disabled={window.location.pathname === "/"}
                onClick={() => onClickHome()}
              >
                Home
              </MyButtonAppBar>
              <MyButtonAppBar
                color="inherit"
                disabled={window.location.pathname === "/digitalmarketing"}
                onClick={() => onClickDM()}
              >
                Digital Marketing
              </MyButtonAppBar>
              <MyButtonAppBar
                color="inherit"
                disabled={window.location.pathname === "/micamacho"}
                onClick={() => onClickMM()}
              >
                Mica Macho
              </MyButtonAppBar>
              <MyButtonAppBar
                color="inherit"
                disabled={window.location.pathname === "/altriprogetti"}
                onClick={() => onClickAltriProgetti()}
              >
                Altri Progetti
              </MyButtonAppBar>
              <MyButtonAppBar
                color="inherit"
                disabled={window.location.pathname === "/contatti"}
                onClick={() => onClickContact()}
              >
                Contatti
              </MyButtonAppBar>
            </MyToolbarLarge>
          ) : (
            <MyToolbarSmall>
              <DrawerMenu handleDrawerClick={handleDrawerClick} />
            </MyToolbarSmall>
          )}
        </AppBarStyle>
      </MyBoxAppbar>
    </div>
  );
}
