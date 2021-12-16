import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import SupportedLangugesEnum from "../../../Commons/Enums";
import DrawerMenu from "../../Layout/Header/DrawerMenu";
import { ToolbarMobileAppBarStyle } from "../Styleds/HeaderStyle";

export interface IToolbarMobileProps {
  handleDrawerClick: (text: string) => void;
  onChangeTranslation: (languageCode: SupportedLangugesEnum) => void;
  getTranslationKey: () => string;
}

export function ToolbarMobile(props: IToolbarMobileProps) {
  const { handleDrawerClick, onChangeTranslation, getTranslationKey } = props;
  return (
    <React.Fragment>
      <Toolbar sx={ToolbarMobileAppBarStyle}>
        <DrawerMenu
          handleDrawerClick={handleDrawerClick}
          onChangeTranslation={onChangeTranslation}
          getTranslationKey={getTranslationKey}
        />
      </Toolbar>
    </React.Fragment>
  );
}
