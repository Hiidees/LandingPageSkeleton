import AppBar from "@mui/material/AppBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import SupportedLangugesEnum from "../../../Commons/Enums";
import { ToolbarDesktop } from "../../Commons/Toolbar/ToolbarDesktop";
import { ToolbarMobile } from "../../Commons/Toolbar/ToolbarMobile";
import React from "react";

export interface IAppBarProps {
  onChangeTranslation: (languageCode: SupportedLangugesEnum) => void;
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickOtherProject: () => void;
  onClickContact: () => void;
  handleDrawerClick: (text: string) => void;
  getTranslationKey: () => string;
}

export function MyAppBar(props: IAppBarProps) {
  const matches = useMediaQuery("(min-width:600px)");
  const {
    onChangeTranslation,
    onClickHome,
    onClickDM,
    onClickMM,
    onClickOtherProject,
    onClickContact,
    handleDrawerClick,
    getTranslationKey,
  } = props;
  return (
    <React.Fragment>
      <AppBar position="static">
        {matches ? (
          <ToolbarDesktop
            onChangeTranslation={onChangeTranslation}
            onClickHome={onClickHome}
            onClickDM={onClickDM}
            onClickMM={onClickMM}
            onClickOtherProject={onClickOtherProject}
            onClickContact={onClickContact}
            getTranslationKey={getTranslationKey}
          />
        ) : (
          <ToolbarMobile
            handleDrawerClick={handleDrawerClick}
            onChangeTranslation={onChangeTranslation}
            getTranslationKey={getTranslationKey}
          />
        )}
      </AppBar>
    </React.Fragment>
  );
}
