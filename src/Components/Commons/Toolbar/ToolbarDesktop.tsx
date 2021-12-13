import * as React from "react";
import SupportedLangugesEnum from "../../../Commons/Enums";
import { TranslationContext } from "../../../Providers/AppProvider";
import {
  MyButtonAppBar,
  MyToolbarLarge,
} from "../../Layout/Header/HeaderStyle";

export interface IToolbarDesktopProps {
  onChangeTranslation: (languageCode: SupportedLangugesEnum) => void;
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickOtherProject: () => void;
  onClickContact: () => void;
}

export function ToolbarDesktop(props: IToolbarDesktopProps) {
  const {
    onChangeTranslation,
    onClickHome,
    onClickDM,
    onClickMM,
    onClickOtherProject,
    onClickContact,
  } = props;

  const translationState = React.useContext(TranslationContext);

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
          {translationState.translation["Other Project"]}
        </MyButtonAppBar>
        <MyButtonAppBar
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/contact"}
          onClick={() => onClickContact()}
        >
          {translationState.translation["Contact"]}
        </MyButtonAppBar>
        <MyButtonAppBar
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/contact"}
          onClick={() => onChangeTranslation(SupportedLangugesEnum.En)}
        >
          {translationState.translation["Language"]}
        </MyButtonAppBar>
      </MyToolbarLarge>
    </React.Fragment>
  );
}
