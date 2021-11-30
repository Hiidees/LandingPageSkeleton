import Layout from "./Layout";
import { useHistory } from "react-router-dom";

interface ILayoutControllerProps {}

export function LayoutController(
  props: React.PropsWithChildren<ILayoutControllerProps>
) {
  const history = useHistory();

  function onClickHome() {
    history.push("/");
  }

  function onClickDM() {
    history.push("/digitalmarketing");
  }

  function onClickMM() {
    history.push("/micamacho");
  }

  function onClickAltriProgetti() {
    history.push("/altriprogetti");
  }

  function onClickContact() {
    history.push("/contatti");
  }

  function handleDrawerClick(text: string) {
    console.log("Ciao1");
    if (text === "Home") {
      console.log("Ciao2");
      onClickHome();
    }
    if (text === "Digital Marketing") {
      onClickDM();
    }
    if (text === "Mica Macho") {
      onClickMM();
    }
    if (text === "Altri Progetti") {
      onClickAltriProgetti();
    }
    if (text === "Contatti") {
      onClickContact();
    }
  }

  return (
    <Layout
      onClickHome={onClickHome}
      onClickDM={onClickDM}
      onClickMM={onClickMM}
      onClickAltriProgetti={onClickAltriProgetti}
      onClickContact={onClickContact}
      handleDrawerClick={handleDrawerClick}
    >
      {props.children}
    </Layout>
  );
}
