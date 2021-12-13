import * as React from "react";
import { useHistory } from "react-router-dom";
import SupportedLangugesEnum from "../../../Commons/Enums";
import { TranslationContext } from "../../../Providers/AppProvider";
import { MyAppBar } from "./MyAppBar";

export interface IHeaderControllerProps {}

export function HeaderController(props: IHeaderControllerProps) {
  const history = useHistory();

  const translationState = React.useContext(TranslationContext);
  function onChangeTranslation(languageCode: SupportedLangugesEnum) {
    translationState.updateTranslation(languageCode);
  }

  function onClickHome() {
    history.push("/");
  }

  function onClickDM() {
    history.push("/digitalmarketing");
  }

  function onClickMM() {
    history.push("/micamacho");
  }

  function onClickOtherProject() {
    history.push("/altriprogetti");
  }

  function onClickContact() {
    history.push("/contatti");
  }

  function handleDrawerClick(text: string) {
    if (text === "Home") {
      onClickHome();
    }
    if (text === "Digital Marketing") {
      onClickDM();
    }
    if (text === "Mica Macho") {
      onClickMM();
    }
    if (text === "Altri Progetti") {
      onClickOtherProject();
    }
    if (text === "Contatti") {
      onClickContact();
    }
  }
  return (
    <React.Fragment>
      <MyAppBar
        onChangeTranslation={onChangeTranslation}
        onClickHome={onClickHome}
        onClickDM={onClickDM}
        onClickMM={onClickMM}
        onClickOtherProject={onClickOtherProject}
        onClickContact={onClickContact}
        handleDrawerClick={handleDrawerClick}
      />
    </React.Fragment>
  );
}
