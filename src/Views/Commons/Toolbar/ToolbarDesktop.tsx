import * as React from "react";
import {
  MyButtonAppBar,
  MyToolbarLarge,
} from "../../Layout/Header/HeaderStyle";

export interface IToolbarDesktopProps {
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickOtherProject: () => void;
  onClickContact: () => void;
}

export function ToolbarDesktop(props: IToolbarDesktopProps) {
  const {
    onClickHome,
    onClickDM,
    onClickMM,
    onClickOtherProject,
    onClickContact,
  } = props;
  return (
    <React.Fragment>
      <MyToolbarLarge>
        <MyButtonAppBar
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/"}
          onClick={() => onClickHome()}
        >
          Home
        </MyButtonAppBar>
        <MyButtonAppBar
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/digitalmarketing"}
          onClick={() => onClickDM()}
        >
          Digital Marketing
        </MyButtonAppBar>
        <MyButtonAppBar
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/micamacho"}
          onClick={() => onClickMM()}
        >
          Mica Macho
        </MyButtonAppBar>
        <MyButtonAppBar
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/otherproject"}
          onClick={() => onClickOtherProject()}
        >
          Altri Progetti
        </MyButtonAppBar>
        <MyButtonAppBar
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/contact"}
          onClick={() => onClickContact()}
        >
          Contatti
        </MyButtonAppBar>
      </MyToolbarLarge>
    </React.Fragment>
  );
}
