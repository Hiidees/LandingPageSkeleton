import Layout from "./Layout";
import { useHistory } from "react-router-dom";
import SupportedLangugesEnum from "../../Commons/Enums";
import { useContext } from "react";
import { TranslationContext } from "../../Providers/AppProvider";

interface ILayoutControllerProps {}

export function LayoutController(
  props: React.PropsWithChildren<ILayoutControllerProps>
) {
  const history = useHistory();

  const translationState = useContext(TranslationContext)
  function changeTranslation(languageCode: SupportedLangugesEnum) {
    translationState.setTranslation(languageCode);
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
    <Layout
      onChangeTranslation={changeTranslation}
      onClickHome={onClickHome}
      onClickDM={onClickDM}
      onClickMM={onClickMM}
      onClickOtherProject={onClickOtherProject}
      onClickContact={onClickContact}
      handleDrawerClick={handleDrawerClick}
    >
      {props.children}
    </Layout>
  );
}
