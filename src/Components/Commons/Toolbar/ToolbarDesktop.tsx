import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import SupportedLangugesEnum from "../../../Commons/Enums";
import { TranslationContext } from "../../../Providers/AppProvider";
import LanguageDialog from "../Dialogs/LanguageDialog";
import {
  ButtonAppBarStyle,
  ToolbarDesktopAppBarStyle,
} from "../Styleds/HeaderStyle";

export interface IToolbarDesktopProps {
  onChangeTranslation: (languageCode: SupportedLangugesEnum) => void;
  onClickHome: () => void;
  onClickDM: () => void;
  onClickMM: () => void;
  onClickOtherProject: () => void;
  onClickContact: () => void;
  getTranslationKey: () => string;
}

export function ToolbarDesktop(props: IToolbarDesktopProps) {
  const {
    onChangeTranslation,
    onClickHome,
    onClickDM,
    onClickMM,
    onClickOtherProject,
    onClickContact,
    getTranslationKey,
  } = props;

  const translationState = React.useContext(TranslationContext);

  return (
    <React.Fragment>
      <Toolbar sx={ToolbarDesktopAppBarStyle}>
        <Button
          sx={ButtonAppBarStyle}
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/"}
          onClick={() => onClickHome()}
        >
          Home
        </Button>
        <Button
          sx={ButtonAppBarStyle}
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/digitalmarketing"}
          onClick={() => onClickDM()}
        >
          Digital Marketing
        </Button>
        <Button
          sx={ButtonAppBarStyle}
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/micamacho"}
          onClick={() => onClickMM()}
        >
          Mica Macho
        </Button>
        <Button
          sx={ButtonAppBarStyle}
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/otherproject"}
          onClick={() => onClickOtherProject()}
        >
          {translationState.translation["Other Project"]}
        </Button>
        <Button
          sx={ButtonAppBarStyle}
          disableRipple
          color="inherit"
          disabled={window.location.pathname === "/contact"}
          onClick={() => onClickContact()}
        >
          {translationState.translation["Contact"]}
        </Button>
        <LanguageDialog
          onChangeTranslation={onChangeTranslation}
          getTranslationKey={getTranslationKey}
        />
      </Toolbar>
    </React.Fragment>
  );
}
