import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import DrawerMenu from "../../Layout/Header/DrawerMenu";
import { ToolbarMobileAppBarStyle } from "../Styleds/HeaderStyle";

export interface IToolbarMobileProps {
  handleDrawerClick: (text: string) => void;
}

export function ToolbarMobile(props: IToolbarMobileProps) {
  const { handleDrawerClick } = props;
  return (
    <React.Fragment>
      <Toolbar sx={ToolbarMobileAppBarStyle}>
        <DrawerMenu handleDrawerClick={handleDrawerClick} />
      </Toolbar>
    </React.Fragment>
  );
}
